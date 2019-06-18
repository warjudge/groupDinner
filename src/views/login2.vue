<template>
  <div class="login2">
    <header>
      <x-icon type="ios-arrow-left" class="x_icon" @click="changeApplication(RoleTypes.Uninitialized)"></x-icon>
      <span @click="changeApplication(RoleTypes.AsRestaurant)" v-if="applicationType==RoleTypes.Uninitialized && !isLogined">我要开店</span>
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
        <input type="text" class="u_verify" placeholder="请输入手机号" v-focus>
        <!-- <button>获取验证码</button> -->
        <button>
          <span v-if="curIntervalSeconds == 0">获取验证码</span>
          <span v-if="curIntervalSeconds > 0">{{curIntervalSeconds}}秒后重新发送</span>
        </button>
        <div class="u_line"></div>
      </div>
      <div class="m_input">
        <img src="../assets/image/verifycode.png" alt="">
        <input type="text" placeholder="请输入验证码">
        <div class="u_line"></div>
      </div>
    </div>
    <div class="bar_content" v-if="barId==AccessTypes.PasswordMode && applicationType==RoleTypes.Uninitialized">
      <div class="m_input">
        <img src="../assets/image/phone.png" alt="">
        <input type="text" placeholder="请输入手机号">
        <div class="u_line"></div>
      </div>
      <div class="m_input">
        <img src="../assets/image/pwd.png" alt="">
        <input type="text" placeholder="请输入密码">
        <div class="u_line"></div>
      </div>
    </div>
    <div class="logined-panel" v-if="isLogined">
      <button class="logined-redirect-button">我要开店</button><br>
      <button class="logined-redirect-button">公司入驻</button><br>
      <button class="logined-redirect-button">供应商入驻</button><br>
    </div>
    <div class="u_button" @click="loginOrDetermine">{{buttonText}}</div>
    <footer>
      <span @click="changeApplication(RoleTypes.AsCompany)" v-if="applicationType==RoleTypes.Uninitialized && !isLogined">公司入驻</span>
      <span @click="changeApplication(RoleTypes.AsSupplier)" v-if="applicationType==RoleTypes.Uninitialized && !isLogined">供货商入驻</span>
    </footer>
  </div>
</template>

<script>
import { Group, Cell, XInput } from 'vux'
import role_types from '../assets/js/role-types'
export default {
  directives:{
    focus:{
      inserted(el){
        el.focus();
      }
    }
  },
  components: {
    Group,
    Cell,
    XInput,
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
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
      isLogined:false
    }
  },
  mouted(){

  },
  methods:{
    changeBar(id){
      this.barId=id;
    },
    changeApplication(type){
      this.applicationType=type;
      switch(type){
        case 0:
          this.titleText='团餐么';
          this.barId=this.AccessTypes.CaptchaMode;
          this.isLogined = false;
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
    // getCode(){
    //   if(!isPhone(this.phone)){
    //     this.Notification({
    //       title: '注意',
    //       message: '手机号不合法',
    //       type: 'warning'
    //     });
    //     return;
    //   }
    //   if(this.curIntervalSeconds>0) return;
      
    //   this.getVerifyCode(this.phone).then((rlt)=>{
    //     this.curIntervalSeconds = this.maxIntervalSeconds;
    //     this.intervalHandle = setInterval(() => {
    //       if(this.curIntervalSeconds > 0){
    //         this.curIntervalSeconds--;
    //       }
    //       else{
    //         clearInterval(this.intervalHandle);
    //       }
    //     }, 1000);
    //   });
    // },
    // async getVerifyCode(phone){  //获取手机验证码
    //   if(!(/^[1][3,4,5,7,8][0-9]{9}$/).test(phone)){
    //     this.Notification({
    //       title: '警告',
    //       message: '请输入正确的手机号！',
    //       type: 'warning'
    //     });
    //     return
    //   }
    //   let response = await this.axios.get2(this.api.phone_verifi,{
    //     headers:{
    //       'Content-Type':'application/json',
    //     },
    //     params:{
    //       'phone':phone,
    //     }
    //   });
    //   // console.log(response)
    //   if(response.data.code=='200'){
    //     this.Notification({
    //       title: '成功',
    //       message: response.data.message,
    //       type: 'success'
    //     });
    //   }else{
    //     this.Notification({
    //       title: '失败',
    //       message: response.data.message,
    //       type: 'error'
    //     });
    //   }
    // },
    async loginOrDetermine(){

      switch(this.applicationType){
        case this.RoleTypes.Uninitialized:
          // 登录后
          this.isLogined = true;
          break;
        case this.RoleTypes.AsRestaurant:
          // 团餐么-开店申请
          // this.$router.push('/application');
          this.$router.push({path:'/application',query:{type:1,text:'团餐么-开店申请'}});
          break;
        case this.RoleTypes.AsCompany:
          // 团餐么-公司入驻申请
          this.titleText='团餐么-公司入驻申请';
          this.buttonText='确认';
          break;
        case this.RoleTypes.AsSupplier:
          // 团餐么-供应商入驻申请
          this.titleText='团餐么-供应商入驻申请';
          this.buttonText='确认';
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

.logined-panel{
  background-color:#4391E8;
  color:white;
  position:absolute;
  top:1.5rem;
  height:8rem;
  width:100%;
  text-align:center;
  padding-top:2rem;
}
.logined-redirect-button{
  background-color:green;
  color:white;
  border-radius:0.5rem;
  height:1rem;
  width:3rem;
  margin-bottom:0.5rem;
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
