<template>
  <div class="wrap">
    <div class="content-wrapper">
      <router-link to="/wrap/shouye" class="back">
        <i class="fa fa-angle-left f20"></i>
      </router-link>
      <div class="avatar">
        <img width="64" height="64" src="../assets/information_img01.jpg">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">粥品香坊</span>
        </div>
        <div class="description">
          食尚转送/38分钟送达
        </div>
        <div class="support">
          <span class="text">在线支付满28减5</span>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-text text-wrap">
        粥品香坊其烹饪粥料的秘方源于中国千年古法于中国千年古法于中国千年古法
      </span>
    </div>
    <div class="tab">
      <router-link to="/information">商品</router-link>
      <router-link to="/information/screen">评论</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="foot">
      <div class="center">
        <p>合计：¥<span class="total">19.80</span></p>
        <p>总额：¥<span class="total">19.80</span></p>
      </div>
      <router-link to="/placeOrder" tag="button">
        确认订单
      </router-link>
    </div>
  </div> 
</template>

<script>

</script>

<style scoped>
.wrap{
  background: #FFF;
  display: -webkit-flex;
  -webkit-flex-direction: column;
}
.content-wrapper {
  position: relative;
  padding: 24px 12px 18px 24px;
  font-size: 0;
  background: url('../assets/information_bj.jpg');
  background-size: 100% 100%; 
  display: -webkit-flex;
  color: #FFF;
}
.content-wrapper .back{
  position: absolute;
  left: .1rem;
  line-height: .4rem;
  color: #FFF;
  top: 0;
}
.content-wrapper .content {
    display: inline-block;
    margin-left: 16px;
}
.content-wrapper .content .title {
    margin: 2px 0 8px 0;
}
.content-wrapper .content .title .brand {
    display: inline-block;
    vertical-align: top;
    width: 30px;
    height: 18px;
    background-image: url('../assets/information_pingpai.jpg');
    background-size: .3rem .18rem;
    background-repeat: no-repeat;
}
.content-wrapper .content .title .name {
    margin-left: 6px;
    font-size: 16px;
    line-height: 18px;
    font-weight: bold;
}
.content-wrapper .content .description {
    margin-bottom: 10px;
    line-height: 12px;
    font-size: 12px;
}
.content-wrapper .content .support .text {
    line-height: 12px;
    font-size: 10px;
}
.bulletin-wrapper {
    position: relative;
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #FFF;
    background: rgba(0,0,0,.5);
}
.bulletin-wrapper .bulletin-text {
    vertical-align: top;
    margin: 0 4px;
    font-size: 10px;
}
.tab{
  height: .4rem;
  line-height: .4rem;
  background: #F2f2f2;
  display: -webkit-flex;
}
.tab a{
  -webkit-flex: 1;
  text-align: center;
  font-size: .14rem;
}
.tab .router-link-active{
  color: orange;
}
.content{
  -webkit-flex: 1;
  overflow: hidden;
}
.foot {
  height: 0.5rem;
  line-height: 0.5rem;
  background: #FFF;
  border-top: 1px solid #CCC;
  display: -webkit-flex;
}
  .foot .center {
    padding-left: .1rem;
    -webkit-flex: 2; }
    .foot .center p {
      line-height: 0.25rem;
      text-align: left; }
      .foot .center p:nth-child(1) {
        font-size: 0.18rem;
        font-weight: 600; }
.foot button{
  -webkit-flex: 1;
  height: .5rem;
  background: #eda72e;
  color: #FFF;
}
</style>
