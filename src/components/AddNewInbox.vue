<template>
  <div>
    <el-form
      label-position="left"
      :model="inbox"
      @submit.native.prevent
      ref="inboxForm"
      label-width="150px"
      class="formStyle">
      <el-form-item
        label="Nếu khách hàng hỏi"
        :rules="{required: true, message: 'Vui lòng nhập câu hỏi', trigger: 'blur'}"
        prop="question">
        <el-input v-model="inbox.question"></el-input>
      </el-form-item>
      <el-form-item label="Thì Sena sẽ trả lời" required>
        <el-form-item
          v-for="(answer, index) in inbox.answers"
          :prop="'answers.' + index + '.value'"
          :rules="{required: true, message: 'Vui lòng nhập câu trả lời', trigger: 'blur'}"
          :key="answer.key">
          <el-input v-model="answer.value" type="textarea" :rows=2></el-input>
          <el-button v-if="index !== 0" type="danger" icon="el-icon-delete" size="small" @click.prevent="removeAnswer(answer)"></el-button>
        </el-form-item>
      </el-form-item>
      <el-form-item class="form-item-submit">
        <el-button type="primary" @click="onAddNewInbox">Hoàn tất</el-button>
        <el-button @click="addAnswer">Thêm câu trả lời</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import Tag from './Tag.vue'

  export default {
    components: { Tag },
    data () {
      return {
        inbox: {
          question: '',
          answers: [{ key: Date.now(), value: '' }]
        }
      }
    },
    methods: {
      onAddNewInbox: function () {
        this.$refs.inboxForm.validate(valid => {
          if (valid) {
            const { question, answers } = this.inbox
            this.clearInput()
            this.$emit('addNewInbox', { question, answers })
          }
        })
      },
      clearInput: function () {
        this.inbox = {
          question: '',
          answers: [{ key: Date.now(), value: '' }]
        }
      },
      addAnswer () {
        this.inbox.answers.push({
          key: Date.now(),
          value: ''
        })
      },
      removeAnswer (answer) {
        const index = this.inbox.answers.indexOf(answer)
        if (index !== -1) {
          this.inbox.answers.splice(index, 1)
        }
      }
    }
  }
</script>

<style scoped>
  .formStyle {
    width: 600px;
  }

  .formStyle .el-textarea {
    width: 400px;
    margin-top: 24px;
  }

  .form-item-submit {
    margin-top: 48px;
  }
</style>
