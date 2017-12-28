<template>
  <div class="wrapper" v-loading.fullscreen.lock="loading">
    <el-table
      :data="messages"
      stripe
      border
      style="width: 100%"
      :default-sort = "{prop: 'date', order: 'descending'}"
      empty-text="Chưa có dữ liệu"
    >
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="name" label="Tên chiến dịch" width="350" sortable></el-table-column>
      <el-table-column prop="sent" label="Đã gửi" sortable></el-table-column>
      <el-table-column prop="read" label="Đã đọc" sortable></el-table-column>
      <el-table-column prop="clicked" label="Đã click" sortable></el-table-column>
      <el-table-column
        fixed="right"
        label="Hành động"
        width="120">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="handleSendMessage(scope.$index, scope.row)"
          >
            Gửi tin nhắn
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" icon="el-icon-plus" class="button-add" @click="addNewMessage"></el-button>
  </div>
</template>

<script>
  import { mapGetters, mapActions, mapState } from 'vuex'

  export default {
    props: ['id'],
    computed: {
      ...mapGetters({
        messages: 'messages'
      }),
      ...mapState({
        loading: state => state.campaign.loading
      })
    },
    methods: {
      ...mapActions([
        'getPageMessages',
        'sendMessage'
      ]),
      addNewMessage: function () {
        this.$router.push({ name: 'AddNewMessage' })
      },
      async handleSendMessage (index, row) {
        const success = await this.sendMessage(row.id)
        if (success) {
          this.$message({message: 'Gửi tin nhắn thành công', type: 'success', showClose: true})
        } else {
          this.$message({message: 'Có lỗi xảy ra, vui lòng thử lại', type: 'error', showClose: true})
        }
      }
    },
    created () {
      this.getPageMessages(this.id)
    }
  }
</script>

<style scoped>
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
