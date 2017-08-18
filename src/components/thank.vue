<template>
  <div class="wrap">
    <header class="header">
        答谢记录
        <router-link to='/wrap/my' class="back">
          <i class="fa fa-angle-left f20"></i>
        </router-link>
    </header>
    <div class="content">
        <img src="../assets/thank_cry.jpg"/>
        <p>
        	亲-还未答谢过小跑哥，订单完成后可送<span>TA</span>小费哦！以示感谢和鼓励哦！
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'thank'
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
.content {
  -webkit-flex: 1;
  overflow-y: scroll;
  text-align: center;
  background: #FFF
 }
  .content img {
    width: 1rem;
    height: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.2rem; }
  .content p {
    width: 70%;
    margin-left: 15%;
    line-height: 0.2rem; }
    .content p span {
      color: #ec2f2f; }

</style>
