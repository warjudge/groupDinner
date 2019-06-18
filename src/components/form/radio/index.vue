<!-- 单选按钮 -->
<template>
  <section class="radio-box" :class="{ selected: value }" @click.stop="toogle">
    <p class="radio-btn"></p>
  </section>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
      type: Boolean,
    },
  },
  data () {
    return {

    }
  },
  methods: {
    toogle() {
      this.$emit('input', !this.value);
    },
  },
}
</script>

<style scoped>
@import '../../../assets/css/root.css';
.radio-box {
  display: inline-block;
  height: .43rem;
  width: .43rem;
  border: 1px solid #979797;
  border-radius: 50%;
  &.selected {
    background: url('./selected.png') no-repeat center -.1rem;
    background-size: .5rem;
    border-color: var(--g-color-blue);
    text-align: center;
  }
}
</style>
