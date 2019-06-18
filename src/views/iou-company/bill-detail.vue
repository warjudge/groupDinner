<!-- 账单详情 -->
<template>
  <section>
    <back-block title="账单详情"></back-block>
    <main class="detail-content">
      <!-- 白条账单详情 -->
      <info class="detail-box" v-if="billDetail && $route.params.type === 'iou'">
        <info-item label="收款企业" :detail="billDetail.payCompany"></info-item>
        <info-item label="支付额度" :detail="billDetail.amount"></info-item>
        <info-item label="账单类型" detail="支付订单"></info-item>
        <info-item label="订单编号" :detail="billDetail.orderNumber"></info-item>
        <info-item label="支付时间" :detail="formatDate(billDetail.payTime)"></info-item>
      </info>
      <!-- 出金账单详情 -->
      <info class="detail-box" v-if="billDetail && $route.params.type === 'gold'">
        <info-item label="兑付企业" :detail="billDetail.payCompany"></info-item>
        <info-item label="账单类型" detail="兑付账单"></info-item>
        <info-item label="白条编号" :detail="billDetail.number"></info-item>
        <info-item label="兑付额度" :detail="billDetail.payQuota"></info-item>
        <info-item label="罚息" v-if="billDetail.fineAmount" :detail="billDetail.fineAmount"></info-item>
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
import { getBillDetail } from '../../service/iou-company.js';

export default {
  data () {
    return {
      billDetail: null,
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
