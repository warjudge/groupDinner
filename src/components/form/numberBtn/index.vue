<!-- 数字加减按钮 -->
<template>
  <section class="number-btn-box">
    <img class="subtract-btn" src="~img/numberBtn/subtract.png" 
      @click="subtractNumber" v-show="minVisible || min === null || value > min"/>
    <label class="number-label" v-show="value">{{ this.value }}</label>
    <img class="add-btn" src="~img/numberBtn/add.png" 
      @click="addNumber" v-show="maxVisible || max === null || value < max"/>
  </section>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
      type: Number,
    },
    min: {
      default: 0, // 如果为null， 则无限制
    },
    max: {
      default: null,
    },
    minVisible: {
      default: false, // 数字为最小值时，减号是否可见
    },
    maxVisible: {
      default: false, // 数字为最大值时，加号是否可见
    },
  },
  data () {
    return {

    }
  },
  methods: {
    subtractNumber() {
      const { min } = this;
      let number = this.value;
      if (min && number <= min) {
        return;
      }
      this.$emit('input', --number);
      this.$emit('change', -1);
      this.$emit('decrease');
    },
    addNumber() {
      const { max } = this;
      let number = this.value;
      if (max && number <= max) {
        return;
      }
      this.$emit('input', ++number);
      this.$emit('change', 1);
      this.$emit('increase');
    },
  }
}
</script>

<style scoped>
@import '../../../assets/css/root.css';
.number-btn-box {
  display: inline-block;
}
.subtract-btn {
  height: .59rem;
  margin-right: .43rem;
}
.add-btn {
  height: .59rem;
  margin-left:.43rem;
}
.number-label {
  line-height: .59rem;
  vertical-align: top;
}
</style>
