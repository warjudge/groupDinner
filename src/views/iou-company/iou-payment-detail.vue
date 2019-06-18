<!-- 白条兑付详情 -->
<template>
  <section class="wrap">
    <!-- 返回箭头 -->
    <back-block title="白条兑付详情"></back-block>
    <!-- 白条详情 -->
    <info labelWidth="3.37rem" class="detail-box">
      <info-item label="开单企业" :detail="paymentInfo.billCompany"></info-item>
      <info-item label="持有企业" :detail="paymentInfo.payCompany"></info-item>
      <info-item label="白条编号" :detail="paymentInfo.number"></info-item>
      <info-item label="白条额度" :detail="paymentInfo.amount"></info-item>
      <info-item label="持有额度" :detail="paymentInfo.quota"></info-item>
      <info-item label="兑付额度" :detail="paymentInfo.payQuota"></info-item>
      <!-- 逾期才显示罚息 -->
      <info-item v-if="paymentInfo.fineAmount" label="罚息" :detail="paymentInfo.fineAmount"></info-item>
      <info-item label="兑付总计" :detail="paymentInfo.totalAmount"></info-item>
      <!-- <info-item label="申请兑付日期" :detail="paymentInfo.applyTime"></info-item> -->
      <info-item label="承兑日期" :detail="formatDate(paymentInfo.promiseTime)"></info-item>
      <info-item v-if="status == 2 || status == 4" label="确认兑付日期" :detail="formatDate(paymentInfo.paidTime)"></info-item>
      <info-item label="收到兑付日期" :detail="formatDate(paymentInfo.receiveTime)"></info-item>
    </info>
  </section>
</template>

<script>
import { getIouPaymentDetail } from '../../service/iou-company.js';

export default {
  computed: {
    type() { // unhandle 待处理 history 历史
      return this.$route.params.type;
    },
  },
  data () {
    return {
      paymentInfo: {},
    }
  },
  mounted() {
    this.getPaymentDetail();
  },
  methods: {
    async getPaymentDetail() {
      const res = await getIouPaymentDetail({ id: this.$route.params.iouId });
      if (res.code == 200) {
        this.paymentInfo = res.data;
      }
    }
  }
}
</script>

<style scoped>
@import '../../assets/css/iou/detail-info.css';
</style>
