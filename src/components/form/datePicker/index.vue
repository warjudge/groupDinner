<template>
  <popup class="date-picker-box" :value="visible"
    @on-hide="cancelSelect" @on-show="toogleVisible(true)">
    <header class="date-picker-hd">
      <button class="text-btn fl" @click="cancelSelect">取消</button>
      <div class="time-box" v-if="type === 'dayRange'">
        <label class="time-text" :class="{ selected: activeTime === 'start' }" @click="toogleActiveTime('start')">{{ startTime }}</label>
        <label class="time-split">至</label>
        <label class="time-text" :class="{ selected: activeTime === 'end' }" @click="toogleActiveTime('end')">{{ endTime }}</label>
      </div>
      <div class="time-box" v-if="type === 'month'">
        <label class="time-text selected">{{ monthDate }}</label>
      </div>
      <button class="text-btn fr" @click="handleSelect">确定</button>
    </header>
    <div class="type-btn-box">
      <button class="date-type-btn" @click="toogleType">
        {{ type === 'month' ? '按日选择' : '按月选择' }}
        <p class="toogle-pic">
          <img src="~img/toogle.png" style="height: 100%"/>
        </p>
      </button>
    </div>
    <datetime-view v-model="startTime" :endDate="endTime" v-show="activeTime === 'start'" format="YYYY-MM-DD"></datetime-view>
    <datetime-view v-model="endTime" :startDate="startTime" v-show="activeTime === 'end'" format="YYYY-MM-DD"></datetime-view>
    <datetime-view v-model="monthDate" v-show="activeTime === 'month'" format="YYYY-MM"></datetime-view>
  </popup>
</template>

<script>
import DateUtil from '../../../utils/date.js';

const formatMap = {
  'dayRange': 'YYYY-MM-DD',
  'month': 'YYYY-MM',
};

export default {
  props: {
    visible: {
      required: true,
    },
    datePeriod: { // 时间戳数组
      required: true,
    },
    type: {
      required: true,
      default: 'month', // dayRange 日期区间选择  month 月份选择
    },
  },
  data () {
    const startTime = (new Date(this.datePeriod[0])).format('yyyy-MM-dd');
    const endTime = (new Date(this.datePeriod[1])).format('yyyy-MM-dd');
    const monthDate = (new Date(this.datePeriod[0])).format('yyyy-MM');
    const activeTime = this.type === 'month' ? 'month' : 'start';
    return {
      activeTime, // start 起始时间  end  结束时间  month 月份选择
      startTime,
      endTime,
      monthDate,
    }
  },
  computed: {
    dateFormat() {
      return formatMap[this.type];
    },
  },
  methods: {
    toogleVisible(value) {
      this.$emit('update:visible', value);
    },
    toogleType() {
      const { type } = this;
      if (type === 'dayRange') {
        this.$emit('update:type', 'month');
        this.activeTime = 'month';
      } else {
        this.$emit('update:type', 'dayRange');
        this.activeTime = 'start';
      }
    },
    toogleActiveTime(time) {
      this.activeTime = time;
    },
    cancelSelect() {
      this.startTime = (new Date(this.datePeriod[0])).format('yyyy-MM-dd');
      this.endTime = (new Date(this.datePeriod[1])).format('yyyy-MM-dd');
      this.monthDate = (new Date(this.datePeriod[0])).format('yyyy-MM');
      this.toogleVisible(false);
    },
    handleSelect() { // 点击确认按钮，设置选中的值,触发change事件
      const { type, startTime, endTime, monthDate } = this;
      if (type === 'dayRange') {
        this.datePeriod[0] = this.dateStr2timestamp(startTime);
        this.datePeriod[1] = this.dateStr2timestamp(endTime, 23, 59, 59);
      } else {
        this.datePeriod[0] = DateUtil.getMonthFirstDayTimestamp(monthDate);
        this.datePeriod[1] = DateUtil.getMonthLastDayTimestamp(monthDate);
      }
      this.toogleVisible(false);
      this.$emit('change', type === 'dayRange' ? `${startTime} - ${endTime}` : monthDate);
    },
    dateStr2timestamp(dateStr, hour = 0, minute = 0, seconds = 0) {
      const dateStrList = dateStr.split('-');
      const date = new Date(dateStrList[0], dateStrList[1] - 1, dateStrList[2], hour, minute, seconds);
      return date.getTime();
    },
  }
}
</script>

<style scoped>
@import '../../../assets/css/root.css';
.date-picker-box {
  background-color: transparent;
}
.date-picker-hd {
  padding: 0 .4rem;
  line-height: 1.2rem;
  text-align: center;
  background-color: #fff;
  border-radius: var(--g-border-radius)  var(--g-border-radius) 0 0;
}
.text-btn {
  line-height: 1rem;
}
.type-btn-box {
  padding: .23rem 0;
  text-align: center;
  background-color: #f6f6f6;
}
.date-type-btn {
  padding: 0 .44rem;
  line-height: .88rem;
  border: 1px solid #777;
  border-radius: .44rem;
}
.toogle-pic {
  display: inline-block;
  height: .24rem;
  margin-left: .12rem;
}
.time-box {
  display: inline-block;
  color: var(--g-color-black);
}
/deep/ .text-btn {
  line-height: 1.2rem;
}
.time-text {
  display: inline-block;
  width: 2.1rem;
  height: 1.2rem;
  vertical-align: top;
  font-size: .35rem;
  font-weight: 900;
  color: var(--g-color-black);
  &.selected {
    position: relative;
    color: var(--bgc-levelone);
    &::after{
      content: '';
      position: absolute;
      left: 50%;
      margin-left: -0.27rem;
      bottom: 0.23rem;
      width: .53rem;
      height: .05rem;
      background-color: var(--bgc-levelone);
    }
  }
}
.time-split {
  margin: .47rem;
}
</style>
