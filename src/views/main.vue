<template>
<div class="mycontainer">
  <!--左侧主体-->
  <div class="left">
    <div class="article">
      <h3>Flex布局</h3>
      <a @click="goto('/blog/2017')">flex布局</a>
      <span class="date">2017-06-11</span>
    </div>
    <div class="article">
      <h3>Flex</h3>
      <a>flex布局</a>
      <span class="date">2017-06-11</span>
    </div>
    <div class="article">
      <h3>Flex</h3>
      <a>flex布局</a>
      <span class="date">2017-06-11</span>
    </div>
  </div>
  <!--左侧主体结束-->
<!--右侧个人信息-->
  <div class="right">
    <div class="box">
      <router-view></router-view>
    </div>
    <div class="box">

    </div>
    <div class="box">

    </div>
  </div>
  <!--右侧结束-->
</div>
</template>
<script>

export default{
  methods: {
    goto(path) {
      this.$router.push(path);
    },
  },
};
</script>
