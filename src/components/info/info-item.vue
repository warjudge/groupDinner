<!-- 左右布局的行 -->
<template>
  <section class="line-item">
    <label class="line-label" :style="{ width: labelWidth || 'auto' }">{{label}}</label>
    <p class="line-info" :class="labelClass">{{detail}}</p>
  </section>
</template>

<script>
export default {
  inject: ['info'],
  props: {
    label: {
      default: '',
    },
    detail: {
      default: '',
    },
    labelWidth: { // label的宽度，传入时需要带单位
      type: String,
    },
    labelClass: {
      default: '',
    },
  },
  data () {
    return {

    }
  },
}
</script>

<style scoped>
@import '../../assets/css/root.css';

.line-item {
  display: flex;
  padding: 0 .4rem;
  margin: .2rem 0;
}
.line-label {
  margin-right: .35rem;
  color: var(--g-color-grey);
}
.line-info {
  flex: 1;
  text-align: right;
  color: var(--g-color-black);
}

.red {
  color: var(--g-color-red);
}
.green {
  color: var(--g-color-green);
}
.blue {
  color: var(--g-color-blue);
}
</style>
