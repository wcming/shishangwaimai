<template>
  <div class="wrap">
    <div class="mark">
        <div class="change">
            <button>拍照</button>
            <button>从手机相册选择</button>
            <button class="cancel" @click='toBottom'>取消</button>
        </div>
    </div>
    <header class="header">
        个人信息
        <router-link to='/wrap/my' class="back">
          <i class="fa fa-angle-left f20"></i>
        </router-link>
    </header>
    <div class="content">
      <div class="means click photo" @click='toTop'>
            <p>
                头像
            </p>
            <p>
                <img src="../assets/user_header.png" alt="">
                <i class="fa fa-angle-right f20"></i>
            </p>
        </div>
        <router-link to="/revise" class="click" tag="div">
          <p>
              用户名
          </p>
          <p>
              <b>the丶sunshine</b>
              <i class="fa fa-angle-right f20"></i>
          </p>
        </router-link>
        <div class="click">
            <p>
                食尚号
            </p>
            <p>
                <b>s1301033451</b>
                <i class="fa fa-angle-right f20"></i>
            </p>
        </div>
        <div class="click">
            <p>
                手机号
            </p>
            <p>
                <b>138****5682</b>
                <i class="fa fa-angle-right f20"></i>
            </p>
        </div>
        <div class="click more">
            <p>
                账号密码
            </p>
            <p>
                <b>未设置</b>
                <i class="fa fa-angle-right f20"></i>
            </p>
        </div>
        <router-link to="/login" class="quit" tag="button">
          退出登录
        </router-link>
    </div>
  </div>
</template>

<script>
import $ from 'jQuery'
window.$ = $
export default {
  name: 'userInfo',
  methods: {
    toTop () {
      $('.mark').stop().animate({
        'bottom': 0
      }, 1000)
    },
    toBottom () {
      $('.mark').stop().animate({
        'bottom': '-100%'
      }, 1000)
    }
  }
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
  .header .edit{
    position: absolute;
    right: 0.1rem;
    line-height: 0.44rem;
    color: #FFF;
  }
.content{
  -webkit-flex: 1;
  overflow-y: scroll;
}
.click {
  display: -webkit-flex;
  background: #FFF;
  border-bottom: 1px solid #CCC;
  height: 0.5rem;
  line-height: 0.5rem;
  padding: 0 0.1rem;
  justify-content: space-between; }
  .click p {
    font-size: 0.14rem; }
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

.means, .more {
  margin-bottom: 0.1rem;
  border-bottom: none; }

.means p:last-child {
  position: relative; }
  .means p:last-child img {
    width: 0.4rem;
    height: 0.4rem;
    position: absolute;
    top: 50%;
    margin-top: -0.2rem;
    left: -0.4rem; }

.quit {
  width: 100%;
  height: 0.5rem;
  background: #FFF;
  margin-top: 0.1rem; }

.mark {
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: -100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99; }
  .mark .change {
    position: absolute;
    bottom: 0;
    width: 100%; }
    .mark .change button {
      width: 100%;
      height: 0.5rem;
      background: #FFF; }
      .mark .change button:first-child {
        border-bottom: 1px solid #CCC; }
      .mark .change button:last-child {
        margin-top: 0.1rem; }
</style>
