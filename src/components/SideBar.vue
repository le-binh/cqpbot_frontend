<template>
  <div>
    <el-menu :default-active="active" :router="true" class="el-menu-vertical-demo">
      <el-menu-item v-for="item in items" :index="item.path" :key="item.path">
        <i :class="item.icon"></i>
        <span slot="title">{{item.title}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'SideBar',
    props: ['items', 'active']
  }
</script>
