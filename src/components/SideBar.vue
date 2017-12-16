<template>
  <el-menu :default-active="activePath" :router="true" class="menu">
    <el-menu-item v-for="link in links" :index="link.path" :key="link.path">
      <i :class="link.icon"></i>
      <span slot="title">{{link.title}}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: 'SideBar',
    data () {
      const id = this.$route.params.id
      return {
        links: [
          { path: `/pages/${id}/campaigns/`, icon: 'el-icon-setting', title: 'Chiến dịch' },
          { path: `/pages/${id}/training/`, icon: 'el-icon-setting', title: 'Huấn luyện' },
          { path: `/pages/${id}/new-arrival/`, icon: 'el-icon-setting', title: 'Hàng mới về' },
          { path: `/pages/${id}/customer/`, icon: 'el-icon-setting', title: 'Khách hàng' },
          { path: `/pages/${id}/customer-group/`, icon: 'el-icon-setting', title: 'Nhóm khách hàng' }
        ],
        activePath: `/pages/${id}/campaigns/`
      }
    },
    methods: {
      getActivePath: function () {
        const path = this.$route.fullPath
        for (let i in this.links) {
          const link = this.links[i]
          if (path.includes(link.path)) {
            return link.path
          }
        }
        return this.activePath
      }
    },
    mounted () {
      this.activePath = this.getActivePath()
    }
  }
</script>

<style scoped>
  .menu {
    height: 100%;
    background-color: rgb(238, 241, 246)
  }
</style>
