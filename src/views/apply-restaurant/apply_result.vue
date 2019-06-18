<template>
  <div>
    <header>
      <x-icon type="ios-arrow-left" class="x_icon" size="0.8rem" @click="go2router"></x-icon>
      <span></span>
    </header>
    <div class="title">团餐么-开店申请</div>
    <div class="title_tip">继续完善信息</div>
    <ul>
      <li>
        <group>
          <cell :class="[statusStore?'success':'normal']" title="店铺信息" :value="rltStore" :link="linkStore"></cell>
        </group>
        <group>
          <cell :class="[statusQualification?'success':'normal']" title="资质信息" :value="rltQualification" :link="linkQualification"></cell>
        </group>
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
  import {validateApplyInfo, applyPermit} from '../../service/apply-restaurant.js'
export default {
  components: {

  },
  data () {
    return {
      titleText:'',
      statusStore:true,
      statusQualification:true,
      statusReceipt:true,
      rltStore:'已完成',
      rltQualification:'已完成',
      rltReceipt:'已完成',
      linkStore:{path:'/restaurant-store-info',query:{refill:true}},
      linkQualification:{path:'/restaurant-qualification-info',query:{refill:true}},
      linkReceipt:{path:'/restaurant-receipt-info',query:{refill:true}},
    }
  },
  mounted(){
    this.getValidateApplyInfo();
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
      const res = await applyPermit({});
      console.log('res',res);
      if(res.code=='200'){
        this.$router.push({path:'/restaurant-apply-submit'});
      }
    },
    async getValidateApplyInfo(){
      const res = await validateApplyInfo({});
      console.log('res', res);
      this.statusStore=res.data.store;
      this.statusQualification=res.data.aptitude;
      this.statusReceipt=res.data.payinfo;
      this.rltStore=res.data.store==true?'已完成':'立即填写';
      this.rltQualification=res.data.aptitude==true?'已完成':'立即填写';
      this.rltReceipt=res.data.payinfo==true?'已完成':'立即填写';
      this.linkStore=res.data.store==true?'':{path:'/restaurant-store-info',query:{refill:true}};
      this.linkQualification=res.data.aptitude==true?'':{path:'/restaurant-qualification-info',query:{refill:true}};
      this.linkReceipt=res.data.payinfo==true?'':{path:'/restaurant-receipt-info',query:{refill:true}};
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
