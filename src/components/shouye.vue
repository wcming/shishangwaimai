<template>
  <div class='wrap'>
    <div class="content">
      <div class="banner">
        <img src="../assets/index_banner.jpg" alt="">
        <div class="head">
            <a href="#" class="left">
                <i class="fa fa-map-marker f20 map-left"></i>
                <p>{{address}}</p>
                <i class="fa fa-angle-right f20 arrow-right"></i>
            </a>
            <a href="#" class="right">
                <i class="fa fa-search f20"></i>
                <input type="text" placeholder="牛排">
            </a>
        </div>
    </div>
    <ul class="list">
        <a href="#">
            <span style="background: #c5494b"><i class="icon-meishi iconfont f26"></i></span>
            <p>美食</p>
        </a>
        <a href="#">
            <span style="background: #fec75a"><i class="icon-market iconfont f26"></i></span>
            <p>美团超市</p>
        </a>
        <a href="#">
            <span style="background: #88ac79"><i class="icon-shucai iconfont f26"></i></span>
            <p>生鲜蔬菜</p>
        </a>
        <a href="#">
            <span style="background: #f15b5a"><i class="icon-kuaican iconfont f26"></i></span>
            <p>甜点饮品</p>
        </a>
        <a href="#">
            <span style="background: #32b5bf"><i class="icon-xiaoyuan iconfont f26"></i></span>
            <p>校园精选</p>
        </a>
        <a href="#">
            <span style="background: #9470b0"><i class="icon-zu iconfont f26"></i></span>
            <p>家常菜</p>
        </a>
        <a href="#">
            <span style="background: #f1814d"><i class="icon-dangao iconfont f26"></i></span>
            <p>快食简餐</p>
        </a>
        <a href="#">
            <span style="background: #699c54"><i class="icon-motuo iconfont f26"></i></span>
            <p>跑腿代购</p>
        </a>
    </ul>
    <div class="prefer">
        <div class="tit">
            <b></b>
            <p>优惠专区</p>
        </div>
        <dl>
            <dt :style='[height]'>
              <img src="../assets/index_img_01.jpg" alt="">
              <p>大牌满减</p>
            </dt>
            <dd>
                <div class="top">
                  <img src="../assets/index_img_02.jpg" alt="">
                  <p>超值套餐</p>
                </div>
                <div>
                  <img src="../assets/index_img_04.jpg" alt="">
                  <p>领券中心</p>
                </div>
            </dd>
            <dd>
                <div class="top">
                  <img src="../assets/index_img_03.jpg" alt="">
                  <p>限时抢购</p>
                </div>
                <div>
                  <img src="../assets/index_img_05.jpg" alt="">
                  <p>京城美食汇</p>
                </div>
            </dd>
        </dl>
    </div>
    <div class="prefer selective">
        <div class="tit">
            <b></b>
            <p>为你优选</p>
        </div>
        <ul>
            <li>
                <img src="../assets/img_xiapu.jpg" alt="">
                <p>呷哺呷哺</p>
                <button>点评高分店铺</button>
            </li>
            <li>
                <img src="../assets/img_kzt.jpg" alt="">
                <p>猪蹄</p>
                <button>口味相仿喜欢</button>
            </li>
            <li>
                <img src="../assets/img_bsk.jpg" alt="">
                <p>必胜客</p>
                <button>点评高分店铺</button>
            </li>
        </ul>
    </div>
    <div class="prefer seller">
        <div class="tit">
            <b></b>
            <p>附近商家</p>
        </div>
        <ul class="nav">
            <li class="filter">
                <span>综合排序</span>
                <i class="fa fa-angle-down f20"></i>
            </li>
            <li>销量最多</li>
            <li>距离最近</li>
            <li>
                筛选
                <i class="fa fa-filter f16"></i>
            </li>
        </ul>
        <div class="product">
            <router-link to="/information" tag="dl" class="pro" v-for="obj in product" :key="obj.id">
              <dt>
                    <img :src="obj.src" alt="">
                </dt>
                <dd>
                    <h3>{{obj.name}}</h3>
                    <p>
                        <span>{{obj.sales}}</span>
                        <span>{{obj.time}}</span>
                    </p>
                    <p>
                        <span class="text-nowrap">{{obj.price}}</span>
                        <span class="shangjia">{{obj.seller}}</span>
                    </p>
                    <div class="favourable jian">
                        <b>减</b>
                        <span class="text-nowrap">{{obj.reduce}}</span>
                    </div>
                    <div class="favourable first">
                        <b>首</b>
                        <span class="text-nowrap">{{obj.first}}</span>
                    </div>
                </dd>
            </router-link>
        </div>
    </div>
  </div>
  <my-foot></my-foot>
  </div> 
 
