<template>
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
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'

  import TrainingInbox from './TrainingInbox.vue'
  import TrainingConfuse from './TrainingConfuse.vue'
  import TrainingDoubt from './TrainingDoubt.vue'

  export default {
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
      })
    },
    methods: {
      ...mapActions([
        'saveNewInbox'
      ]),
      handleTabClicked: function (tab, event) {
        console.log(tab, event)
      },
      handleSaveNewInbox: function (inbox) {
        this.saveNewInbox(inbox)
      }
    }
  }
</script>
