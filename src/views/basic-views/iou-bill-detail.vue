<!-- 账单详情 -->
<template>
  <section class="wrap">
    <!-- 返回箭头 -->
    <back-block title=""></back-block>
    <!-- 白条详情 -->
    <info class="white-bgc-box detail-box" labelWidth="2rem">
      <!-- 支付账单详情 -->
      <info-item label="支付企业" info="复杂美" labelClass="green"></info-item>
      <info-item label="支付额度" info="复杂美"></info-item>
      <info-item label="账单类型" info="复杂美"></info-item>
      <info-item label="订单编号" info="复杂美"></info-item>
      <info-item label="支付时间" info="复杂美"></info-item>
      <!-- 转账账单详情 -->
      <info-item label="转账企业" info="复杂美"></info-item>
      <info-item label="转账额度" info="复杂美"></info-item>
      <info-item label="账单类型" info="复杂美"></info-item>
      <info-item label="转账编号" info="复杂美"></info-item>
      <info-item label="支付时间" info="复杂美"></info-item>
      <!-- 出入金账单兑付详情 -->
      <info-item label="兑付企业" info="复杂美"></info-item>
      <info-item label="账单类型" info="复杂美"></info-item>
      <info-item label="白条编号" info="复杂美"></info-item>
      <info-item label="兑付额度" info="复杂美"></info-item>
      <info-item label="兑付总计" info="复杂美"></info-item>
      <info-item label="承兑日期" info="复杂美"></info-item>
      <info-item label="申请日期" info="复杂美"></info-item>
      <info-item label="确认兑付日期" info="复杂美"></info-item>
      <info-item label="收到兑付日期" info="复杂美"></info-item>
    </info>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      default: '白条兑付详情',
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
@import '../../assets/css/iou/detail-info.css';
</style>
