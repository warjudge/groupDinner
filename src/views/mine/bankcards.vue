<template>
  <div class="bankcards">
    <header>
      <x-icon type="ios-arrow-left" class="x_icon" @click="redirectToMain()"></x-icon>
    </header>
    <div class="title">{{title}}</div>
    <div class="content">
      <ul style="padding:0 0.5rem;">
        <li class="bank-card-item">
          <p class="bank-card-item-row1">中国工商银行</p>
          <p class="bank-card-item-row2">6222 **** **** 0472</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '银行卡'
    }
  },
  mounted(){

  },
  methods:{
    redirectToMain(){
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
@import '../../assets/css/root.css';
.bankcards{
  background-color: #4391e8;
  height: 100%;
}

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
  margin-bottom: 1.2rem;
}
.bank-card-item{
  background: linear-gradient(to bottom right, #FFC858, #9F6E14);
  border-top-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  height: 3rem;
  width: 100%;
  padding: 0.5rem 0.8rem;
}
.bank-card-item-row1{
  font-size:0.6rem;
  font-weight:700;
}
.bank-card-item-row2{
  font-size:0.5rem
}
</style>
