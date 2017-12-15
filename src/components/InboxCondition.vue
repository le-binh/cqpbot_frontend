<template>
  <el-form ref="form" :model="formData" :rules="rules" label-position="left" label-width="120px">
    <el-form-item label="Số lần inbox" prop="condition" class="item-inline">
      <el-select v-model="formData.condition" placeholder="Chọn điều kiện">
        <el-option label=">" value="$gt"></el-option>
        <el-option label=">=" value="$gte"></el-option>
        <el-option label="<" value="$lt"></el-option>
        <el-option label="<=" value="$lte"></el-option>
        <el-option label="=" value="$eq"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item prop="value" class="item-inline" label-width="0px">
      <el-input-number v-model="formData.value" :min="1"></el-input-number>
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
          condition: '',
          value: ''
        },
        rules: {
          condition: [{ required: true, message: 'Vui lòng điều kiện', trigger: 'blur' }]
        }
      }
    },
    methods: {
      handleAdd: function () {
        this.$refs.form.validate(valid => {
          if (valid) {
            this.$emit('onChange', {condition: this.formData.condition, value: this.formData.value})
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
  .item-inline {
    display: inline-block;
  }
</style>
