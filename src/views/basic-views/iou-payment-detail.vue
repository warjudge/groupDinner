<!-- 白条兑付详情 -->
<template>
  <section class="wrap">
    <!-- 返回箭头 -->
    <back-block :title="this.title"></back-block>
    <!-- 白条详情 -->
    <info labelWidth="3.37rem" class="detail-box">
      <info-item label="开单企业" detail="33复杂美集团区块链网络技术科技股份有限公司"></info-item>
      <info-item label="持有企业" detail="麦当劳"></info-item>
      <info-item label="单据总额" detail="4000"></info-item>
      <info-item label="持有额度" detail="6000"></info-item>
      <!-- 待兑付详情 -->
      <info-item label="兑付额度" detail="6000"></info-item>
      <!-- 待兑付且逾期详情 兑付已完成但逾期详情-->
      <info-item label="罚息" detail="2"></info-item>
      <!-- 待兑付详情 -->
      <info-item label="总计额度" detail="6000"></info-item>
      <!-- 待兑付详情 -->
      <info-item label="申请兑付日期" detail="2018-10-10"></info-item>
      <info-item label="承兑日期" detail="2018-10-11"></info-item>
      <!-- 待确认兑付详情 -->
      <info-item label="确认兑付日期" detail="2018-10-11"></info-item>
      <!-- 待确认兑付详情 -->
      <info-item label="确认兑付日期" detail="6000"></info-item>
      <!-- 兑付已完成详情 -->
      <info-item label="兑付额度" detail="6000"></info-item>
      <!-- 待兑付且逾期详情 -->
      <info-item label="逾期" detail="6000"></info-item>
      <!-- 转账详情 -->
      <info-item label="白条编号" detail="309988655"></info-item>
      <info-item label="转账企业收款人" detail="张理理"></info-item>
      <info-item label="转账额度" detail="4000.89"></info-item>
      <info-item label="转账日期" detail="2018-10-08"></info-item>
    </info>
  </section>
</template>

<script>
export default {
  props: {
    type: {
      required: true,
    },
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
