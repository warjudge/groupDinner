<!-- 历史白条 模板 -->
<template>
  <section class="iou-wrap">
    <header class="iou-hd">
      <back-block title="我的白条">
        <span slot="right" @click="jumpTo(billUrl)">账单</span>
      </back-block>
      <h1 class="hd-title"></h1>
    </header>
    <main class="iou-content">
      <h1 class="content-nav active-iou">历史记录</h1>
      <slot>
        <p class="no-data">暂无数据</p>
      </slot>
    </main>
  </section>
</template>

<script>
export default {
  props: {
    billUrl: {
      required: true,
    },
  },
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
@import '../../assets/css/iou/list.css';
.iou-hd {
  height: 3.93rem;
  background-image: url('~img/iou/history-hd-bg.png');
}
</style>
