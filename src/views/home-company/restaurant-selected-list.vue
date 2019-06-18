<!-- 已选餐厅列表 -->
<template>
  <section>
    <restaurant v-for="restaurant in list" :key="restaurant.restaurantId" 
      :restaurant="restaurant" />
  </section>
</template>

<script>
import Restaurant from './restaurant';
import { getSelectedRestaurantList } from '@/service/home-company.js';

export default {
  data () {
    return {
      list: [],
      pageNum: 1,
    }
  },
   mounted() {
    this.handleGetlist();
  },
  methods: {
    async handleGetlist() {
      const { pageNum } = this;
      const scroll = this.$parent.$parent.$refs.scroll;
      const res = await getSelectedRestaurantList({ pageNum });
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
    Restaurant,
  }
}
</script>

<style scoped>

</style>
