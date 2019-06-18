<!-- 点餐组件 -->
<template>
  <section class="order-menu-wrap">
    <header class="order-menu-hd">
      <back-block></back-block>
      <div class="restaurant-info">
        <img class="restaurant-pic" src="~img/application_img/face.png"/>
        <div class="restaurant-time">
          <h1 class="restaurant-title ellipsis">【双菜6折】黄闷鸡米饭与肥牛(黄姑山路21号）</h1>
          <p class="shop-hours">营业时间 9:00 至 7:00</p>
          <div class="order-time-item">
            <p class="order-time">早餐：6:00-9:00</p>
            <p class="order-time">中餐：10:00-13:00</p>
            <p class="order-time">晚餐：15:00-18:00</p>
          </div>
        </div>
      </div>
    </header>
    <main class="menu-content">
      <!-- 菜单列表 -->
      <div class="white-bgc-box menu-box">
        <section class="menu-item" v-for="food in list" :key="food.id">
          <img class="menu-pic" src="~img/meal.png"/>
          <div class="menu-info">
            <h1 class="menu-title ellipsis">香草鸡肉牛油果奶油烩烩饭还是说说</h1>
            <p class="menu-desc">酥嫩鸡腿排饭(原味) 台式甜不辣加香滑牛油果海盐的咸鲜</p>
            <div class="meal-footer">
              <label class="meal-price">128元</label>
              <number-btn class="btn" v-model="food.number" :min="0" 
                @change="handleSelectChange(arguments[0], food)" />
            </div>
          </div>
        </section>
      </div>
      <!-- 购物车 -->
      <footer class="menu-footer" :class="{ active: active }">
        <div class="shop-cart">
          <div class="shop-cart-symbol">
            <img v-if="active" class="shop-cart-pic active" src="~img/shop-cart-active.png"
              @click="toogleMenu"/>
            <img v-else class="shop-cart-pic" src="~img/shop-cart.png"/>
            <label class="dish-number" v-show="selectedNumber">{{selectedNumber}}</label>
          </div>
          <label>未选购商</label>
        </div>
        <button class="select-btn">选好了</button>
      </footer>
      <!-- menu -->
      <popup v-model="menuVisible">
        <section class="menu-box">
          <header class="menu-hd">
            <label>已选商品</label>
            <div class="fr">
              <img class="empty-btn" src="~img/order/empty.png"/>
              <span @click="emptyMenu">清空</span>
            </div>
          </header>
          <main class="menu">
            <section class="dish" v-for="food in selectedList" :key="food.id">
              <h1 class="dish-name">{{ food.name }}</h1>
              <number-btn class="fr" v-model="food.number" @change="handleSelectChange(arguments[0], food)"></number-btn>
            </section>
          </main>
        </section>
      </popup>
    </main>
  </section>
</template>

<script>
import { getSelectedRestaurantList } from '@/service/home-company.js';

export default {
  data () {
    return {
      list: [
        { id: 1, number: 0, name: '发货时间客服电话开发好的接口是否红烧鸡块峰会上开发' },
        { id: 2, number: 0, name: '哈哈哈' },
      ],
      pageNum: 1,
      selectedList: [],
      selectedNumber: 0,
      number: 0,
      menuVisible: false,
    }
  },
  computed: {
    active() {
      return !!this.selectedNumber;
    },
  },
  mounted() {
    this.handleGetSelectedList();
  },
  methods: {
    async handleGetSelectedList() {
      const { pageNum } = this;
      const res = await getSelectedRestaurantList({ pageNum });
      if (res.code == 200) {
        const { records = [] } = res.data || {};
        this.list = records;
      }
    },
    toogleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    handleSelectChange(number, item) {
      this.selectedNumber += number;
      // 减小数字且减到0
      if (number< 0 && item.number === 0) {
        this.selectedList.forEach((food, index) => {
          if (food.id === item.id) {
            this.selectedList.splice(index, 1);
          }
        });
        // 如果菜单清空，需要隐藏弹窗
        if (!this.selectedList.length) {
          this.menuVisible = false;
        }
      // 增加数字且从0开始增加
      } else if (number > 0 && item.number === 1) {
        this.selectedList.push(item);
      }
    },
    emptyMenu() {
      this.selectedList = [];
      this.selectedNumber = 0;
      this.menuVisible = false;
    },
  }
}
</script>

<style scoped>
@import '../../assets/css/root.css';
@import '../../assets/css/home-company/restaurant.css';
.order-menu-wrap {
  height: 100%;
  background-color: var(--bgc-white);
}
.order-menu-hd {
  padding-bottom: 1.67rem;
  background: var(--blue-vertical-linear);
}

.restaurant-info {
  padding: 0 .67rem;
}
.restaurant-title {
  margin-bottom: .17rem;
  color: var(--g-color-white);
}
.restaurant-pic {
  max-width: 3.07rem;
  max-height: 3.07rem;
  margin-right: .37rem;
}
.shop-hours {
  margin-bottom: .37rem;
  color: #F8FBFF;
}
.order-time {
  color: #B8DAFF;
}

.menu-content {
  height: calc(100% - 5.55rem);
  padding: 0 .4rem;
  margin-top: -.96rem;
}
.menu-box {
  height: calc(100% - 1.17rem);
  overflow-y: auto;
}
.menu-item {
  display: flex;
  padding: .4rem;
  &:not(:last-child) {
    border-bottom: 1px solid #ededed;
  }
}
.menu-pic {
  height: 2.13rem;
  margin-right: .28rem;
}
.menu-info {
  width: 3rem;
  flex: 1;
}
.menu-title {
  margin-bottom: .09rem;
  line-height: .53rem;
  font-weight: 600;
  color: var(--g-color-black);
}
.menu-desc {
  margin-bottom: .17rem;
  font-size: var(--g-sm-font-size);
  line-height: .44rem;
  color: var(--g-color-grey);
}
.meal-footer {
  display: flex;
}
.meal-price {
  flex: 1;
  font-size: .45rem;
  font-weight: 600;
  line-height: .64rem;
  color: var(--g-color-green);
}

.menu-footer {
  position: fixed;
  z-index: 999999;
  display: flex;
  left: .4rem;
  right: .4rem;
  bottom: .31rem;
  border-radius: .6rem;
  box-shadow:0rem 0.13rem 0.21rem 0rem rgba(130,189,255,1);
}
.shop-cart {
  position: relative;
  flex: 1;
  height: 1.17rem;
  padding-left: 1.55rem;
  line-height: 1.17rem;
  color: #A9A9A9;
  border-radius: .6rem 0 0 .6rem;
  background-color: #535353;
}
.shop-cart-symbol {
  position: absolute;
  top: -.13rem;
  left: .27rem;
}
.shop-cart-pic {
  height: 1.07rem;
}
.dish-number {
  position: absolute;
  left: .88rem;
  top: .17rem;
  padding: .1rem .1rem;
  font-size: .24rem;
  line-height: .28rem;
  color: var(--g-color-white);
  background-color: red;
  border-radius: .14rem;
  white-space: nowrap;
}
.select-btn {
  flex: 0 0 2.93rem;
  font-size: var(--g-xs-font-size);
  color: var(--g-color-white);
  background-color: #7D7D7D;
  border-radius: 0 .6rem .6rem 0;
}
.active {
  font-size: var(--g-title);
  color: var(--g-color-white);
  .shop-cart {
    background-color: #4B617B;
  }
  .select-btn {
    background: var(--blue-horizontal-linear);
  }
}

.menu-box {
  padding-bottom: 1.62rem;
  background-color: #fff;
}
.menu-hd {
  padding: .4rem;
  line-height: .93rem;
  font-size: .37rem;
  color: var(--g-color-grey);
  border-bottom: 1px solid #EDEDED;
}
.empty-btn {
  height: .46rem;
  margin-right: .14rem;;
  vertical-align: text-bottom;
}
.dish {
  display: flex;
  min-height: .97rem;
  margin-bottom: .36rem;
  padding: .22rem .4rem;
  line-height: .45rem;
  color: var(--g-color-black);
}
.dish-name {
  flex: 1;
  margin-right: .49rem;
}
</style>
