<template>
  <div class="wrap">
    <header class="header">
        修改用户名
        <router-link to='/userInfo' class="back">
          <i class="fa fa-angle-left f20"></i>
        </router-link>
        <router-link to='/userInfo' class="edit">
          确定
        </router-link>
    </header>
    <div class="content">
      <p class="username">
        <span>用户名：</span>
        <input type="text" name="" value="" class="user">
        <i class="fa fa-close" @click='clear'></i>
      </p>
      <p class="claim">请输入6~12位用户名</p>
    </div>
  </div>
</template>

<script>
import $ from 'jQuery'
window.$ = $
export default {
  name: 'revise',
  methods: {
    clear () {
      $('.user').val('')
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
  margin-bottom: .1rem;
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
    font-size: .14rem
  }
.content{
  -webkit-flex: 1;
  overflow-y: scroll;
}
.username{
  width: 90%;
  margin-left: 5%;
  height: .4rem;
  border: 1px solid #CCC;
  border-radius: .05rem;
  background: #FFF;
  line-height: .4rem;
  position: relative
}
.username input{
  width: 100%;
  height: 100%;
  padding: 0 .25rem 0 .6rem
}
.username span{
  position: absolute;
  left: .1rem;
  top: 0;
}
.username i{
  position: absolute;
  right: .1rem;
  top: 0;
  color: #999;
  line-height: .4rem
}
.claim{
  margin-left: 5%;
  color: #999;
  margin-top: .1rem
}

</style>
