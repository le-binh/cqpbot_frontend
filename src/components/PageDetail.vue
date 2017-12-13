<template>
  <el-container>
    <el-header>Header</el-header>
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
  import SideBar from '@/components/SideBar'

  export default {
    name: 'Page-Detail',
    components: { SideBar }
  }
</script>

<style scoped>
  .content-container {
    min-height: calc(100vh - 60px);
  }
</style>
