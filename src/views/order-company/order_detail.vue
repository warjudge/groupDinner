<!-- 餐厅订单详细信息 -->
<template>
  <div style="background-color: #4391E8;">
    <header>
      <x-icon type="ios-arrow-left" class="x_icon" size="0.8rem" @click="go2router"></x-icon>
      <span></span>
    </header>
    <div class="title">{{titleText}}</div>
    <ul>
      <li>
        <order-item-detail :details="data" :isShowtimeAndNum="false"></order-item-detail>
      </li>
    </ul>
    <info class="white-bgc-box detail-box" labelWidth="2rem" style="margin-bottom: .52rem;">
      <info-item label="订单公司" detail="33复杂美集团区块链网络技术科技股份有限公司"></info-item>
      <info-item label="联系电话" detail="12345678901"></info-item>
      <info-item label="联系人" detail="王天"></info-item>
      <info-item label="送餐地址" detail="文三路90号6号楼6层"></info-item>
      <info-item label="下单时间" detail="2018-08-31 11:00:00"></info-item>
      <info-item label="卖家确认时间" detail="2018-08-31 12:00:00"></info-item>
      <info-item label="卖家送货时间" detail="2018-08-31 13:00:00"></info-item>
      <info-item label="订单时间" detail="2018083100008"></info-item>
    </info>
    <footer>
      <div class="u_button" @click="submit()">确认收货</div>
    </footer>
    <div>
      <popup v-model="showData">
        <div class="m_btn">
          <span @click="showData=false;showPicker=false">取消</span>
          <span @click="show()">确认</span>
        </div>
          <picker :data='testData' v-model='test' @on-change='change' v-if="showPicker"></picker>
      </popup>
    </div>
  </div>
</template>

<script>
  import orderItemDetail from '../basic-views/order-item-detail.vue'
  import { Picker} from 'vux';
export default {
  components: {
    orderItemDetail,
    Picker
  },
  data () {
    return {
      titleText:'待确认收货',//待买家确认，待确认收货
      testData:[['1'],['1'],['1']],
      showData:false,
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
      ],
      test:[],
      showPicker:false,
    }
  },
  mounted(){
    for(let i=0;i<=2;i++){
      if(i==0){
        for(let j=0;j<=49;j++){
          this.testData[i][j]=j+2018+'年';
        }
      }else if(i==1){
        for(let j=0;j<=11;j++){
          this.testData[i][j]=j+1+'月';
        }
      }else if(i==2){
        for(let j=0;j<=29;j++){
          this.testData[i][j]=j+1+'日';
        }
      }
    }
  },
  methods:{
    go2router(){
     
    },

    submit(){
      this.showData=true;
    },
    show(){
      this.showPicker=true;
    },
    change (value) {
      console.log('new Value', value)
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
.title{
  @apply --title-levelone;
  margin-bottom: .253333rem;
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
