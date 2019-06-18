<!-- 餐厅，供货商白条信息条目 -->
<template>
  <section class="white-bgc-box iou-item-box">
    <header class="iou-number" @click="jumpTo('/iou-detail')">
      <label>编号: 002255555</label>
      <x-icon type="ios-arrow-forward" size="0.5rem" class="forward-icon icon-grey"></x-icon>
      <p class="fr blue">待公司兑付</p>
    </header>
    <main>
      <p class="content-company ellipsis">33复杂美集团区块链发生的开发网络技术科技有限公司</p>
      <div class="iou-amount-box" @click="jumpTo('/iou-owner-payment-detail')">
        <div class="amount-item">
          <p class="amount-title">单据金额</p>
          <p class="amount">13400.90</p>
        </div>
        <div class="amount-item">
          <p class="amount-title">持有额度</p>
          <p class="amount">13400.90</p>
        </div>
        <div class="amount-item">
          <p class="amount-title">持有额度</p>
          <p class="amount green">13400.90</p>
        </div>
        <x-icon type="ios-arrow-forward" size="1.0rem" class="forward-icon icon-grey"></x-icon>
      </div>
    </main>
    <footer class="item-footer">
      <div class="date-info">
        <p>承兑日期 :2018-10-01还有3天</p>
        <p>承兑日期 :2018-10-01还有3天</p>
      </div>
      <button class="default-btn bottom-btn">收到兑付</button>
    </footer>
  </section>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
@import '../../assets/css/iou/iou-item.css';
</style>
