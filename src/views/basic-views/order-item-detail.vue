<template>
  <div>
    <div class="ord_item" v-for="item in details">
      <div class="image">
        <img :src="item.img" alt="">
      </div>
      <div class="name">{{item.name}}</div>
      <div class="quantity">x{{item.quantity}}</div>
      <div class="price">{{item.price}}元</div>
    </div>
    <div class="ord_item_all">
      <div class="amount">总计：</div>
      <div class="quantity">x21</div>
      <div class="price">1222元</div>
    </div>
    <div class="ord_item_tip" v-if="isShowtimeAndNum">
      <div class="tip_one">下单时间 2018-08-31 11:00:00</div>
      <div class="tip_two">订单编号 2018083100000</div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    details:{
      default:[],
      type:Array
    },
    isShowtimeAndNum:{
      default:true,
      type:Boolean
    },
  },
  data () {
    return {
      
    }
  },
  mounted(){
    // this.titleText=this.$route.query.text;
  },
  methods:{
   
  },
}
</script>

<style scoped>
@import '../../assets/css/root.css';
.ord_detail{
  width: 100%;
  min-height: 1.333333rem;
  font-size: .373333rem;
  color: #777;
  display: table;
  border-bottom: 1px solid #ededed;
  .det_left{
    display: table-cell;
    vertical-align: middle;
    width: 25%;
    padding-right: 4%; 
    text-align: right;
  }
  .det_lt{
    display: table-cell;
    vertical-align: middle;
    width: 25%;
    padding-right: 4%;
    text-align: right;
  }
  .det_center{
    display: table-cell;
    vertical-align: middle;
    width: 45%;
  }
  .det_right{
    display: table-cell;
    vertical-align: middle;
    width: 74%;
  }
  .det_rt{
    display: table-cell;
    vertical-align: middle;
    width: 34%;
    .det_icon{
      float: right;
      fill: #777;
      vertical-align: middle;
    }
  }
}
.ord_item,.ord_item_all{
  width: 100%;
  min-height: .933333rem;
  font-size: .373333rem;
  color: #444;
  padding: .2rem 0;
  display: table;
  border-bottom: 1px solid #ededed;
  .image{
    width: 20%;
    padding-right: .15rem;
    display: table-cell;
    vertical-align: middle;
    img{
      width: 100%;
    }
  }
  .amount{
    width: 63.8%;
    display: table-cell;
    vertical-align: middle;
  }
  .name{
    width: 43.8%;
    padding-right: .1rem;
    display: table-cell;
    vertical-align: middle;
  }
  .quantity{
    width: 18%;
    display: table-cell;
    vertical-align: middle;
  }
  .price{
    width: 18%;
    color: #27C06B;
    text-align: right;
    display: table-cell;
    vertical-align: middle;
  }
}
.ord_item_all .price{
  font-weight: 900;
}
.ord_item_tip{
  color: #777;
  font-size: .32rem;
  line-height: .44rem;
  text-align: right;
  .tip_one,.tip_two{
    padding-top: .186667rem;
  }
}
</style>
