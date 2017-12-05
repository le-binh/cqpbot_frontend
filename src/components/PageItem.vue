<template>
  <div class="wrapper" @click="onViewPageDetail">
    <el-card :body-style="{ padding: '0px'}" class="card">
      <img :src="page.avatar" class="image">
      <div class="right">
        <span class="name">{{page.name}}</span>
        <div class="bottom">
          <span v-if="page.active" class="status">Đã kích hoạt</span>
          <span v-else class="status">Chưa kích hoạt</span>
          <el-button type="danger" class="button">Huỷ</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'PageItem',
    props: ['page'],
    methods: {
      onViewPageDetail: function () {
        this.$emit('viewPageDetail', this.page._id)
      }
    }
  }
</script>

<style scoped="">
  .wrapper {
    width: 50%;
    height: 150px;
    display: inline-block;
    align-content: center;
    cursor: pointer;
  }
  .status {
    font-size: 22px;
    color: #999;
    vertical-align: middle;
  }

  .bottom {
    margin-top: 13px;
    line-height: 32px;
    width: 100%;
  }

  .button {
    padding: 8px 16px;
    margin-left: 50px;
    vertical-align: middle; 
  }

  .image {
    display: inline-block;
    width: 80px;
    height: 80px;
    margin-left: 8px;
    margin-top: 8px;
    border-radius: 40px;
  }

  .right {
    display: inline-block;
    padding: 14px;
    vertical-align: top;
    height: 100%;
  }

  .card {
    width: 95%;
    height: 90%;
    margin: auto;
  }

  .name {
    font-size: 30px;
    margin-top: 8px;
    text-overflow:ellipsis;
    overflow:hidden;
    display: block;
    width: 250px;
    white-space: nowrap;
  }
</style>
