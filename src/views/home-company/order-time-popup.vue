<!-- 公司 设置餐厅点餐时间 -->
<template>
  <popup :value="visible" @on-hide="toogleVisible(false)" @on-show="toogleVisible(true)">
    <section class="add-main">
      <p class="close-btn" @click="toogleVisible(false)"></p>
      <header class="add-hd">
        <img class="add-pic" src="../../assets/image/meal.png"/>
        <h1 class="add-title">外婆家（学院路店）</h1>
      </header>
      <main class="add-content">
        <h1 class="content-title">设置点餐类型及时间</h1>
        <!-- 早餐 -->
        <div class="tab-hd" @click="toogleTab(1)">
          <Radio class="radio" v-model="info.hasBreakfast"/>
          <span class="period">早餐</span>
          <span class="time">{{info.breakfastOn}}-{{info.breakfastOff}}</span>
          <span class="tab-btn hide-btn"></span>
        </div>
        <time-range-picker v-show="activeTab === 1" 
          :startTime.sync="info.breakfastOn" :endTime.sync="info.breakfastOff"/>
        <!-- 午餐 -->
        <div class="tab-hd" @click="toogleTab(2)">
          <Radio class="radio" v-model="info.hasLunch"/>
          <span class="period">午餐</span>
          <span class="time">{{info.lunchOn}}-{{info.lunchOff}}</span>
          <span class="tab-btn hide-btn" @click="toogleTab(2)"></span>
        </div>
        <time-range-picker v-show="activeTab === 2" 
          :startTime.sync="info.lunchOn" :endTime.sync="info.lunchOff"/>
        <!-- 晚餐 -->
        <div class="tab-hd" @click="toogleTab(3)">
          <Radio class="radio" v-model="info.hasDinner"/>
          <span class="period">晚餐</span>
          <span class="time">{{info.dinnerOn}}-{{info.dinnerOff}}</span>
          <span class="tab-btn hide-btn"></span>
        </div>
        <time-range-picker v-show="activeTab === 3" 
          :startTime.sync="info.dinnerOn" :endTime.sync="info.dinnerOff"/>
        <!-- 确定按钮 -->
        <button class="confirm-btn">确定</button>
      </main>
    </section>
  </popup>
</template>

<script>
export default {
  props: {
    visible: {
      required: true,
    },
    orderInfo: {
      required: true,
    },
  },
  data () {
    return {
      activeTab: 0,
      timeRange: ['', ''],
      info: JSON.parse(JSON.stringify(this.orderInfo)),
    }
  },
  methods: {
    toogleVisible(visible) {
      this.$emit('update:visible', visible);
    },
    toogleTab(tab) {
      this.activeTab = tab === this.activeTab ? 0 : tab;
    },
  },
}
</script>

<style scoped>
@import '../../assets/css/root.css';
.add-main {
  width: 100%;
  padding-bottom: .4rem;
  background-color: #fff;
  border-radius: var(--g-border-radius) var(--g-border-radius) 0 0;
}
.close-btn {
  content: 'X';
  position: absolute;
  top: .4rem;
  right: .4rem;
  font-size: .4rem;
  color: #d6d6d6;
}
.add-hd {
  padding: .55rem;
  line-height: 0;
}
.add-pic {
  height: 1.33rem;
  margin-right: .37rem;
  vertical-align: middle;
}
.add-title {
  display: inline-block;
  font-size: .45rem;
  font-weight: 800;
  color: var(--g-color-dark-black);
  vertical-align: middle;
}
.content-title {
  padding: 0 .53rem;
  margin-bottom: .2rem;
  line-height: .53rem;
  color: var(--g-color-grey);
}

.tab-hd {
  display: flex;
  align-items: center;
  padding: .53rem .4rem;
  line-height: .53rem;
  color: var(--g-color-black);
  border: 1px solid #EDEDED;
}
.radio {
  margin-right: .24rem;
}
.period {
  margin-right: .29rem;
}
.time {
  flex: 1;
}
.tab-btn {
  width: .38rem;
  height: .38rem;
  background: no-repeat center;
  background-size: cover;
}
.open-btn {
  background-image: url('~img/common/open.png');
}
.hide-btn {
  background-image: url('~img/common/hide.png');
}
.time-picker {
  flex: 1;
}
.time-picker-box {
  color: #444;
}
.time-range-picker {
  background-color: #FAFCFD;
}

.confirm-btn {
  @apply --bgc-button-gradientone;
  display: block;
  width: calc(100% - .8rem);
  margin: auto;
}
</style>
