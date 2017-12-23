<template>
  <div class="wrapper" v-loading.fullscreen.lock="loading">
    <el-form :model="formData" :rules="rules" ref="formData" label-width="120px" label-position="left" class="formStyle">
      <el-form-item label="Hình ảnh" prop="imageUrl">
        <div class="upload">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            ref="uploadForm"
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
        <el-dialog :visible.sync="formData.dialogVisible">
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
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'AddNewArrival',
    props: ['id'],
    data () {
      return {
        formData: {
          buttons: [],
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
    computed: {
      ...mapState({
        loading: state => state.newArrival.loading
      })
    },
    methods: {
      ...mapActions([
        'createNewArrival'
      ]),
      submitForm (formName) {
        const vm = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            vm.submitNewArrival()
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
      },
      async submitNewArrival () {
        const success = await this.createNewArrival({
          pageId: this.id,
          title: this.formData.title,
          subTitle: this.formData.subTitle,
          buttons: this.formData.buttons
        })
        if (success) {
          this.$message({message: 'Thêm tin hàng mới về thành công', type: 'success', showClose: true})
          this.$message({message: 'Thêm tin nhắn thành công', type: 'success', showClose: true})
          this.$refs.formData.resetFields()
          this.formData.buttons = []
          this.formData.buttons = []
          this.$refs.uploadForm.clearFiles()
          setTimeout(() => {
            document.getElementsByClassName('el-upload--picture-card')[0].style.setProperty('visibility', 'unset')
          }, 600)
        } else {
          this.$message({message: 'Có lỗi xảy ra, vui lòng thử lại', type: 'error', showClose: true})
        }
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 100%;
  }

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
