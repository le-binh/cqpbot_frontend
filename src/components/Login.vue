<template>
  <div class="wrapper" v-loading="loading">
    <div class="login-form" v-bind:class="{ hidden: hideLoginForm }">
      <span>Cần đăng nhập để sử dụng</span>
      <el-button type="primary" @click="login">Đăng nhập với Facebook</el-button>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { fbLogin, checkLoginStatus } from '../utils/facebook'
  import { sendCredentials } from '../apis/auth'

  export default {
    name: 'Login',
    data () {
      return {
        hideLoginForm: true,
        loading: true
      }
    },
    methods: {
      ...mapActions([
        'saveUserCredentials',
        'clearUserCredentials'
      ]),
      login: async function () {
        fbLogin().then(response => {
          if (response !== undefined) {
            const [accessToken, userID] = response
            sendCredentials(accessToken, userID).then(this.handleCredentialsSending)
          }
        })
      },
      handleCredentialsSending (shopToken) {
        if (shopToken !== undefined) {
          this.saveUserCredentials({ token: shopToken })
          this.$router.push({name: 'Campaign'})
        } else {
          this.clearUserCredentials()
          this.hideLoginForm = false
          this.loading = false
        }
      },
      waitForFBToCheckLoginStatus () {
        if (isFBLoaded) {
          checkLoginStatus().then(response => {
            if (response !== undefined) {
              const [accessToken, userID] = response
              sendCredentials(accessToken, userID).then(this.handleCredentialsSending)
            } else {
              this.clearUserCredentials()
              this.hideLoginForm = false
              this.loading = false
            }
          })
        } else {
          setTimeout(() => {
            this.waitForFBToCheckLoginStatus()
          }, 500)
        }
      }
    },
    mounted () {
      this.waitForFBToCheckLoginStatus()
    }
  }
</script>

<style scoped>
  .login-form {
    display: block;
  }

  .hidden {
    display: none;
  }

  .wrapper {
    height: 100vh
  }
</style>
