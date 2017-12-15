<template>
  <el-form ref="form" :model="formData" :rules="rules" label-position="left" label-width="100px">
    <el-form-item label="chứa tên:" prop="name">
      <el-input v-model="formData.name" class="name-input"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleAdd">Thêm</el-button>
      <el-button @click="handleCancel">Huỷ</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data () {
      return {
        formData: {
          name: ''
        },
        rules: {
          name: [{ required: true, message: 'Vui lòng nhập tên khách hàng', trigger: 'blur' }]
        }
      }
    },
    methods: {
      handleAdd: function () {
        this.$refs.form.validate(valid => {
          if (valid) {
            this.$emit('onChange', this.formData.name)
          }
        })
      },
      handleCancel: function () {
        this.$emit('onCancel')
      }
    }
  }
</script>

<style scoped>
  .name-input {
    width: 300px
  }
</style>
