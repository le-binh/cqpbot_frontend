<template>
  <div class="wrapper" v-loading.fullscreen.lock="loading">
    <el-form :model="groupFormData" :rules="rules" ref="groupFormData" label-width="0" label-position="left" class="formStyle">
      <el-form-item prop="selectedCustomerGroups">
        <el-select
          multiple filterable remote
          v-model="groupFormData.selectedCustomerGroups"
          placeholder="Chọn nhóm khách hàng"
          no-data-text="Không tìm thấy, hãy tạo thêm nhóm mới"
          :remote-method="searchGroup"
          class="customer-group-select">
          <el-option
            v-for="group in filteredCustomerGroups"
            :key="group._id"
            :label="group.title"
            :value="group._id">
          </el-option>
        </el-select>
        <el-button type="primary" class="add-customer-group-button" @click="onAddNewCustomerGroup">Thêm nhóm mới</el-button>
      </el-form-item>
    </el-form>

    <div class="messages-tab">
      <el-tabs type="card" ref="messageTabs" value="basic">
        <el-tab-pane label="Cơ bản" name="basic">
          <el-form :model="basicFormData" :rules="rules" ref="basicFormData" label-width="0" label-position="left" class="formStyle">
            <el-form-item prop="message">
              <el-input placeholder="Nội dung tin nhắn" type="textarea" :rows="3" v-model="basicFormData.message"></el-input>
            </el-form-item>
            <el-form-item
              v-for="(button, index) in basicFormData.buttons"
              :key="button.key"
            >
              <el-input v-model="button.title" placeholder="Tiêu đề cho nút"></el-input>
              <el-input v-model="button.link" placeholder="Link khi click vào nút"></el-input>
              <el-button type="danger" icon="el-icon-delete" size="small" @click.prevent="removeButton(button)"></el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('basicFormData')">Submit</el-button>
              <el-button @click="addButton">Thêm nút</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="Nâng cao" name="advanced">
          <el-form :model="advancedFormData" :rules="rules" ref="advancedFormData" label-width="0" label-position="left" class="formStyle">
            <el-form-item prop="imageUrl">
              <div class="upload">
                <el-upload
                  action="https://jsonplaceholder.typicode.com/posts/"
                  list-type="picture-card"
                  accept="image/*"
                  ref="uploadForm"
                  :auto-upload="false"
                  :limit="1"
                  :on-preview="handlePictureCardPreview"
                  :on-change="handleChange"
                  :on-remove="handleRemove">
                  <i class="el-icon-plus"></i>
                </el-upload>
              </div>
              <el-dialog :visible.sync="advancedFormData.dialogVisible">
                <img width="100%" :src="advancedFormData.dialogImageUrl" alt="">
              </el-dialog>
            </el-form-item>
            <el-form-item>
              <div>
                <el-form-item prop="title">
                  <el-input v-model="advancedFormData.title" placeholder="Tiêu đề tin nhắn chính"></el-input>
                </el-form-item>
              </div>
              <div class="subTitle">
                <el-form-item prop="subTitle">
                  <el-input v-model="advancedFormData.subTitle" placeholder="Tiêu đề tin nhắn phụ"></el-input>
                </el-form-item>
              </div>
            </el-form-item>
            <el-form-item
              v-for="(button, index) in advancedFormData.buttons"
              :key="button.key"
            >
              <el-input v-model="button.title" placeholder="Tiêu đề cho nút"></el-input>
              <el-input v-model="button.link" placeholder="Link khi click vào nút"></el-input>
              <el-button type="danger" icon="el-icon-delete" size="small" @click.prevent="removeAdvancedButton(button)"></el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('advancedFormData')">Submit</el-button>
              <el-button @click="addAdvancedButton">Thêm nút</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions, mapState } from 'vuex'

  export default {
    props: ['id'],
    data () {
      return {
        groupFormData: {
          selectedCustomerGroups: [],
          valid: false
        },
        basicFormData: {
          message: '',
          buttons: [],
          valid: false
        },
        advancedFormData: {
          buttons: [],
          title: '',
          subTitle: '',
          dialogImageUrl: '',
          dialogVisible: false,
          uploadVisible: true,
          imageUrl: '',
          photo: undefined,
          valid: false
        },
        rules: {
          selectedCustomerGroups: [{type: 'array', required: true, message: 'Vui lòng chọn ít nhất 1 nhóm khách hàng', trigger: 'blur'}],
          message: [{required: true, message: 'Vui lòng nhập nội dung tin nhắn', trigger: 'blur'}],
          imageUrl: [{required: true, message: 'Please upload a picture', trigger: 'blur,change'}],
          title: [{ required: true, message: 'Vui lòng nhập tiêu đề chính', trigger: 'change' }],
          subTitle: [{ required: true, message: 'Vui lòng nhập tiêu đề phụ', trigger: 'change' }]
        }
      }
    },
    computed: {
      ...mapGetters({
        filteredCustomerGroups: 'filteredCustomerGroups'
      }),
      ...mapState({
        loading: state => state.customerGroup.loading,
        messageId: state => state.message.id
      })
    },
    methods: {
      ...mapActions([
        'searchGroup',
        'getCustomerGroups',
        'createNewBasicMessage',
        'createNewAdvancedMessage',
        'updateMessagePhoto',
        'saveCurrentMessage'
      ]),
      onAddNewCustomerGroup: function () {
        this.$router.push({ name: 'AddNewCustomerGroup', params: { id: this.id }, query: { redirect: this.$route.fullPath } })
      },
      submitForm (formName) {
        const vm = this
        this.$refs.groupFormData.validate(valid => { vm.groupFormData.valid = valid })
        this.$refs[formName].validate(valid => {
          vm[formName].valid = valid
        })
        if (this.groupFormData.valid && vm[formName].valid) {
          this.createMessage()
        }
      },
      removeButton (item) {
        const index = this.basicFormData.buttons.indexOf(item)
        if (index !== -1) {
          this.basicFormData.buttons.splice(index, 1)
        }
      },
      removeAdvancedButton (item) {
        const index = this.advancedFormData.buttons.indexOf(item)
        if (index !== -1) {
          this.advancedFormData.buttons.splice(index, 1)
        }
      },
      addButton () {
        this.basicFormData.buttons.push({
          key: Date.now(),
          title: '',
          link: ''
        })
      },
      addAdvancedButton () {
        this.advancedFormData.buttons.push({
          key: Date.now(),
          title: '',
          link: ''
        })
      },
      handleRemove () {
        this.advancedFormData.uploadVisible = true
        this.advancedFormData.imageUrl = ''
        this.advancedFormData.photo = undefined
        setTimeout(() => {
          document.getElementsByClassName('el-upload--picture-card')[0].style.setProperty('visibility', 'unset')
        }, 500)
      },
      handlePictureCardPreview (file) {
        this.advancedFormData.dialogImageUrl = file.url
        this.advancedFormData.dialogVisible = true
      },
      handleChange (file) {
        this.advancedFormData.imageUrl = file.url
        this.advancedFormData.photo = file.raw
        document.getElementsByClassName('el-upload--picture-card')[0].style.setProperty('visibility', 'hidden')
      },
      createMessage () {
        const vm = this
        const createMessageHandler = success => {
          if (success) {
            vm.$message({message: 'Thêm tin nhắn thành công', type: 'success', showClose: true})
            vm.$refs.basicFormData.resetFields()
            vm.$refs.advancedFormData.resetFields()
            vm.$refs.groupFormData.resetFields()
            vm.basicFormData.buttons = []
            vm.advancedFormData.buttons = []
            vm.$refs.uploadForm.clearFiles()
            setTimeout(() => {
              document.getElementsByClassName('el-upload--picture-card')[0].style.setProperty('visibility', 'unset')
            }, 600)
          } else {
            this.$message({message: 'Có lỗi xảy ra, vui lòng thử lại', type: 'error', showClose: true})
          }
        }
        if (this.$refs.messageTabs.currentName === 'basic') {
          this.createNewBasicMessage({
            pageId: this.id,
            message: this.basicFormData.message,
            groups: this.groupFormData.selectedCustomerGroups,
            buttons: this.basicFormData.buttons
          }).then(createMessageHandler)
        } else {
          const vm = this
          this.createNewAdvancedMessage({
            pageId: this.id,
            title: this.advancedFormData.title,
            subTitle: this.advancedFormData.subTitle,
            groups: this.groupFormData.selectedCustomerGroups,
            buttons: this.advancedFormData.buttons
          }).then(success => {
            vm.updateMessagePhoto({ messageId: vm.messageId, file: vm.advancedFormData.photo })
            createMessageHandler(success)
          })
        }
      }
    },
    created () {
      this.getCustomerGroups(this.id)
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 100%;
  }

  .customer-group-select {
    width: 315px;
    vertical-align: middle;
  }

  .formStyle {
    width: 470px;
  }

  .formStyle .el-input {
    width: 420px;
  }

  .upload {
    height: 148px;
  }

  .subTitle .el-input {
    margin-top: 22px;
  }

  .messages-tab {
    width: 470px;
    margin-top: 16px;
  }

  .add-customer-group-button {
    vertical-align: middle;
  }
</style>

<style>
  .messages-tab .el-tabs__nav {
    width: calc(100% - 2px);
  }

  .messages-tab .el-tabs__item {
    width: 50%;
    text-align: center;
  }
</style>
