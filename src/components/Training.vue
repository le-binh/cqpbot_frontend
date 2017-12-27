<template>
  <div class="wrapper" v-loading.fullscreen.lock="loading">
    <el-tabs type="card" @tab-click="handleTabClicked">
      <el-tab-pane label="Inbox">
        <TrainingInbox :inboxes="inboxes" @saveNewInbox="handleSaveNewInbox"/>
      </el-tab-pane>
      <el-tab-pane label="Không hiểu">
        <TrainingNotUnderstand :pageId="id"/>
      </el-tab-pane>
      <el-tab-pane label="Nghi ngờ Misena trả lời sai">
        <TrainingConfusing :pageId="id"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import { mapGetters, mapActions, mapState } from 'vuex'

  import TrainingInbox from './TrainingInbox.vue'
  import TrainingNotUnderstand from './TrainingNotUnderstand.vue'
  import TrainingConfusing from './TrainingConfusing.vue'

  export default {
    props: ['id'],
    components: {
      TrainingInbox,
      TrainingNotUnderstand,
      TrainingConfusing
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
      this.getInboxes({ pageId: this.id, page: 0 })
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 100%;
  }
</style>
