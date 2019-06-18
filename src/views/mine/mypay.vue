<template>
  <div class="mypay">
    <header>
      <x-icon type="ios-arrow-left" class="x_icon" @click="redirectToMain()"></x-icon>
    </header>
    <div class="title">{{title}}</div>
    <div class="content">
      <div class="form-panel" v-if="step==StepConsts.StepOne">
        <h3 class="form-title">转账</h3>
        <group title=" ">
          <cell title='对方账户'>
            <input type="text" v-model="toPhone" placeholder="输入对方手机号码">
          </cell>
          <cell title='支付金额'>
            <input type="text" v-model="payAmount" placeholder="输入支付金额">
          </cell>
          <cell class="btn-panel">
            <button class="single-btn" @click="stepOne2Two">下一步</button>
          </cell>
        </group>
      </div>

      <!--确认转账-->
      <div class="form-panel" v-if="step==StepConsts.StepThree">
        <h3 class="form-title">确认转账</h3>
        <group title=" ">
          <cell title='对方账户'>
            <input type="text" :value="toPhone" placeholder="" readonly>
          </cell>
          <cell title='支付金额'>
            <input type="text" :value="payAmount" placeholder="" readonly>
          </cell>
          <cell class="btn-panel">
            <button class="single-btn" @click="stepThree2Four">转账</button>
          </cell>
        </group>
      </div>
      
      <!--支付成功-->
      <div class="form-panel" v-if="step==StepConsts.StepFour">
        <h3>转账成功</h3>
        <div style="text-align:center;">
          <div style="width:1.2rem;height:1.2rem;background-color:blue;display:inline-block;"></div>
          <br>
          <span style="display:inline-block;color:black;">收款方：张建</span>
          <br>
          <span style="display:inline-block;color:black;">13322222222</span>
          <br>
          <span style="display:inline-block;color:black;">支付金额：￥3600</span>
          <cell class="btn-panel">
            <button class="single-btn" @click="redirectToMain">关闭</button>
          </cell>
        </div>
      </div>
    </div>

    <!--弹框输入姓名-->
    <div v-if="step==StepConsts.StepTwo" class="cover-dialog">
      <div class="cover-dialog-mask">
      </div>
      <div class="cover-dialog-middle">
        <div class="form-panel">
          <group title=" ">
            <cell title='姓名'>
              <input type="text" v-model="stepTwoSurname" style="border:solid #ccc 1px;width:0.6rem;">啊
            </cell>
            <cell class="btn-panel">
              <button class="single-btn" @click="stepTwo2Three">确认</button>
            </cell>
          </group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let steps = {
  StepOne:0,
  StepTwo:1,
  StepThree:2,
  StepFour:3,
}
export default {
  data () {
    return {
      title:'支付',
      toPhone:'',
      payAmount:'',
      isShowStepTwoDlg:true,
      stepTwoSurname:'',
      step:steps.StepOne,
      StepConsts:steps
    }
  },
  mounted(){
    console.log("this.step=>", this.step);
  },
  methods:{
    redirectToMain(){
      this.$emit('close');
    },
    stepOne2Two(){
      this.step = this.StepConsts.StepTwo;
    },
    stepTwo2Three(){
      this.step = this.StepConsts.StepThree;
    },
    stepThree2Four(){
      this.step = this.StepConsts.StepFour;
    }
  },
}
</script>

<style scoped>
@import '../../assets/css/root.css';
.mypay{
  background-color: #4391e8;
  height: 100%;
}

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
  margin-bottom: 1.2rem;
}

.form-title{
  font-size:0.6rem;
  color:black;
  text-align:center;
}
</style>
<style src="../../assets/css/mine.css">
  
</style>