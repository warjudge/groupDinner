<!-- 公司首页 -->
<template>
  <section class="home-wrap">
    <scroll ref="scroll">
      <header class="hd-bg">
        <back-block></back-block>
        <div class="useable">
          <h1 class="usable-amount">￥{{billAvailable}}</h1>
          <label class="home-label">可用白条</label>
        </div>
        <div class="info">
          <div class="info-item tr">
            <p class="home-label">授信额度</p>
            <p class="number">20000.00</p>
          </div>
          <div class="info-item tl">
            <p class="home-label">待兑付</p>
            <p class="number">{{billPaying}}</p>
          </div>
        </div>
      </header>
      <div class="tabs">
        <p class="tab" :class="{ selected: activeTab === item.value }" @click="handleSelect(item.value)"
          v-for="item in tabConfig" :key="item.value">{{ item.label }}</p>
      </div>
      <main class="main-wrap">
        <restaurant-selected-list v-show="activeTab === 1"/>
        <restaurant-new-list v-show="activeTab === 2" />
      </main>
    </scroll>
    <!-- 设置点餐时间 -->
    <order-time-popup :visible.sync="visible" :orderInfo="orderInfo"/>
  </section>
</template>

<script>
import RestaurantSelectedList from './restaurant-selected-list';
import RestaurantNewList from './restaurant-new-list';
import OrderTimePopup from './order-time-popup';
import { getIouAsset } from '@/service/iou-company.js';

export default {
  data () {
    return {
      billPaying: 0,
      billAvailable: 0,
      activeTab: 1,
      tabConfig: [
        { value: 1, label: '已选餐厅' },
        { value: 2, label: '添加新餐厅' },
      ],
      visible: true,
      orderInfo: {
        hasBreakfast: false,
        breakfastOn: '',
        breakfastOff: '',
        hasLunch: false,
        lunchOn: '',
        lunchOff: '',
        hasDinner: true,
        dinnerOn: '',
        dinnerOff: '',
      },
    }
  },
  provide() {
    return {
      box: this,
    }
  },
  mounted() {
    this.handleGetAsset();
  },
  methods: {
    async handleGetAsset() {
      const res = await getIouAsset({ id: 1 });
      if (+res.code === 200) {
        const { billAvailable = 0, billPaying = 0 } = res.data || {};
        this.billPaying = billPaying;
        this.billAvailable = billAvailable;
      }
    },
    handleSelect(tab) {
      this.activeTab = tab;
    },
  },
  components: {
    RestaurantSelectedList,
    RestaurantNewList,
    OrderTimePopup,
  }
}
</script>

<style scoped>
@import '../../assets/css/root.css';
.tabs {
  padding: 0 1.89rem;
}
.tab {
  margin: .45rem 0 .28rem;
  font-size: .51rem;
  color: var(--g-color-black);
  line-height: .71rem;
  &::after {
    background-color: var(--g-color-black);
  }
}

.home-wrap {
  height: 100%;
  overflow-y: scroll;
  background-color: var(--bgc-white);
}
.main-wrap {
  padding: 0 .4rem;
}

.useable {
  padding: .5rem 0 1rem;
  text-align: center;
}
.usable-amount {
  font-size: var(--g-title);
  line-height: var(--g-title);
}
.home-label {
  font-size: var(--g-sm-font-size);
  line-height: .44rem;
}

.info {
  display: flex;
  justify-content: space-between;
}
.info-item {
  flex: 0 0 3rem;
}
.number {
  font-size: .51rem;
  line-height: .56rem;
}

.main-wrap {
  color: var(--g-color-black);
}
.main-title {
  margin: .45rem 0 .28rem;
  font-size: .51rem;
  line-height: .71rem;
}
.add-title {
  margin: .21rem 0 .17rem;
}

.tl {
  text-align: left;
}
.tr {
  text-align: right;
}
</style>
