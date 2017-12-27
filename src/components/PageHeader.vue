<template>
  <div>
    <div class="page" v-show="pageInfoLoaded">
      <img :src="avatar" class="avatar"/>
      <span class="page-name">{{name}}</span>
    </div>
    <div class="user">
      <el-dropdown @command="handleUserActions">
        <img :src="userAvatar" class="avatar user-avatar"/>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="action in userActions"
            :key="action.key"
            :command="action.key">
            {{ action.title }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  const FANPAGE_USER_ACTION = 'fanpage'
  const LOGOUT_USER_ACTION = 'logout'

  export default {
    data () {
      return {
        userActions: [
          { title: 'Danh sách fanpage của tôi', key: FANPAGE_USER_ACTION },
          { title: 'Đăng xuất', key: LOGOUT_USER_ACTION }
        ]
      }
    },
    computed: {
      ...mapState({
        id: state => state.pageDetail._id,
        name: state => state.pageDetail.name,
        avatar: state => state.pageDetail.avatar
      }),
      ...mapGetters([
        'pageInfoLoaded',
        'userAvatar'
      ])
    },
    methods: {
      ...mapActions([
        'logout'
      ]),
      handleUserActions (action) {
        if (action === FANPAGE_USER_ACTION) {
          this.$router.push({path: '/pages'})
        } else if (action === LOGOUT_USER_ACTION) {
          this.handleLogout()
        }
      },
      async handleLogout () {
        this.logout()
        this.$router.replace({ path: '/' })
      }
    }
  }
</script>

<style scoped>
  .avatar {
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    vertical-align: middle;
  }

  .page-name {
    vertical-align: middle;
    font-size: 32px;
    margin-left: 16px;
  }

  .page {
    display: inline-block;
  }

  .user {
    display: inline-block;
    float: right;
  }

  .user-avatar {
    cursor: pointer;
  }
</style>
