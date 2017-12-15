<template>
  <div>
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
        <el-button type="primary">Thêm điều kiện<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item :key="condition.key" :command="condition.key" v-for="condition in conditions">{{ condition.title }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="condition">
        <Condition v-if="currentCondition !== undefined" :condition="currentCondition.key" @commit="updateCondition" @discard="discardCondition"/>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Condition from '@/components/Condition'

  export default {
    components: { Condition },
    data () {
      return {
        conditions: [
          { key: 'name', title: 'Tên' },
          { key: 'gender', title: 'Giới tính' },
          { key: 'subscribed', title: 'Đã đăng kí nhận tin' },
          { key: 'lastInteract', title: 'Lần tương tác cuối' },
          { key: 'inbox', title: 'Inbox' },
          { key: 'comments', title: 'Số comment' },
          { key: 'likes', title: 'Số like' }
        ],
        currentCondition: undefined
      }
    },
    computed: {
      ...mapGetters([
        'displayedCustomerGroupConditions'
      ])
    },
    methods: {
      ...mapActions([
        'addNewCondition',
        'deleteCondition'
      ]),
      handleClose (conditionKey) {
        this.deleteCondition(conditionKey)
      },
      handleCommand (command) {
        this.currentCondition = this.conditions.find(condition => condition.key === command)
      },
      updateCondition ({ key, value }) {
        this.currentCondition = undefined
        this.addNewCondition({key, value})
      },
      discardCondition () {
        this.currentCondition = undefined
      }
    }
  }
</script>

<style scoped>
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
</style>
