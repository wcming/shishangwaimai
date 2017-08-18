<template>
  <div class="wrap">
    <header class="header">
        订单
        <a href="javascript: ;" class="back">
            <i class="fa fa-angle-left f20"></i>
        </a>
    </header>
    <div class="content">
      <h3>亲，一个订单都没有哦</h3>
      <p>给自己定一个小目标，线下一单吧！</p>
      <router-link to="/wrap/shouye" tag="button">立即下单</router-link>
    </div>
    <my-foot></my-foot>
  </div>
</template>

<script>
export default {
  name: 'order'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  width: 100%;
  height: 0.44rem;
  line-height: 0.44rem;
  font-size: 0.18rem;
  background: #f7bc48;
  color: #FFF;
  text-align: center;
  position: relative;}
  .header .back {
    position: absolute;
    left: 0.1rem;
    line-height: 0.44rem;
    color: #FFF; }
.content{
  -webkit-flex: 1;
  overflow-y: scroll;
  text-align: center;
  background: #FFF;
}
h3{
  margin-top: 1rem;
  font-size: .14rem;
}
p{
  line-height: .3rem;
}
button{
  width: 1.1rem;
  height: .4rem;
  background: #f6f161;
  border-radius: .2rem;
  margin-top: .5rem
}
</style>
