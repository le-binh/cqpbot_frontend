<template>
  <div class="wrapper">
    <el-table
      :data="newArrivals"
      stripe
      border
      style="width: 100%"
      empty-text="Chưa có dữ liệu"
    >
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="name" label="Tên chiến dịch" width="350" sortable></el-table-column>
      <el-table-column prop="sent" label="Đã gửi" sortable></el-table-column>
      <el-table-column prop="read" label="Đã đọc" sortable></el-table-column>
      <el-table-column prop="clicked" label="Đã click" sortable></el-table-column>
    </el-table>
    <el-button type="primary" icon="el-icon-plus" class="button-add" @click="addNewArrival"></el-button>
  </div>
</template>

<script>
  export default {
    props: ['id'],
    data () {
      return {
        newArrivals: []
      }
    },
    methods: {
      addNewArrival: function () {
        this.$router.push({ name: 'AddNewArrival' })
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 100%;
    margin: auto;
  }
  .button-add {
    position: fixed;
    bottom: 32px;
    right: 32px;
    padding: 20px;
    border-radius: 27px;
  }
</style>
