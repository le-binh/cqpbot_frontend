<template>
  <div>
    <el-tag
      class="tag"
      :key="tag"
      v-for="tag in tags"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)">
      {{tag}}
    </el-tag>
    <el-input
      class="input-new-tag"
      v-if="inputVisible"
      v-model="inputValue"
      ref="saveTagInput"
      size="mini"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    >
    </el-input>
    <el-button v-else class="button-add-tag" size="small" @click="showInput">+ Thêm từ khoá</el-button>
  </div>
</template>

<script>
  export default {
    props: ['tags'],
    data () {
      return {
        inputVisible: false,
        inputValue: ''
      }
    },
    methods: {
      handleClose (tag) {
        this.tags.splice(this.tags.indexOf(tag), 1)
      },

      showInput () {
        this.inputVisible = true
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus()
        })
      },

      handleInputConfirm (e) {
        let inputValue = this.inputValue
        if (inputValue) {
          this.tags.push(inputValue)
        }
        this.inputVisible = false
        this.inputValue = ''
      }
    }
  }
</script>

<style scoped>
  .tag {
    margin-left: 8px;
  }
  .button-add-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 150px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
