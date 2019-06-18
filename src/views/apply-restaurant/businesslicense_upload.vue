<template>
  <div>
    <header>
      <x-icon type="ios-arrow-left" class="x_icon" size="0.8rem" @click="go2router('/businessLicense-upload-case')"></x-icon>
      <span></span>
    </header>
    <div class="title">营业执照上传</div>
    <!-- <div class="title_tip">申请开店前，请准备以下<span>6</span>项资料</div> -->
    <ul>
      <li class="clearfix">
        <form>
          <span class="fileinput-button">
            <div class="upload-btn">+</div>
            <input type="file" @change="getFile ($event)">
            <img :src="imgSrc" alt="">
          </span>
          <!-- <div class="btn-tip" @click="submitForm($event)">重新上传</div> -->
          <div class="btn-tip" v-if="showTip">重新上传</div>
          
        </form>
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
      <div class="u_button" @click="submit()">确认并保存</div>
    </footer>
  </div>
</template>

<script>
  import {submitBuslicense, submitBuslicenseUpdate} from '../../service/apply-restaurant.js'
export default {
  data () {
    return {
      titleText:'',
      isReapply:false,
      isRefill:false,
      showTip:false,
      imgSrc:'',
      file:'',
    }
  },
  mounted(){
    if(this.$route.query.reapply){
      this.isReapply=true;
    }
    if(this.$route.query.refill){
      this.isRefill=true;
    }
    // this.titleText=this.$route.query.text;
  },
  methods:{
    go2router(item){
      // this.$router.push({path:item,query:{type:this.$route.query.type,text:this.$route.query.text}});
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
      let fr=new FileReader();
        fr.onload=()=>{
          this.imgSrc=fr.result;
          this.showTip=true;
          console.log(this.imgSrc)
          console.log(this.file);
        };
      fr.readAsDataURL(this.file);  
    },
    async submit(){
      if(this.isReapply){
        const res1 = await submitBuslicenseUpdate({
          businessLicence:this.file
        });
        console.log('res', res1);
        if(res1.code=='200'){
          sessionStorage.business=true;
          this.$router.push({path:'/restaurant-qualification-info',query:{reapply:true}});
        }
      }else if(this.isRefill){
        const res2 = await submitBuslicense({
          businessLicence:this.file
        });
        console.log('res', res2);
        if(res2.code=='200'){
          this.$router.push({path:'/restaurant-qualification-info',query:{refill:true}});
        }
      }else{
        const res3 = await submitBuslicense({
          businessLicence:this.file
        });
        console.log('res', res3);
        if(res3.code=='200'){
          this.$router.push({path:'/restaurant-qualification-info'});
        }
      }
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
  padding: .56rem .293333rem .506667rem .293333rem;
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
      height: 5.893333rem;
      width: 100%;
      line-height: 5.893333rem;
      font-size: 1.5rem;
      color: #409EFF;
      text-align: center;
      border:1px dotted #dcdfe6;
      border-radius: .133333rem;
    }
  }
  .fileinput-button input{
    display: block;
    height: 5.893333rem;
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
    height: 5.893333rem;
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
    margin-right: .3rem;
    margin-top: .56rem;
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
