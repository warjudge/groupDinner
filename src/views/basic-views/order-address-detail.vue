<template>
  <div>
    <div class="ord_detail">
      <div class="det_left">订餐公司:</div>
      <div class="det_right">33复杂美集团区块链网络技术科技股份有限公司</div>
    </div>
    <div class="ord_detail">
      <div class="det_lt">收货人:</div>
      <div class="det_center">复杂美前台</div>
      <div class="det_rt">18758576412</div>
    </div>
    <div class="ord_detail">
      <div class="det_lt">收货地址:</div>
      <div class="det_center det_center_icon">东部软件园六号楼六楼</div>
      <div class="det_rt det_rt_icon"><x-icon class="det_icon" type="ios-arrow-right" size=".72rem"></x-icon></div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    data:{
      type:Object,
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
  .det_center.det_center_icon{
    width: 69%;
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
  .det_rt.det_rt_icon{
    width: 10%;
  }
}
</style>
