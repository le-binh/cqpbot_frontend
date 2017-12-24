<template>
  <el-card
    :body-style="{ padding: '0' }"
    class="card"
    :style="bodyStyle">
    <div>
      <p class="message">{{ message || 'Nội dung tin nhắn' }}</p>
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
    props: ['message', 'buttons', 'bodyStyle']
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

  .message {
    font-weight: bold;
    margin: 8px 8px 16px 8px;
    text-overflow:ellipsis;
    overflow:hidden;
    white-space: nowrap;
  }
</style>
