<template>
<el-container>
  <el-header><top></top></el-header>
  <el-main>
    <router-view></router-view>
  </el-main>
</el-container>
</template>

<script>
import top from './components/head.vue';
import router from './router';


export default{
  components: {
    top,
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    },
  },
  router,
};
</script>

<style lang="less">
body {
  margin:0
}
.el-header {
  height: auto !important;
  padding: 0
}

.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    padding: 0;
    background-color: #E9EEF3;
    color: #333;
    // text-align: center;
    // line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
