<template>
  <div class="wrapper">
    <span class="welcome-msg">Chào mừng đến với ứng dụng Autobot</span>
    <router-link to="/login">Sử dụng ngay</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
  .wrapper {
    align-content: center;
  }
  .welcome-msg {
    display: block;
  }
</style>
