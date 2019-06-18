<template>
  <div>
    <header>
      <x-icon type="ios-arrow-left" class="x_icon" size="0.8rem" @click="go2router()"></x-icon>
      <span>添加地址</span>
    </header>
    <div class="title">我的收货地址</div>
    <ul>
      <li>
        <div class="contact">
          <span>张理理</span>
          <span>18758576412</span>
        </div>
        <div class="address">
          <div class="image">
            <img src="../../assets/image/default.png" alt="">
          </div>
          <div class="u_address">浙江省杭州市上城区马腾路666号东部软件园六号楼六楼</div>
        </div>
      </li>
      <li>
        <div class="contact">
          <span>张理理</span>
          <span>18758576412</span>
        </div>
        <div class="address">
          <div class="image">
            <img src="" alt="">
          </div>
          <div class="u_address">浙江省杭州市上城区马腾路666号东部软件园六号楼六楼</div>
        </div>
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
      
    }
  },
  mounted(){
    
  },
  methods:{
    go2router(item){
      
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
  padding: 0 0 0 .293333rem;
  background-color: #fff;
  box-shadow:0 .213333rem .28rem 0 rgba(11,102,204,0.5);
  border-radius:.373333rem;
  .contact,.address{
    color: #444;
    min-height: 1.333333rem;
    font-size: .373333rem;
  }
  .contact{
    line-height: 1.333333rem;
    border-bottom: 1px solid #ededed;
    & span:nth-child(2){
      color: #777;
      padding-left: .24rem;
    }
    /*&::after{
      content: " ";
      border: 1px solid #EDEDED;
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 1px;
      color: #D9D9D9;
      transform: scaleY(0.5);
    }*/
  }
  .address{
    padding: .333333rem 0;
    padding-right: .333333rem;
    display: table;
    width: 100%;
    .image{
      display: table-cell;
      vertical-align: middle;
      width: 16%;
      img{
        width: .733333rem;
      }
    }
    .u_address{
      display: table-cell;
      vertical-align: middle;
      width: 83%;
    }
  }
}
</style>
