<template>
<div class="container-fluid myheader">
<div id="logo">
  <div id="logo_text">
    <h1>
      <a href="index.html">WEI
        <span class="logo_colour">_blog</span>
      </a>
    </h1>
    <h2>分享、总结前端知识！</h2>
  </div>
</div>
<nav>
  <div id="menu_container">
    <ul class="sf-menu" id="nav">
      <li>
        <a @click="goto('/')">首 页</a>
      </li>
      <li>
        <a @click="goto('/pigeonhole ')">归 档</a>
      </li>
      <li>
        <a @click="goto('/category')">分 类</a>
      </li>
      <li>
        <a @click="goto('/contact')">取得联系</a>
      </li>
    </ul>
  </div>
</nav>
</div>
</template>
<script>
export default {
  methods: {
    goto(path) {
      this.$router.push(path);
    },
  },
};
</script>
