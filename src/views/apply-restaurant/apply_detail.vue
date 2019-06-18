<template>
  <div>
    <header>
      <x-icon type="ios-arrow-left" class="x_icon" size="0.8rem" @click="go2router('/login')"></x-icon>
      <span></span>
    </header>
    <div class="title">{{titleText}}</div>
    <div class="title_tip">申请开店前，请准备以下<span>6</span>项资料</div>
    <ul>
      <li>
        <div class="num">1</div>
        <div class="num_title">门脸照片</div>
        <div class="num_tip tip_layout">需拍出完整门匾、门框（建议正对门店2米处拍摄）</div>
        <img src="../../assets/image/application_img/face.png" alt="">
      </li>
      <li>
        <div class="num">2</div>
        <div class="num_title">店内照片</div>
        <div class="num_tip tip_layout">需真实反映用餐环境（收银台用餐桌椅）</div>
        <img src="../../assets/image/application_img/environment.png" alt="">
      </li>
      <li>
        <div class="num">3</div>
        <div class="num_title">商户LOGO</div>
        <div class="num_tip tip_layout">需体现您店铺的特色，可吸引更多的用户进店点餐</div>
        <img src="../../assets/image/application_img/logo.png" alt="">
      </li>
      <li>
        <div class="num">4</div>
        <div class="num_title">法人代表手持身份证照片</div>
        <div class="num_tip tip_layout">需清晰展示人物五官和身份证文字信息</div>
        <img src="../../assets/image/application_img/id_card.png" alt="">
      </li>
      <li>
        <div class="num">5</div>
        <div class="num_title">营业执照</div>
        <div class="num_tip">1）需文字清晰、边框完整、露出国徽；</div>
        <div class="num_tip tip_layout">2）拍复印件需加盖印章，可用有效特许证件代替</div>
        <img src="../../assets/image/application_img/license.png" alt="">
      </li>
      <li>
        <div class="num">6</div>
        <div class="num_title">行业许可证</div>
        <div class="num_tip">1）需文字清晰、边框完整、露出国徽；</div>
        <div class="num_tip tip_layout">2）拍复印件需加盖印章，可用有效特许证件代替</div>
        <img src="../../assets/image/application_img/certificate.png" alt="">
      </li>
    </ul>
    <footer>
      <div class="u_button" @click="submit()">准备好了，申请开店</div>
    </footer>
  </div>
</template>

<script>

export default {
  components: {
    
  },
  data () {
    return {
      titleText:'团餐么-开店申请',
    }
  },
  mounted(){
    // this.roleType=this.$route.query.type;
    // this.titleText=this.$route.query.text;
  },
  methods:{
    go2router(item){
      this.$router.push(item);
    },
    submit(){
      //restaurant-store-info
       this.$router.push({path:'/restaurant-store-info'});
      // console.log(this.$route.path);
      // if(this.roleType==1){
      //   this.$router.push({path:'/storeInfo',query:{type:this.roleType,text:this.titleText}});
      // }else if(this.roleType==2){
      //   this.$router.push({path:'/qualificationInfo',query:{type:this.roleType,text:this.titleText}});
      // }
      
      // this.$router.push('/application/storeInfo-openStore');
      // this.$router.push(this.$route.path+'/storeInfo-openStore');
    }
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
  background-color: #fff;
  box-shadow:0 .213333rem .28rem 0 rgba(11,102,204,0.5);
  border-radius:.373333rem;
  .num{
    position: absolute;
    top: .773333rem;
    display: inline-block;
    width: .533333rem;
    height: .533333rem;
    background-color:#4391E8;
    border-radius: .28rem;
    color: #fff;
    text-align: center;
  }
  .num_title{
    display: inline-block;
    margin-left: .76rem;
    margin-bottom: .186667rem;
    /*height: .533333rem;*/
    font-size: .56rem;
    color: var(--g-color-dark-black)222;
  }
  .num_tip{
    font-size: .373333rem;
    color: #777777;
  }
  .num_tip.tip_layout{
    margin-bottom: .533333rem;
  }
  img{
    display: block;
    width: 8.266667rem;
    height: auto;
  }
}
footer{
  background-color: var(--bgc-levelone);
  padding-bottom: 1.4rem;
}
.u_button{
  @apply --bgc-button-gradientone;
  margin: 0 auto;
  font-size: .48rem;
  color: #fff;
}

</style>
