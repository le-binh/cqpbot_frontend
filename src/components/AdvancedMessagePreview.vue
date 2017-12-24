<template>
  <el-card
    :body-style="{ padding: '0' }"
    class="card"
    :style="bodyStyle">
    <div>
      <img v-if="image !== ''" :src="image" class="image">
      <div>
        <p class="title">{{ title || 'Tiêu đề tin nhắn chính' }}</p>
        <p class="subtitle">{{ subTitle || 'Tiêu đề tin nhắn phụ' }}</p>
      </div>
    </div>
    <div>
      <a
        v-for="(button, index) in buttons"
        class="button"
        :key="index"
        :href="button.link">
        {{ button.title || 'Tiêu đề của nút' }}
      </a>
    </div>
  </el-card>
</template>

<script>
  export default {
    props: ['image', 'title', 'subTitle', 'buttons', 'bodyStyle']
  }
</script>

<style scoped>
  .card {
    border-radius: 16px;
    box-shadow: none;
    display: inline-block;
    width: 350px;
  }

  .button {
    display: block;
    text-align: center;
    text-decoration: none;
    padding: 8px 0;
    border-top: 1px solid #eee;
    color: #409eff;
  }

  .title {
    font-weight: bold;
    margin-top: 8px;
    margin-bottom: 0;
    padding-left: 8px;
    text-overflow:ellipsis;
    overflow:hidden;
    white-space: nowrap;
  }

  .subtitle {
    margin-top: 0;
    margin-bottom: 8px;
    padding-left: 8px;
    text-overflow:ellipsis;
    overflow:hidden;
    white-space: nowrap;
  }

  .image {
    width: 100%;
    height: 160px;
  }
</style>
