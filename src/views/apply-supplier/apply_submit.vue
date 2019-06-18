<template>
  <div>
    <header>
      <x-icon type="ios-arrow-left" class="x_icon" size="0.8rem" @click="go2router('/login')"></x-icon>
      <span></span>
    </header>
    <div class="title">申请完成</div>
    <!-- <div class="title_tip">申请开店前，请准备以下<span>6</span>项资料</div> -->
    <div class="content">
      <x-icon type="ios-checkmark" class="u_icon" size="2rem"></x-icon>
      <div class="u_result">提交成功，请等待审核结果</div>
      <div class="u_tip">工作人员会在1-3个工作日内进行审核，审核结果会短信通知（187****6412）手机号码</div>
    </div>
  </div>
</template>

<script>

export default {
  components: {

  },
  data () {
    return {
      titleText:'',
    }
  },
  mounted(){
    // this.titleText=this.$route.query.text;
  },
  methods:{
    go2router(item){
      this.$router.push('/login');
    },
  },
}
</script>

<style scoped>
@import '../../assets/css/root.css';
header{
  width: 100%;
  height: 1.166667rem;
  padding: .4rem .386667rem 0 .2rem;
  color:var(--font-color-title);
  display: flex;
  justify-content: space-between;
  margin-bottom: .466667rem;
}
.title{
  @apply --title-levelone;
  margin-bottom: .253333rem;
}
.title_tip{
  width: 100%;
  padding-left: .373333rem;
  color: #fff;
  margin-bottom: .866667rem;
  span{
    color:##F7D700;
  }
}
.content{
  width: 100%;
  padding: 4rem .413333rem 0 .613333rem;
  position: relative;
  .u_icon{
    position: absolute;
    top: 35%;
    margin-top: -1rem;
    left: 50%;
    margin-left: -1rem;
    fill: #fff;
  }
  .u_result{
    height: .973333rem;
    font-size: .693333rem;
    text-align: center;
    line-height: .973333rem;
    color: #fff;
    font-weight: 600;
  }
  .u_tip{
    text-align: center;
    padding-top: .453333rem;
    padding-bottom: 1.733333rem;
    font-size: .373333rem;
    color: #fff;
  }
}
</style>
