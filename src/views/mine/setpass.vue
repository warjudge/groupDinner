<template>
  <div class="setpass">
    <header>
      <x-icon type="ios-arrow-left" class="x_icon" @click="redirectToMain()"></x-icon>
    </header>
    <div class="title">{{title}}</div>
    <div class="notice">111111111111111212111111111111112122</div>
    <div class="content" v-if="mode==Modes.SetPass">
      <div class="form-panel">
        <group title=" ">
          <cell title='密码'>
            <input type="text" v-model="password" placeholder="输入密码">
          </cell>
          <cell class="btn-panel">
            <button class="single-btn" @click="savePass(Modes.SetPass)">确定</button>
          </cell>
        </group>
      </div>
    </div>
    <div class="content" v-if="mode==Modes.ChangePassByCapcha"><div class="form-panel">
        <group title=" ">
          <cell title='验证码'>
            <input type="text" v-model="capcha" placeholder="输入验证码">
          </cell>
          <cell title='新密码'>
            <input type="text" v-model="password" placeholder="输入新密码">
          </cell>
          <cell class="btn-panel">
            <button class="single-btn" @click="savePass(Modes.ChangePassByCapcha)">确定</button>
          </cell>
        </group>
      </div></div>
    <div class="content" v-if="mode==Modes.ChangePassByOldPass"><div class="form-panel">
        <group title=" ">
          <cell title='旧密码'>
            <input type="text" v-model="old_password" placeholder="输入旧密码">
          </cell>
          <cell title='新密码'>
            <input type="text" v-model="password" placeholder="输入新密码">
          </cell>
          <cell class="btn-panel">
            <button class="single-btn" @click="savePass(Modes.ChangePassByOldPass)">确定</button>
          </cell>
        </group>
      </div></div>
  </div>
</template>

<script>
import passModifyTypes from '../../assets/js/passmodify-types.js';
export default {
  props:{
    mode:{
      default:passModifyTypes.SetPass,
      type:Number
    }
  },
  data () {
    return {
      Modes:passModifyTypes,
      title:"设置登录密码",//修改密码

      password:'',
      capcha:'',
      old_password:'',
    }
  },
  mounted(){
    console.log(this.mode);
    if(this.mode==passModifyTypes.ChangePassByCapcha
      || this.mode==passModifyTypes.ChangePassByOldPass){
      this.title = '修改密码';
    }
  },
  methods:{
    redirectToMain(){
      this.$emit('close');
    },
    async savePass(){
      let response = null;
      if(this.mode==passModifyTypes.ChangePassByCapcha
       || this.mode==passModifyTypes.SetPass){
        //验证码设置密码或修改密码
        response = await this.axios.post(this.api.set_password_by_mobile, {
          mobile:'',
          mcode:'',
          pwd:this.password,
          passWordType:1//密码类型，目前支付密码传1。???
        });
      }
      else if(this.mode==passModifyTypes.ChangePassByOldPass){
        //通过旧密码的方式去修改
        response = await this.axios.post(this.api.set_password_by_oldpwd, {
          uid:'',
          oldPwd:this.old_password,
          newPwd:this.password,
          passWordType:1
        });
      }

      let data = response.data;
      if(data.code==200){
        if(this.mode==passModifyTypes.ChangePassByCapcha){
          alert('设置成功');
        }
        else{
          alert('修改成功');
        }
        //退出当前用户
      }
      else{
        alert(data.message);
      }
    },
    applyToCompanyMember(){
      // {
      //   mobile:'',
      //   mcode:'',
      //   pwd:'',
      //   passWordType:0//密码类型，目前支付密码传1。
      // }
    }
  },
}
</script>

<style scoped>
@import '../../assets/css/root.css';
.setpass{
  background-color: #4391e8;
  height: 100%;
}
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
</style>
<style src="../../assets/css/mine.css">
 
</style>
