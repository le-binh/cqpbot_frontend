<template>
  <div class="wrapper">
    <span>Chào mừng đến với ứng dụng Autobot</span>
    <el-button type="primary" @click="startUsingApp">Sử dụng ứng dụng ngay</el-button>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    methods: {
      startUsingApp () {
        this.$router.push({ name: 'Login' })
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    align-content: center;
  }

  .el-row {
    margin-bottom: 20px;
  }
</style>
