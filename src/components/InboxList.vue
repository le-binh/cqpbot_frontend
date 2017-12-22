<template>
  <div class="wrapper">
    <el-table
      :data="displayedInboxes"
      stripe style="width: 100%"
      border
      empty-text="Chưa có dữ liệu"
    >
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="question" label="Từ khoá"></el-table-column>
      <el-table-column label="Câu trả lời">
        <template slot-scope="props">
          <p class="answer" v-for="(answer, index) in props.row.answers"><span class="answer-mark">A{{ index + 1}}: </span>{{ answer }}</p>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'InboxList',
    props: ['inboxes'],
    computed: {
      displayedInboxes: function () {
        return this.inboxes.map(({ question, answers }) => {
          return {
            question,
            answers
          }
        })
      }
    }
  }
</script>

<style scoped>
  p.answer {
    margin-top: 0;
    margin-bottom: 0;
  }

  span.answer-mark {
    font-weight: bold;
    font-style: italic;
  }
</style>
