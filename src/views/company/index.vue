<!-- 公司入口 -->
<template>
  <section class="company-wrap">
    <router-view></router-view>
    <bottom-bar></bottom-bar>
  </section>
</template>

<script>
import BottomBar from './bottom-bar';

export default {
  data () {
    return {

    }
  },
  components: {
    BottomBar,
  }
}
</script>

<style scoped>
.company-wrap {
  height: 100%;
  padding-bottom: 1.28rem;
  background-color: transparent;
}
</style>
