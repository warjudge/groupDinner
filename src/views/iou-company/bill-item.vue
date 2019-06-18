<!-- 账单条目 -->
<template>
  <section class="blue-bgc-box bill-item" @click="jumpTo(`/company-bill-detail/${type}/${billInfo.id}`)">
    <h1 class="hd-title">{{ billInfo.payCompany }}</h1>
    <p>
      <label class="bill-type">{{ type === 'iou' ? '支付订单' : '兑付' }}</label>
      <label class="number fr">-{{ billInfo.amount }}</label>
    </p>
    <time class="bill-time">{{ formatDate(billInfo.payTime, 'MM-dd hh:mm:ss') }}</time>
  </section>
</template>

<script>
export default {
  props: {
    billInfo: {},
    type: { // iou 白条  gold  出金
      default: 'iou',
    },
  },
  data () {
    return {

    }
  },
}
</script>

<style scoped>
@import '../../assets/css/iou/bill-item.css';
</style>
