<template>
  <div>
    <header>
      <x-icon type="ios-arrow-left" class="x_icon" size="0.8rem" @click="go2router"></x-icon>
      <span></span>
    </header>
    <div class="title">团餐么-公司入驻</div>
    <div class="title_tip">继续完善信息</div>
    <ul>
      <li>
        <group>
          <cell :class="[statusQualification?'success':'normal']" title="资质信息" :value="rltQualification" :link="linkQualification"></cell>
        </group>
        <!-- <group>
          <cell class="failure" title="手持身份证" :value="rltQualification" :link="{path:'/idcard-upload',query:{type:this.$route.query.type,text:this.$route.query.text}}"></cell>
        </group> -->
        <group>
          <cell :class="[statusReceipt?'success':'normal']" title="收款信息" :value="rltReceipt" :link="linkReceipt"></cell>
        </group>
      </li>
    </ul>
    <footer>
      <div class="u_button" @click="submit()">提交</div>
    </footer>
  </div>
</template>

<script>
  import {validateApplyInfo, applyPermit} from '../../service/apply-company.js'
export default {
  components: {
    
  },
  data () {
    return {
      titleText:'',
      statusQualification:true,
      statusReceipt:true,
      rltQualification:'已完成',
      rltReceipt:'已完成',
      linkQualification:{path:'/company-store-info',query:{refill:true}},
      linkReceipt:{path:'/company-store-info',query:{refill:true}},
    }
  },
  mounted(){
    this.getValidateApplyInfo();
  },
  methods:{
    go2router(){
      
    },
    async submit(){
      const res = await applyPermit({});
      console.log('res',res);
      if(res.code=='200'){
        this.$router.push({path:'/company-apply-submit'});
      }
    },
    async getValidateApplyInfo(){
      const res = await validateApplyInfo({});
      console.log('res', res);
      this.statusQualification=res.data.aptitude;
      this.statusReceipt=res.data.payinfo;
      this.rltQualification=res.data.aptitude==true?'已完成':'立即填写';
      this.rltReceipt=res.data.payinfo==true?'已完成':'立即填写';
      this.linkQualification=res.data.aptitude==true?'':{path:'/company-qualification-info',query:{refill:true}};
      this.linkReceipt=res.data.payinfo==true?'':{path:'/company-receipt-info',query:{refill:true}};
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
.result_tip{
  width: 100%;
  padding: .266667rem .133333rem .453333rem .213333rem;
  font-size: .373333rem;
  text-align: center;
  background-color: #FC8A31;
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
