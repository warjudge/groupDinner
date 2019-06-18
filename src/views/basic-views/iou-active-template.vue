<!-- 待处理白条 模板 -->
<template>
  <section class="iou-wrap">
    <header class="iou-hd">
      <back-block title="我的白条">
        <span slot="right" @click="jumpTo(config.billUrl)">账单</span>
      </back-block>
      <section class="asset-box" v-for="(item, index) in config.assetList" :key="index">
        <img class="asset-icon" :src="item.iconUrl"/>
        <div class="asset-info">
          <p class="asset-amount">{{ item.value }}</p>
          <p class="asset-label">{{ item.label }}</p>
        </div>
      </section>
    </header>
    <main class="iou-content">
      <header class="content-nav">
        <h1 class="active-iou">待处理白条</h1>
        <p class="fr" @click="jumpTo(config.historyIouUrl)">
          <span class="history-iou">历史白条</span>
          <x-icon type="ios-arrow-forward" size="0.5rem" class="forward-icon icon-grey"></x-icon>
        </p>
      </header>
      <slot></slot>
    </main>
  </section>
</template>

<script>
export default {
  props: {
    config: {
      require: true,
      type: Object,
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
@import '../../assets/css/root.css';
@import '../../assets/css/iou/list.css';
/* header */
.iou-hd {
  height: 7.3rem;
  background-image: url('~img/iou/hd-bg.png');
}
.asset-box {
  display: flex;
  padding-left: .46rem;
  margin-bottom: .6rem;
  &:nth-of-type(2) .asset-amount{
    font-size: .77rem;
    line-height: .77rem;
  }
}
.asset-icon {
  height: .55rem;
  margin-right: .28rem;
}
.asset-info {
  flex: 1;
}
.asset-amount {
  margin-bottom: .17rem;
  font-weight: bold;
  font-size: .48rem;
  line-height: .48rem;
}
.asset-label {
  font-size: var(--g-sm-font-size);
  line-height: var(--g-sm-font-size);
}
/* content */
.active-iou {
  display: inline-block;
  color: var(--g-color-black);
  font-size: .51rem;
  line-height: .51rem;
}
.history-iou {
  font-size: var(--g-font-size);
  line-height: .39rem;
}
.forward-icon {
  vertical-align: text-bottom;
}
</style>
