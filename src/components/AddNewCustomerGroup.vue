<template>
  <div class="wrapper" v-loading.fullscreen.lock="loading">
    <p class="group-overview">Có {{ groupOverview }} người thoả điều kiện</p>
    <el-form
      label-position="left"
      :model="formData"
      @submit.native.prevent
      ref="groupForm"
      label-width="100px"
      class="formStyle">
      <el-form-item
        label="Tên nhóm"
        :rules="{required: true, message: 'Vui lòng nhập tên nhóm', trigger: 'change'}"
        prop="title">
        <el-input v-model="formData.title"></el-input>
      </el-form-item>
    </el-form>
    <el-tag
      :key="tag.key"
      v-for="tag in displayedCustomerGroupConditions"
      closable
      :disable-transitions="false"
      @close="handleClose(tag.key)">
      {{tag.value}}
    </el-tag>
    <div class="condition-container">
      <el-dropdown @command="handleCommand" class="dropdown">
        <el-button type="primary">Thêm điều kiện<i class="el-icon-arrow-down el-icon--right"></i></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item :key="condition.key" :command="condition.key" v-for="condition in conditions">{{ condition.title }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="condition">
        <Condition v-if="currentCondition !== undefined" :condition="currentCondition.key" @commit="updateCondition" @discard="discardCondition"/>
      </div>
    </div>
    <el-button class="done-button" type="primary" @click="handleAddNewCustomerGroup">Submit</el-button>
    <el-dialog
      title="Thông báo"
      :visible.sync="dialogVisible"
      :show-close="false"
      width="30%">
      <span class="dialog-message">Thêm nhóm khách hàng thành công</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Thêm nhóm mới</el-button>
        <el-button type="primary" @click="finishAddingCustomerGroup">Hoàn tất</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapState } from 'vuex'
  import Condition from '@/components/Condition'

  export default {
    components: { Condition },
    props: ['id'],
    data () {
      return {
        formData: {
          title: ''
        },
        conditions: [
          { key: 'name', title: 'Tên' },
          { key: 'gender', title: 'Giới tính' },
          { key: 'subscribed', title: 'Đã đăng kí nhận tin' },
          { key: 'lastInteract', title: 'Lần tương tác cuối' },
          { key: 'inbox', title: 'Inbox' },
          { key: 'comments', title: 'Số comment' },
          { key: 'likes', title: 'Số like' }
        ],
        currentCondition: undefined,
        dialogVisible: false
      }
    },
    computed: {
      ...mapGetters([
        'displayedCustomerGroupConditions',
        'groupOverview'
      ]),
      ...mapState({
        loading: state => state.addNewGroup.loading
      })
    },
    methods: {
      ...mapActions([
        'addNewCondition',
        'deleteCondition',
        'createCustomerGroup',
        'clearAllConditions'
      ]),
      handleClose (conditionKey) {
        this.deleteCondition({ pageId: this.id, conditionKey })
      },
      handleCommand (command) {
        this.currentCondition = this.conditions.find(condition => condition.key === command)
      },
      updateCondition ({ key, value }) {
        this.currentCondition = undefined
        this.addNewCondition({pageId: this.id, key, value})
      },
      discardCondition () {
        this.currentCondition = undefined
      },
      handleAddNewCustomerGroup () {
        const vm = this
        const groupForm = this.$refs.groupForm
        groupForm.validate(valid => {
          if (valid) {
            vm.addNewCustomerGroup().then(success => {
              if (success) {
                groupForm.resetFields()
                vm.clearAllConditions()
              }
            })
          }
        })
      },
      async addNewCustomerGroup () {
        const success = await this.createCustomerGroup({ pageId: this.id, title: this.formData.title })
        if (success) {
          this.dialogVisible = true
        } else {
          this.$message({message: 'Có lỗi xảy ra, vui lòng thử lại', type: 'error', showClose: true})
        }
        return success
      },
      finishAddingCustomerGroup () {
        this.$router.replace({ path: this.$route.query.redirect })
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 100%;
  }

  .guide {
    display: block;
    margin-bottom: 32px;
  }

  .el-tag + .el-tag {
    margin-left: 10px;
    margin-top: 8px;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }

  .dropdown {
    vertical-align: top;
  }

  .condition-container {
    margin-top: 16px;
  }

  .condition {
    display: inline-block;
    margin-left: 32px;
  }

  .done-button {
    margin-top: 32px;
  }

  .formStyle {
    width: 500px;
  }

  .group-overview {
    margin-bottom: 32px;
    color: #3a8ee6;
  }
</style>
