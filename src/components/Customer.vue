<template>
  <el-table
    :data="tableData"
    stripe style="width: 100%"
    @row-click="handleRowClicked"
    :row-style="{cursor: 'pointer'}"
    :default-sort = "{prop: 'date', order: 'descending'}"
  >
    <el-table-column prop="name" label="Tên KH" sortable fixed width="200"></el-table-column>
    <el-table-column prop="like" label="Like" sortable width="100"></el-table-column>
    <el-table-column prop="comments" label="Comments" sortable width="100"></el-table-column>
    <el-table-column prop="inbox" label="Inbox" sortable width="100"></el-table-column>
    <el-table-column prop="batchNews" label="Tin hàng loạt" sortable width="120"></el-table-column>
    <el-table-column prop="read" label="Đọc" sortable width="100"></el-table-column>
    <el-table-column prop="clicks" label="Clicks" sortable width="100"></el-table-column>
    <el-table-column prop="react" label="Tương tác lại" sortable width="120"></el-table-column>
    <el-table-column prop="lastInteraction" label="Lần tương tác cuối" sortable width="150"></el-table-column>
    <el-table-column
      fixed="right"
      label="Hành động"
      width="120">
      <template slot-scope="scope">
        <el-button type="text" size="small">Inbox</el-button>
        <el-button type="text" size="small">Remove</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data () {
      return {
        tableData: [{
          name: 'Cristano Ronaldo',
          like: 1000,
          comments: 500,
          inbox: 10000,
          batchNews: 950,
          read: 900,
          clicks: 500,
          react: 249,
          lastInteraction: '3 ngày trước'
        }, {
          name: 'Cristano Ronaldo',
          like: 1000,
          comments: 500,
          inbox: 10000,
          batchNews: 950,
          read: 900,
          clicks: 500,
          react: 249,
          lastInteraction: '3 ngày trước'
        }]
      }
    },
    methods: {
      handleRowClicked: function (row) {
        console.log(`Clicked row ${row}`)
      }
    }
  }
</script>
