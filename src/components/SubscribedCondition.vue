<template>
  <el-form ref="form" :model="formData" :rules="rules" label-position="left" label-width="100px">
    <el-form-item label="Nhận tin" prop="subscribed">
      <el-radio-group v-model="formData.subscribed">
        <el-radio label="yes">Đã đăng kí</el-radio>
        <el-radio label="no">Chưa đăng kí</el-radio>
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
    name: 'SubscribedCondition',
    data () {
      return {
        formData: {
          subscribed: undefined
        },
        rules: {
          subscribed: [{ required: true, message: 'Vui lòng chọn tình trạng đăng kí nhận tin', trigger: 'change' }]
        }
      }
    },
    methods: {
      handleAdd: function () {
        this.$refs.form.validate(valid => {
          if (valid) {
            console.log(this.formData.subscribed === 'yes')
            this.$emit('onChange', this.formData.subscribed === 'yes')
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
