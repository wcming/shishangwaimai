<template>
  <div class="wrap">
    <header class="header">
        更多
        <router-link to='/wrap/my' class="back">
          <i class="fa fa-angle-left f20"></i>
        </router-link>
    </header>
    <div class="content">
        <div class="click">
            <p>
                <span style="background: #f94141">
                    <i class="fa fa-user f16"></i>
                </span>
                邀请有奖
            </p>
            <p>
                <b>邀好友，好礼送不停</b>
                <i class="fa fa-angle-right f20"></i>
            </p>
        </div>
        <div class="invite click">
            <p>
                <span style="background: #ff7f2b">
                    <i class="icon-shangjiaruzhu iconfont f16"></i>
                </span>
                积分商城
            </p>
            <p>
                <b>点我领代金卷</b>
                <i class="fa fa-angle-right f20"></i>
            </p>
        </div>
        <div class="click">
            <p>
                <span style="background: #ec6ad8">
                    <i class="fa fa-heart-o f16"></i>
                </span>
                服务中心
            </p>
            <p>
                <i class="fa fa-angle-right f20"></i>
            </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'more'
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
      font-weight: normal;
      font-size: 0.12rem;
      color: #999; }
  .click:last-child {
    border-bottom: none; }

.invite {
  margin-bottom: 0.1rem;
  border-bottom: none; }

</style>
