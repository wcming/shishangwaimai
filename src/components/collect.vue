<template>
  <div class="wrap">
    <header class="header">
        我的收藏
        <router-link to='/wrap/my' class="back">
          <i class="fa fa-angle-left f20"></i>
        </router-link>
    </header>
    <div class="content">
      <p class="seller">
            当前区域商家
        </p>
        <div class="product">
            <dl class="pro" v-for="obj in product">
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
            </dl>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'collect',
  data () {
    return {
      product: [
        {
          'src': require('../assets/collect_img02.jpg'),
          'name': '焦耳川始快餐',
          'sales': '月售2355单',
          'time': '20分钟 | 2.3km',
          'price': '起送￥20    配送￥5',
          'seller': '食尚转送',
          'reduce': '满25减17；满40减22；满60减33',
          'first': '新用户减15元，首次使用银行卡支付最高'
        },
        {
          'src': require('../assets/collect_img03.jpg'),
          'name': '焦耳川始快餐',
          'sales': '月售2355单',
          'time': '20分钟 | 2.3km',
          'price': '起送￥20    配送￥5',
          'seller': '食尚转送',
          'reduce': '满25减17；满40减22；满60减33',
          'first': '新用户减15元，首次使用银行卡支付最高'
        },
        {
          'src': require('../assets/collect_img04.jpg'),
          'name': '焦耳川始快餐',
          'sales': '月售2355单',
          'time': '20分钟 | 2.3km',
          'price': '起送￥20    配送￥5',
          'seller': '食尚转送',
          'reduce': '满25减17；满40减22；满60减33',
          'first': '新用户减15元，首次使用银行卡支付最高'
        },
        {
          'src': require('../assets/collect_img05.jpg'),
          'name': '焦耳川始快餐',
          'sales': '月售2355单',
          'time': '20分钟 | 2.3km',
          'price': '起送￥20    配送￥5',
          'seller': '食尚转送',
          'reduce': '满25减17；满40减22；满60减33',
          'first': '新用户减15元，首次使用银行卡支付最高'
        },
        {
          'src': require('../assets/collect_img01.jpg'),
          'name': '焦耳川始快餐',
          'sales': '月售2355单',
          'time': '20分钟 | 2.3km',
          'price': '起送￥20    配送￥5',
          'seller': '食尚转送',
          'reduce': '满25减17；满40减22；满60减33',
          'first': '新用户减15元，首次使用银行卡支付最高'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap{
  background: #e5e5e5;
}
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
 }
 
.seller {
  line-height: 0.3rem;
  padding-left: 0.1rem; }

.product .pro {
  background: #FFF;
  border-bottom: 1px solid #CCC;
  display: -webkit-flex;
  padding: 0.1rem;
  height: 1.4rem; }
  .product .pro dt {
    -webkit-flex: 1; }
    .product .pro dt img {
      width: 100%;
      height: 0.65rem; }
  .product .pro dd {
    -webkit-flex: 2;
    padding-left: 0.1rem; }
    .product .pro dd h3 {
      font-weight: normal;
      line-height: 0.3rem; }
    .product .pro dd p {
      display: -webkit-flex;
      -webkit-justify-content: space-between;
      line-height: 0.2rem; }
      .product .pro dd p .shangjia {
        padding: 0 0.1rem;
        color: #FFF;
        background: #ffd360;
        border-radius: 0.05rem; }
    .product .pro dd .favourable {
      line-height: 0.2rem;
      height: 0.2rem;
      display: -webkit-flex; }
      .product .pro dd .favourable b {
        width: 0.2rem;
        height: 0.2rem;
        text-align: center;
        line-height: 0.2rem;
        color: #FFF;
        margin-right: 0.05rem;
        font-weight: normal; }
      .product .pro dd .favourable .text-nowrap {
        -webkit-line-clamp: 1; }
    .product .pro dd .jian {
      margin-bottom: 0.05rem; }
      .product .pro dd .jian b {
        background: #fa6760; }
    .product .pro dd .first b {
      background: #d543ef; }
</style>
