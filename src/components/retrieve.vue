<template>
  <div class="wrap">
    <header class="header">
        找回密码
        <router-link to='/login' class="back">
          <i class="fa fa-angle-left f20"></i>
        </router-link>
    </header>
    <div class="content">
      <div class='reverse'>
        <input type="text" placeholder="请输入手机号" class="tel"/>
        <input type="password" placeholder="输入验证码" class="yzm"/>
        <button class="next" @click='next'>下一步</button>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jQuery'
window.$ = $
export default {
  name: 'retrieve'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrap{
    background: #FFF;
  }
  .header {
  width: 100%;
  height: 0.6rem;
  font-size: .18rem;
  line-height: 0.6rem;
  text-align: center;
  position: relative;
  margin-bottom: 0.1rem; }
  .header .back {
    position: absolute;
    left: 0.1rem;
    line-height: 0.6rem;
    color: #333; }

.content {
  -webkit-flex: 1;
  overflow-y: scroll;
  text-align: center;
  }
.content input {
    width: 90%;
    height: 0.4rem;
    border-radius: 0.2rem;
    border: 1px solid #CCC;
    margin-bottom: 0.1rem;
    padding: 0 0.1rem; }
.content .reverse .next{
    width: 90%;
    height: 0.4rem;
    border-radius: 0.2rem;
    color: #999;
    border: 1px solid #CCC;
    font-size: .14rem;
    line-height: .4rem;
    margin-top: .2rem;
    color: #FFF;
    background: #f8bf7c;;
  }
</style>
