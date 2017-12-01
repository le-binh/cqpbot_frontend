<template>
  <div>
    <el-form label-position="top" :model="inbox" @submit.native.prevent>
      <el-form-item class="form-item" label="Nếu khách hàng hỏi với các từ khoá">
        <Tag :tags="inbox.keywords"/>
      </el-form-item>
      <el-form-item class="form-item" label="Thì Sena sẽ trả lời">
        <el-input v-model="inbox.answer" type="textarea" :rows=3></el-input>
      </el-form-item>
      <el-form-item class="form-item form-item-comment" label="Áp dụng cho cả comment">
        <el-checkbox v-model="inbox.comment"></el-checkbox>
      </el-form-item>
      <el-form-item class="form-item form-item-submit">
        <el-button type="primary" :disabled="submitDisabled" @click="onAddNewInbox">Thêm</el-button>
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
          keywords: [],
          answer: '',
          comment: true
        }
      }
    },
    computed: {
      submitDisabled: function () {
        const { keywords, answer } = this.inbox
        return keywords.length === 0 || answer === ''
      }
    },
    methods: {
      onAddNewInbox: function () {
        const { keywords, answer, comment } = this.inbox
        this.clearInput()
        this.$emit('addNewInbox', { keywords, answer, comment })
      },
      clearInput: function () {
        this.inbox = {
          keywords: [],
          answer: '',
          comment: true
        }
      }
    }
  }
</script>

<style scoped>
  .form-item {
    display: inline-block;
    width: 400px;
    vertical-align: top;
  }

  .form-item-comment {
    width: 150px;
    text-align: center;
  }

  .form-item-submit {
    display: block;
  }
</style>
