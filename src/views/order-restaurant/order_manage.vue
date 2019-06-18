<!-- 餐厅订单管理 -->
<template>
  <div>
    <header>
      <x-icon type="ios-arrow-left" class="x_icon" size="0.8rem" @click="go2router"></x-icon>
      <span></span>
    </header>
    <div class="nav_bar">
      <div class="bar_name" :class="[{bar_name:true},{current_bar:barId==1}]" @click="changeBar(1)">当<span>前订</span>单</div>
      <div class="bar_name" :class="[{bar_name:true},{current_bar:barId==2}]" @click="changeBar(2)">历<span>史订</span>单</div>
    </div>
    <div class="order_title">
      <div class="title" v-if="showSearch==false">{{titleText}}</div>
      <span @click="showSearch=true" :class="{current_span:showSearch==true}">
        <x-icon type="ios-search" class="search_icon" size="0.8rem"></x-icon>
        <input type="text" placeholder="搜索">
      </span>
      <div v-if="showSearch==true" class="current_div" @click="showSearch=false">取消</div>
    </div>
    <ul>
      <li class="special_order">
        <div class="m_buyer">
          <div class="buyer_name">百脑汇电子设备网络科技技术有…</div>
          <div class="buyer_state">待卖家确认</div>
        </div>
        <group>
          <cell title="绿豆粥、酸菜鱼、肉夹膜等12件..." :link="{path:''}" inline-desc="08-31 15:25">
            <div>
              <p>680</p>
              <p class="desc_right">白条</p>
            </div>
          </cell>
        </group>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  data () {
    return {
      titleText:'当前订单',
      barId:1,
      showSearch:false,
    }
  },
  mounted(){
    // this.titleText=this.$route.query.text;
  },
  methods:{
    go2router(){
     
    },
    changeBar(id){
      this.barId=id;
      if(id==1){
        this.titleText='当前订单';
      }else if(id==2){
        this.titleText='历史订单';
      }
    },
    submit(){
      
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
.nav_bar{
  width: 100%;
  padding:0 2.56rem 0 2.56rem;
  display: flex;
  justify-content: space-between;
  @apply --nav-bar;
  margin-bottom: .32rem;
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
.order_title{
  height: .933333rem;
  padding-right: .4rem;
  margin-bottom: .253333rem;
  display: flex;
  justify-content: space-between;
  .title{
    @apply --title-levelone;
  }
  span{
    display: block;
    width: 2.4rem;
    padding-left: .906667rem;
    background-color: #4391E8;
    border: 1px #fff solid;
    border-radius:.466667rem;
    position: relative;
    .search_icon{
      fill: #fff;
      position: absolute;
      top:.15rem;
      left: .106667rem;
    }
    input{
      height: 100%;
      width: 100%;
      font-size: .373333rem;
      color: #fff;
    }
  }
  .current_span{
    width: 7.733333rem;
    margin-left: .4rem;
  }
  .current_div{
    font-size: .373333rem;
    line-height: .933333rem;
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
  padding: .56rem .293333rem 0 .293333rem;
  background-color: #fff;
  box-shadow:0 .213333rem .28rem 0 rgba(11,102,204,0.5);
  border-radius:.373333rem;
  .m_buyer{
    font-size: .373333rem;
    line-height: .533333rem;
    color: #222;
    display: flex;
    justify-content: space-between;
    margin-bottom: .1rem;
    .buyer_state{
      color: #4391E8;
    }
  }
}
</style>
