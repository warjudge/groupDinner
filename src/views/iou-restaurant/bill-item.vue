<!-- 账单条目 -->
<template>
  <section class="blue-bgc-box bill-item" @click="jumpTo(`/restaurant-bill-detail/${type}/${billInfo.id}`)">
    <h1 class="hd-title">{{ billInfo.oppositeName || billInfo.billCompany }}</h1>
    <p>
      <label class="bill-type">{{ transferTypeMap[billInfo.transferType] || '兑付' }}</label>
      <label class="number fr">{{ billInfo.transferType == 2 ? '-' : '+' }}{{ billInfo.amount }}</label>
    </p>
    <time class="bill-time">{{ formatDate(billInfo.payTime, 'MM-dd hh:mm:ss') }}</time>
  </section>
</template>

<script>
import { transferTypeMap } from '../../utils/params.js';

export default {
  props: {
    billInfo: {},
    type: { // iou 白条  gold  出金
      default: 'iou',
    },
  },
  data () {
    return {
      transferTypeMap,
    }
  },
}
</script>

<style scoped>
@import '../../assets/css/iou/bill-item.css';
</style>
