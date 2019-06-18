<!-- 公司 历史白条 -->
<template>
  <scroll class="wrap" ref="scroll"  @pullingUp="handleGetHistoryList">
    <iou-history-template billUrl="/company-iou-bill">
      <iou-item type="history" v-for="(item, index) in list" :key="index" :iou="item"/>
    </iou-history-template>
  </scroll>
</template>

<script>
import IouHistoryTemplate from '../basic-views/iou-history-template';
import IouItem from './iou-item';
import { getIouRecordList } from '@/service/iou-company.js';

export default {
  data () {
    return {
      list: [],
      pageNum: 1,
      pageSize: 10,
    }
  },
  mounted() {
    this.handleGetHistoryList();
  },
  methods: {
    async handleGetHistoryList() {
      const { pageNum, pageSize } = this;
      const res = await getIouRecordList({ id: 1, pageNum, pageSize });
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
    IouHistoryTemplate,
    IouItem
  }
}
</script>

<style scoped>
@import '../../assets/css/root.css';

.wrap {
  background-color: var(--bgc-white);
}
</style>
