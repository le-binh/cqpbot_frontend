<template>
  <div>
    <div class="login-form" v-bind:class="{ hidden: hideLoginForm }">
      <span>Cần đăng nhập để sử </span>
      <button @click="login" class="signin-button" >Đăng nhập với Facebook</button>
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
  .signin-button {
    display: inline-block;
    padding: 4px 8px;
    background-color: #3c82f7;
    color: #fff;
    border: 0;
    box-shadow:none;
    border-radius: 0px;
    cursor: pointer;
  }

  .login-form {
    display: block;
  }

  .hidden {
    display: none;
  }
</style>
