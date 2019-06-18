<!-- 账单 -->
<template>
  <section class="wrap">
    <back-block></back-block>
    <!-- header -->
    <header class="header">
      <div class="tabs">
        <p class="tab" :class="{ selected: activeTab === item.value }" @click="handleSelect(item.value)"
          v-for="item in tabConfig" :key="item.value">{{ item.label }}</p>
      </div>
      <h1 class="hd-title">账单</h1>
    </header>
    <slot></slot>
  </section>
</template>

<script>

export default {
  props: {
    activeTab: { // 当前tab
      required: true,
    },
    tabConfig: { // tab项配置 [ { value: Number | String, label: String } ]
      required: true,
      type: Array,
    },
  },
  data () {
    return {
    }
  },
  methods: {
    handleSelect(tab) {
      this.$emit('update:activeTab', tab);
    },
  },
}
</script>

<style scoped>
@import '../../assets/css/root.css';
.hd-title {
  padding: 0 .4rem;
  margin-bottom: .27rem;
  line-height: var(--g-lg-title);
  font-size: var(--g-lg-title);
  font-weight: 800;
}

.bill-list {
  height: calc(100% - 5rem);
  padding: 0 .4rem;
}
</style>
