<template>
  <div>
    <header>
      <x-icon type="ios-arrow-left" class="x_icon" size="0.8rem" @click="go2router('/receiptInfo')"></x-icon>
      <span>
        <x-icon type="ios-search" class="search_icon" size="0.8rem"></x-icon>
        <input type="text" placeholder="输入搜索银行">
      </span>
    </header>
    <div class="title">银行</div>
    <!-- <div class="title_tip">申请开店前，请准备以下<span>6</span>项资料</div> -->
    <ul>
      <li>
        <div class="item">中国工商银行</div>
        <div class="item">中国建设银行</div>
        <div class="item">中国农业银行</div>
        <div class="item">中国银行</div>
        <div class="item">交通银行</div>
        <div class="item">招商银行</div>
        <div class="item">浦发银行</div>
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
      titleText:'',
      value:'',
      bankName:'请选择银行名称',
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
  span{
    width: 8.133333rem;
    height: 100%;
    padding-left: .906667rem;
    background-color: #fff;
    border-radius:.466667rem;
    position: relative;
    .search_icon{
      fill: #4C97EA;
      position: absolute;
      top:0;
      left: .106667rem;
    }
    input{
      height: 100%;
      width: 100%;
    }
  }
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
.item{
  height: 1.333333rem;
  border-bottom: 1px solid #ededed;
  font-size: .373333rem;
  color: #444;
  line-height: 1.333333rem;
}
.item.current{
  background-color: #D6E9FF;
}
</style>
