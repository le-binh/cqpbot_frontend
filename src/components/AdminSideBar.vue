<template>
  <div>
    <SideBar :items="links" :active="activePath"/>
  </div>
</template>

<script>
  import SideBar from './SideBar.vue'

  export default {
    name: 'AdminSideBar',
    components: { SideBar },
    data () {
      return {
        links: [
          { path: '/admin/', icon: 'el-menu-icon', title: 'Chiến dịch' },
          { path: '/admin/training', icon: 'el-menu-icon', title: 'Huấn luyện' },
          { path: '/admin/new-arrival', icon: 'el-menu-icon', title: 'Hàng mới về' },
          { path: '/admin/customer', icon: 'el-menu-icon', title: 'Khách hàng' },
          { path: '/admin/customer-group', icon: 'el-menu-icon', title: 'Nhóm khách hàng' }
        ],
        activePath: '/admin/'
      }
    },
    mounted () {
      this.activePath = this.$router.currentRoute.path
    }
  }
</script>
