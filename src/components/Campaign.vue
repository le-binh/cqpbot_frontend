<template>
  <div class="wrapper" v-loading="loading">
    <el-table
      :data="campaigns"
      stripe style="width: 100%"
      @row-click="handleRowClicked"
      :row-style="{cursor: 'pointer', width: '400px'}"
      :default-sort = "{prop: 'date', order: 'descending'}"
      empty-text="Chưa có dữ liệu"
    >
      <el-table-column prop="name" label="Tên chiến dịch" width="250" sortable fixed></el-table-column>
      <el-table-column prop="type" label="Loại" width="150" sortable></el-table-column>
      <el-table-column prop="total" label="Số lượng" sortable></el-table-column>
      <el-table-column prop="sent" label="Đã gửi" sortable></el-table-column>
      <el-table-column prop="read" label="Đã đọc" sortable></el-table-column>
      <el-table-column prop="clicked" label="Đã click" sortable></el-table-column>
      <el-table-column prop="interacted" label="Đã tương tác" sortable></el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { mapGetters, mapActions, mapState } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        campaigns: 'campaigns'
      }),
      ...mapState({
        loading: state => state.campaign.loading
      })
    },
    methods: {
      ...mapActions([
        'getAllCampaigns'
      ]),
      handleRowClicked: function (row) {
        this.$router.push({ name: 'CampaignDetail', params: { campaign_id: 1 } })
      }
    },
    created () {
      this.getAllCampaigns()
    }
  }
</script>

<style scoped="">
  .wrapper {
    height: 100vh;
    margin: auto;
  }
</style>
