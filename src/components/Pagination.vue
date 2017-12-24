<template>
  <div class="wrapper">
    <el-button :disabled="hasPrevious === false" round @click="handleClick('onLoadFirst')">Trang đầu</el-button>
    <el-button :disabled="hasPrevious === false" round @click="handleClick('onLoadPrevious')">Trang trước</el-button>
    <el-button :disabled="hasNext === false" round @click="handleClick('onLoadNext')">Trang sau</el-button>
  </div>
</template>

<script>
  export default {
    props: ['hasPrevious', 'hasNext'],
    methods: {
      handleClick (event) {
        this.$emit(event)
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    text-align: center;
    margin-top: 24px;
  }
</style>
