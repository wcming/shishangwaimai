<template>
  <div class="wrap">
    <header class="header">
        我的余额
        <router-link to='/wrap/my' class="back">
          <i class="fa fa-angle-left f20"></i>
        </router-link>
        <router-link to='' class="detail">
          交易明细
        </router-link>
    </header>
    <div class="content">
      <img src="../assets/balance.png" alt="">
        <p>账户余额</p>
        <h3>￥131.40</h3>
        <router-link to='' class="recharge" tag='button'>
          充值
        </router-link>
        <router-link to='' class="withdraw" tag='button'>
          提现
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'balance'
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
  .header .detail{
    position: absolute;
    right: 0.1rem;
    font-size: .14rem;
    line-height: 0.44rem;
    color: #FFF;
  }
.content {
  -webkit-flex: 1;
  overflow-y: scroll;
  text-align: center;
  background: #f7f7f7;
 }
  .content img {
    width: 0.9rem;
    margin-top: 0.5rem;
    margin-bottom: 0.1rem; }
  .content p {
    font-size: 0.16rem;
    line-height: 0.2rem; }
  .content h3 {
    font-size: 0.25rem;
    line-height: 0.4rem;
    margin-bottom: 0.2rem; }
  .content button {
    width: 90%;
    margin-left: 5%;
    height: 0.4rem;
    border-radius: 0.2rem;
    margin-bottom: 0.1rem; }
  .content .recharge {
    background: #f7bc48;
    color: #FFF; }
  .content .withdraw {
    background: #FFF; }
</style>
