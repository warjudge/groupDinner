<template>
  <div>
    <header>
      <x-icon type="ios-arrow-left" class="x_icon" size="0.8rem" @click="go2router"></x-icon>
      <span></span>
    </header>
    <div class="title">{{titleText}}</div>
    <!-- <div class="title_tip">申请开店前，请准备以下<span>6</span>项资料</div> -->
    <ul>
      <li class="special">
        <group>
          <cell :class="[status.bussiness?'success':'normal']" title="营业执照" :value="status.busFill" :link="status.busPath" inline-desc="或特许证件"></cell>
        </group>
        <group>
          <cell :class="[status.idcard?'success':'normal']" title="法人手持身份证" :value="status.idFill" :link="status.idPath" inline-desc="或其他有效证件"></cell>
        </group>
        <group>
          <cell :class="[status.license?'success':'normal']" title="许可证" :value="status.licFill" :link="status.licPath" inline-desc="或特许证件"></cell>
        </group>
      </li>
    </ul>
    <footer>
      <div class="u_button" @click="submit()">{{btnText}}</div>
    </footer>
  </div>
</template>

<script>
  import {viewAptitudeFill} from '../../service/apply-restaurant.js'
export default {
  components: {

  },
  data () {
    return {
      titleText:'2/3资质信息',
      isReapply:false,
      isRefill:false,
      status:{
        bussiness:false,
        busFill:'上传营业执照',
        busPath:{path:'/restaurant-businessLicense-upload-case'},
        idcard:false,
        idFill:'上传身份证',
        idPath:{path:'/restaurant-idcard-upload'},
        license:false,
        licFill:'上传许可证',
        licPath:{path:'/restaurant-license-upload-case'},
      },
      btnText:'下一步',
    }
  },
  mounted(){
    if(this.$route.query.reapply){
      this.isReapply=this.$route.query.reapply;
      this.status.busPath={path:'/restaurant-businessLicense-upload-case',query:{reapply:true}};
      this.status.idPath={path:'/restaurant-idcard-upload',query:{reapply:true}};
      this.status.licPath={path:'/restaurant-license-upload-case',query:{reapply:true}};
      if(sessionStorage.getItem('business')){
        this.status.bussiness=true;
        this.status.busFill='已修改';
        this.status.busPath='';
      }
      if(sessionStorage.getItem('idcard')){
        console.log(1);
        this.status.idcard=true;
        this.status.idFill='已修改';
        this.status.idPath='';
      }
      if(sessionStorage.getItem('license')){
        this.status.license=true;
        this.status.licFill='已修改';
        this.status.licPath='';
      }
      this.btnText='确定';
    }else if(this.$route.query.refill){
      this.isRefill=this.$route.query.refill;
      this.status.busPath={path:'/restaurant-businessLicense-upload-case',query:{refill:true}};
      this.status.idPath={path:'/restaurant-idcard-upload',query:{refill:true}};
      this.status.licPath={path:'/restaurant-license-upload-case',query:{refill:true}};
      this.btnText='确定';
      this.checkAptitudeFill();
    }else{
      this.checkAptitudeFill();
    }
  },
  methods:{
    go2router(){
      
    },
    submit(){
      if(this.isReapply){
        sessionStorage.changeQualification = true;
        this.$router.push({path:'/restaurant-apply-result-error',query:{isReapply:true}});
      }else if(this.isRefill){
        this.$router.push({path:'/restaurant-apply-result',query:{refill:true}});
      }else{
        this.$router.push({path:'/restaurant-receipt-info'});
      }
    },
    
    async checkAptitudeFill(){
      const res = await viewAptitudeFill({});
      console.log('res',res);
      if(res.data.businessLicence==true){
        this.status.bussiness=true;
        this.status.busFill='已上传';
        this.status.busPath='';
      }
      if(res.data.identityCard==true){
        this.status.idcard=true;
        this.status.idFill='已上传';
        this.status.idPath='';
      }
      if(res.data.permission==true){
        this.status.license=true;
        this.status.licFill='已上传';
        this.status.licPath='';
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
