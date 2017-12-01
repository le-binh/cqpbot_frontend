<template>
  <div>
    <div>
      <el-table
        :data="tableData"
        stripe style="width: 100%"
        @row-click="handleRowClicked"
        :row-style="{cursor: 'pointer'}"
        :default-sort = "{prop: 'date', order: 'descending'}"
      >
        <el-table-column prop="groupName" label="Tên Nhóm" sortable fixed width="200"></el-table-column>
        <el-table-column prop="customerName" label="Tên KH" sortable width="200"></el-table-column>
        <el-table-column prop="gender" label="Giới tính" sortable width="100"></el-table-column>
        <el-table-column prop="like" label="Like" sortable width="100"></el-table-column>
        <el-table-column prop="comments" label="Comments" sortable width="100"></el-table-column>
        <el-table-column prop="inbox" label="Inbox" sortable width="100"></el-table-column>
        <el-table-column prop="lastInteraction" label="Lần tương tác cuối" sortable width="150"></el-table-column>
        <el-table-column
          fixed="right"
          label="Hành động"
          width="120">
          <template slot-scope="scope">
            <el-button type="text" size="small">Sửa</el-button>
            <el-button type="text" size="small">Xoá</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tableData: [{
          groupName: 'Beautiful girl',
          customerName: 'chứa: Ngọc Trinh ',
          gender: 'Nữ',
          like: '= 100',
          comments: '> 5',
          inbox: '< 100',
          lastInteraction: '= 3 ngày'
        }, {
          groupName: 'Beautiful girl',
          customerName: 'chứa: Nguyễn Khánh Linh',
          gender: 'Nữ',
          like: '< 100',
          comments: '',
          inbox: '',
          lastInteraction: '>= 3 ngày'
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

<style scoped="">
  .pagination {
    text-align: center;
    margin-top: 16px;
  }
</style>
