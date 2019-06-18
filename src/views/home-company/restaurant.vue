<!-- 餐厅选项 -->
<template>
  <section class="restaurant-box white-bgc-box">
    <h1 class="restaurant-title ellipsis">{{ restaurant.name }}</h1>
    <div class="restaurant-info">
      <img class="restaurant-pic" :src="restaurant.logo"/>
      <div class="restaurant-time">
        <p class="shop-hours">营业时间 {{ restaurant.onlineOn }} 至 {{ restaurant.onlineOff }}</p>
        <div class="flex-item">
          <div class="order-time-item">
            <p class="order-time">早餐：{{ restaurant.breakfastOn }}-{{ restaurant.breakfastOff }}</p>
            <p class="order-time">中餐：{{ restaurant.lunchOn }}-{{ restaurant.lunchOff }}</p>
            <p class="order-time">晚餐：{{ restaurant.dinnerOn }}-{{ restaurant.dinnerOff }}</p>
          </div>
          <x-icon type="ios-arrow-forward" size="0.6rem" class="icon-grey"></x-icon>
        </div>
        <button class="default-btn fr">删除</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    restaurant: {
      required: true,
      type: Object,
    },
  },
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
@import '../../assets/css/home-company/restaurant.css';
.restaurant-title {
  padding: .27rem 0 .19rem;
}
.restaurant-pic {
  width: 3.07rem;
  max-height: 3.07rem;
  margin-right: .25rem;
}
</style>
