<template>
  <div>
    <header>
      <x-icon type="ios-arrow-left" class="x_icon" size="0.8rem" @click="go2router('/application')"></x-icon>
      <span></span>
    </header>
    <div class="title">1/3店铺信息</div>
    <!-- <div class="title_tip">申请开店前，请准备以下<span>6</span>项资料</div> -->
    <ul>
      <li>
          <group>
            <x-input title="企业名称" v-model="companyName" placeholder="请填写营业执照上的名称"></x-input>
          </group>
          <group>
            <x-input title="店铺名称" v-model="name" placeholder="请填写在平台展示的名称"></x-input>
          </group>
          <group>
            <x-input title="外卖电话" v-model="takeoutPhone" placeholder="请填写外卖电话"></x-input>
          </group>
          <group>
            <x-input title="联系人姓名" v-model="ownerName" placeholder="请填写入驻联系人"></x-input>
          </group>
          <group>
            <x-input title="联系人电话" v-model="ownerPhone" placeholder="请填写入驻联系人电话"></x-input>
          </group>
          <group>
            <cell title="店铺类型" 
              is-link 
              :value="storeType.name"
              :border-intent="false"
              :arrow-direction="upordown?'up':'down'"
              @click.native="upordown = !upordown"></cell>
            <!-- <template v-if="upordown">
              <cell-box :border-intent="false" class="sub-item" is-link>content 001</cell-box>
              <cell-box class="sub-item" is-link>content 001</cell-box>
              <cell-box class="sub-item" is-link>content 001</cell-box>
            </template> -->
          </group>
          <template v-if="upordown">
            <cell-box :border-intent="false" class="sub-item">content 001</cell-box>
            <cell-box class="sub-item">content 001</cell-box>
            <cell-box class="sub-item">content 001</cell-box>
          </template>
          <group>
             <x-address 
              @on-hide="logHide" 
              @on-show="logShow" 
              title="门店地址" 
              v-model="address" 
              :list="addressData" 
              @on-shadow-change="onShadowChange" 
              placeholder="省-市-区/县" 
              :show.sync="showAddress"></x-address>
          </group>
          <group>
            <x-input v-model="addressDetail" placeholder="详细地址:道路、门牌号、楼栋、单元室等"></x-input>
          </group>
      </li>
      <li>
        <div class="upload-item clearfix">
          <div class="item-left">
            <div class="item-name">上传门脸照片</div>
            <div class="item-description">一张真是美观的门脸照可以提升店铺形象</div>
          </div>
          <form>
            <span class="fileinput-button">
              <div class="upload-btn">+</div>
              <input type="file" @change="getFileForOutdoor($event)">
              <img :src="outdoorImgSrc" alt="">
            </span>
            <div class="btn-tip" @click="">点击添加</div>
          </form>
        </div>
        <div class="upload-item clearfix">
          <div class="item-left">
            <div class="item-name">上传店内照片</div>
            <div class="item-description">简洁干净的店内照片可以让用户放心点单</div>
          </div>
          <form>
            <span class="fileinput-button">
              <div class="upload-btn">+</div>
              <input type="file" @change="getFileForIndoor($event)">
              <img :src="indoorImgSrc" alt="">
            </span>
            <div class="btn-tip" @click="">点击添加</div>
          </form>
        </div>
        <div class="upload-item clearfix">
          <div class="item-left">
            <div class="item-name">上传门店LOGO</div>
            <div class="item-description">上传与店铺匹配的logo,能提升店铺的点击率（支持JPG、JPEG、PNG格式，不超过500K）</div>
          </div>
          <form>
            <span class="fileinput-button">
              <div class="upload-btn">+</div>
              <input type="file" @change="getFileForLogo($event)">
              <img :src="logoImgSrc" alt="">
            </span>
            <div class="btn-tip" @click="">点击添加</div>
          </form>
        </div>
      </li>
    </ul>
    <footer>
      <div class="u_button" @click="submitForm()">{{btnText}}</div>
    </footer>
  </div>
</template>

