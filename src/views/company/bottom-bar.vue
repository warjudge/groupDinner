<!-- 公司底部导航栏 -->
<template>
  <footer class="footer">
    <section class="nav-item" :class="{ active: tab == item.path }" @click="jumpTo(item.path)"
      v-for="item in tabList" :key="item.path">
      <img class="nav-icon" :src="tab == item.path ? item.iconActiveImg : item.iconImg"/>
      <p class="nav-label">{{ item.title }}</p>
    </section>
  </footer>
</template>

<script>
export default {
  computed: {
    tab() {
      return this.$route.path;
    },
  },
  data () {
    return {
      tabList: [
        {
          iconImg: require('img/company/home.png'),
          iconActiveImg: require('img/company/home-active.png'),
          title: '首页',
          path: '/company/home',
        },
        {
          iconImg: require('img/company/order.png'),
          iconActiveImg: require('img/company/order-active.png'),
          title: '订单',
          path: '/company/order',
        },
        {
          iconImg: require('img/company/my.png'),
          iconActiveImg: require('img/company/my-active.png'),
          title: '我的',
          path: '/company/mine',
        },
      ],
    }
  },
  methods: {
    handleSelect(index) {
      this.tab = index;
    },
  }
}
</script>

<style scoped>
@import '../../assets/css/root.css';
.footer {
  position: fixed;
  z-index: 10;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  padding: 0.12rem 0 .09rem;
  justify-content: space-around;
  background-color: #fff;
}
.nav-item {
  line-height: 0;
}
.active {
  .nav-label {
    color: var(--g-color-blue);
  }
}
.nav-icon {
  height: .57rem;
  margin-bottom: .09rem;
}
.nav-label {
  font-size: .29rem;
  line-height: .4rem;
  color: var(--g-color-grey);
}
</style>
