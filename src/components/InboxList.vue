<template>
  <div class="wrapper">
    <el-table
      :data="displayedInboxes"
      stripe style="width: 100%"
      border
      empty-text="Chưa có dữ liệu"
    >
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="keywords" label="Từ khoá"></el-table-column>
      <el-table-column prop="answer" label="Câu trả lời"></el-table-column>
      <el-table-column prop="comment" label="Áp dụng cho comment" width="160"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'InboxList',
    props: ['inboxes'],
    computed: {
      displayedInboxes: function () {
        return this.inboxes.map(({ keywords, answer, comment }) => {
          return {
            keywords: keywords.join(', '),
            answer,
            comment: comment ? 'Có' : 'Không'
          }
        })
      }
    }
  }
</script>
