<!-- 餐厅订单详细信息 -->
<template>
  <div style="background-color: #4391E8;">
    <header>
      <x-icon type="ios-arrow-left" class="x_icon" size="0.8rem" @click="go2router"></x-icon>
      <span></span>
    </header>
    <div class="nav_bar">
      <div class="bar_name" :class="[{bar_name:true},{current_bar:barId==1}]" @click="changeBar(1)">订<span>单详</span>情</div>
      <div class="bar_name" :class="[{bar_name:true},{current_bar:barId==2}]" @click="changeBar(2)">菜<span>品数</span>量</div>
    </div>
    <div class="title">{{titleText}}</div>

    <info class="white-bgc-box detail-box" labelWidth="2rem" v-if="barId==1" style="margin-bottom: .52rem;">
      <info-item label="订单公司" detail="33复杂美集团区块链网络技术科技股份有限公司"></info-item>
      <info-item label="联系电话" detail="12345678901"></info-item>
      <info-item label="联系人" detail="王天"></info-item>
      <info-item label="送餐地址" detail="文三路90号6号楼6层"></info-item>
      <info-item label="下单时间" detail="2018-08-31 11:00:00"></info-item>
      <info-item label="卖家确认时间" detail="2018-08-31 12:00:00"></info-item>
      <info-item label="卖家送货时间" detail="2018-08-31 13:00:00"></info-item>
      <info-item label="订单时间" detail="2018083100008"></info-item>
    </info>

    <info class="white-bgc-box detail-box" labelWidth="2rem" v-if="barId==1" style="margin-bottom: 1.053333rem;">
      <div class="items_detail">
        <div class="name">姓名</div>
        <div class="dish">菜品</div>
        <div class="price">价格(元)</div>
        <div class="note">备注</div>
      </div>
      <div class="item_detail">
        <div class="name">王大五</div>
        <div class="dish">桂圆红枣薏米粥桂圆红枣薏米粥桂圆红枣薏米粥</div>
        <div class="price">18</div>
        <div class="note">不加糖</div>
      </div>
      <div class="item_detail">
        <div class="name">王大五</div>
        <div class="dish">桂圆红枣薏米粥</div>
        <div class="price">18</div>
        <div class="note">不加糖</div>
      </div>
    </info>

    <info class="white-bgc-box detail-box" labelWidth="2rem" v-if="barId==2" style="margin-bottom: 1.053333rem;">
      <div class="items_quantity">
        <div class="dish">菜品</div>
        <div class="quantity">数量(份)</div>
        <div class="price">价格</div>
      </div>
      <div class="item_quantity">
        <div class="dish">法式鲜橙香煎鸭肉 +杂粮饭团+土豆泥</div>
        <div class="quantity">10</div>
        <div class="price">147</div>
      </div>
      <div class="item_quantity">
        <div class="dish">生炒鸡</div>
        <div class="quantity">4</div>
        <div class="price">15</div>
      </div>
      <div class="item_amount">
        <div class="dish">总计</div>
        <div class="quantity">18</div>
        <div class="price">289</div>
      </div>
    </info>
    <footer>
      <div class="u_button" @click="submit()">确认订单</div>
    </footer>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  data () {
    return {
      titleText:'订单详情',//等待送货，待确认收货，订单已成功。订单已取消
      barId:1,
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
        this.titleText='订单详情';
      }else if(id==2){
        this.titleText='菜品数量';
      }
    },
    submit(){
      
    },
  },
}
</script>

<style scoped>
@import '../../assets/css/iou/detail-info.css';
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
.title{
  @apply --title-levelone;
  margin-bottom: .253333rem;
}
.items_detail,.item_detail{
  width: 100%;
  min-height: .533333rem;
  font-size: .373333rem;
  padding: .266667rem 0;
  display: table;
  border-bottom: 1px solid #ededed;
  .name{
    width: 20%;
    display: table-cell;
    vertical-align: middle;
  }
  .dish{
    width: 39.8%;
    display: table-cell;
    vertical-align: middle;
  }
  .price{
    width: 20%;
    display: table-cell;
    vertical-align: middle;
  }
  .note{
    width: 20%;
    text-align: right;
    display: table-cell;
    vertical-align: middle;
  }
}
.items_detail{
  color: #777;
}
.item_detail{
  color: #444;
  .price{
    color: #27C06B;
    font-weight: 800;
  }
}


.items_quantity,.item_quantity,.item_amount{
  width: 100%;
  min-height: .533333rem;
  font-size: .373333rem;
  padding: .266667rem 0;
  display: table;
  border-bottom: 1px solid #ededed;
  .dish{
    width: 59.8%;
    padding-right: 10%;
    display: table-cell;
    vertical-align: middle;
  }
  .quantity{
    width: 20%;
    display: table-cell;
    vertical-align: middle;
  }
  .price{
    width: 20%;
    text-align: right;
    display: table-cell;
    vertical-align: middle;
  }
}
.items_quantity,.item_quantity{
  color: #777;
}
.item_quantity .quantity{
  color: #444;
  font-weight: 800;

}
.item_amount{
  color: #444;
  font-weight: 800;
  .price{
    color: #27C06B;
  }
}

footer{
  background-color: var(--bgc-levelone);
  padding-bottom: 1.4rem;
}
.u_button{
  @apply --bgc-button-gradientone;
  margin: 0 auto;
  font-size: .48rem;
  color: #fff;
}
</style>
