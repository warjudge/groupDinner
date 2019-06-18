<template>
  <div>
    <header>
      <x-icon type="ios-arrow-left" class="x_icon" size="0.8rem" @click="go2router"></x-icon>
      <span></span>
    </header>
    <div class="result_tip">您的申请被驳回，驳回原因：您提交的手持身份证真实性存在问题，请核实填写信息是否有误；</div>
    <div class="title">审核不通过</div>
    <div class="title_tip">继续完善信息</div>
    <ul>
      <li>
        <group>
          <cell class="success" title="店铺信息" :value="rltStore" :link="{path:'/businessLicense-upload-case',query:{type:this.$route.query.type,text:this.$route.query.text}}"></cell>
        </group>
        <group>
          <cell class="failure" title="资质信息" :value="rltQualification" :link="{path:'/idcard-upload',query:{type:this.$route.query.type,text:this.$route.query.text}}"></cell>
        </group>
        <group>
          <cell class="failure" title="手持身份证" :value="rltQualification" :link="{path:'/idcard-upload',query:{type:this.$route.query.type,text:this.$route.query.text}}"></cell>
        </group>
        <group>
          <cell class="success" title="收款信息" :value="rltReceipt" :link="{path:'/license-upload-case',query:{type:this.$route.query.type,text:this.$route.query.text}}"></cell>
        </group>
      </li>
    </ul>
    <!-- <footer>
      <div class="u_button" @click="submit()">下一步</div>
    </footer> -->
  </div>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      titleText:'',
      rltStore:'审核通过',
      rltQualification:'驳回需修改',
      rltReceipt:'审核通过',
      rltIdcard:'审核通过',
    }
  },
  mounted(){
    // if(this.$route.query.type==1){
    //   this.titleText='';
    // }else if(this.$route.query.type==2){
    //   this.titleText=''
    // }
    // this.titleText=this.$route.query.text;
  },
  methods:{
    go2router(){
      if(this.$route.query.type==1){
        this.$router.push({path:'/storeInfo',query:{type:1,text:this.$route.query.text}});
      }else if(this.$route.query.type==2){
        this.$router.push({path:'/application',query:{type:2,text:this.$route.query.text}});
      }
    },
    submit(){
      this.$router.push({path:'/receiptInfo',query:{type:this.$route.query.type,text:this.$route.query.text}});
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
