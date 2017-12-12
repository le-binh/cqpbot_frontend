<template>
  <el-table
    ref="confusingQuestionsTable"
    :data="confusingQuestions"
    style="width: 100%"
    row-key="id"
    :expand-row-keys="expandingRowKeys"
    @expand-change="handleExpandChange">
    <el-table-column type="index" width="50"></el-table-column>
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form>
          <el-form-item>
            <el-input v-model="answer" type="textarea" :rows="3" placeholder="Nhập câu trả lời"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSubmitAnswer" :disabled="submitAnswerDisabled">Xong</el-button>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column label="Từ khách hàng hỏi" prop="question"></el-table-column>
    <el-table-column label="Hành động" width="120">
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="handleAnswer(scope.$index, scope.row)">Trả lời</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        expandingRowKeys: [],
        answer: ''
      }
    },
    computed: {
      ...mapGetters({
        confusingQuestions: 'confusingQuestions'
      }),
      submitAnswerDisabled: function () {
        return this.answer === ''
      }
    },
    methods: {
      handleAnswer: function (index, row) {
        this.expandingRowKeys = [row.id]
      },
      handleSubmitAnswer: function () {
        this.answer = ''
        this.expandingRowKeys = []
      },
      handleExpandChange: function (row) {
        this.answer = ''
        if (this.expandingRowKeys.some(key => key === row.id)) {
          this.expandingRowKeys = []
        } else {
          this.expandingRowKeys = [row.id]
        }
      }
    }
  }
</script>
