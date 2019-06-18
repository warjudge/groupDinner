<!-- 返回箭头 -->
<template>
  <section class="back-block">
    <div class="back-line">
      <x-icon type="ios-arrow-back" size="0.8rem" class="icon-white back-icon" @click="goBack"></x-icon>
      <div class="fr right-part">
        <slot name="right"></slot>
      </div>
    </div>
    <slot>
      <h1 class="hd-title" v-if="this.title">
        {{ this.title }}
      </h1>
    </slot>
  </section>
</template>

<script>
export default {
  props: {
    title: { // 头部标题，不传时不显示
      default: '',
      type: String,
    },
  },
  data () {
    return {

    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
}
</script>

<style scoped>
@import '../assets/css/root.css';

.back-line {
  padding: .2rem .4rem .4rem .2rem;
  line-height: 0;
  overflow: hidden;
}
.right-part {
  line-height: .8rem;
}
.hd-title {
  padding: 0 .4rem;
  margin-bottom: .75rem;;
  font-weight: 800;
  font-size: var(--g-lg-title);
  line-height: var(--g-lg-title);
}
</style>
