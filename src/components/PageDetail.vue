<template>
  <div>
    <div class="navbar">
      <PageDetailSideBar />
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
  .navbar {
    display: inline-block;
  }

  .content {
    vertical-align: top;
    display: inline-block;
    width: calc(100% - 170px);
    margin-left: 16px;
  }
</style>

<script>
  import PageDetailSideBar from './PageDetailSideBar.vue'

  export default {
    name: 'Page-Detail',
    components: { PageDetailSideBar }
  }
</script>
