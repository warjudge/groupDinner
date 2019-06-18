<!-- 上拉加载组件 -->
<template>
  <section class="scroll-wrap" ref="wrap">
    <div class="list">
      <slot>
        <p class="no-data">暂无数据</p>
      </slot>
      <p class="scroll-label" v-if="status">{{ statusMap[status] }}</p>
    </div>
  </section>
</template>

<script>
import BScroll from 'better-scroll';

let windowResizeHandler = null;
export default {
  data () {
    return {
      status: 1,
      statusMap: {
        1: '上拉加载更多',
        2: '加载中...',
        3: '无更多数据',
        4: '加载失败',
      },
      oScroll: null, // betterscroll实例。
    }
  },
  /* mounted() {
    // 监听窗口大小变化，重新计算滚动区域。
    windowResizeHandler = () => {
      console.log('oScroll', this.oScroll);
      if (this.oScroll) {
        this.$nextTick( () => this.oScroll.refresh());
      }
    };
    window.addEventListener('resize', windowResizeHandler);
  },
  destroyed() {
    window.removeEventListener('resize', windowResizeHandler);
  }, */
  methods: {
    __initScroll() {
      this.oScroll = new BScroll(this.$refs.wrap, {
        pullUpLoad:{
          threshold: -70, // 负值是当上拉到超过低部 70px；正值是距离底部距离 时，                    
        }
      });
      this.oScroll.on('pullingUp', () => {
        // 当加载完毕时，不触发上拉加载效果
        if (this.status !== 3) {
          this.status = 2;
          this.$emit('pullingUp');
        }
      });
    },
    loaded() {
      this.$nextTick(() => {
        if (this.oScroll) {
          this.oScroll.finishPullUp();
          this.oScroll.refresh();
        } else {
          this.__initScroll();
        }
      });
    },
    isLoadAllData(nowNumber, total) {
      if (nowNumber < total) {
        this.status = 1;
        return false;
      } else {
        this.status = 3;
        return true;
      }
    },
    loadError() {
      this.status = 4;
    },
  },
}
</script>

<style scoped>
@import '../../assets/css/root.css';
.scroll-wrap {
  height: 100%;
  overflow: hidden;
}
.list {
  min-height: 100%;
}
.scroll-label {
  position: absolute;
  bottom: -40px;
  width: 100%;
  line-height: 40px; /* 在better-scroll中传值为px */
  text-align: center;
  color: #fff;
}
</style>
