<template>
  <div class="wrapper" v-loading="loading">
    <div>
      <el-table
        :data="customerGroups"
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
  import { mapGetters, mapActions, mapState } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        customerGroups: 'customerGroups'
      }),
      ...mapState({
        loading: state => state.customerGroup.loading
      })
    },
    methods: {
      ...mapActions([
        'getAllCustomerGroups'
      ]),
      handleRowClicked: function (row) {
        console.log(`Clicked row ${row}`)
      }
    },
    created () {
      this.getAllCustomerGroups()
    }
  }
</script>

<style scoped="">
  .pagination {
    text-align: center;
    margin-top: 16px;
  }

  .wrapper {
    height: 100vh;
    margin: auto;
  }
</style>
