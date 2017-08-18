<template>
  <div class="wrap">
    <header class="header">
        <router-link to='/wrap/shouye' class="right">
          跳过
        </router-link>
    </header>
    <div class="content">
    	<img src="../assets/logo.png"/>
    	<div>
    		<a href="javascript: ;" class="login active" @click='login'>登录</a>
    		<a href="javascript: ;" class="register" @click='register'>注册</a>
    	</div>
    	<div class='denglu'>
        <input type="text" placeholder="请输入用户账号" class="user"/>
        <input type="password" placeholder="输入密码" class="pwd"/>
        <router-link to="/retrieve" class="forget" tag='p'>
          忘记密码？
        </router-link>
        <button class="btn" @click='confirm'>确定</button>
      </div>
      <div class='zhuce'>
        <input type="text" placeholder="请输入手机号" class="tel"/>
        <input type="password" placeholder="输入验证码" class="yzm"/>
        <button class="next" @click='next'>下一步</button>
      </div>
    	<div class="third">
    		<p>其他</p>
    		<ul>
    			<li @click="wb"><a href="javascript: ;">
    				<i class="fa fa-weibo f26"></i>
    			</a></li>
    			<li><a href="javascript: ;">
    				<i class="fa fa-qq f26"></i>
    			</a></li>
    			<li @click="wx"><a href="javascript: ;">
    				<i class="fa fa-weixin f26"></i>
    			</a></li>
    		</ul>
    	</div>
    </div>
  </div>
</template>

<script>
import $ from 'jQuery'
window.$ = $
export default {
  name: 'login',
  methods: {
    confirm () {
      if ($('.user').val() === '') {
        alert('请输入用户名')
      } else {
        if ($('.pwd').val() === '') {
          alert('请输入密码')
        } else {
          this.$router.push({path: '/wrap/shouye'})
        }
      }
    },
    next () {
      if ($('.tel').val() === '') {
        alert('请输入手机号')
      } else {
        if ($('.yzm').val() === '') {
          alert('请输入验证码')
        } else {
          this.$router.push({path: '/wrap/shouye'})
        }
      }
    },
    login () {
      $('.login').addClass('active')
      $('.register').removeClass('active')
      $('.zhuce').hide()
      $('.denglu').show()
    },
    register () {
      $('.register').addClass('active')
      $('.login').removeClass('active')
      $('.zhuce').show()
      $('.denglu').hide()
    },
    wx () {
      location.href = 'weixin://'
    },
    wb () {
      location.href = 'sinaweibo://splash'
    }
  }
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
  line-height: 0.6rem;
  text-align: center;
  position: relative;
  margin-bottom: 0.1rem; }
  .header .back {
    position: absolute;
    left: 0.1rem;
    line-height: 0.6rem;
    color: #333; }
  .header .right {
    position: absolute;
    right: 0.1rem;
    line-height: 0.6rem;
    color: #999;
    font-size: 0.14rem; }

.content {
  -webkit-flex: 1;
  overflow-y: scroll;
  text-align: center;
  position: relative;
  }
  .content img {
    width: 1rem;
    height: auto; }
  .content div {
    margin-bottom: 0.15rem; }
    .content div a {
      display: inline-block;
      width: 0.5rem;
      height: 0.4rem;
      line-height: 0.4rem;
      text-align: center; }
    .content div .active {
      border-bottom: 1px solid #f8bf7c;
      color: #f8bf7c; }
  .content .zhuce{
    display: none;
  }
  .content input {
    width: 90%;
    height: 0.4rem;
    border-radius: 0.2rem;
    border: 1px solid #CCC;
    margin-bottom: 0.1rem;
    padding: 0 0.1rem; }
  .content .denglu .forget {
    width: 90%;
    text-align: right;
    margin-bottom: 0.1rem; }
  .content .denglu .btn {
    width: 90%;
    height: 0.4rem;
    border-radius: 0.2rem;
    color: #FFF;
    font-size: .14rem;
    line-height: .4rem;
    background: #f8bf7c; }
  .content .zhuce .next{
    width: 90%;
    height: 0.4rem;
    border-radius: 0.2rem;
    color: #999;
    border: 1px solid #CCC;
    font-size: .14rem;
    line-height: .4rem;
    margin-top: .2rem;
    background: #FFF;
  }
  
  .content .third {
    position: absolute;
    width: 100%;
    height: 1.2rem;
    bottom: 0;
    margin-bottom: 0; }
    .content .third ul {
      display: -webkit-flex; }
      .content .third ul li {
        -webkit-flex: 1;
        text-align: center;
        line-height: 1rem; }
</style>
