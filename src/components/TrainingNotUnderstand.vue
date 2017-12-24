<template>
  <el-table
    ref="notUnderstandQuestionsTable"
    :data="notUnderstandQuestions"
    style="width: 100%"
    row-key="id"
    empty-text="Chưa có dữ liệu"
    :expand-row-keys="expandingRowKeys"
    @expand-change="handleExpandChange">
    <el-table-column type="index" width="50"></el-table-column>
    <el-table-column type="expand">
      <template slot-scope="scope">
        <el-form
          ref="answerForm"
          class="formStyle"
          :model="formData">
          <el-form-item>
            <el-form-item
              v-for="(answer, index) in formData.answers"
              :prop="'answers.' + index + '.value'"
              :rules="{required: true, message: 'Vui lòng nhập câu trả lời', trigger: 'change'}"
              :key="answer.key">
              <el-input v-model="answer.value" type="textarea" :rows=2></el-input>
              <el-button v-if="index !== 0" type="danger" icon="el-icon-delete" size="small" @click.prevent="removeAnswer(answer)"></el-button>
            </el-form-item>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSubmitAnswer(scope.$index, scope.row)">Xong</el-button>
            <el-button @click="addAnswer">Thêm câu trả lời</el-button>
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
  import { mapGetters, mapActions } from 'vuex'

  export default {
    props: ['pageId'],
    data () {
      return {
        expandingRowKeys: [],
        formData: {
          answers: [{key: Date.now(), value: ''}]
        }
      }
    },
    computed: {
      ...mapGetters({
        notUnderstandQuestions: 'notUnderstandQuestions'
      })
    },
    methods: {
      ...mapActions([
        'getNotUnderstandQuestions',
        'createNotUnderstandQuestion'
      ]),
      handleAnswer: function (index, row) {
        this.expandingRowKeys = [row.id]
      },
      handleSubmitAnswer: function (index, row) {
        const vm = this
        const answerForm = this.$refs.answerForm
        answerForm.validate(valid => {
          if (valid) {
            vm.handleCreateNotUnderstandQuestion(row, vm.formData.answers).then(success => {
              if (success) {
                vm.formData.answers = [{key: Date.now(), value: ''}]
                answerForm.resetFields()
                vm.expandingRowKeys = []
                vm.$message({message: 'Thêm câu trả lời thành công', type: 'success', showClose: true})
              } else {
                vm.$message({message: 'Có lỗi xảy ra, vui lòng thử lại', type: 'error', showClose: true})
              }
            })
          }
        })
      },
      handleExpandChange: function (row) {
        if (this.expandingRowKeys.some(key => key === row.id)) {
          this.expandingRowKeys = []
        } else {
          this.expandingRowKeys = [row.id]
        }
      },
      addAnswer () {
        this.formData.answers.push({
          key: Date.now(),
          value: ''
        })
      },
      removeAnswer (answer) {
        const index = this.formData.answers.indexOf(answer)
        if (index !== -1) {
          this.formData.answers.splice(index, 1)
        }
      },
      async handleCreateNotUnderstandQuestion (question, answers) {
        debugger
        const success = await this.createNotUnderstandQuestion({
          pageId: this.pageId, question: question, answers: answers.map(e => e.value)
        })
        return success
      }
    },
    created () {
      this.getNotUnderstandQuestions(this.pageId)
    }
  }
</script>

<style scoped>
  .formStyle {
    width: 100%;
  }

  .formStyle .el-textarea {
    width: calc(100% - 50px);
    margin-top: 24px;
  }
</style>
