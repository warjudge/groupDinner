<!-- 公司 待处理白条 -->
<template>
  <section class="wrap">
    <scroll ref="scroll" @pullingUp="handleGetUndandleList">
      <iou-active-template :config="config">
        <iou-item v-for="(item, index) in list" :key="index" :iou="item"/>
      </iou-active-template>
    </scroll>
  </section>
</template>

<script>
import IouActiveTemplate from '../basic-views/iou-active-template';
import IouItem from './iou-item';
import { getIouAsset, getIouUnhandleList } from '../../service/iou-company.js';

export default {
  data () {
    return {
      config: {
        billUrl: '/company-iou-bill',
        historyIouUrl: 'company-history-list',
        assetList: [
          { iconUrl: require('img/iou/iou.png'), value: 0, label: '可用白条', },
          { iconUrl: require('img/iou/to-be-pay.png'), value: 0, label: '待兑付白条', },
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
      const res = await getIouAsset({ id: 1 });
      if (+res.code === 200) {
        const { billAvailable = 0, billPaying = 0 } = res.data || {};
        this.config.assetList[0].value = billPaying;
        this.config.assetList[1].value = billAvailable;
      }
    },
    async handleGetUndandleList() {
      const { pageNum, pageSize } = this;
      const res = await getIouUnhandleList({ id: 1, pageNum, pageSize });
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
