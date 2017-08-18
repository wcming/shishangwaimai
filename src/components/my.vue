<template>
  <div class="wrap">
    <div class="content">
        <div class="user">
            <div class="head">
                我
                <a href="javascript: ;">
                    <i class="icon-shezhi iconfont f20"></i>
                </a>
            </div>
            <router-link to='/userInfo' tag='div' class="msg">
                <img src="../assets/user_header.png" alt="">
                <p>the丶sunshine</p>
                <p>
                    个人信息
                    <i class="fa fa-angle-right f16"></i>
                    <i class="fa fa-angle-right f16"></i>
                </p>
            </router-link>
            <div class="mine">
                <router-link to='/balance'>
                    <p>余额</p>
                    <p>520.00</p>
                </router-link>
                <a href="javascript: ;">
                    <p>我的订单</p>
                    <p>5</p>
                </a>
                <router-link to='/collect'>
                    <p>我的收藏</p>
                    <p>33</p>
                </router-link>
            </div>
        </div>
        <div class="means click">
            <p>
                <span style="background: #ffc75a">
                <i class="icon-wodezichan iconfont f16"></i>
            </span> 我的资产
            </p>
            <p>
                <b>赶快来抢红包</b>
                <i class="fa fa-angle-right f20"></i>
            </p>
        </div>
        <router-link to='/thank' class="click" tag="div">
            <p>
                <span style="background: #99c0bf">
                <i class="icon-jilu iconfont f16"></i>
            </span> 答谢记录
            </p>
            <p>
                <i class="fa fa-angle-right f20"></i>
            </p>
        </router-link>
        <router-link to='/address' class="click" tag="div">
            <p>
                <span style="background: #88ad79">
                <i class="icon-dizhi iconfont f16"></i>
            </span> 我的地址
            </p>
            <p>
                <i class="fa fa-angle-right f20"></i>
            </p>
        </router-link>
        <router-link to='/ruzhu' class="click enter" tag="div">
            <p>
                <span style="background: #f15b5a">
                <i class="icon-shangjiaruzhu iconfont f16"></i>
            </span> 商家入驻
            </p>
            <p>
                <i class="fa fa-angle-right f20"></i>
            </p>
        </router-link>
        <router-link to='/more' class="click more" tag="div">
            <p>
                <span style="background: #9470b0">
                    <i class="icon-gengduo iconfont f16"></i>
                </span> 更多推荐
            </p>
            <p>
                <i class="fa fa-angle-right f20"></i>
            </p>
        </router-link>
    </div>
    <my-foot></my-foot>
  </div>
</template>

<script>
export default {
  name: 'my'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.content {
  -webkit-flex: 1;
  overflow-y: scroll; }

.user {
  height: 1.9rem;
  background: url("../assets/wode_bj.jpg") no-repeat;
  background-size: 100% 100%;
  position: relative;
  margin-bottom: 0.1rem; }
  .user .head {
    position: absolute;
    top: 0;
    width: 100%;
    height: 0.44rem;
    line-height: 0.44rem;
    font-size: 0.18rem;
    text-align: center; }
    .user .head a {
      position: absolute;
      right: 0.1rem;
      line-height: 0.44rem; }
  .user .msg {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 0.44rem; }
    .user .msg img {
      width: 0.5rem;
      height: 0.5rem; }
    .user .msg p {
      line-height: 0.2rem;
      color: #FFF; }
  .user .mine {
    position: absolute;
    height: 0.4rem;
    width: 100%;
    background: rgba(255, 255, 255, 0.3);
    bottom: 0;
    padding: 0.05rem 0;
    display: -webkit-flex; }
    .user .mine a {
      -webkit-flex: 1;
      line-height: 0.15rem;
      border-right: 1px solid #FFF;
      color: #FFF;
      text-align: center; }
      .user .mine a:last-child {
        border-right: none; }

.click {
  display: -webkit-flex;
  background: #FFF;
  border-bottom: 1px solid #CCC;
  height: 0.5rem;
  line-height: 0.5rem;
  padding: 0 0.1rem;
  justify-content: space-between; }
  .click p span {
    display: inline-block;
    width: 0.22rem;
    height: 0.22rem;
    color: #FFF;
    text-align: center;
    line-height: 0.2rem;
    margin-right: 0.1rem; }
  .click p i {
    vertical-align: sub; }
  .click p:last-child i {
    margin-left: 0.1rem; }
  .click p:last-child b {
    font-weight: normal; }

.means, .enter {
  margin-bottom: 0.1rem;
  border-bottom: none; }

.more {
  border-bottom: none; }


</style>
