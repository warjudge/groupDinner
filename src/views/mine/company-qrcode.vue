<template>
  <div class="company-qrcode">
    <header>
      <x-icon type="ios-arrow-left" class="x_icon" @click="redirectToMain()"></x-icon>
    </header>
    <div class="title">{{title}}</div>
    <div class="notice" v-if="isShowNotice">231231212312312312312312312312312312312321312312312312</div>
    <div class="content">
      <!-- <div class="query-zone">
        <input class="query-input" type="text" placeholder="请输入企业名称">
        <button style="color:white;margin-left:0.2rem;" @click="showAddMemberDlg()">查找</button>
      </div>
      <div><button></button></div>
      <div v-if='isFindCompany'>
        <div class="form-panel">
          <group title=" ">
            <cell title='公司名称'>
              <input type="text" :value="companyName" readonly>
            </cell>
            <cell class="btn-panel">
              <button class="single-btn" @click="applyToCompanyMember">申请</button>
            </cell>
          </group>
        </div>
      </div> -->
      <!-- <button-tab>
        <button-tab-item selected @click='showType=TabTypes.ShowLinkRelatedMemeber'>公司二维码</button-tab-item>
        <button-tab-item @click='showType=TabTypes.ShowLinkRelatedRestaurant'>{{ $t('This Week') }}</button-tab-item>
      </button-tab> -->
      <div style="text-align:center;margin-bottom:1rem;">
        <div class="tab-header" :class="{active:showType==TabTypes.ShowLinkRelatedMemeber}" @click='showType=TabTypes.ShowLinkRelatedMemeber'>引荐给员工</div>
        <div class="tab-header" :class="{active:showType==TabTypes.ShowLinkRelatedRestaurant}" @click='showType=TabTypes.ShowLinkRelatedRestaurant'>引荐给餐厅</div>
      </div>
      <div v-show="showType==TabTypes.ShowLinkRelatedMemeber" style="text-align:center;">
        <h3 style="font-size:0.6rem;margin-bottom:0.4rem;">引荐员工注册按钮</h3>
        <div class="qrcode">
          <div class="qrcode-in" id="qrcode1"></div>
        </div>
        <div @click="copyLink(TabTypes.ShowLinkRelatedMemeber)">【复制地址】<input style="display:none;" type="text" readonly value='111111111'></div>
      </div>

      <div v-show="showType==TabTypes.ShowLinkRelatedRestaurant" style="text-align:center;">
        <h3 style="font-size:0.6rem;margin-bottom:0.4rem;">引荐餐厅注册按钮</h3>
        <div class="qrcode">
          <div class="qrcode-in" id="qrcode2"></div>
        </div>
        <div @click="copyLink(TabTypes.ShowLinkRelatedRestaurant)">【复制地址】<input style="display:none;" type="text" readonly value='222222222'></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
let tabTypes = {
  ShowLinkRelatedMemeber:1,
  ShowLinkRelatedRestaurant:2,
};
export default {
  components:{
    Group, 
    Cell
  },
  data () {
    return {
      title: '公司二维码',

      isFindCompany:true,
      companyName:'这是一家企业',
      isShowNotice:false,

      showType:tabTypes.ShowLinkRelatedMemeber,
      TabTypes:tabTypes,
    }
  },
  created(){
    
  },
  mounted(){
    let h = document.querySelector("#qrcode1").offsetHeight;
    // 设置参数方式
    var qrcode1 = new QRCode('qrcode1', {
      text: 'https://www.baidu.com/',
      width: h,
      height: h,
      colorDark : '#000000',
      colorLight : '#ffffff',
      correctLevel : QRCode.CorrectLevel.H
    });
    
    var qrcode2 = new QRCode('qrcode2', {
      text: 'https://www.163.com/',
      width: h,
      height: h,
      colorDark : '#000000',
      colorLight : '#ffffff',
      correctLevel : QRCode.CorrectLevel.H
    });
  },
  methods:{
    redirectToMain(){
      this.$emit('close');
    },
    applyToCompanyMember(){

    },
    copyLink(type){
      if(type==this.TabTypes.ShowLinkRelatedMemeber){
        let Url2 = document.getElementById("coreEnterpriseName");
        Url2.select(); // 选择对象
        document.execCommand("Copy");
        alert('复制成功');
      }
      else if(type==this.TabTypes.ShowLinkRelatedRestaurant){
        let Url2 = document.getElementById("coreEnterpriseName");
        Url2.select(); // 选择对象
        document.execCommand("Copy");
        alert('复制成功');
      }
    }
  }
}
</script>

<style scoped>
@import '../../assets/css/root.css';
.company-qrcode{
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

.tab-header{
  display:inline-block;
  width:40%;
  background-color:white;
  color:black;
}
.tab-header.active{
  background-color:blue;color:white;
}

.qrcode{
  height:4rem;
  width:4rem;
  background-color:white;
  display:inline-block;
}
.qrcode-in{
  margin:0.1rem 0 0 0.1rem;
  height:3.8rem;
  width:3.8rem;
}
</style>
<style src="../../assets/css/mine.css">
 
</style>