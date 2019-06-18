<!-- 餐厅 白条信息条目 -->
<template>
  <section class="white-bgc-box iou-item-box">
    <header class="iou-number" @click="jumpTo(`/iou-detail/${iou.number}`)">
      <span class="number">编号: {{iou.number}}</span>
      <x-icon type="ios-arrow-forward" size="0.48rem" class="forward-icon icon-grey"></x-icon>
      <p class="iou-label">
        <label class="blue" v-if="iou.status == 1">待公司兑付</label>
      </p>
    </header>
    <p class="content-company ellipsis">{{iou.billCompany}}</p>
    <div class="iou-amount-box" @click="jumpTo(`/restaurant-iou-payment-detail/${iou.id}`)">
      <!-- 待兑付 未逾期 -->
      <template v-if="iou.fineAmount === 0">
        <div class="amount-item">
          <p class="amount-title">兑付额度</p>
          <p class="amount">{{iou.payQuota}}</p>
        </div>
        <div class="amount-item">
          <p class="amount-title">持有额度</p>
          <p class="amount green">{{iou.payAmount}}</p>
        </div>
      </template>
      <!-- 待兑付 逾期 -->
      <template v-else>
        <div class="amount-item">
          <p class="amount-title">持有额度</p>
          <p class="amount">{{iou.payAmount}}</p>
        </div>
        <div class="amount-item">
          <p class="amount-title">兑付额度</p>
          <p class="amount">{{iou.payQuota}}</p>
        </div>
        <div class="amount-item">
          <p class="amount-title">总计金额</p>
          <p class="amount green">{{iou.payAmount}}</p>
        </div>
      </template>
      <p class="icon-item">
        <x-icon type="ios-arrow-forward" size=".6rem" class="forward-icon icon-grey"></x-icon>
      </p>
    </div>
    <div class="date-info">
      <div class="flex-item">
        <div>
          <p>承兑日期: {{ iou.promiseTime | formatDate }}</p>
          <p v-if="iou.status == 2">确认日期: {{ iou.promiseTime | formatDate }}</p>
        </div>
        <button v-if="iou.status === 2" class="default-btn bottom-btn" @click="jumpTo(`/company-payment/${iou.id}`)">收到兑付</button>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  props: {
    iou: {
      required: true,
      type: Object,
    },
    type: {
      default: 'unhandle', // unhandle 待处理 history 历史
    },
  },
  data () {
    return {
    }
  },
}
</script>

<style scoped>
@import '../../assets/css/iou/iou-item.css';
</style>
