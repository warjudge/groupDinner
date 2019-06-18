<template>
  <div class="myiou">
    <header>
      <x-icon type="ios-arrow-left" class="x_icon" @click="redirectToMain()"></x-icon>
    </header>
    <div class="title">{{title}}</div>
    <div class="content">
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '我的白条'
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
.myiou{
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
</style>
