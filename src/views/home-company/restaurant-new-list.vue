<!-- 待添加餐厅列表 -->
<template>
  <section>
    <new-restaurant v-for="restaurant in list" :key="restaurant.restaurantId" 
      :restaurant="restaurant" />
  </section>
</template>

<script>
import NewRestaurant from './new-restaurant';
import { getUnselectedRestaurantList } from '@/service/home-company.js';

export default {
  data () {
    return {
      list: [],
      pageNum: 1,
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
      visible: true,
    }
  },
   mounted() {
    this.handleGetNewList();
  },
  methods: {
    async handleGetNewList() {
      const scroll = this.$parent.$parent.$refs.scroll;
      const { pageNum } = this;
      const res = await getUnselectedRestaurantList({ pageNum });
      if (res.code == 200) {
        const { records, total } = res.data;
        this.list.push(...records);
        scroll.loaded(); // 初始化或刷新scroll组件
        if (!scroll.isLoadAllData(this.list.length, total)) {
          this.pageNum ++;
        }
      } else {
        scroll.loadError();
      }
    },
  },
  components: {
    NewRestaurant,
  }
}
</script>

<style scoped>

</style>
