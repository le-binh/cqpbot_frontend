<template>
  <div class="wrapper" v-loading.fullscreen.lock="loading">
    <div class="new-arrival-list">
      <el-card
        v-for="(newArrival, index) in newArrivals"
        :key="index"
        :body-style="{ padding: '0' }"
        class="new-arrival-item">
        <div v-show="newArrival.isOutOfStock" class="out-of-stock"><span class="out-of-stock-text">OUT</span></div>
        <img :src="newArrival.image" class="new-arrival-image">
        <div>
         <p class="title">{{ newArrival.title }}</p>
         <p class="subtitle">{{ newArrival.subTitle }}</p>
        </div>
        <div>
          <a
            v-for="(button, buttonIndex) in newArrival.buttons"
            class="new-arrival-button"
            :key="buttonIndex"
            :href="button.target">
            {{ button.text }}
          </a>
        </div>
        <div class="action-overlay">
          <el-button icon="el-icon-delete" size="medium" round @click="onDeleteNewArrival(newArrival)"></el-button>
        </div>
      </el-card>
    </div>
    <el-button
      v-show="canAddMoreNewArrival"
      type="primary"
      icon="el-icon-plus"
      class="button-add"
      @click="addNewArrival">
    </el-button>
  </div>
</template>

<script>
  import { mapGetters, mapActions, mapState } from 'vuex'

  export default {
    props: ['id'],
    computed: {
      ...mapGetters([
        'newArrivals',
        'canAddMoreNewArrival'
      ]),
      ...mapState({
        loading: state => state.newArrival.loading
      })
    },
    methods: {
      ...mapActions([
        'getNewArrivals',
        'deleteNewArrival'
      ]),
      addNewArrival () {
        this.$router.push({ name: 'AddNewArrival' })
      },
      onDeleteNewArrival (newArrival) {
        const vm = this
        const onDeleteHandler = async () => {
          const success = await vm.deleteNewArrival(newArrival['_id'])
          if (success) {
            vm.$message({message: 'Xoá thành công', type: 'success', showClose: true})
          } else {
            vm.$message({message: 'Có lỗi xảy ra, vui lòng thử lại', type: 'error', showClose: true})
          }
        }
        this.confirmDeleteNewArrival(onDeleteHandler)
      },
      confirmDeleteNewArrival (okHandler) {
        this.$confirm('Bạn có chắc chắn muốn xoá không?', 'Thông báo', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Huỷ',
          type: 'warning'
        }).then(() => {
          okHandler()
        })
      }
    },
    created () {
      this.getNewArrivals(this.id)
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 100%;
    margin: auto;
  }

  .new-arrival-list {
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
  }

  .new-arrival-item {
    width: 250px;
    display: inline-block;
    margin-left: 32px;
    position: relative;
    vertical-align: top;
    border-radius: 16px;
    position: relative;
  }

  .new-arrival-item:first-child {
    margin-left: 0;
  }

  .new-arrival-image {
    width: 100%;
    height: 160px;
  }

  .button-add {
    position: fixed;
    bottom: 32px;
    right: 32px;
    padding: 20px;
    border-radius: 27px;
  }

  .new-arrival-button {
    display: block;
    text-align: center;
    text-decoration: none;
    padding: 8px 0;
    border-top: 1px solid #eee;
    color: #409eff;
  }

  .title {
    font-weight: bold;
    margin-top: 8px;
    margin-bottom: 0;
    padding-left: 8px;
    text-overflow:ellipsis;
    overflow:hidden;
    white-space: nowrap;
  }

  .subtitle {
    margin-top: 0;
    margin-bottom: 8px;
    padding-left: 8px;
    text-overflow:ellipsis;
    overflow:hidden;
    white-space: nowrap;
  }

  .out-of-stock {
    position: absolute;
    width: 100px;
    height: 100px;
    top: -50px;
    right: -50px;
    background-color: #fef0f0;
    transform: rotate(45deg);
  }

  .out-of-stock-text {
    position: absolute;
    bottom: 8px;
    margin: 0;
    text-align: center;
    width: 100%;
    color: #f56c6c;
  }

  .action-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(128, 128, 128, 0.5);
    display: none;
    border-radius: 16px;
    justify-content: center;
    align-items: center;
  }

  .new-arrival-item:hover .action-overlay {
    display: flex;
  }
</style>
