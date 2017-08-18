<template>
  <div class="wrap">
    <div class="mark">
		<div class="con">
			<i class="fa fa-check-circle-o"></i>
			<span>
				<p>提交成功</p>
        <router-link to="/wrap/shouye" class="revert">返回首页</router-link>
			</span>
		</div>
	</div>
    <header class="header">
       	提交订单
        <router-link to="information" class="back">
          <i class="fa fa-angle-left f20"></i>
        </router-link>
    </header>
    <div class="content">
        <div class="address">
        	<i class="fa fa-map-marker f20 left"></i>
        	<i class="fa fa-angle-right f20 right"></i>
        	<div>
        		<h3>北京市西城区君婷美容2</h3>
        		<p>老夫子先生        15901537414</p>
        	</div>
        </div>
        <div class="address time">
        	<i class="fa fa-clock-o f20 left"></i>
        	<i class="fa fa-angle-right f20 right"></i>
        	<p>立即送出<span>（大约20；03送达）</span></p>
        </div>
        <div class="product">
        	<p class="tit">多以秘制排骨饭（西城区）</p>
        	<dl>
        		<dt><img src="../assets/product_img01.jpg"/></dt>
        		<dd>
        			<p>
        				<span>焦耳川始快餐</span>
        				<span>¥19.9</span>
        			</p>
        			<p>
        				<span>×1</span>
        				<del>¥25</del>
        			</p>
        		</dd>
        	</dl>
        	<div class="price">
        		<p>
    				<span>餐盒费</span>
    				<span>¥1</span>
    			</p>
    			<p>
    				<span>配送费</span>
    				<span>¥3</span>
    			</p>
        	</div>
        	<div class="price prefer">
        		<p>
    				<span>首单立减</span>
    				<span class="coupon">-¥1</span>
    			</p>
    			<p>
    				<span>食尚代金卷</span>
    				<span class="coupon">2张可用</span>
    			</p>
        	</div>
        </div>
		<div class="payment">
			<div class="zfb">
				<p>
					<span>支付方式</span>
					<span>在线支付</span>
				</p>
				<b>银行卡支付新用户立减3元</b>
			</div>
			<p class="remarks">
				<span>备注/发票</span>
				<span style="color: #999">
					口味、偏好等要求
					<i class="fa fa-angle-right f20"></i>
				</span>
			</p>
		</div>
    </div>
    <footer class="footer">
    	<div>
    		<p>已优惠<span>¥22.1</span></p>
        	<p>合计<span>¥6.9</span></p>
    	</div>
    	<button id="btn" @click='show'>提交订单</button>
    </footer>
  </div>
</template>

<script>
import $ from 'jQuery'
window.$ = $
export default {
  name: 'order',
  methods: {
    show () {
      $('.mark').show(600)
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
  position: relative; }
  .header .back {
    position: absolute;
    left: 0.1rem;
    line-height: 0.44rem;
    color: #FFF; }

.content {
  -webkit-flex: 1;
  overflow-y: scroll; }
  .content .address, .content .time {
    height: 0.5rem;
    position: relative;
    background: #FFF;
    padding-left: 0.3rem;
    line-height: 0.2rem; }
    .content .address i, .content .time i {
      position: absolute;
      line-height: 0.5rem; }
    .content .address .left, .content .time .left {
      left: 0.1rem; }
    .content .address .right, .content .time .right {
      right: 0.1rem; }
    .content .address div, .content .time div {
      padding-top: 0.05rem; }
      .content .address div p, .content .time div p {
        color: #999; }
  .content .time {
    height: 0.4rem;
    line-height: 0.4rem;
    margin-bottom: 0.1rem; }
    .content .time i {
      line-height: 0.4rem; }
    .content .time span {
      color: #999; }
  .content .product {
    background: #FFF;
    padding: 0 0.1rem;
    margin-bottom: 0.1rem; }
    .content .product .tit {
      height: 0.3rem;
      line-height: 0.3rem; }
    .content .product dl {
      display: -webkit-flex;
      padding: 0.1rem 0; }
      .content .product dl dt {
        -webkit-flex: 1; }
        .content .product dl dt img {
          width: 100%; }
      .content .product dl dd {
        -webkit-flex: 3;
        padding-left: 0.1rem; }
        .content .product dl dd p {
          display: -webkit-flex;
          font-size: 0.14rem;
          -webkit-justify-content: space-between;
          color: #333; }
          .content .product dl dd p:last-child {
            color: #999;
            font-size: 0.12rem; }
    .content .product .price, .content .product .prefer {
      padding: 0.1rem 0;
      border-bottom: 1px solid #CCC; }
      .content .product .price p, .content .product .prefer p {
        display: -webkit-flex;
        font-size: 0.14rem;
        -webkit-justify-content: space-between;
        line-height: 0.3rem;
        color: #666; }
    .content .product .prefer {
      border-bottom: 0; }
      .content .product .prefer .coupon {
        color: #f01f1f; }
  .content .payment {
    background: #FFF;
    padding: 0 0.1rem; }
    .content .payment .zfb {
      height: 0.5rem;
      border-bottom: 1px solid #CCC; }
      .content .payment .zfb p {
        display: -webkit-flex;
        font-size: 0.14rem;
        -webkit-justify-content: space-between;
        line-height: 0.25rem;
        font-size: 0.14rem; }
      .content .payment .zfb b {
        color: #f35a5a;
        font-weight: normal; }
    .content .payment .remarks {
      height: 0.4rem;
      line-height: 0.4rem;
      font-size: 0.14rem;
      background: #FFF;
      display: -webkit-flex;
      -webkit-justify-content: space-between; }

.footer {
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  border-top: 1px solid #ccc;
  display: -webkit-flex;
  background: #FFF; }
  .footer div {
    -webkit-flex: 2;
    padding: 0 0.1rem;
    display: -webkit-flex;
    font-size: 0.14rem;
    -webkit-justify-content: space-between; }
    .footer div p:last-child span {
      color: #f11a1a; }
  .footer button {
    -webkit-flex: 1;
    background: #ffd161;
    color: #FFF; }

.mark {
  display: none;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); }
  .mark .con {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 2.38rem;
    height: 1.28rem;
    background: #FFF;
    padding: 0.15rem;
    display: -webkit-flex; }
    .mark .con i {
      font-size: 1rem;
      color: #00cc00;
      margin-right: 0.1rem; }
    .mark .con span p {
      line-height: 0.5rem;
      font-size: 0.2rem;
      font-weight: 600; }
    .mark .con span .revert {
      line-height: 0.3rem;
      font-size: 0.16rem;
      font-weight: normal;
      color: #999; }
</style>
