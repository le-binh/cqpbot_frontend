<template>
  <div class="wrapper" v-loading="loading">
    <div class="login-form" v-bind:class="{ hidden: hideLoginForm }">
      <span class="login-title">Cần đăng nhập để sử dụng</span>
      <el-button class="login-button" type="primary" @click="loginClicked">Đăng nhập với Facebook</el-button>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState, mapGetters } from 'vuex'

  export default {
    name: 'Login',
    computed: {
      ...mapGetters({
        loading: 'loading'
      }),
      ...mapState({
        hideLoginForm: state => state.auth.checkingLoginStatus
      })
    },
    methods: {
      ...mapActions([
        'checkLoginStatus',
        'login'
      ]),
      loginClicked () {
        this.login().then(this.redirectOrShowError)
      },
      waitForFBToCheckLoginStatus () {
        if (isFBLoaded) {
          this.checkLoginStatus().then(this.redirectOrShowError)
        } else {
          setTimeout(() => {
            this.waitForFBToCheckLoginStatus()
          }, 500)
        }
      },
      redirectOrShowError (success) {
        if (success) {
          this.$router.push({path: this.$route.query.redirect || '/my_pages'})
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
    margin-top: calc(50vh - 51px);
  }

  .hidden {
    display: none;
  }

  .wrapper {
    height: 100vh
  }

  .login-title {
    display: block;
    text-align: center;
    margin-bottom: 16px;
    font-size: 40px;
  }

  .login-button {
    display: block;
    margin: auto;
    font-size: 20px;
  }
</style>
