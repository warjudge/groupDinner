<!-- 确认兑付白条 -->
<template>
  <section>
    <back-block title="确认兑付"></back-block>
    <main class="main-box">
      <info>
        <info-item label="申请兑付人" :detail="paymentInfo.payeeName"></info-item>
        <info-item label="兑付额度" :detail="paymentInfo.payQuota"></info-item>
        <info-item label="承兑日期" :detail="formatDate(paymentInfo.promiseTime)"></info-item>
        <!-- <info-item label="申请兑付日期" :detail="paymentInfo.amount"></info-item> -->
        <!-- <info-item label="兑付类型" :detail="paymentInfo.quota"></info-item> -->
        <info-item label="年化利率" :detail="formatRate(paymentInfo.yearRatio, 4)"></info-item>
        <info-item label="逾期利率" :detail="formatRate(paymentInfo.delayRatio, 4)"></info-item>
        <info-item label="支付金额" :detail="paymentNumberFormula"></info-item>
        <info-item label="兑付金额" :detail="paymentInfo.payAmount" labelClass="green"></info-item>
      </info>
    </main>
    <footer class="footer">
      <button class="primary-btn confirm-btn" @click="handlePayIou">确认兑付</button>
    </footer>
  </section>
</template>

<script>
import { getIouConfirmPaymentDetail, payIou } from '../../service/iou-company.js';

export default {
  data () {
    return {
      paymentInfo: {
        yearRatio: 0,
        delayRatio: 0,
        promiseTime: 0,
      },
      paymentNumberFormula: '兑付额度 * [1 - (年化利率 * 6 / 360)]',
    }
  },
  mounted() {
    this.getPaymentInfo();
  },
  methods: {
    async getPaymentInfo() {
      const res = await getIouConfirmPaymentDetail({ id: this.$route.params.iouId });
      if (res.code == 200) {
        this.paymentInfo = res.data;
      }
    },
    async handlePayIou() {
      const res = await payIou({ id: this.$route.params.iouId });
      if (res.code == 200) {
        this.$router.go(-1);
      }
    },
  }
}
</script>

<style scoped>
@import '../../assets/css/root.css';
.main-box {
  padding: 0 .4rem 1.97rem;
}
.confirm-btn {
  position: absolute;
  width: calc(100% - .8rem);
  left: .4rem;
  bottom: .56rem;
  font-size: var(--g-xs-font-size);
  line-height: 1.07rem;
  color: #375270;
  background:linear-gradient(90deg,rgba(255,255,255,1) 0%,rgba(222,238,255,1) 100%);
  box-shadow:0rem 0.01rem 0.02rem 0rem rgba(11,102,204,1);
}
</style>
