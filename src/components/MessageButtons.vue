<template>
  <div>
    <div v-for="(button, index) in buttons">
      <div class="message-button">
        <el-input placeholder="Tiêu đề cho nút" v-model="button.title"></el-input>
        <el-input placeholder="Link khi click vào nút" v-model="button.link"></el-input>
      </div>
      <el-button v-if="index !== 0" type="danger" icon="el-icon-delete" class="delete-message-button" size="small" @click="onDeleteButton(button.id)"></el-button>
    </div>
    <el-button v-if="canAddMoreButton" type="primary" icon="el-icon-plus" @click="onAddNewButton" class="add-button" size="small"></el-button>
  </div>
</template>

<script>
  export default {
    props: ['buttons', 'limit'],
    computed: {
      canAddMoreButton: function () {
        return this.buttons.length < this.limit
      }
    },
    methods: {
      onAddNewButton: function () {
        this.$emit('addNewButton')
      },
      onDeleteButton: function (id) {
        this.$emit('deleteButton', id)
      }
    }
  }
</script>

<style scoped>
  .message-button {
    display: inline-block;
    margin-top: 16px;
  }

  .delete-message-button {
    display: inline-block;
  }

  .add-button {
    margin-top: 8px;
  }
</style>
