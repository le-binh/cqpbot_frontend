<template>
  <div class="wrapper" v-loading.fullscreen.lock="loading">
    <span class="title">Danh sách fanpage của tôi</span>
    <PageItem v-for="(page, index) in pages"
              :page="page" :key="page._id"
              @viewPageDetail="viewPageDetail"
              @activatePage="activatePage"
              @deactivatePage="deactivatePage">
    </PageItem>
  </div>
</template>

<script>
  import { mapGetters, mapActions, mapState } from 'vuex'
  import PageItem from './PageItem.vue'

  export default {
    name: 'My-Pages',
    components: { PageItem },
    computed: {
      ...mapGetters({
        pages: 'allPages'
      }),
      ...mapState({
        loading: state => state.myPages.loading
      })
    },
    methods: {
      ...mapActions([
        'getMyPages',
        'activatePage',
        'deactivatePage'
      ]),
      viewPageDetail: function (pageId) {
        this.$router.push({name: 'Campaign', params: {id: pageId}})
      }
    },
    created () {
      this.getMyPages()
    }
  }
</script>


<style scoped>
  .wrapper {
    width: 800px;
    height: 100vh;
    margin: auto;
  }
  .title {
    display: block;
    text-align: center;
    margin-bottom: 32px;
    margin-top: 16px;
    font-size: 40px;
  }
</style>
