<template>
  <div>
    <header>
      <x-icon type="ios-arrow-left" class="x_icon" size="0.8rem" @click="go2router('/qualificationInfo')"></x-icon>
      <span></span>
    </header>
    <div class="title">营业执照上传案例</div>
    <!-- <div class="title_tip">申请开店前，请准备以下<span>6</span>项资料</div> -->
    <ul>
      <li>
        <img src="" alt="">
      </li>
    </ul>
    <div class="upload-tip">
      <p>照片要求</p>
      <p>照片方向正确，不能颠倒；</p>
      <p>照片上的字能清晰可见，边框完整，能看见国徽；</p>
      <p>如果是复印件，必须加盖印章；</p>
      <p>没有营业执照，可用特许证件代替。</p>
    </div>
    <footer>
      <div class="u_button" @click="submit()">立即上传</div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      titleText:'',
      isReapply:false,
      isRefill:false,
    }
  },
  mounted(){
    if(this.$route.query.reapply){
      this.isReapply=true;
    }
    if(this.$route.query.refill){
      this.isRefill=true;
    }
  },
  methods:{
    go2router(item){
      // this.$router.push({path:item,query:{type:this.$route.query.type,text:this.$route.query.text}});
    },
    submit(){
       if(this.isReapply){
        this.$router.push({path:'/company-businessLicense-upload',query:{reapply:true}});
      }else if(this.isRefill){
        this.$router.push({path:'/company-businessLicense-upload',query:{refill:true}});
      }else{
        this.$router.push({path:'/company-businessLicense-upload'});
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
  img{
    display: block;
    width: 8.226667rem;
    height: auto;
  }
}
.upload-tip{
  width: 100%;
  padding: 0 .413333rem 0 .693333rem;
  font-size: .373333rem;
  color: #BEE0FC;
  padding-bottom: .4rem;
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
