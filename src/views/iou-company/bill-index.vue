<!-- 公司 账单列表 -->
<template>
  <iou-bill-index-template :activeTab.sync="activeTab" :tabConfig="tabConfig">
    <!-- 账单统计值 -->
    <section slot="statistic">
      <label>支出</label>
    </section>
    <!-- 白条账单 -->
    <section v-show="activeTab == 1" class="bill-item">
      <iou-bill-statistic :datePeriod="iou.datePeriod" @change="handleSearchIouBillList">
        <p>支出: {{iou.payAmount}}</p>
      </iou-bill-statistic>
      <scroll ref="iouScroll" @pullingUp="handleGetIouBillList" class="bill-wrap">
        <main class="bill-list" v-if="iou.list.length">
          <bill-item v-for="(item, index) in iou.list" :key="index" 
            :billInfo="item"/>
        </main>
      </scroll>
    </section>
    <!-- 出金账单 -->
    <section v-show="activeTab == 2" class="bill-item">
      <iou-bill-statistic :datePeriod="payment.datePeriod" @change="handleSearchGoldBillList">
        <p>支出: {{payment.payAmount}}</p>
      </iou-bill-statistic>
      <scroll ref="goldScroll" @pullingUp="handleGetGoldBillList" class="bill-wrap">
        <main class="bill-list" v-if="payment.list.length">
          <bill-item v-for="(item, index) in payment.list" :key="index" 
            :billInfo="item" type="gold"/>
        </main>
      </scroll>
    </section>
  </iou-bill-index-template>
</template>

<script>
import IouBillIndexTemplate from '@/views/basic-views/iou-bill-index-template';
import IouBillStatistic from '../../views/basic-views/iou-bill-statistic';
import BillItem from './bill-item';
import { getIouBillList, getIouConsumeBillList, getIouBillTotal, getGoldBillTotal } from '@/service/iou-company.js';
import DateUtil from '../../utils/date.js';

export default {
  data () {
    const datePeriod = [ DateUtil.getMonthFirstDayTimestamp(), DateUtil.getMonthLastDayTimestamp() ];
    return {
      activeTab: 1,
      tabConfig: [
        { value: 1, label: '白条账单' },
        { value: 2, label: '出金账单' },
      ],
      iou: {
        payAmount: 0,
        datePeriod: JSON.parse(JSON.stringify(datePeriod)),
        list: [],
        pageNum: 1,
        pageSize: 10,
      },
      payment: {
        payAmount: 0,
        datePeriod: JSON.parse(JSON.stringify(datePeriod)),
        list: [],
        pageNum: 1,
        pageSize: 10,
      },
    }
  },
  mounted() {
    this.handleGetIouTotal();
    this.handleGetGoldTotal();
    this.handleGetIouBillList();
    this.handleGetGoldBillList();
  },
  methods: {
    async handleGetIouTotal() {
      const { datePeriod } = this.iou;
      const res = await getIouBillTotal({ id: 1, beginDate: datePeriod[0], endDate: datePeriod[1] });
      if (res.code == 200) {
        const { payAmount = 0 } = res.data || {};
        this.iou.payAmount = payAmount;
      }
    },
    async handleGetGoldTotal() {
      const { datePeriod } = this.payment;
      const res = await getGoldBillTotal({ id: 1, beginDate: datePeriod[0], endDate: datePeriod[1] });
      if (res.code == 200) {
        const { payAmount = 0 } = res.data || {};
        this.payment.payAmount = payAmount;
      }
    },
    async handleGetIouBillList() { // 获取白条账单列表
      const { datePeriod, pageNum, pageSize } = this.iou;
      const scroll = this.$refs.iouScroll;
      const res = await getIouBillList({ id: 1, beginDate: datePeriod[0], endDate: datePeriod[1], pageNum, pageSize });
      if (res.code == 200) {
        const { records = [], total = 0 } = res.data || {};
        this.iou.list.push(...records);
        // 如果未加载完毕, 增加页码。否则停止监听上拉加载事件
        if (!scroll.isLoadAllData(this.iou.list.length, total)) {
          this.iou.pageNum++;
        }
        scroll.loaded();
      } else {
        scroll.loadError();
      }
    },
    async handleGetGoldBillList() { // 获取出金账单列表
      const { datePeriod, pageNum, pageSize } = this.payment;
      const scroll = this.$refs.goldScroll;
      const res = await getIouConsumeBillList({ id: 1, beginDate: datePeriod[0], endDate: datePeriod[1], pageNum, pageSize });
      if (res.code == 200) {
        const { records = [], total = 0 } = res.data || {};
        this.payment.list.push(...records);
        // 如果未加载完毕, 增加页码。否则停止监听上拉加载事件
        if (!scroll.isLoadAllData(this.iou.list.length, total)) {
          this.payment.pageNum++;
        }
        scroll.loaded();
      } else {
        scroll.loadError();
      }
    },
    handleSearchIouBillList() {
      this.pageNum = 1;
      this.iou.list = [];
      this.handleGetIouTotal();
      this.handleGetIouBillList();
    },
    handleSearchGoldBillList() {
      this.pageNum = 1;
      this.payment.list = [];
      this.handleGetGoldTotal();
      this.handleGetGoldBillList();
    },
  },
  components: {
    IouBillIndexTemplate,
    IouBillStatistic,
    BillItem,
  }
}
</script>

<style scoped>
.bill-item {
  height: calc(100% - 3.45rem);
  /deep/ .bill-wrap {
    height: calc(100% - 1.8rem);
  }
}
.bill-list {
  padding: .25rem .4rem;
}
</style>
