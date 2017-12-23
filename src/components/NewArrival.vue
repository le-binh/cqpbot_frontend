<template>
  <div class="wrapper">
    <div class="new-arrival-list">
      <el-card
        v-for="(newArrival, index) in newArrivals"
        :key="index"
        class="new-arrival-item">
        <img :src="newArrival.image" class="new-arrival-image">
        <div>
         <p>{{ newArrival.title }}</p>
         <p>{{ newArrival.subTitle }}</p>
        </div>
        <div>
          <a
            v-for="(button, buttonIndex) in newArrival.buttons"
            :key="buttonIndex"
            :href="button.target">
            {{ button.text }}
          </a>
        </div>
      </el-card>
    </div>
    <el-button type="primary" icon="el-icon-plus" class="button-add" @click="addNewArrival"></el-button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    props: ['id'],
    computed: {
      ...mapGetters([
        'newArrivals'
      ])
    },
    methods: {
      ...mapActions([
        'getNewArrivals'
      ]),
      addNewArrival: function () {
        this.$router.push({ name: 'AddNewArrival' })
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
  }

  .new-arrival-item:first-child {
    margin-left: 0;
  }

  .new-arrival-image {
    width: 210px;
    height: 150px;
  }

  .button-add {
    position: fixed;
    bottom: 32px;
    right: 32px;
    padding: 20px;
    border-radius: 27px;
  }
</style>
