<template>
  <el-container class="page-container">
    <el-header>
      <PageHeader />
    </el-header>
    <el-container class="content-container">
      <el-aside width="200px">
        <SideBar />
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import SideBar from '@/components/SideBar'
  import PageHeader from '@/components/PageHeader'

  export default {
    name: 'Page-Detail',
    props: ['id'],
    components: { SideBar, PageHeader },
    computed: {
      ...mapGetters([
        'getPageById'
      ])
    },
    methods: {
      ...mapActions([
        'loadPageInfo',
        'getMyPages'
      ])
    },
    created () {
      const vm = this
      const pageId = this.id
      const currentPage = this.getPageById(pageId)
      if (currentPage === undefined) {
        this.getMyPages().then(() => {
          vm.loadPageInfo(vm.getPageById(pageId))
        })
      } else {
        this.loadPageInfo(currentPage)
      }
    }
  }
</script>

<style scoped>
  .content-container {
    min-height: calc(100vh - 60px);
  }

  .page-container {
    border: 1px solid #eee
  }

  .el-header {
    background-color: #B3C0D1;
    line-height: 60px;
  }

</style>
