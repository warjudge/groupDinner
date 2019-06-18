<!-- 账单tab页 -->
<template>
  <header class="header">
    <div class="tabs">
      <p class="tab" :class="{ selected: activeTab === item.value }" @click="handleSelect(item.value)"
        v-for="item in tabConfig" :key="item.value">{{ item.label }}</p>
    </div>
    <h1 class="hd-title">账单</h1>
  </header>
</template>

<script>
export default {
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

.tabs {
  display: flex;
  padding: 0 2.29rem;
  margin-bottom: .53rem;
  justify-content: space-around;
  color: #fff;
}
.tab {
  position: relative;
  text-align: center;
  font-size: var(--g-lg-font-size);
  line-height: .6rem;
  &.selected {
    font-weight: 600;
    &::after {
      content: '';
      position: absolute;
      bottom: -0.2rem;
      left: 50%;
      transform: translateX(-50%);
      width: .67rem;
      height: .07rem;
      background-color: #fff;
    }
  }
}
.hd-title {
  padding: 0 .4rem;
  margin-bottom: .27rem;
  line-height: var(--g-lg-title);
  font-size: var(--g-lg-title);
  font-weight: 800;
}
</style>