</template>

<script>
export default {
  data () {
    return {
      height: {
        height: '180px'
      },
      currentView: 'Content1',
      address: '北京西城',
      product: [
        {
          'src': require('../assets/index_product_img01.jpg'),
          'name': '微克（北京大学店）',
          'sales': '月售280',
          'time': '20分钟 | 2.3km',
          'price': '起送￥20    配送￥7',
          'seller': '食尚转送',
          'reduce': '满25减17；满40减22；满60减33',
          'first': '新用户减15元，首次使用银行卡支付最高'
        },
        {
          'src': require('../assets/index_product_img02.jpg'),
          'name': 'FCJ炸鸡&啤酒',
          'sales': '月售280',
          'time': '40分钟 | 4.3km',
          'price': '起送￥20    配送￥7',
          'seller': '食尚转送',
          'reduce': '满25减17；满40减22；满60减33',
          'first': '新用户减15元，首次使用银行卡支付最高'
        }
      ]
    }
  },
  name: 'shouye'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

  .content{
    -webkit-flex: 1;
    overflow-y: scroll;
  }
  .banner {
  position: relative; }
  .banner .head {
    position: absolute;
    top: 0;
    width: 100%;
    height: 0.44rem;
    padding: 0 0.1rem;
    padding-top: 0.1rem;
    display: -webkit-flex; }
    .banner .head .left {
      -webkit-flex: 1;
      background: rgba(0, 0, 0, 0.5);
      color: #FFF;
      border-radius: 0.2rem;
      text-align: center;
      position: relative;
      line-height: 0.3rem; }
      .banner .head .left i {
        line-height: 0.3rem;
        position: absolute; }
      .banner .head .left .map-left {
        left: 0.1rem; }
      .banner .head .left .arrow-right {
        right: 0.1rem;
        top: 0; }
    .banner .head .right {
      -webkit-flex: 2;
      padding-left: 0.1rem;
      position: relative; }
      .banner .head .right i {
        position: absolute;
        left: 0.2rem;
        line-height: 0.3rem; }
      .banner .head .right input {
        width: 100%;
        height: 100%;
        background: #FFF;
        border-radius: 0.2rem;
        padding-left: 0.35rem;
        padding-right: 0.15rem; }
  .banner img {
    width: 100%; }

.list {
  display: -webkit-flex;
  -webkit-flex-wrap: wrap;
  background: #FFF;
  padding: 0.1rem;
  margin-bottom: 0.1rem; }
  .list a {
    width: 25%;
    text-align: center;
    line-height: 0.2rem;
    margin-bottom: 0.1rem; }
    .list a span {
      width: 0.5rem;
      height: 0.5rem;
      line-height: 0.48rem;
      text-align: center;
      color: #FFF;
      display: inline-block;
      border-radius: 50%; }

.prefer {
  background: #FFF;
  padding: 0 0.1rem;
  padding-bottom: 0.1rem;
  margin-bottom: 0.1rem; }
  .prefer .tit {
    height: 0.4rem;
    line-height: 0.4rem;
    position: relative; }
    .prefer .tit b {
      width: 64%;
      height: 1px;
      left: 18%;
      background: #666;
      position: absolute;
      top: 50%; }
    .prefer .tit p {
      width: 25%;
      height: 0.39rem;
      background: #FFF;
      line-height: 0.39rem;
      font-size: 0.15rem;
      position: absolute;
      left: 37.5%;
      text-align: center; }
  .prefer dl {
    display: -webkit-flex; }
    .prefer dl dt {
      -webkit-flex: 2;
      position: relative;}
      .prefer dl dt p {
        position: absolute;
        width: 100%;
        height: 0.3rem;
        line-height: 0.3rem;
        color: #FFF;
        text-align: center;
        left: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.5); }
    .prefer dl dd {
      -webkit-flex: 1;
      padding-left: 0.1rem; }
      .prefer dl dd div {
        position: relative;
        height: 90px; }
        .prefer dl dd div p {
          position: absolute;
          width: 100%;
          height: 0.3rem;
          line-height: 0.3rem;
          color: #FFF;
          text-align: center;
          left: 0;
          top: 0;
          background: rgba(0, 0, 0, 0.5); }
      .prefer dl dd .top {
        padding-bottom: 0.1rem; }
    .prefer dl img {
      width: 100%;
      height: 100%; }

