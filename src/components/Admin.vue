<template>
  <div>
    <div class="navbar">
      <AdminSideBar />
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
  }
</style>

<script>
  import AdminSideBar from './AdminSideBar.vue'

  export default {
    name: 'Admin',
    components: { AdminSideBar }
  }
</script>
