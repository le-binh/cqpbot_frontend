<template>
  <el-table :data="tableData" stripe style="width: 100%" @row-click="handleRowClicked" row-style="cursor: pointer">
    <el-table-column prop="name" label="Tên chiến dịch" width="250"></el-table-column>
    <el-table-column prop="type" label="Loại" width="150"></el-table-column>
    <el-table-column prop="total" label="Số lượng"></el-table-column>
    <el-table-column prop="sent" label="Đã gửi"></el-table-column>
    <el-table-column prop="read" label="Đã đọc"></el-table-column>
    <el-table-column prop="clicked" label="Đã click"></el-table-column>
    <el-table-column prop="interacted" label="Đã tương tác"></el-table-column>
  </el-table>
</template>

<script>
  export default {
    data () {
      return {
        tableData: [{
          name: 'Sinh nhật quán',
          type: 'Gửi ngay',
          total: 1000,
          sent: 1000,
          read: 950,
          clicked: 900,
          interacted: 500
        }, {
          name: 'Thứ 2 cuối mỗi tháng',
          type: 'Gửi theo lịch',
          total: 1000,
          sent: 1000,
          read: 950,
          clicked: 900,
          interacted: 500
        }]
      }
    },
    methods: {
      handleRowClicked: function (row) {
        this.$router.push({ name: 'CampaignDetail', params: { campaign_id: 1 } })
      }
    }
  }
</script>
