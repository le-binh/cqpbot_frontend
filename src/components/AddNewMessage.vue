<template>
  <div class="wrapper" v-loading="loading">
    <el-select
      multiple filterable remote
      v-model="selectedCustomerGroups"
      placeholder="Please enter a keyword"
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
    <el-button type="primary" class="button" @click="onAddNewCustomerGroup">Thêm nhóm mới</el-button>
    <div class="messages-tab">
      <el-tabs type="card" ref="messageTabs" value="basic">
        <el-tab-pane label="Cơ bản" name="basic">
          <el-input placeholder="Nội dung tin nhắn" type="textarea" :rows="3" v-model="message"></el-input>
          <MessageButtons :buttons="basicButtons" @addNewButton="addNewBasicButton" @deleteButton="deleteBasicButton" :limit="3"/>
        </el-tab-pane>
        <el-tab-pane label="Nâng cao" name="advanced">
          <el-upload accept="image/*" class="upload-demo" action="https://dev-api.misena.me/photos/messages" list-type="picture-card" :auto-upload="false" :show-file-list="false" :on-change="handleChange">
            <i v-if="showImagePlaceholder" class="el-icon-picture"></i>
            <img v-else v-bind:src="previewURL" class="image"/>
          </el-upload>
          <div class="message-titles">
            <el-input placeholder="Tiêu đề tin nhắn chính" v-model="messageTitle"></el-input>
            <el-input placeholder="Tiêu đề tin nhắn phụ" v-model="messageSubTitle"></el-input>
          </div>
          <MessageButtons :buttons="advancedButtons" @addNewButton="addNewAdvancedButton" @deleteButton="deleteAdvancedButton" :limit="3"/>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div>
      <el-button type="primary" class="add-msg-button" @click="onCreateMessage">Thêm tin nhắn</el-button>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions, mapState } from 'vuex'
  import MessageButtons from './MessageButtons.vue'

  export default {
    props: ['id'],
    components: { MessageButtons },
    data () {
      return {
        previewURL: ''
      }
    },
    computed: {
      ...mapGetters({
        customerGroups: 'customerGroups',
        filteredCustomerGroups: 'filteredCustomerGroups',
        _basicButtons: 'basicButtons',
        _advancedButtons: 'advancedButtons'
      }),
      ...mapState({
        loading: state => state.customerGroup.loading,
        _selectedCustomerGroups: state => state.message.groups,
        _messageTitle: state => state.message.title,
        _messageSubTitle: state => state.message.subTitle,
        _message: state => state.message.message
      }),
      selectedCustomerGroups: {
        get () { return this._selectedCustomerGroups },
        set (groups) { this.updateSelectedGroups(groups) }
      },
      message: {
        get () { return this._message },
        set (newMessage) { this.updateMessage(newMessage) }
      },
      messageTitle: {
        get () { return this._messageTitle },
        set (newMessageTitle) { this.updateMessageTitle(newMessageTitle) }
      },
      messageSubTitle: {
        get () { return this._messageSubTitle },
        set (newMessageSubTitle) { this.updateMessageSubTitle(newMessageSubTitle) }
      },
      basicButtons: {
        get () { return this._basicButtons },
        set (buttons) { this.updateBasicButtons(buttons) }
      },
      advancedButtons: {
        get () { return this._advancedButtons },
        set (buttons) { this.updateAdvancedButtons(buttons) }
      },
      showImagePlaceholder: function () {
        return this.previewURL === ''
      }
    },
    created () {
      this.getCustomerGroups(this.id)
    },
    methods: {
      ...mapActions([
        'getCustomerGroups',
        'searchGroup',
        'updateSelectedGroups',
        'updateMessage',
        'updateMessageTitle',
        'updateMessageSubTitle',
        'updateBasicButtons',
        'updateAdvancedButtons',
        'addNewBasicButton',
        'addNewAdvancedButton',
        'deleteBasicButton',
        'deleteAdvancedButton',
        'createNewBasicMessage',
        'createNewAdvancedMessage'
      ]),
      onAddNewCustomerGroup: function () {
        this.$router.push({ name: 'AddNewCustomerGroup', params: { id: this.id } })
      },
      handleChange (file) {
        this.readURL(file.raw)
      },
      readURL (file) {
        if (file) {
          const reader = new FileReader()
          const vm = this
          reader.onload = function (e) {
            vm.previewURL = e.target.result
          }
          reader.readAsDataURL(file)
        }
      },
      onCreateMessage () {
        const createMessageHandler = success => {
          if (success) {
            this.$message({message: 'Thêm tin nhắn thành công', type: 'success', showClose: true})
          } else {
            this.$message({message: 'Có lỗi xảy ra, vui lòng thử lại', type: 'error', showClose: true})
          }
        }
        if (this.$refs.messageTabs.currentName === 'basic') {
          this.createNewBasicMessage(this.id).then(createMessageHandler)
        } else {
          this.createNewAdvancedMessage(this.id).then(createMessageHandler)
        }
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 100%;
  }

  .customer-group-select {
    width: 400px;
  }

  .image {
    width: 146px;
    height: 146px;
  }

  .messages-tab {
    width: 555px;
    margin-top: 16px;
  }

  .add-msg-button {
    margin-top: 48px;
  }

  .message-titles {
    margin-top: 16px;
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
