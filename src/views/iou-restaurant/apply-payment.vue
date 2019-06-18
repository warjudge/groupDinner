<!-- 申请兑付 -->
<template>
  <popup :value="value" class="popup-box"
    @on-hide="$emit('input', false)" @on-show="$emit('input', true)">
    <x-icon type="ios-close-empty" size="0.8rem" class="close-icon" @click="$emit('input', false)"></x-icon>
    <main class="main-box">
      <div class="main-item">
        <p class="main-label">兑付企业</p>
        <p class="main-info">33复杂美集团区块链网络技术科技股份有限公司</p>
      </div>
      <div class="main-item">
        <p class="main-label">持有额度</p>
        <p class="main-info">1000</p>
      </div>
      <div class="main-item">
        <p class="main-label">承兑日期</p>
        <p class="main-info">2018-10-01</p>
      </div>
      <div class="main-item">
        <p class="main-label">年化利率</p>
        <p class="main-info">1000</p>
      </div>
      <div class="main-item">
        <p class="main-label">逾期利率</p>
        <p class="main-info">1000</p>
      </div>
      <div class="main-item">
        <p class="main-label">申请兑付日期</p>
        <p class="main-info">1000</p>
      </div>
      <div class="main-item">
        <p class="main-label input-label">兑付额度</p>
        <input class="main-info input"/>
      </div>
      <div class="main-item">
        <p class="main-label">兑付类型</p>
        <p class="main-info">1000</p>
      </div>
      <div class="main-item">
        <p class="main-label">支付金额</p>
        <p class="main-info">1000</p>
      </div>
      <div class="main-item">
        <p class="main-label">兑付金额</p>
        <p class="main-info green pay-amount">1000</p>
      </div>
    </main>
    <footer>
      <button class="primary-btn confirm-btn">确认申请兑付</button>
    </footer>
  </popup>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
    },
  },
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
@import '../../assets/css/root.css';
.popup-box {
  padding: .4rem;
  background-color: transparent;
  background-color: #fff;
  border-radius: var(--g-border-radius)  var(--g-border-radius) 0 0;
}
.close-icon {
  float: right;
  fill: #D6D6D6;
}
.main-box {
  margin: .2rem 0 1rem;
}
.main-item {
  display: flex;
  margin-bottom: .28rem;
  color: var(--g-color-black);
}
.main-label {
  flex: 0 0 2.3rem;
  margin-right: .49rem;
  color: var(--g-color-grey);
  text-align: right;
}
.main-info {
  line-height: .53rem;
}
.input-label {
  line-height: .93rem;
}
.input {
  height: .93rem;
  padding: 0 .27rem;
  line-height: .93rem;
  width: 4rem;
  font-weight: 900; 
  border: 1px solid #999;
}
.pay-amount {
  line-height: .68rem;
  font-size: .48rem;
  font-weight: 900;
}

.confirm-btn {
  font-size: var(--g-xs-font-size);
  line-height: 1.07rem;
}
</style>
