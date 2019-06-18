<template>
  <div>
    <header>
      <x-icon type="ios-arrow-left" class="x_icon" size="0.8rem" @click="go2router"></x-icon>
      <span></span>
    </header>
    <div class="result_tip" v-show="isError">{{msgQualification}}{{msgReceipt}}</div>
    <div class="title">审核不通过</div>
    <div class="title_tip">继续完善信息</div>
    <ul>
      <li>
        <group>
          <cell :class="[statusQualification?'success':'failure']" title="资质信息" :value="rltQualification" :link="linkQualification"></cell>
        </group>
        <group>
          <cell :class="[statusReceipt?'success':'failure']" title="收款信息" :value="rltReceipt" :link="linkReceipt"></cell>
        </group>
      </li>
    </ul>
    <footer v-show="isShowBtn">
      <div class="u_button" @click="submit()">提交</div>
    </footer>
  </div>
</template>

<script>
  import {validateApplyCheck, applyPermitSubmit} from '../../service/apply-company.js'
export default {
  components: {

  },
  data () {
    return {
      titleText:'',
      isError:false,
      statusQualification:true,
      statusReceipt:true,
      rltQualification:'审核通过',
      rltReceipt:'审核通过',
      linkQualification:{path:'/company-qualification-info',query:{reapply:true}},
      linkReceipt:{path:'/company-receipt-info',query:{reapply:true}},
      msgQualification:'',
      msgReceipt:'',
      isShowBtn:false,
    }
  },
  mounted(){
    this.getValidateApplyCheck();
    // if(this.$route.query.type==1){
    //   this.titleText='';
    // }else if(this.$route.query.type==2){
    //   this.titleText=''
    // }
    // this.titleText=this.$route.query.text;
  },
  methods:{
    go2router(){
      // if(this.$route.query.type==1){
      //   this.$router.push({path:'/storeInfo',query:{type:1,text:this.$route.query.text}});
      // }else if(this.$route.query.type==2){
      //   this.$router.push({path:'/application',query:{type:2,text:this.$route.query.text}});
      // }
    },
    async submit(){
      const res = await applyPermitSubmit({});
      console.log('res1',res);
      if(res.code=='200'){
        sessionStorage.clear();
        this.$router.push({path:'/company-apply-submit'});
      }
    },
    async getValidateApplyCheck(){
      const res = await validateApplyCheck({});
      console.log('res2', res);
      this.syncStatus(res.data.aptitude,res.data.payinfo,res.data.aptitudeResult,res.data.payResult);
      if(this.$route.query.isReapply){
        this.isShowBtn=true;
        if(sessionStorage.getItem('changeQualification')){
          this.statusQualification=true;
          this.rltQualification='已修改';
          this.linkQualification='';
          this.isError=false;
        }
        if(sessionStorage.getItem('changeReceipt')){
          this.statusReceipt=true;
          this.rltReceipt='已修改';
          this.linkReceipt='';
          this.isError=false;
        }
      }
    },
    syncStatus(oriStatusQualification,oriStatusReceipt,MsgQ,MsgR){
      switch(oriStatusQualification){
        case 1:
          this.rltQualification='待初审';
          this.statusQualification=true;
          this.linkQualification='';
          break;
        case 2:
          this.rltQualification='初审失败';
          this.statusQualification=false;
          this.linkQualification={path:'/company-qualification-info',query:{reapply:true}};
          this.msgQualification=MsgQ;
          this.isError=true;
          break;
        case 4:
          this.rltQualification='待复审';
          this.statusQualification=true;
          this.linkQualification='';
          break;
        case 8:
          this.rltQualification='复审成功';
          this.statusQualification=true;
          this.linkQualification='';
          break;
        case 16:
          this.rltQualification='复审失败';
          this.statusQualification=false;
          this.linkQualification={path:'/company-qualification-info',query:{reapply:true}};
          this.msgQualification=MsgQ;
          this.isError=true;          
          break;
      }
      switch(oriStatusReceipt){
        case 1:
          this.rltReceipt='待初审';
          this.statusReceipt=true;
          this.linkReceipt='';
          break;
        case 2:
          this.rltReceipt='初审失败';
          this.statusReceipt=false;
          this.linkReceipt={path:'/company-receipt-info',query:{reapply:true}};
          this.msgReceipt=MsgR;
          this.isError=true;
          break;
        case 4:
          this.rltReceipt='待复审';
          this.statusReceipt=true;
          this.linkReceipt='';
          break;
        case 8:
          this.rltReceipt='复审成功';
          this.statusReceipt=true;
          this.linkReceipt='';
          break;
        case 16:
          this.rltReceipt='复审失败';
          this.statusReceipt=false;
          this.linkReceipt={path:'/company-receipt-info',query:{reapply:true}};
          this.msgReceipt=MsgR;
          this.isError=true;         
          break;
      }
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