.selective ul {
  display: -webkit-flex;
  -webkit-justify-content: space-between; }
  .selective ul li {
    -webkit-flex: 1;
    text-align: center;
    padding-right: 0.1rem; }
    .selective ul li img {
      width: 100%;
      height: 0.6rem;
      border: 1px solid #CCC; }
    .selective ul li p {
      line-height: 0.3rem;
      color: #333; }
    .selective ul li button {
      width: 0.75rem;
      height: 0.2rem;
      background: #FFF;
      border: 1px solid #ad2525;
      color: #ad2525;
      font-size: 0.12rem; }

.seller {
  padding: 0; }
  .seller .tit {
    border-bottom: 1px solid #CCC; }
  .seller .nav {
    display: -webkit-flex;
    height: 0.4rem;
    line-height: 0.4rem;
    border-bottom: 1px solid #CCC; }
    .seller .nav li {
      -webkit-flex: 1;
      text-align: center;
      color: #999; }
    .seller .nav .filter {
      color: #333; }
  .seller .product .pro {
    background: #FFF;
    border-bottom: 1px solid #CCC;
    display: -webkit-flex;
    padding: 0.1rem;
    height: 1.4rem; }
    .seller .product .pro dt {
      -webkit-flex: 1; }
      .seller .product .pro dt img {
        width: 100%;
        height: 0.65rem; }
    .seller .product .pro dd {
      -webkit-flex: 2;
      padding-left: 0.1rem; }
      .seller .product .pro dd h3 {
        font-weight: normal;
        line-height: 0.3rem; }
      .seller .product .pro dd p {
        display: -webkit-flex;
        -webkit-justify-content: space-between;
        line-height: 0.2rem; }
        .seller .product .pro dd p .shangjia {
          padding: 0 0.1rem;
          color: #FFF;
          background: #ffd360;
          border-radius: 0.05rem; }
      .seller .product .pro dd .favourable {
        line-height: 0.2rem;
        height: 0.2rem;
        display: -webkit-flex; }
        .seller .product .pro dd .favourable b {
          width: 0.2rem;
          height: 0.2rem;
          text-align: center;
          line-height: 0.2rem;
          color: #FFF;
          margin-right: 0.05rem;
          font-weight: normal; }
        .seller .product .pro dd .favourable .text-nowrap {
          -webkit-line-clamp: 1; }
      .seller .product .pro dd .jian {
        margin-bottom: 0.05rem; }
        .seller .product .pro dd .jian b {
          background: #fa6760; }
      .seller .product .pro dd .first b {
        background: #ffa31a; }

@media all and (min-width: 960px) {
  .banner img {
    height: 420px; }

  .prefer dl {
    position: relative;
    height: 500px; }
    .prefer dl dt {
      height: 100%; }
    .prefer dl dd div {
      height: 250px; } }
</style>