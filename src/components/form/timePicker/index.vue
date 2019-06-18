<!-- 时间选择器 -->
<template>
  <Picker class="time-picker" :data="timeList" :value="timeValue"
    @on-change="handlechange" />
</template>

<script>
import { Picker } from 'vux';

export default {
  props: {
    value: {
      required: true,
      type: String,
    },
    min: {
      default: '',
      type: String,
    },
    max: {
      default: '',
      type: String,
    },
  },
  computed: {
    timeValue() {
      return this.value.split(':');
    },
    timeList() {
      const { min, max, timeValue } = this;
      let startHour = 0, endHour = 24, startMinute = 0, endMinute = 60;
      if (min) {
        startHour = +min.split(':')[0];
        startMinute = +min.split(':')[1];
      }
      if (max) {
        endHour = +max.split(':')[0] + 1;
        endMinute = +max.split(':')[1] + 1;
      }
      let timeList = [];
      timeList[0] = [];
      for (let i = startHour; i < endHour; i++) {
        let value = i.toString().padStart(2, 0);
        timeList[0].push({ name: `${value}点`, value });
      }
      timeList[1] = [];
      let minMinute = +(timeValue[0].value || timeValue[0]) > +startHour ? 0 : startMinute;
      let maxMinute = +(timeValue[0].value || timeValue[0]) < +endHour ? 60 : endMinute;
      for (let i = minMinute; i < maxMinute; i++) {
        let value = i.toString().padStart(2, 0);
        timeList[1].push({ name: `${value}分`, value });
      }
      return timeList;
    },
  },
  data () {
    return {
    }
  },
  methods: {
    handlechange(resultList) {
      this.$emit('input', `${resultList[0]}:${resultList[1]}`);
    },
  },
  components: {
    Picker,
  },
}
</script>

<style scoped>
@import '../../../assets/css/root.css';

</style>
