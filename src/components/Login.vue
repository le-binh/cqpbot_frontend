<template>
  <div>
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
        hideLoginForm: true
      }
    },
    methods: {
      ...mapActions([
        'saveUserCredentials',
        'clearUserCredentials'
      ]),
      login: async function () {
        const response = await fbLogin()
        if (response !== undefined) {
          const [accessToken, userID] = response
          this.saveUserCredentials({ token: accessToken, userID })
          const success = await sendCredentials(accessToken, userID)
          this.handleCredentialsSending(success)
        }
      },
      handleCredentialsSending (success) {
        if (success) {
          this.$router.push({name: 'Admin'})
        } else {
          this.clearUserCredentials()
          this.hideLoginForm = false
        }
      }
    },
    created () {
      checkLoginStatus().then(response => {
        if (response !== undefined) {
          const [accessToken, userID] = response
          this.saveUserCredentials({ token: accessToken, userID })
          sendCredentials(accessToken, userID).then(this.handleCredentialsSending)
        } else {
          this.clearUserCredentials()
          this.hideLoginForm = false
        }
      })
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
</style>
