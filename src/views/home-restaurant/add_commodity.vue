<!-- 餐厅添加菜品 -->
<template>
  <div>
    <header>
      <x-icon type="ios-arrow-left" class="x_icon" size="0.8rem" @click="go2router('/restaurant-commodity-manage')"></x-icon>
      <span></span>
    </header>
    <div class="title">添加商品</div>
    <!-- <div class="title_tip">申请开店前，请准备以下<span>6</span>项资料</div> -->
    <div class="m_detail">
      <div class="m_input">
        <input type="text" placeholder="输入商品名称">
        <div class="u_line"></div>
      </div>
      <div class="m_input">
        <input type="text" placeholder="输入商品描述">
        <div class="u_line"></div>
      </div>
      <div class="m_input">
        <input type="text" placeholder="￥商品价格">
        <div class="u_line"></div>
      </div>
    </div>
    <ul>
      <li class="clearfix">
        <form>
          <span class="fileinput-button">
            <div class="upload-btn">
              <p>+</p>
              <p class="btn-text">点击上传正面照</p>
            </div>
            <input type="file" @change="getFile ($event)">
            <img :src="imgSrc" alt="">
          </span>
          <!-- <div class="btn-tip" @click="submitForm($event)">重新上传</div> -->
          <div class="btn-tip" v-if="showTip">重新上传</div>
        </form>
      </li>
    </ul>
    <footer>
      <div class="u_button" @click="submit()">确认并保存</div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      titleText:'',
      showTip:false,
      imgSrc:'',
    }
  },
  mounted(){
    // this.titleText=this.$route.query.text;
  },
  methods:{
    go2router(item){
      this.$router.push({path:item});
    },
    submit(){
      this.go2router('')
    },
    getFile ($event){
      console.log(this.file);
      var theEvent = $event || window.event;  //兼容火狐的event
      // var target = event.target || event.srcElement;
      // this.file = event.target.files[0];
      this.file = theEvent.target.files[0];
      if(this.file==undefined){
        return
      }
      console.log(this.file);
/*
*文件转bse64编码
*let fr=new FileReader();
*  fr.onload=()=>{
*    this.imageSrc=fr.result;
*    console.log(this.imageSrc)
*    console.log(this.file);
*  };
*  fr.readAsDataURL(this.file);
*/
      let fr=new FileReader();
        fr.onload=()=>{
          this.imgSrc=fr.result;
          this.showTip=true;
          console.log(this.imgSrc)
          console.log(this.file);
        };
      fr.readAsDataURL(this.file);  
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
  padding: .56rem .493333rem .506667rem .493333rem;
  background-color: #fff;
  box-shadow:0 .213333rem .28rem 0 rgba(11,102,204,0.5);
  border-radius:.373333rem;
}
form{
  .fileinput-button {
    position: relative;
    display: inline-block;
    width: 100%;
    /*overflow: hidden;*/
    .upload-btn{
      display: inline-block;
      height: 3.6rem;
      width: 100%;
      line-height: 3.6rem;
      font-size: 1.5rem;
      color: #409EFF;
      text-align: center;
      border:1px dotted #dcdfe6;
      border-radius: .133333rem;
      .btn-text{
        font-size: .373333rem;
        line-height: 1;
        margin-top: -0.5rem;
      }
    }
  }
  .fileinput-button input{
    height: 3.6rem;
    width: 100%;
    cursor: pointer;
    position: absolute;
    z-index: 999;
    right: 0px;
    top: 0px;
    opacity: 0;
    -ms-filter: 'alpha(opacity=0)';
  }
  .fileinput-button img{
    height: 3.6rem;
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
  }
  .btn-tip{
    position: absolute;
    z-index: 99;
    top: 0;
    right: 0;
    width: 2.266667rem;
    height: .8rem;
    background-color: rgba(0,0,0,0.4);
    border-radius: .4rem;
    font-size: .373333rem;
    color: #fff;
    line-height: .8rem;
    text-align: center;
    margin-right: .493333rem;
    margin-top: .56rem;
  }
}
.m_detail{
  width: 100%;
  margin-bottom: .68rem;
  .m_input{
    position:relative;
    height: .866667rem;
    padding:0 .92rem 0 1.106667rem;
    margin-bottom: .266667rem;
    box-sizing: border-box;
    input{
      height: 100%;
      width: 100%;
      color: #fff;
      background-color: var(--bgc-levelone);
    }
    .u_line{
      height: 2px;
      border-bottom: 1px solid rgba(255,255,255,0.5);
    }
  }
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
