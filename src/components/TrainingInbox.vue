<template>
  <div>
    <div>
      <AddNewInbox @addNewInbox="handleAddNewInbox"/>
    </div>
    <div class="inbox-list">
      <InboxList :pageId="pageId" :inboxes="inboxes"/>
    </div>
  </div>
</template>

<script>
  import AddNewInbox from './AddNewInbox.vue'
  import InboxList from './InboxList.vue'

  export default {
    name: 'TrainingInbox',
    props: ['inboxes', 'pageId'],
    components: { AddNewInbox, InboxList },
    methods: {
      handleAddNewInbox: function (inbox) {
        this.$emit('saveNewInbox', inbox)
      }
    }
  }
</script>

<style scoped>
  .inbox-list {
    margin-top: 50px;
  }
</style>
