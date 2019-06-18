<template>
  <div>
    <header>
      <x-icon type="ios-arrow-left" class="x_icon" @click="changeApplication(RoleTypes.Uninitialized)"></x-icon>
      <span @click="changeApplication(RoleTypes.AsRestaurant)" v-if="applicationType==RoleTypes.Uninitialized">我要开店</span>
    </header>
    <div class="title">{{titleText}}</div>
    <div class="nav_bar" v-if="applicationType==0">
      <div class="bar_name" @click="changeBar(AccessTypes.CaptchaMode)"
       :class="[{bar_name:true},{current_bar:barId==AccessTypes.CaptchaMode}]">手机<span>验证</span>登录</div>
      <div class="bar_name" @click="changeBar(AccessTypes.PasswordMode)"
       :class="[{bar_name:true},{current_bar:barId==AccessTypes.PasswordMode}]">账号<span>密码</span>登录</div>
    </div>
    <div class="bar_content" v-if="barId==AccessTypes.CaptchaMode || applicationType != RoleTypes.Uninitialized">
      <div class="m_input">
        <img src="../assets/image/phone.png" alt="">
        <input type="text" class="u_verify" v-model="phone" placeholder="请输入手机号" v-focus>
        <!-- <button>获取验证码</button> -->
        <button>
          <span v-if="curIntervalSeconds == 0" @click="getCode()">获取验证码</span>
          <span v-if="curIntervalSeconds > 0">{{curIntervalSeconds}}s</span>
        </button>
        <div class="u_line"></div>
      </div>
      <div class="m_input">
        <img src="../assets/image/verifycode.png" alt="">
        <input type="text" v-model="verifycode" placeholder="请输入验证码">
        <div class="u_line"></div>
      </div>
    </div>
    <div class="bar_content" v-if="barId==AccessTypes.PasswordMode && applicationType==RoleTypes.Uninitialized">
      <div class="m_input">
        <img src="../assets/image/phone.png" alt="">
        <input type="text" v-model="phone" placeholder="请输入手机号">
        <div class="u_line"></div>
      </div>
      <div class="m_input">
        <img src="../assets/image/pwd.png" alt="">
        <input type="text" v-model="pwd" placeholder="请输入密码">
        <div class="u_line"></div>
      </div>
    </div>
    <div class="u_button" @click="loginOrDetermine">{{buttonText}}</div>
    <footer>
      <span @click="changeApplication(RoleTypes.AsCompany)" v-if="applicationType==RoleTypes.Uninitialized">公司入驻</span>
      <span @click="changeApplication(RoleTypes.AsSupplier)" v-if="applicationType==RoleTypes.Uninitialized">供货商入驻</span>
    </footer>
    <!-- <inline-loading v-model="showLoading" :text="loadText"></inline-loading> -->
  </div>
</template>

<script>

import role_types from '../assets/js/role-types'
import { getMcode, mcodeLoginOrRegister, mobileHasRegisterOrPwd, setPwdByMobile, setPwdByOldPwd, pwdLogin } from '../service/login-or-register.js'

