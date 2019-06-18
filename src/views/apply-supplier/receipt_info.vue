<template>
  <div>
    <header>
      <x-icon type="ios-arrow-left" class="x_icon" size="0.8rem" @click="go2router('/qualificationInfo')"></x-icon>
      <span></span>
    </header>
    <div class="title">{{titleText}}</div>
    <!-- <div class="title_tip">申请开店前，请准备以下<span>6</span>项资料</div> -->
    <div class="title_tip">{{titleTip}}</div>
    <ul>
      <li>
        <group>
          <x-input title="银行卡号" v-model="value" placeholder="请输入银行卡号"></x-input>
        </group>
        <group>
          <x-input title="法人姓名" v-model="value" placeholder="请输入法人姓名"></x-input>
        </group>
        <group>
          <cell title="银行" :value="bankName" :link="{path:'/bank-list',query:{type:this.$route.query.type,text:this.$route.query.text}}"></cell>
        </group>
        <group>
          <x-input title="预留手机号" v-model="value" placeholder="请输入预留手机号"></x-input>
        </group>
      </li>
    </ul>
    <footer>
      <div class="u_button" @click="submit()">下一步</div>
    </footer>
  </div>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      titleText:'收款信息',
      titleTip:'用于汇入来自约餐么外卖的收入',
      value:'',
      bankName:'请选择银行名称',
    }
  },
  mounted(){
    
  },
  methods:{
    go2router(item){
      // this.$router.push({path:item,query:{type:this.$route.query.type,text:this.$route.query.text}});
    },
    submit(){
      // this.go2router('/application-submit');
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
ul{
  background-color: var(--bgc-levelone);
  padding: 0 .4rem .4rem .4rem;
}
li{
  width: 100%;
  position: relative;
  margin: 0 auto;
  margin-bottom: .306667rem;
  padding: .56rem 0 .506667rem .293333rem;
  padding-top: 0;
  background-color: #fff;
  box-shadow:0 .213333rem .28rem 0 rgba(11,102,204,0.5);
  border-radius:.373333rem;
}
footer{
  background-color: var(--bgc-levelone);
  padding-bottom: 1.4rem;
}
.u_button{
  @apply --bgc-button-gradienttwo;
  margin: 0 auto;
  font-size: .48rem;
  color: #375270;
}

</style>
