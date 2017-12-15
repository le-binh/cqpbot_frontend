<template>
  <el-form ref="form" :model="formData" :rules="rules" label-position="left" label-width="170px">
    <el-form-item label="Lần tương tác cuối cùng" prop="days">
      <el-input-number v-model="formData.days" :min="1"></el-input-number>
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
          days: 1
        },
        rules: {
          time: [{ required: true, message: 'Vui lòng chọn thời gian', trigger: 'blur' }]
        }
      }
    },
    methods: {
      handleAdd: function () {
        this.$refs.form.validate(valid => {
          if (valid) {
            this.$emit('onChange', this.formData.days)
          }
        })
      },
      handleCancel: function () {
        this.$emit('onCancel')
      }
    }
  }
</script>
