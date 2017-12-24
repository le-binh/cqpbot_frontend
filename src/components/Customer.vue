<template>
  <div class="wrapper" v-loading.fullscreen.lock="loading">
    <el-table
      :data="customers"
      stripe style="width: 100%"
      @row-click="handleRowClicked"
      :row-style="{cursor: 'pointer'}"
      :default-sort = "{prop: 'date', order: 'descending'}"
      empty-text="Chưa có dữ liệu"
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
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { mapGetters, mapActions, mapState } from 'vuex'

  export default {
    props: ['id'],
    computed: {
      ...mapGetters({
        customers: 'customers'
      }),
      ...mapState({
        loading: state => state.customer.loading
      })
    },
    methods: {
      ...mapActions([
        'getCustomers'
      ]),
      handleRowClicked: function (row) {
        console.log(`Clicked row ${row}`)
      }
    },
    created () {
      this.getCustomers(this.id)
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 100%;
    margin: auto;
  }
</style>
