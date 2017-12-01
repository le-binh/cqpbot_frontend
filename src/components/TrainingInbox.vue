<template>
  <div class="wrapper">
    <div class="add-new-inbox">
      <AddNewInbox @addNewInbox="handleAddNewInbox"/>
    </div>
    <div class="inbox-list">
      <InboxList :inboxes="inboxes"/>
    </div>
  </div>
</template>

<script>
  import AddNewInbox from './AddNewInbox.vue'
  import InboxList from './InboxList.vue'

  export default {
    name: 'TrainingInbox',
    props: ['inboxes'],
    components: { AddNewInbox, InboxList },
    methods: {
      handleAddNewInbox: function (inbox) {
        this.$emit('saveNewInbox', inbox)
      }
    }
  }
</script>

<style scoped>
  .add-new-inbox {

  }

  .inbox-list {
    margin-top: 50px;
  }
</style>
