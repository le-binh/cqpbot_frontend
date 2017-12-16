<template>
  <div v-show="pageInfoLoaded">
    <img :src="avatar" class="avatar"/>
    <span class="page-name">{{name}}</span>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapState({
        id: state => state.pageDetail._id,
        name: state => state.pageDetail.name,
        avatar: state => state.pageDetail.avatar
      }),
      ...mapGetters([
        'pageInfoLoaded'
      ])
    }
  }
</script>

<style scoped>
  .avatar {
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    vertical-align: middle;
  }

  .page-name {
    vertical-align: middle;
    font-size: 32px;
    margin-left: 16px;
  }
</style>
