<!-- 待添加新餐厅 -->
<template>
  <section class="restaurant-box white-bgc-box">
    <div class="restaurant-info">
      <img class="restaurant-pic" :src="restaurant.logo"/>
      <div class="restaurant-time">
        <h1 class="restaurant-title ellipsis">{{ restaurant.name }}</h1>
        <p class="shop-hours">营业时间 {{ restaurant.onlineOn }} 至 {{ restaurant.onlineOff }}</p>
        <button class="default-btn fr" @click="handleAdd">添加</button>
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
  inject: ['box'],
  data () {
    return {

    }
  },
  methods: {
    handleAdd() {
      console.log('hh');
      this.box.visible = true;
    },
  },
  components: {

  }
}
</script>

<style scoped>
@import '../../assets/css/root.css';
@import '../../assets/css/home-company/restaurant.css';

.restaurant-title {
  margin-bottom: .25rem;
}
.restaurant-info {
  display: flex;
}
.restaurant-pic {
  height: 2.13rem;
  margin-right: .37rem;
}
</style>
