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
        :label="'Nút ' + (index + 1)"
        :key="button.key"
        v-for="(button, index) in formData.buttons"
        required>
        <el-form-item
          :prop="'buttons.' + index + '.title'"
          :rules="{ required: true, message: 'Vui lòng nhập tiêu đề cho nút', trigger: 'blur' }"
        >
          <el-input v-model="button.title" placeholder="Tiêu đề cho nút"></el-input>
        </el-form-item>
        <el-form-item
          :prop="'buttons.' + index + '.link'"
          :rules="{
            required: true, message: 'Vui lòng nhập link cho nút', trigger: 'blur',
            type: 'url', message: 'Vui lòng nhập link đúng định dạng', trigger: 'blur'
          }"
        >
          <el-input class="button-link" v-model="button.link" placeholder="Link khi click vào nút"></el-input>
          <el-button type="danger" icon="el-icon-delete" size="small" @click.prevent="removeButton(button)"></el-button>
        </el-form-item>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formData')">Hoàn tất</el-button>
        <el-button @click="addButton" v-show="showsAddButton">Thêm nút</el-button>
      </el-form-item>
    </el-form>
    <AdvancedMessagePreview
      :image="formData.imageUrl"
      :title="formData.title"
      :subTitle="formData.subTitle"
      :buttons="formData.buttons"
      :body-style="messagePreviewStyle"/>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  import AdvancedMessagePreview from '@/components/AdvancedMessagePreview'
  const BUTTONS_LIMIT = 3

  export default {
    name: 'AddNewArrival',
    components: { AdvancedMessagePreview },
    props: ['id'],
    data () {
      return {
        formData: {
          buttons: [{ key: Date.now(), title: '', link: '' }],
          title: '',
          subTitle: '',
          dialogImageUrl: '',
          dialogVisible: false,
          uploadVisible: true,
          imageUrl: '',
          photo: undefined
        },
        rules: {
          imageUrl: [{required: true, message: 'Please upload a picture', trigger: 'blur,change'}],
          title: [{ required: true, message: 'Vui lòng nhập tiêu đề chính', trigger: 'change' }],
          subTitle: [{ required: true, message: 'Vui lòng nhập tiêu đề phụ', trigger: 'change' }]
        },
        messagePreviewStyle: {
          position: 'absolute',
          left: '800px',
          top: '90px'
        }
      }
    },
    computed: {
      ...mapState({
        loading: state => state.newArrival.loading
      }),
      showsAddButton: function () {
        return this.formData.buttons.length < BUTTONS_LIMIT
      }
    },
    methods: {
      ...mapActions([
        'createNewArrival',
        'updateNewArrivalPhoto'
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
        this.formData.photo = undefined
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
        this.formData.photo = file.raw
        document.getElementsByClassName('el-upload--picture-card')[0].style.setProperty('visibility', 'hidden')
      },
      async submitNewArrival () {
        const newArrivalId = await this.createNewArrival({
          pageId: this.id,
          title: this.formData.title,
          subTitle: this.formData.subTitle,
          buttons: this.formData.buttons
        })
        if (newArrivalId) {
          this.updateNewArrivalPhoto({ id: newArrivalId, file: this.formData.photo })
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

  .button-link {
    margin-top: 22px;
  }

  .upload {
    height: 148px;
  }
</style>

<style>
  .el-upload--picture-card {
    width: 296px;
    height: 148px;
  }

  .el-upload-list--picture-card .el-upload-list__item {
    width: 296px;
    height: 148px;
  }
</style>
