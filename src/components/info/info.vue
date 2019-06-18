<!-- info-item容器 -->
<template>
  <section class="blue-bgc-box info-box">
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    labelWidth: { // info-item的label-width
      type: String,
    },
  },
  data () {
    return {

    }
  },
  provide() {
    return {
      info: this,
    }
  },
  components: {

  }
}
</script>

<style scoped>
.info-box {
  /* 不使用padding，border，overflow来阻止子元素margin溢出 */
  &::before {
    content: '';
    display: table;
  }
  &::after {
    content: '';
    display: table;
  }
}
</style>
