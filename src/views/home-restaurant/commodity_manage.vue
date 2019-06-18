<!-- 餐厅菜品管理 -->
<template>
  <div>
    <header>
      <x-icon type="ios-arrow-left" class="x_icon" size="0.8rem" @click="go2router('/login')"></x-icon>
      <span @click="go2router('/restaurant-add-commodity')">添加商品</span>
    </header>
    <div class="title">商品管理</div>
    <ul>
      <li>
        <div class="clearfix">
          <div class="fl">
            <img class="fl_img" src="" alt="">
          </div>
          <div class="fr">
            <div class="name">香草鸡肉牛油果奶油烩饭香浓芝士口味4种口味</div>
            <div class="price">128元</div>
            <div class="tip">酥嫩鸡腿排饭(原味) 台式甜辣…</div>
          </div>
        </div>
        <div class="m_btn">
          <span>删除</span>
          <span>编辑</span>
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
      roleType:1,
      titleText:'',
    }
  },
  mounted(){
    
  },
  methods:{
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
  padding: .32rem .4rem .4rem .413333rem;
  background-color: #fff;
  box-shadow:0 .213333rem .28rem 0 rgba(11,102,204,0.5);
  border-radius:.373333rem;
  .fl_img{
    display: block;
    width: 2.933333rem;
    height: 2.133333rem;
    border-radius: .133333rem;
    background-color: green;
  }
  .fr{
    color: #444;
    font-size: .373333rem;
    line-height: .64rem;
  }
  .name{
    width: 4.8rem;
    font-weight: 600;
    line-height: .453333rem;
    color: #222;
  }
  .price{
    margin-top: .133333rem;
    font-size: .453333rem;
    font-weight: 900;
    color: #27C06B;
  }
  .tip{
    font-size: .32rem;
    color: #777;
  }
  .m_btn{
    width: 100%;
    height: .666667rem;
    margin-top: .333333rem;
    /*background-color: blue;*/
    font-size: .32rem;
    line-height: .666667rem;
    color: #444;
    text-align: right;
    span{
      display: inline-block;
      width: 1.333333rem;
      margin-left: .266667rem;
      text-align: center;
      border:1px solid #C2C2C2;
      border-radius:.346667rem;
    }
  }
}
</style>
