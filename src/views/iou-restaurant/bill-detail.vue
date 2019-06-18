<!-- 账单详情 -->
<template>
  <section>
    <back-block title="账单详情"></back-block>
    <main class="detail-content">
      <!-- 白条账单详情 billDetail是为了在获取数据后渲染，避免出现奇怪的渲染 -->
      <info class="detail-box" v-if="billDetail && $route.params.type === 'iou'">
        <info-item :label="billDetail.transferType ? '支付企业' : '转账企业' " :detail="billDetail.oppositeName"></info-item>
        <info-item label="支付额度" :detail="billDetail.amount"></info-item>
        <info-item label="账单类型" :detail="transferTypeMap[billDetail.transferType]"></info-item>
        <info-item label="订单编号" :detail="billDetail.orderNumber"></info-item>
        <info-item label="支付时间" :detail="formatDate(billDetail.payTime)"></info-item>
      </info>
      <!-- 入金账单详情 -->
      <info class="detail-box" v-if="billDetail && $route.params.type === 'gold'">
        <info-item label="兑付企业" :detail="billDetail.billCompany"></info-item>
        <info-item label="账单类型" detail="兑付账单"></info-item>
        <info-item label="白条编号" :detail="billDetail.number"></info-item>
        <info-item label="兑付额度" :detail="billDetail.payQuota"></info-item>
        <!-- <info-item label="罚息" v-if="billDetail.fineAmount" :detail="billDetail.fineAmount"></info-item> -->
        <info-item label="兑付总计" :detail="billDetail.totalAmount"></info-item>
        <info-item label="承兑日期" :detail="formatDate(billDetail.promiseTime)"></info-item>
        <!-- <info-item label="申请日期" :detail="formatDate(billDetail.applyTime)"></info-item> -->
        <info-item label="确认兑付日期" :detail="formatDate(billDetail.paidTime)"></info-item>
        <info-item label="收到兑付日期" :detail="formatDate(billDetail.receiveTime)"></info-item>
      </info>
    </main>
  </section>
</template>

<script>
import { getBillDetail } from '../../service/iou-restaurant.js';
import { transferTypeMap } from '../../utils/params.js';

export default {
  data () {
    return {
      billDetail: null,
      transferTypeMap,
    }
  },
  mounted() {
    this.handleGetDetail();
  },
  methods: {
    async handleGetDetail() {
      const { type, iouId: id } = this.$route.params; 
      const res = await getBillDetail({ type, id });
      if (res.code == 200) {
        this.billDetail = res.data;
      }
    },
  }
}
</script>

<style scoped>
.detail-content {
  padding: 0 .4rem;
}
</style>
