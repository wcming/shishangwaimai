<template>
  <div class="wrap">
    <header class="header">
        商家入驻
        <router-link to='/wrap/my' class="back">
          <i class="fa fa-angle-left f20"></i>
        </router-link>
    </header>
    <div class="content">
      <div class="con">
        <div class="ruzhu">
            <div class="left">
              <span>
                <i class="icon-shangjiaruzhu iconfont f20"></i>
              </span>
              <div class="txt">
                <h4>商家入驻</h4>
                <p>平台优势，承担量更有保证</p>
              </div>
            </div>
            <button>立即入驻</button>
        </div>
        <div class="ruzhu">
            <div class="left">
              <span>
                <i class="fa fa-user f20"></i>
              </span>
              <div class="txt">
                <h4>配送加盟合作</h4>
                <p>平台优势，承担量更有保证</p>
              </div>
            </div>
            <button>立即入驻</button>
        </div>
        <div class="ruzhu">
            <div class="left">
              <span>
                <i class="fa fa-user f20"></i>
              </span>
              <div class="txt">
                <h4>城市代理商申请</h4>
                <p>平台优势，承担量更有保证</p>
              </div>
            </div>
            <button>立即入驻</button>
        </div>
        <div class="ruzhu cooperate">
            <div class="left">
              <span>
                <i class="icon-shangjiaruzhu iconfont f20"></i>
              </span>
              <div class="txt">
                <h4>品牌合作</h4>
                <p>平台优势，承担量更有保证</p>
              </div>
            </div>
        </div>
      </div>
      <router-link to="/question" class="question">
        <div class="left">
          <span>
            <i class="icon-shangjiaruzhu iconfont f20"></i>
          </span>
            <p>常见问题？</p>
        </div>
        <i class="fa fa-angle-right f20 right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ruzhu'
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
  position: relative;
  margin-bottom: .1rem
  }
  .header .back {
    position: absolute;
    left: 0.1rem;
    line-height: 0.44rem;
    color: #FFF; }
.content {
  -webkit-flex: 1;
  overflow-y: scroll;
}
.con{
  background: #FFF;
  padding: 0 .1rem;
  margin-bottom: .1rem;
}
.con .ruzhu{
  height: .5rem;
  border-bottom: 1px solid #CCC;
  padding: 0 .1rem;
  display: -webkit-flex;
  padding-top: .1rem;
  -webkit-justify-content: space-between;
}
.con .ruzhu button{
  width: .8rem;
  height: .3rem;
  background: #ff7f2b;
  color: #FFF;
  border-radius: .05rem;
}
.con .ruzhu .left{
  display: -webkit-flex;
}
.con .ruzhu .left span{
  width: .33rem;
  height: .33rem;
  border: 1px solid #CCC;
  text-align: center;
  line-height: .33rem;
  color: #999;
  margin-right: .1rem;
}
.con .cooperate{
  border-bottom: none;
}

.question{
  width: 100%;
  height: .4rem;
  line-height: .4rem;
  padding: 0 .2rem;
  background: #FFF;
  display: -webkit-flex;
  -webkit-justify-content: space-between;
}
.question .left{
  display: -webkit-flex;
}
.question .left span{
  width: .33rem;
  height: .33rem;
  margin-top: .03rem;
  border: 1px solid #CCC;
  text-align: center;
  line-height: .33rem;
  color: #999;
  margin-right: .1rem;
}
.question .right{
  line-height: .4rem
}
</style>
