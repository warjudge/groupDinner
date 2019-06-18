<!-- 兑付人信息 -->
<template>
  <section class="cashman-wrap">
    <back-block title="兑付人信息"></back-block>
    <main class="cashman-content">
      <info labelWidth="3.37rem" class="payee-info-box">
        <info-item label="持单人" :detail="payerInfo.payeeName"></info-item>
        <info-item label="持单人银行" :detail="payerInfo.ownerBank"></info-item>
        <info-item label="持单人银行卡" :detail="payerInfo.ownerBankCard"></info-item>
        <info-item label="姓名" :detail="payerInfo.ownerName"></info-item>
        <info-item label="兑付额度" :detail="payerInfo.payQuota"></info-item>
        <info-item label="兑付金额" :detail="payerInfo.payAmount"></info-item>
      </info>
    </main>
  </section>
</template>

<script>
import { getIouPayerInfo } from '../../service/iou-company.js';

export default {
  data () {
    return {
      payerInfo: {},
    }
  },
  mounted() {
    this.getPayerInfo();
  },
  methods: {
    async getPayerInfo() {
      const res = await getIouPayerInfo({ id: this.$route.params.iouId });
      if (res.code == 200) {
        this.payerInfo = res.data; 
      }
    },
  }
}
</script>

<style scoped>
.cashman-content {
  padding: 0 .4rem;
}
</style>
