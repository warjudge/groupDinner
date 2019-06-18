<template>
  <div class="mine">
    <div class="mine-in">
      <header>
        <x-icon type="ios-arrow-left" class="x_icon" @click="redirectToMain()"></x-icon>
      </header>
      <div class="title">我的</div>
      <div class="head-zone">
        <div class="head-icon-row">
          <div class="head-icon-in"></div>
        </div>
        <div>{{userName}}</div>
        <div style="font-size:0.68rem;">{{phone}}</div>
      </div>
      <div class="mine-modules-con">
        <ul class="mine-modules rounded-rect">
          <li v-for='item in listItems' class="mine-module-item" @click="redirectTo(item.routeId)">
            <img :src="item.src">
            <span class="mine-module-item-text">{{item.text}}</span>
          </li>
          <li class="mine-module-item" @click="redirectTo(ConstRoutes.LoginPass)">
            <img src="../assets/image/mine/password.png">
            <span class="mine-module-item-text">登录密码</span>
            <span class="mine-module-item-defautvalue" v-if="!isSetPass">未设置</span>
            <span class="mine-module-item-defautvalue" v-if="isSetPass">修改</span>
          </li>
        </ul>
      </div>
    </div>

    <bank-cards class="cover-dialog" v-if="curRoute==ConstRoutes.Bankcards" @close="closeDialog"></bank-cards>
    <company-memebers class="cover-dialog" v-if="curRoute==ConstRoutes.CompanyMemebers" @close="closeDialog"></company-memebers>
    <company-qrcode class="cover-dialog" v-if="curRoute==ConstRoutes.CompanyQrCode" @close="closeDialog"></company-qrcode>
    <my-iou class="cover-dialog" v-if="curRoute==ConstRoutes.MyIOU" @close="closeDialog"></my-iou>
    <my-pay class="cover-dialog" v-if="curRoute==ConstRoutes.MyPays" @close="closeDialog"></my-pay>
    <set-pass class="cover-dialog" v-if="curRoute==ConstRoutes.LoginPass && SetPassType!=SetPassConsts.Uninitialized" :mode='SetPassType' @close="closeDialog"></set-pass>

    <div v-if="isShowSetPass" class="cover-dialog">
      <div class="cover-dialog-mask">
      </div>
      <ul class="cover-dialog-in">
        <li @click="setPass(SetPassConsts.ChangePassByOldPass)" class="bottom-select-option bottom-select-selectionone">通过旧密码方式</li>
        <li @click="setPass(SetPassConsts.ChangePassByCapcha)" class="bottom-select-option">通过手机验证码方式</li>
        <li class="bottom-select-seperator"></li>
        <li @click="closeSetPass" class="bottom-select-option">取消</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BankCards from './mine/bankcards';
import CompanyMemebers from './mine/company-memebers';
import CompanyQrcode from './mine/company-qrcode';
import MyIou from './mine/myiou';
import MyPay from './mine/mypay';
import SetPass from './mine/setpass';

