<template>
  <div class="wrapper">
    <span class="welcome-title">Chào mừng đến với ứng dụng Misena</span>
    <el-button class="use-app-button" type="primary" @click="startUsingApp">Sử dụng ứng dụng ngay</el-button>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    methods: {
      startUsingApp () {
        this.$router.push({ path: '/login' })
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    margin-top: calc(50vh - 51px);
  }

  .welcome-title {
    display: block;
    text-align: center;
    margin-bottom: 16px;
    font-size: 40px;
  }

  .use-app-button {
    display: block;
    margin: auto;
    font-size: 20px;
  }
</style>
