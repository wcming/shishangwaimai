<template>
  <div class="wrap">
    <header class="header">
        我的收货地址
        <router-link to='/wrap/my' class="back">
          <i class="fa fa-angle-left f20"></i>
        </router-link>
        <router-link to='' class="edit">
          编辑
        </router-link>
    </header>
    <div class="content">
      <div class="content">
          <div class="user-address">
              <h3>北京市西城区阜成门韵婷美容</h3>
              <p>老夫子    先生    15901537414</p>
          </div>
      </div>
    </div>
    <router-link to='' class="add">
      <i class="icon-xinzeng iconfont f20"></i>
      新增收货地址
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'address'
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
.user-address {
  height: 0.6rem;
  background: #FFF;
  padding: 0 0.1rem;
  line-height: 0.2rem;
  padding-top: 0.1rem; }
  .user-address p {
    color: #666; }
.add {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  border-top: 1px solid #ccc;
  font-size: 0.14rem;
  background: #FFF; }
  .add i {
    vertical-align: sub; }
</style>
