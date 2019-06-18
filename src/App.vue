<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="less">
@import '~vux/src/styles/reset.less';
@import './assets/css/root.css';

body {
  background-color: var(--bgc-levelone);
}
</style>
<style type="text/css">
  #app{
    height:100%;
  }
</style>
