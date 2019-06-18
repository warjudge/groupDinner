<!-- 餐厅首页 -->
<template>
  <div>
    <header>
      <x-icon type="ios-arrow-left" class="x_icon" size="0.8rem" @click="go2router('/login')"></x-icon>
      <span></span>
    </header>
    <ul>
      <li class="clearfix">
        <div class="fl">
          <img class="fl_img" src="" alt="">
        </div>
        <div class="fr">
          <div class="name">永和大王（学院路店）</div>
          <div class="state" @click="showState=true">{{stateText}}&nbsp;<x-icon class="icon-white" type="ios-arrow-down" size="0.3rem"></x-icon></div>
          <div class="time">
            <div class="time_tip">接单时间：</div>
            <div class="time_btn" @click="showTime=true">{{startTime}}至{{endTime}}&nbsp;<x-icon class="icon-grey" type="ios-arrow-down" size="0.3rem"></x-icon></div>
          </div>
        </div>
      </li>
      <li class="fix_li">
        <group>
          <cell title="订单管理" value="" :link="{path:'/restaurant-order-manage'}">
            <img slot="icon" class="img_icon" src="../../assets/image/home/order.png"></img>
          </cell>
        </group>
        <group>
          <cell title="商品管理" :link="{path:'/restaurant-commodity-manage'}">
            <img slot="icon" class="img_icon" src="../../assets/image/home/commodity.png"></img>
            <div class="tip"></div>
          </cell>
        </group>
        <group>
          <cell title="我的白条" value="" :link="{path:''}">
            <img slot="icon" class="img_icon" src="../../assets/image/home/myiou.png"></img>
          </cell>
        </group>
        <group>
          <cell title="个人设置" value="" :link="{path:''}">
            <img slot="icon" class="img_icon" src="../../assets/image/home/manset.png"></img>
          </cell>
        </group>
      </li>
    </ul>
    <div>
      <popup v-model="showState">
        <div class="u_btn" @click="changeState()">打烊了</div>
        <div class="u_btn" @click="showState=false">取消</div>
      </popup>
    </div>
    <!-- <div> -->
      <popup v-model="showTime">
        <div class="m_btn">
          <span @click="showTime=false">取消</span>
          <span @click="changeTime()">确认</span>
        </div>
          <time-range-picker :startTime.sync="startTime" :endTime.sync="endTime"/>
      </popup>
    <!-- </div> -->
    <!-- <time-picker :isShow="showTime" @close="closeMyself()"></time-picker> -->
    
  </div>
</template>

<script>

import { getBaseInfo, updateOnlineStatus, changeOnlineTime} from '../../service/home-restaurant.js';
export default {
  components: {

  },
  data () {
    return {
      roleType:1,
      titleText:'',
      showState:false,
      stateText:'营业中',
      showTime:false,
      startTime:'9:00',
      endTime:'17:00'
    }
  },
  methods:{
    changeTime(){
      console.log(this.startTime,this.endTime);
      this.showTime=false;
    },
    changeState(){
      this.stateText='打烊了';
      this.showState=false;
    },
    // closeMyself(){
    //   this.showTime=false;
    // },
    go2router(item){
      this.$router.push(item);
    },
    submit(){
      
      // this.$router.push('/application/storeInfo-openStore');
      // this.$router.push(this.$route.path+'/storeInfo-openStore');
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
ul{
  background-color: var(--bgc-levelone);
  padding: 0 .4rem .4rem .4rem;
}
li{
  width: 100%;
  position: relative;
  margin: 0 auto;
  margin-bottom: .306667rem;
/*  padding: .56rem 0 .506667rem .293333rem;*/
  padding: .32rem .133333rem .4rem .266667rem;
  background-color: #fff;
  box-shadow:0 .213333rem .28rem 0 rgba(11,102,204,0.5);
  border-radius:.373333rem;
  .fl_img{
    display: block;
    width: 3.093333rem;
    height: 2.88rem;
    background-color: green;
  }
  .fr{
    color: #444;
    font-size: .373333rem;
    line-height: .64rem;
  }
  .name{
    /*height: .64rem;*/
    font-size: .453333rem;
    font-weight: 600;
    color: #222;
  }
  .state{
    height: .64rem;
    width: 2.04rem;
    margin-top: .24rem;
    background-color:#4391E8;
    box-shadow:0 .053333rem .106667rem 0 #62A6F2;
    border-radius:.32rem;
    color: #fff;
    padding-left: .373333rem;
  }
  .time{
    margin-top: .6rem;
    .time_tip{
      display: inline-block;
    }
    .time_btn{
      display: inline-block;
      width: 3.146667rem;
      height: .64rem;
      padding-left: .2rem;
      background: linear-gradient(279deg,#D2E8FF 0%,#E4F1FF 100%);
      border-radius:.32rem;
    }
  }
  .img_icon{
    width: .48rem;
    height: auto;
    vertical-align: bottom;
    margin-right: .266667rem;
  }
  .tip{
    width: .16rem;
    height: .16rem;
    border-radius: .16rem;
    background-color: #F32254;
  }
}
li.fix_li{
  padding: 0 0 .4rem .266667rem;
}
.u_btn{
  height: 1.2rem;
  font-size: .426667rem;
  color: #444;
  text-align: center;
  line-height: 1.2rem;
  text-shadow:0 .013333rem .04rem rgba(0,0,0,0.5);
  background-color: #fff;
  border-bottom: .133333rem solid #ededed;
}
.m_btn{
  height: 1.053333rem;
  background-color: #fff;
  color: #444;
  font-size: .426667rem;
  line-height: 1.053333rem;
  padding: 0 .4rem 0 .4rem;
  display: flex;
  justify-content: space-between;
  border:1px solid #EDEDED;
}
</style>
