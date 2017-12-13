<template>
  <div class="wrapper" v-loading.fullscreen.lock="loading">
    <div>
      <el-table
        :data="customerGroups"
        stripe style="width: 100%"
        @row-click="handleRowClicked"
        :row-style="{cursor: 'pointer'}"
        :default-sort = "{prop: 'date', order: 'descending'}"
        empty-text="Chưa có dữ liệu"
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
    <el-button type="primary" icon="el-icon-plus" class="button-add" @click="addNewMessage"></el-button>
  </div>
</template>

<script>
  import { mapGetters, mapActions, mapState } from 'vuex'

  export default {
    props: ['id'],
    computed: {
      ...mapGetters({
        customerGroups: 'displayedCustomerGroups'
      }),
      ...mapState({
        loading: state => state.customerGroup.loading
      })
    },
    methods: {
      ...mapActions([
        'getCustomerGroups'
      ]),
      handleRowClicked: function (row) {
        console.log(`Clicked row ${row}`)
      },
      addNewMessage: function () {
        this.$router.push({ name: 'AddNewCustomerGroup', params: { id: this.id } })
      }
    },
    created () {
      this.getCustomerGroups(this.id)
    }
  }
</script>

<style scoped>
  .pagination {
    text-align: center;
    margin-top: 16px;
  }

  .wrapper {
    height: 100%;
    margin: auto;
  }

  .button-add {
    position: fixed;
    bottom: 32px;
    right: 32px;
    padding: 20px;
    border-radius: 27px;
  }
</style>
