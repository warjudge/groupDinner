<template>
  <div>
    <header>
      <x-icon type="ios-arrow-left" class="x_icon" size="0.8rem" @click="go2router('/receiptInfo')"></x-icon>
      <span>地址管理</span>
    </header>
    <div class="title">{{titleText}}</div>
    <!-- <div class="title_tip">申请开店前，请准备以下<span>6</span>项资料</div> -->
    <ul>
      <li class="clearfix">
        <div class="m_address">
          <div class="u_add_lt">添加收货地址</div>
          <div class="u_add_rt"><x-icon type="ios-arrow-right" size=".72rem"></x-icon></div>
        </div>
      </li>
      <li>
        <order-item-detail :details="data"></order-item-detail>
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
  import orderItemDetail from '../basic-views/order-item-detail.vue'
export default {
  components: {
   orderItemDetail,
  },
  data () {
    return {
      titleText:'提交订单',
      value:'',
      bankName:'请选择银行名称',
      data:[
        {
          img:require('../../assets/image/meal.png'),
          name:'酥嫩鸡退排饭',
          quantity:'2',
          price:'32',
        },
        {
          img:require('../../assets/image/meal.png'),
          name:'酥嫩鸡退排饭加料加辣加醋加香加甜',
          quantity:'2',
          price:'32',
        },
      ]
    }
  },
  mounted(){
    // this.titleText=this.$route.query.text;
  },
  methods:{
    go2router(item){
      // this.$router.push({path:item,query:{type:this.$route.query.type,text:this.$route.query.text}});
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
  padding: .3rem .306667rem .3rem .293333rem;
  background-color: #fff;
  box-shadow:0 .213333rem .28rem 0 rgba(11,102,204,0.5);
  border-radius:.373333rem;
  .m_address{
    color: #444;
    font-size: .373333rem;
    line-height: .72rem;
    .u_add_lt{
      float: left;
    }
    .u_add_rt{
      float: right;
      fill:#777;
    }
  }
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
