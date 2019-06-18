<!-- 时间区间选择 -->
<template>
  <section class="time-range-picker">
    <time-picker class="time-picker" :value="startTime" @input="$emit('update:startTime', arguments[0])" 
      :max="endTime"/>
    <span>至</span>
    <time-picker class="time-picker" :value="endTime" @input="$emit('update:endTime', arguments[0])" 
      :min="startTime"/>
  </section>
</template>

<script>
export default {
  props: {
    startTime: {
      required: true,
      type: String,
    },
    endTime: {
      required: true,
      type: String,
    },
  },
  data () {
    return {

    }
  },
}
</script>

<style scoped>
@import '../../assets/css/root.css';

.time-range-picker {
  display: flex;
  align-items: center;
  color: var(--g-color-black);
  background-color: #fff;
}
.time-picker {
  flex: 1;
}
</style>
