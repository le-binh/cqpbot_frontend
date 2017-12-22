<template>
  <div class="wrapper" v-loading.fullscreen.lock="loading">
    <el-tabs type="card" @tab-click="handleTabClicked">
      <el-tab-pane label="Inbox">
        <TrainingInbox :inboxes="inboxes" @saveNewInbox="handleSaveNewInbox"/>
      </el-tab-pane>
      <el-tab-pane label="Không hiểu">
        <TrainingConfuse />
      </el-tab-pane>
      <el-tab-pane label="Nghi ngờ sena trả lời sai">
        <TrainingDoubt />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import { mapGetters, mapActions, mapState } from 'vuex'

  import TrainingInbox from './TrainingInbox.vue'
  import TrainingConfuse from './TrainingConfuse.vue'
  import TrainingDoubt from './TrainingDoubt.vue'

  export default {
    props: ['id'],
    components: {
      TrainingInbox,
      TrainingConfuse,
      TrainingDoubt
    },
    data () {
      return {
        activeName: 'first'
      }
    },
    computed: {
      ...mapGetters({
        inboxes: 'inboxes'
      }),
      ...mapState({
        loading: state => state.training.loading
      })
    },
    methods: {
      ...mapActions([
        'createNewInbox',
        'getInboxes'
      ]),
      handleTabClicked: function (tab, event) {
        console.log(tab, event)
      },
      handleSaveNewInbox: async function (inbox) {
        const success = await this.createNewInbox({ pageId: this.id, inbox })
        if (success) {
          this.$message({message: 'Thêm thành công', type: 'success', showClose: true})
        } else {
          this.$message({message: 'Có lỗi xảy ra, vui lòng thử lại', type: 'error', showClose: true})
        }
      }
    },
    created () {
      this.getInboxes()
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 100%;
  }
</style>