export default {
  directives:{
    focus:{
      inserted(el){
        el.focus();
      }
    }
  },
  components: {
    // Group,
    // Cell,
    // XInput,
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      phone:'',
      verifycode:'',
      pwd:'',
      showLoading:true,
      loadText:'loading',
      // barId=1是手机验证登录，=2是账号密码登录
      barId:1,
      // applicationType用户申请类型,0->直接登录,1->我要开店,2->公司入驻，3->供应商入驻
      applicationType:0,
      titleText:'团餐么',
      buttonText:'登录',
      // 验证码定时器
      intervalHandle: null,
      maxIntervalSeconds: 60,
      curIntervalSeconds: 0,

      RoleTypes: role_types,
      AccessTypes: {
        CaptchaMode: 1,
        PasswordMode: 2
      },
      isNew:false,
    }
  },
  mouted(){

  },
  methods:{
    getCode(){
      if(this.curIntervalSeconds>0) return; 
      this.getVerifyCode().then((rlt)=>{
        this.curIntervalSeconds = this.maxIntervalSeconds;
        this.intervalHandle = setInterval(() => {
          if(this.curIntervalSeconds > 0){
            this.curIntervalSeconds--;
          }
          else{
            clearInterval(this.intervalHandle);
          }
        }, 1000);
      });
    },
    async getVerifyCode(){  //获取验证码
      console.log(this.phone);
      const res = await getMcode({ mobile: this.phone });
      console.log('res', res);
    },
    changeBar(id){
      this.barId=id;
    },
    changeApplication(type){
      this.applicationType=type;
      switch(type){
        case 0:
          this.titleText='团餐么';
          this.barId=this.AccessTypes.CaptchaMode;
          this.buttonText='登录';
          break;
        case 1:
          this.titleText='团餐么-开店申请';
          this.buttonText='确认';
          break;
        case 2:
          this.titleText='团餐么-公司入驻申请';
          this.buttonText='确认';
          break;
        case 3:
          this.titleText='团餐么-供应商入驻申请';
          this.buttonText='确认';
          break;
      }
    },

    async loginOrDetermine(){
      const res =await mobileHasRegisterOrPwd({
        mobile:this.mobile,
      });
      console.log('res',res);
      this.isNew=res.data.hasRegister;
      switch(this.applicationType){
        case this.RoleTypes.Uninitialized:
          // 登录
          const res1=await pwdLogin({
            mobile:this.phone,
            pwd:this.pwd,
          });
          break;
        case this.RoleTypes.AsRestaurant:
          // 团餐么-开店申请
          // this.$router.push({path:'/application',query:{type:1,text:'团餐么-开店申请'}});
          const res2= await mcodeLoginOrRegister({
            mobile:this.phone,
            mcode:this.verifycode,
            roleType:this.RoleTypes.AsRestaurant,
          });
          console.log(res2);
          if(res2.code=='200'){
            localStorage.token = '1539073072502357';
            if(this.isNew==false){
              this.$router.push({path:'/restaurant-apply-detail'});
            }else{
              if(res2.data.applyStatus===0){
                this.$router.push({path:'/restaurant-apply-result'});
              }else if(res2.data.applyStatus===2||res2.data.applyStatus===6){
                this.$router.push({path:'/restaurant-apply-result-error'});
              }
            }  
          }
          break;
        case this.RoleTypes.AsCompany:
          // 团餐么-公司入驻申请
          // this.$router.push({path:'/application',query:{type:2,text:'团餐么-公司入驻申请'}});
          const res3= await mcodeLoginOrRegister({
            mobile:this.phone,
            mcode:this.verifycode,
            roleType:this.RoleTypes.AsCompany,
          });
          break;
          console.log(res3);
          if(res2.code=='200'){
            localStorage.token = '1539073072502347';
            if(this.isNew==false){
              this.$router.push({path:'/company-apply-detail'});
            }else{
              if(res2.data.applyStatus===0){
                this.$router.push({path:'/company-apply-result'});
              }else if(res3.data.applyStatus===2||res3.data.applyStatus===6){
                this.$router.push({path:'/company-apply-result-error'});
              }
            }  
          }
        case this.RoleTypes.AsSupplier:
          // 团餐么-供应商入驻申请
          // this.$router.push({path:'/idcard-upload',query:{type:3,text:'团餐么-供应商入驻申请'}});
          const res4= await mcodeLoginOrRegister({
            mobile:this.phone,
            mcode:this.verifycode,
            roleType:this.RoleTypes.AsSupplier,
          });
          break;
      }
    },
  },
}
</script>

<style scoped>
@import '../assets/css/root.css';
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
  margin-bottom: 1.2rem;
}
.nav_bar{
  width: 100%;
  padding:0 1.506667rem 0 1.506667rem;
  display: flex;
  justify-content: space-between;
  @apply --nav-bar;
  margin-bottom: 1.213333rem;
  .bar_name{
    display: inline-block;
    height: .6rem;
    font-weight: 400;
  }
  .bar_name.current_bar{
    display: inline-block;
    height: .6rem;
    font-weight: 700;
    span{
      display: inline-block;
      border-bottom: .066667rem solid #fff;  
    }
  }
}

  

.bar_content{
  width: 100%;
  margin-bottom: .68rem;
  .m_input{
    position:relative;
    height: .68rem;
    padding:0 .68rem 0 1.306667rem;
    margin-bottom: .6rem;
    box-sizing: border-box;
    img{
      width: .4rem;
      height: .48rem;
      position: absolute;
      left: .613333rem;
      top: .1rem;
    }
    input{
      height: 100%;
      width: 100%;
      color: #fff;
      background-color: var(--bgc-levelone);
    }
    input.u_verify{
      /*width: 5.48rem;*/
      width: 69%;
    }
    button{
      height: 100%;
      width: 29%;
      text-align: center;
      background-color: var(--bgc-levelone);
      color: #fff;
      border-left: 1px solid rgba(255,255,255,0.5);
    }
    .u_line{
      height: 2px;
      border-bottom: 1px solid rgba(255,255,255,0.5);
    }
  }
}
.u_button{
  @apply --bgc-button-gradientone;
  background: none;
  box-shadow: none;
  background-color: var(--bgc-levelone);
  border:2px solid rgba(255,255,255,0.5);
  margin: 0 auto;
  font-size: .48rem;
  color: #fff;
}
footer{
  width: 100%;
  padding: 0 .333333rem .386667rem .413333rem;
  display: flex;
  justify-content: space-between;
  font-size: .32rem;
  color: #fff;
  position: fixed;
  bottom: 0;
}
</style>
