<template>
  <div>
    <el-form :model="formData" :rules="rules" ref="formData" label-width="120px" label-position="left" class="formStyle">
      <el-form-item label="Picture" prop="imageUrl">
        <div class="upload">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            accept="image/*"
            :auto-upload="false"
            :limit="1"
            :on-preview="handlePictureCardPreview"
            :on-change="handleChange"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
        </div>
        <el-dialog :visible.sync="formData.dialogVisible" size="tiny">
          <img width="100%" :src="formData.dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item label="Tiêu đề tin nhắn" required>
        <div>
          <el-form-item prop="title">
            <el-input v-model="formData.title" placeholder="Tiêu đề tin nhắn chính"></el-input>
          </el-form-item>
        </div>
        <div class="subTitle">
          <el-form-item prop="subTitle">
            <el-input v-model="formData.subTitle" placeholder="Tiêu đề tin nhắn phụ"></el-input>
          </el-form-item>
        </div>
      </el-form-item>
      <el-form-item
        v-for="(button, index) in formData.buttons"
        :label="'Nút ' + (index + 1)"
        :key="button.key"
      >
        <el-input v-model="button.title" placeholder="Tiêu đề cho nút"></el-input>
        <el-input v-model="button.link" placeholder="Link khi click vào nút"></el-input>
        <el-button type="danger" icon="el-icon-delete" size="small" @click.prevent="removeButton(button)"></el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formData')">Submit</el-button>
        <el-button @click="addButton">Thêm nút</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    name: 'AddNewArrival',
    data () {
      return {
        formData: {
          buttons: [{
            key: Date.now(),
            title: '',
            link: ''
          }],
          title: '',
          subTitle: '',
          dialogImageUrl: '',
          dialogVisible: false,
          uploadVisible: true,
          imageUrl: ''
        },
        rules: {
          imageUrl: [{required: true, message: 'Please upload a picture', trigger: 'blur,change'}],
          title: [{ required: true, message: 'Vui lòng nhập tiêu đề chính', trigger: 'change' }],
          subTitle: [{ required: true, message: 'Vui lòng nhập tiêu đề phụ', trigger: 'change' }]
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      removeButton (item) {
        var index = this.formData.buttons.indexOf(item)
        if (index !== -1) {
          this.formData.buttons.splice(index, 1)
        }
      },
      addButton () {
        this.formData.buttons.push({
          key: Date.now(),
          title: '',
          link: ''
        })
      },
      handleRemove () {
        this.formData.uploadVisible = true
        this.formData.imageUrl = ''
        setTimeout(() => {
          document.getElementsByClassName('el-upload--picture-card')[0].style.setProperty('visibility', 'unset')
        }, 500)
      },
      handlePictureCardPreview (file) {
        this.formData.dialogImageUrl = file.url
        this.formData.dialogVisible = true
      },
      handleChange (file) {
        this.formData.imageUrl = file.url
        document.getElementsByClassName('el-upload--picture-card')[0].style.setProperty('visibility', 'hidden')
      }
    }
  }
</script>

<style scoped>
  .formStyle {
    width: 600px;
  }

  .formStyle .el-input {
    width: 350px;
  }

  .subTitle .el-input {
    margin-top: 22px;
  }
  .upload {
    height: 148px;
  }
</style>