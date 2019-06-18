<!-- 筛选统计控件 -->
<template>
  <section class="filter-box">
    <div class="bill-info">
      <p class="bill-year">{{ dateStr }}</p>
      <p class="bill-total-number">
        <!-- 统计值 插槽 -->
        <slot></slot>
      </p>
    </div>
    <p class="date-picker-pic">
      <img src="~img/iou/datepicker.png" style="height: 100%" @click="openDatePicker"/>
    </p>
    <!-- 时间选择控件 -->
    <date-picker v-if="visible" :visible.sync="visible" :datePeriod="datePeriod" :type.sync="type" @change="handleChange"></date-picker>
  </section>
</template>

<script>
import datePicker from '@/components/form/datePicker/index';

export default {
  props: {
    datePeriod: {
      required: true,
      type: Array,
    },
  },
  data () {
    const dateStr = (new Date(this.datePeriod[0])).format('yyyy-MM'); // 当前选中时间的字符串形式
    return {
      visible: false,
      type: 'month',
      dateStr, // 当前显示的字符串
    }
  },
  methods: {
    openDatePicker() {
      this.visible = true;
    },
    handleChange(dateStr) {
      this.dateStr = dateStr;
      this.$emit('change');
    },
  },
  components: {
    datePicker,
  }
}
</script>

<style scoped>
@import '../../assets/css/root.css';

.filter-box {
  display: flex;
  align-items: center;
  padding: 0 .4rem;
  color: #fff;
  background-color: var(--bgc-leveltwo);
}
.bill-info {
  flex: 1;
  padding: .2rem 0 .24rem;
  margin-right: .4rem;
}
.bill-year {
  font-weight: 800;
}
.bill-total-number {
  font-size: var(--g-md-font-size);
}
.date-picker-pic {
  height: .52rem;
}
</style>
