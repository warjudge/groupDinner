<!-- 公司白条信息条目 -->
<template>
  <section class="white-bgc-box iou-item-box">
    <header class="iou-number" @click="jumpTo(`/iou-detail/${iou.number}`)">
      <span class="number">编号: {{iou.number}}</span>
      <x-icon type="ios-arrow-forward" size="0.48rem" class="forward-icon icon-grey"></x-icon>
      <p class="iou-label">
        <!-- <label class="red" v-if="!iou.fineAmount">提前{{iou.remainTime}}天</label> -->
        <label class="blue" v-if="iou.status == 2">待确认收到兑付</label>
        <label v-if="iou.status === 4">已完成</label>
      </p>
    </header>
    <main>
      <p class="content-company ellipsis">{{iou.payCompany}}</p>
      <div class="iou-amount-box" @click="jumpTo(`/company-iou-payment-detail/${type}/${iou.id}`)">
        <!-- 待兑付 未逾期 -->
        <template v-if="iou.fineAmount === 0">
          <div class="amount-item">
            <p class="amount-title">兑付额度</p>
            <p class="amount">{{iou.payQuota}}</p>
          </div>
          <div class="amount-item">
            <p class="amount-title">兑付额度</p>
            <p class="amount green">{{iou.payAmount}}</p>
          </div>
        </template>
        <!-- 待兑付 逾期 -->
        <template v-else>
          <!-- <div class="amount-item">
            <p class="amount-title">持有额度</p>
            <p class="amount">{{iou.quota}}</p>
          </div> -->
          <div class="amount-item">
            <p class="amount-title">兑付额度</p>
            <p class="amount">{{iou.payQuota}}</p>
          </div>
          <div class="amount-item">
            <p class="amount-title">罚息</p>
            <p class="amount green">{{iou.fineAmount}}</p>
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
          <!-- <p>申请兑付日期: {{ iou.applyTime | formatDate }}</p> -->
          <p>承兑日期: {{ iou.promiseTime | formatDate }}</p>
          <p v-if="type == 'history'">确认兑付日期: {{ iou.promiseTime | formatDate }}</p>
        </div>
        <div class="flex-item">
          <p v-if="type == 'history'">收到兑付日期: {{ iou.receiveTime | formatDate }}</p>
        </div>
      </div>
    </main>
    <!-- 待处理白条 显示 -->
    <footer class="item-footer" v-if="type === 'unhandle'">
      <p class="payer-info" @click="jumpTo(`/company-payer-info/${iou.id}`)">
        兑付人信息
        <x-icon type="ios-arrow-forward" size="0.46rem" class="forward-icon icon-grey"></x-icon>
      </p>
      <!-- 在有罚息的时候，剩余天数表示逾期天数， 罚息为0时，剩余天数表示提前天数 -->
      <!-- <button class="default-btn bottom-btn" @click="handleCancelIou(iou.id)" v-if="!iou.fineAmount && iou.remainTime">取消兑付</button> -->
      <button class="default-btn bottom-btn" @click="jumpTo(`/company-payment/${iou.id}`)" v-if="iou.status === 1">确认兑付</button>
    </footer>
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
