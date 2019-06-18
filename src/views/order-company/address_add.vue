<template>
  <div>
    <header>
      <x-icon type="ios-arrow-left" class="x_icon" size="0.8rem" @click="go2router()"></x-icon>
      <span>保存</span>
    </header>
    <div class="title">添加收货地址</div>
    <ul>
      <li>
          <group>
            <x-input title="收货人" v-model="value" placeholder=""></x-input>
          </group>
          <group>
            <x-input title="手机号码" v-model="value" placeholder=""></x-input>
          </group>
          <group>
             <x-address 
              @on-hide="logHide" 
              @on-show="logShow" 
              title="门店地址" 
              v-model="addressValue" 
              :list="addressData" 
              @on-shadow-change="onShadowChange" 
              placeholder="省-市-区/县" 
              :show.sync="showAddress"></x-address>
          </group>
          <group>
            <x-input v-model="value" placeholder="详细地址:道路、门牌号、楼栋、单元室等"></x-input>
          </group>
          <group>
            <x-switch :value="isDefault" title="设为默认地址"></x-switch>
          </group>
      </li>
    </ul>
    <footer>
      <div class="u_button" @click="submit()">
        <div class="u_btn_lt">取消订单</div>
        <div class="u_btn_rt">提交订单</div>
      </div>
    </footer>
  </div>
</template>

<script>
import { XAddress, ChinaAddressV4Data, Value2nameFilter as value2name } from 'vux'
export default {
  components: {
    XAddress
  },
  data () {
    return {
      titleText:'',
      value:'',
      storeType:'餐饮店',
      upordown:false,
      showAddress:false,
      addressValue:[],
      addressData:ChinaAddressV4Data,
      isDefault: false,
    }
  },
  mounted(){
    
  },
  methods:{
    go2router(item){
      
    },
    submit(){
     
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

footer{
  background-color: var(--bgc-levelone);
  padding-bottom: 1.4rem;
}
.u_button{
  width: 8.8rem;
  margin: 0 auto;
  font-size: .48rem;
  color: #fff;
  line-height: 1.066667rem;
  text-align: center;
  .u_btn_lt{
    float: left;
    width: 4.4rem;
    height: 1.066667rem;
    color: #375270;
    background:linear-gradient(90deg,#FFFFFF 0%,#DEEEFF 100%);
    border-radius:.6rem 0 0 .6rem;
  }
  .u_btn_rt{
    float: right;
    width:4.4rem;
    height:1.066667rem;
    background:linear-gradient(90deg,#5FB1FF 0%,#4F98FF 100%);
    border-radius:0 .6rem .6rem 0;
  }
}
</style>
