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
          { path: `/my_pages/${id}/`, icon: 'el-menu-icon', title: 'Chiến dịch' },
          { path: `/my_pages/${id}/training`, icon: 'el-menu-icon', title: 'Huấn luyện' },
          { path: `/my_pages/${id}/new-arrival`, icon: 'el-menu-icon', title: 'Hàng mới về' },
          { path: `/my_pages/${id}/customer`, icon: 'el-menu-icon', title: 'Khách hàng' },
          { path: `/my_pages/${id}/customer-group`, icon: 'el-menu-icon', title: 'Nhóm khách hàng' }
        ],
        activePath: `/my_pages/${id}/`
      }
    },
    mounted () {
      this.activePath = this.$router.currentRoute.path
    }
  }
</script>
