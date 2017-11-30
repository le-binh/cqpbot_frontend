<template>
  <div>
    <SideBar :items="links" :active="activePath"/>
  </div>
</template>

<script>
  import SideBar from './SideBar.vue'

  export default {
    name: 'PageDetailSideBar',
    components: { SideBar },
    data () {
      const id = this.$router.currentRoute.params.id
      return {
        links: [
          { path: `/pages/${id}/campaigns/`, icon: 'el-menu-icon', title: 'Chiến dịch' },
          { path: `/pages/${id}/training/`, icon: 'el-menu-icon', title: 'Huấn luyện' },
          { path: `/pages/${id}/new-arrival/`, icon: 'el-menu-icon', title: 'Hàng mới về' },
          { path: `/pages/${id}/customer/`, icon: 'el-menu-icon', title: 'Khách hàng' },
          { path: `/pages/${id}/customer-group/`, icon: 'el-menu-icon', title: 'Nhóm khách hàng' }
        ],
        activePath: `/pages/${id}/campaigns/`
      }
    },
    mounted () {
      console.log(this.$router.currentRoute)
      console.log(this.$route)
      this.activePath = this.$router.currentRoute.fullPath
    }
  }
</script>