<script>
import { XAddress, ChinaAddressV4Data, Value2nameFilter as value2name } from 'vux'
import {submitStore, submitStoreUpdate} from '../../service/apply-restaurant.js'
export default {
  components: {
    XAddress
  },
  data () {
    return {
      companyName:'前端',
      name:'前端陈',
      takeoutPhone:'1234',
      ownerName:'陈',
      ownerPhone:'2345',
      titleText:'',
      isReapply:false,
      isRefill:false,
      storeType:{'name':'餐饮店','value':0},
      storeTypeValue:0,
      upordown:false,

      showAddress:false,
      address:[],
      addressValue:'北京市',
      addressDetail:'家克里斯',
      addressData:ChinaAddressV4Data,

      outdoorPhoto:'',
      logo:'',
      indoorPhoto:'',
      outdoorImgSrc:'',
      indoorImgSrc:'',
      logoImgSrc:'',

      btnText:'下一步',
    }
  },
  mounted(){
    if(this.$route.query.reapply){
      this.isReapply=this.$route.query.reapply;
      this.btnText='确定';
    }else if(this.$route.query.refill){
      this.isRefill=this.$route.query.reapply;
      this.btnText='确定';
    }
  },
  methods:{
    go2router(item){
      this.$router.push({path:item,query:{type:this.roleType,text:this.titleText}});
    },
    doShowAddress () {
      this.showAddress = true
      setTimeout(() => {
        this.showAddress = false
      }, 2000)
    },
    onShadowChange (ids, names) {
      console.log(ids, names)
    },
    getName (value) {
      return value2name(addressValue, ChinaAddressV4Data)
    },
    logHide (str) {
      console.log('on-hide', str)
    },
    logShow (str) {
      console.log('on-show')
    },

    getFileForOutdoor ($event){
      console.log(this.outdoorPhoto);
      var theEvent = $event || window.event;  //兼容火狐的event
      this.outdoorPhoto = theEvent.target.files[0];
      if(this.outdoorPhoto==''){
        return
      }
      console.log(this.outdoorPhoto);
      let fr=new FileReader();
        fr.onload=()=>{
          this.outdoorImgSrc=fr.result;
          // this.showTip=true;
          console.log(this.outdoorImgSrc)
          console.log(this.outdoorPhoto);
        };
      fr.readAsDataURL(this.outdoorPhoto); 
    },
    getFileForIndoor ($event){
      console.log(this.indoorPhoto);
      var theEvent = $event || window.event;  //兼容火狐的event
      this.indoorPhoto = theEvent.target.files[0];
      if(this.indoorPhoto==''){
        return
      }
      console.log(this.indoorPhoto);
      let fr=new FileReader();
        fr.onload=()=>{
          this.indoorImgSrc=fr.result;
          // this.showTip=true;
          console.log(this.indoorImgSrc)
          console.log(this.indoorPhoto);
        };
      fr.readAsDataURL(this.indoorPhoto); 
    },
    getFileForLogo ($event){
      console.log(this.logo);
      var theEvent = $event || window.event;  //兼容火狐的event
      this.logo = theEvent.target.files[0];
      if(this.logo==''){
        return
      }
      console.log(this.logo);
      let fr=new FileReader();
        fr.onload=()=>{
          this.logoImgSrc=fr.result;
          // this.showTip=true;
          console.log(this.logoImgSrc)
          console.log(this.logo);
        };
      fr.readAsDataURL(this.logo); 
    },
    async submitForm(){
      if(this.isReapply){
        const res1 = await submitStoreUpdate({
          companyName:this.companyName,
          name:this.name,
          takeoutPhone:this.takeoutPhone,
          ownerName:this.ownerName,
          ownerPhone:this.ownerPhone,
          type:this.storeTypeValue,
          address:this.addressValue,
          addressDetail:this.addressDetail,
          outdoorPhoto:this.outdoorPhoto,
          logo:this.logo,
          indoorPhoto:this.indoorPhoto
        });
        console.log('res', res1);
        if(res1.code=='200'){
          sessionStorage.changeStore = true;
          this.$router.push({path:'/restaurant-apply-result-error',query:{isReapply:true}});
        }
      }else{
        const res2 = await submitStore({
          companyName:this.companyName,
          name:this.name,
          takeoutPhone:this.takeoutPhone,
          ownerName:this.ownerName,
          ownerPhone:this.ownerPhone,
          type:this.storeTypeValue,
          address:this.addressValue,
          addressDetail:this.addressDetail,
          outdoorPhoto:this.outdoorPhoto,
          logo:this.logo,
          indoorPhoto:this.indoorPhoto
        });
        console.log('res', res2);
        if(res2.code=='200'){
          if(this.isRefill){
            this.$router.push({path:'/restaurant-apply-result'});
          }else{
            this.$router.push({path:'/restaurant-qualification-info'});
          }
        }
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
}
.upload-item{
  width: 100%;
  padding:.44rem 0 .373333rem .44rem;
  border-bottom: 1px solid #ededed;
  .item-left{
    float: left;
    .item-name{
      width: 4.533333rem;
      font-size: .373333rem;
      color: #444;
      margin-bottom: .186667rem;
    }
    .item-description{
      width: 4.533333rem;
      font-size: .373333rem;
      color: #777;
    }
  }
}
form{
  display: inline-block;
  float: right;
  .fileinput-button {
    position: relative;
    display: inline-block;
    /*overflow: hidden;*/
    .upload-btn{
      display: inline-block;
      height: 1.893333rem;
      width: 1.893333rem;
      line-height: 1.893333rem;
      font-size: .4rem;
      color: #409EFF;
      text-align: center;
      border:1px dotted #dcdfe6;
      border-radius: .133333rem;
      margin-right: .533333rem;
    }
  }
  .fileinput-button input{
    height: 1.893333rem;
    width: 1.893333rem;
    margin-right: .533333rem;
    cursor: pointer;
    position: absolute;
    z-index: 999;
    right: 0px;
    top: 0px;
    opacity: 0;
    -ms-filter: 'alpha(opacity=0)';
  }
  .fileinput-button img{
    height: 1.893333rem;
    width: 1.893333rem;
    position: absolute;
    top: 0;
    right: .533333rem;
  }
  .btn-tip{
    color: #444;
    width: 1.893333rem;
    text-align: center;
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
