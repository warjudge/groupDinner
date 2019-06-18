<!-- 餐厅 待处理白条 -->
<template>
  <scroll ref="scroll" class="wrap" @pullingUp="handleGetUndandleList">
    <iou-active-template :config="config">
      <iou-item v-for="(item, index) in list" :key="index" :iou="item" />
    </iou-active-template>
  </scroll>
</template>

<script>
import IouActiveTemplate from '../basic-views/iou-active-template';
import IouItem from './iou-item';
import { getIouAsset, getIouUnhandleList } from '../../service/iou-restaurant.js';

export default {
  data () {
    return {
      config: {
        billUrl: '/restaurant-iou-bill',
        historyIouUrl: 'restaurant-history-list',
        assetList: [
          { iconUrl: require('img/iou/to-be-pay.png'), value: 0, label: '尚未兑付', },
          { iconUrl: require('img/iou/iou.png'), value: 0, label: '持有白条', },
        ],
      },
      list: [],
      total: 0,
      pageNum: 1,
      pageSize: 10,
    }
  },
  async mounted() {
    this.handleGetAsset();
    this.handleGetUndandleList();
  },
  methods: {
    async handleGetAsset() {
      const res = await getIouAsset({ id: 2 });
      if (+res.code === 200) {
        const { billUnpaid = 0, billHold = 0 } = res.data || {};
        this.config.assetList[0].value = billUnpaid;
        this.config.assetList[1].value = billHold;
      }
    },
    async handleGetUndandleList() {
      const { pageNum, pageSize } = this;
      const res = await getIouUnhandleList({ id: 2, pageNum, pageSize });
      if (res.code == 200) {
        const { records = [], total } = res.data || {};
        this.list.push(...records);
        // 如果未加载完毕, 增加页码。否则停止监听上拉加载事件
        if (!this.$refs.scroll.isLoadAllData(this.list.length, total)) {
          this.pageNum++;
        }
        this.$refs.scroll.loaded();
      } else {
        this.$refs.scroll.loadError();
      }
    },
  },
  components: {
    IouActiveTemplate,
    IouItem,
  }
}
</script>

<style scoped>
@import '../../assets/css/iou/list.css';
</style>