import PassModifyTypes from '../assets/js/passmodify-types.js';
let routeIds = {
  Uninitialized: '',
  Bankcards:'银行卡',
  CompanyMemebers:'公司员工',
  CompanyQrCode:'公司二维码',
  MyIOU:'我的白条',
  MyPays:'支付',
  LoginPass:'登录密码',
}
export default {
  data () {
    return {
      isSetPass: true,
      userName: '账号1',
      phone: '187****6412',

      ConstRoutes: routeIds,
      curRoute: null,
      listItems:[{
        routeId:routeIds.MyIOU,
        src:require('../assets/image/mine/transfer.png'),
        text:'我的白条'
      },{
        routeId:routeIds.CompanyMemebers,
        src:require('../assets/image/mine/transfer.png'),
        text:'公司员工'
      },{
        routeId:routeIds.CompanyQrCode,
        src:require('../assets/image/mine/transfer.png'),
        text:'成为员工',
      },{
        routeId:routeIds.AutoOrdering,
        src:require('../assets/image/mine/transfer.png'),
        text:'自动点餐'
      },{
        routeId:routeIds.MyPays,
        src:require('../assets/image/mine/transfer.png'),
        text:'转账'
      },{
        routeId:routeIds.Bankcards,
        src:require('../assets/image/mine/bankcard.png'),
        text:'银行卡',
      }],

      isShowSetPass: false,
      SetPassConsts: PassModifyTypes,
      SetPassType: PassModifyTypes.Uninitialized
    }
  },
  components:{
    BankCards,
    CompanyMemebers,
    CompanyQrcode,
    MyIou,
    MyPay,
    SetPass
  },
  mounted(){

  },
  methods:{
    redirectToMain(){

    },
    closeDialog(){
      this.curRoute = this.ConstRoutes.Uninitialized;
      this.isShowSetPass = false;
      this.SetPassType = PassModifyTypes.Uninitialized;
    },
    setPass(type){
      console.log("type:", type);
      this.SetPassType = type;
      this.isShowSetPass = false;
    },
    redirectTo(routeId){
      this.curRoute = routeId;
      switch(routeId){
        case this.ConstRoutes.MyIOU://我的白条
          this.jumpTo('/my-iou');
          break;

        case this.ConstRoutes.CompanyMemebers://公司员工
          break;

        case this.ConstRoutes.CompanyQrCode://公司二维码
          break;

        case this.ConstRoutes.LoginPass://登录密码
          if(this.isSetPass){
            this.isShowSetPass = true;
          }
          else{
            this.SetPassType = PassModifyTypes.SetPass;
          }
          break;

        case this.ConstRoutes.Bankcards://银行卡
          break;

        case this.ConstRoutes.MyPays://支付
          break;

        case this.ConstRoutes.AutoOrdering://自动点餐
          break;

        default:
          break;
      }
    },
    closeSetPass(){
      this.curRoute = this.ConstRoutes.Uninitialized;
      this.isShowSetPass = false;
    }
  },
}
</script>

<style scoped>
@import '../assets/css/root.css';
.mine{
  background-color: #f6f8fa;
  min-height: 100%;
}
.mine-in{
  background: url('../assets/image/mine/bg.png') no-repeat top;
  background-size:contain;
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
  margin-bottom: 0.8rem;
}
.head-zone{
  margin-top:-0.5rem;color:white;
}
.head-zone>div{
  text-align:center;
}
.head-icon-row{
  width:100%;
}
.head-icon-in{
  height:2rem;
  width:2rem;
  border-radius:1rem;
  background-color:white;
  display:inline-block;
}

.mine-modules-con{
  text-align:center;
  padding-bottom: 1rem;
}
.mine-modules{
  padding: 0 0.8rem;
  margin-top: 1.6rem;
}
.rounded-rect{
  text-align:center;
  width:90%;
  background-color:white;
  display:inline-block;
  border-radius:0.5rem;
  box-shadow: 0px 0px 20px #ccc;
}
.mine-module-item{
  height:1.8rem;
  line-height:1.8rem;
  font-size:0.5rem;
  text-align: left;
  position: relative;

  border-top: solid #ededed 1px;
}
.mine-module-item:nth-child(1){
  border-top-width:0;
}
.mine-module-item::after{
  content: ">";
  color: #777;
  height: 0.5rem;
  width: 0.25rem;
  position: absolute;
  right: 0.4rem;
}
.mine-module-item img{
  display: inline-block;
  max-height: 0.5rem;
  line-height: 0.5rem;
  max-width: 0.5rem;
}
.mine-module-item-defautvalue{
  position:absolute;
  right:1rem;
  color:#bbb;
}
.mine-module-item-text{
  margin-left: 0.3rem;
  color: black;
}




.cover-dialog{
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  vertical-align: bottom;
}
.cover-dialog-mask{
  width: 100%;
  height: 100%;

  background-color: #333;
  opacity: 0.8;
}
.cover-dialog-in{
  position: absolute;
  bottom: 0;
  width:100%;
}
.bottom-select-option{
  background-color:white;
  height:1.2rem;
  line-height: 1.2rem;
  font-size: 0.4rem;
  background-color: white;
  color: black;
  text-align:center;
  vertical-align: middle;
}
.bottom-select-selectionone{
  border-bottom:solid #ededed 1px;
  border-top-left-radius:0.5rem;
  border-top-right-radius:0.5rem;
}
.bottom-select-seperator{
  height: 0.4rem;
  background-color:#ededed;
}
</style>
