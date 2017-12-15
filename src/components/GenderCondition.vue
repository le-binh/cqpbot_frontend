<template>
  <el-form ref="form" :model="formData" :rules="rules" label-position="left" label-width="100px">
    <el-form-item label="Giới tính" prop="gender">
      <el-radio-group v-model="formData.gender">
        <el-radio label="male">Nam</el-radio>
        <el-radio label="female">Nữ</el-radio>
      </el-radio-group>
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
          gender: ''
        },
        rules: {
          gender: [{ required: true, message: 'Vui lòng chọn giới tính', trigger: 'change' }]
        }
      }
    },
    methods: {
      handleAdd: function () {
        this.$refs.form.validate(valid => {
          if (valid) {
            this.$emit('onChange', this.formData.gender)
          }
        })
      },
      handleCancel: function () {
        this.$emit('onCancel')
      }
    }
  }
</script>

<style>
  .name-input {
    width: 300px
  }
</style>
