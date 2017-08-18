<template>
  <div class="product">
    <div id="wrapper" class="wrapper">
      <div id="scroller">
        <ul>
          <li>产品001</li>
          <li>产品002</li>
          <li>产品003</li>
          <li>产品004</li>
          <li>产品005</li>
          <li>产品006</li>
          <li>产品007</li>
          <li>产品008</li>
          <li>产品009</li>
          <li>产品010</li>
        </ul>
      </div>
    </div>
    <div class="message">
      <div class="product_01" v-for="obj in product" :key="obj.id">
        <h4>{{obj.tit}}</h4>
        <dl v-for="pro in obj.pro" :key="pro.id">
          <dt><img :src="pro.src"></dt>
          <dd>
            <p class="name">{{pro.name}}</p>
            <p class="text-nowrap">{{pro.introduce}}</p>
            <p class="num">{{pro.num}}</p>
            <p class="price">
              <span>{{pro.price}}</span>
              <del>{{pro.old}}</del>
              <i class="fa fa-plus-square-o f20 float-right"></i>
            </p>
          </dd>
        </dl>
      </div>
    </div>
  </div> 
</template>

<script>
import $ from 'jQuery'
import iscroll from 'iscroll'
window.$ = $
window.iscroll = iscroll
export default {
  name: 'product',
  data () {
    return {
      product: [
        {
          'tit': '产品1',
          'pro': [
            {
              'src': require('../assets/index_product_img01.jpg'),
              'name': '产品名称1',
              'introduce': '产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
              'num': '月售89 赞9',
              'price': '¥49',
              'old': '¥64'
            },
            {
              'src': require('../assets/index_product_img01.jpg'),
              'name': '产品名称1',
              'introduce': '产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
              'num': '月售89 赞9',
              'price': '¥49',
              'old': '¥64'
            },
            {
              'src': require('../assets/index_product_img01.jpg'),
              'name': '产品名称1',
              'introduce': '产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
              'num': '月售89 赞9',
              'price': '¥49',
              'old': '¥64'
            },
            {
              'src': require('../assets/index_product_img01.jpg'),
              'name': '产品名称1',
              'introduce': '产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
              'num': '月售89 赞9',
              'price': '¥49',
              'old': '¥64'
            }
          ]
        },
        {
          'tit': '产品2',
          'pro': [
            {
              'src': require('../assets/index_product_img01.jpg'),
              'name': '产品名称1',
              'introduce': '产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
              'num': '月售89 赞9',
              'price': '¥49',
              'old': '¥64'
            },
            {
              'src': require('../assets/index_product_img01.jpg'),
              'name': '产品名称1',
              'introduce': '产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
              'num': '月售89 赞9',
              'price': '¥49',
              'old': '¥64'
            },
            {
              'src': require('../assets/index_product_img01.jpg'),
              'name': '产品名称1',
              'introduce': '产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
              'num': '月售89 赞9',
              'price': '¥49',
              'old': '¥64'
            }
          ]
        },
        {
          'tit': '产品3',
          'pro': [
            {
              'src': require('../assets/index_product_img01.jpg'),
              'name': '产品名称1',
              'introduce': '产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
              'num': '月售89 赞9',
              'price': '¥49',
              'old': '¥64'
            },
            {
              'src': require('../assets/index_product_img01.jpg'),
              'name': '产品名称1',
              'introduce': '产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
              'num': '月售89 赞9',
              'price': '¥49',
              'old': '¥64'
            },
            {
              'src': require('../assets/index_product_img01.jpg'),
              'name': '产品名称1',
              'introduce': '产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
              'num': '月售89 赞9',
              'price': '¥49',
              'old': '¥64'
            },
            {
              'src': require('../assets/index_product_img01.jpg'),
              'name': '产品名称1',
              'introduce': '产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
              'num': '月售89 赞9',
              'price': '¥49',
              'old': '¥64'
            }
          ]
        },
        {
          'tit': '产品4',
          'pro': [
            {
              'src': require('../assets/index_product_img01.jpg'),
              'name': '产品名称1',
              'introduce': '产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
              'num': '月售89 赞9',
              'price': '¥49',
              'old': '¥64'
            },
            {
              'src': require('../assets/index_product_img01.jpg'),
              'name': '产品名称1',
              'introduce': '产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
              'num': '月售89 赞9',
              'price': '¥49',
              'old': '¥64'
            }
          ]
        },
        {
          'tit': '产品5',
          'pro': [
            {
              'src': require('../assets/index_product_img01.jpg'),
              'name': '产品名称1',
              'introduce': '产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
              'num': '月售89 赞9',
              'price': '¥49',
              'old': '¥64'
            },
            {
              'src': require('../assets/index_product_img01.jpg'),
              'name': '产品名称1',
              'introduce': '产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
              'num': '月售89 赞9',
              'price': '¥49',
              'old': '¥64'
            }
          ]
        },
        {
          'tit': '产品6',
          'pro': [
            {
              'src': require('../assets/index_product_img01.jpg'),
              'name': '产品名称1',
              'introduce': '产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
              'num': '月售89 赞9',
              'price': '¥49',
              'old': '¥64'
            },
            {
              'src': require('../assets/index_product_img01.jpg'),
              'name': '产品名称1',
              'introduce': '产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
              'num': '月售89 赞9',
              'price': '¥49',
              'old': '¥64'
            }
          ]
        },
        {
          'tit': '产品7',
          'pro': [
            {
              'src': require('../assets/index_product_img01.jpg'),
              'name': '产品名称1',
              'introduce': '产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
              'num': '月售89 赞9',
              'price': '¥49',
              'old': '¥64'
            },
            {
              'src': require('../assets/index_product_img01.jpg'),
              'name': '产品名称1',
              'introduce': '产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
              'num': '月售89 赞9',
              'price': '¥49',
              'old': '¥64'
            },
            {
              'src': require('../assets/index_product_img01.jpg'),
              'name': '产品名称1',
              'introduce': '产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
              'num': '月售89 赞9',
              'price': '¥49',
              'old': '¥64'
            }
          ]
        },
        {
          'tit': '产品8',
          'pro': [
            {
              'src': require('../assets/index_product_img01.jpg'),
              'name': '产品名称1',
              'introduce': '产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
              'num': '月售89 赞9',
              'price': '¥49',
              'old': '¥64'
            },
            {
              'src': require('../assets/index_product_img01.jpg'),
              'name': '产品名称1',
              'introduce': '产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
              'num': '月售89 赞9',
              'price': '¥49',
              'old': '¥64'
            },
            {
              'src': require('../assets/index_product_img01.jpg'),
              'name': '产品名称1',
              'introduce': '产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
              'num': '月售89 赞9',
              'price': '¥49',
              'old': '¥64'
            },
            {
              'src': require('../assets/index_product_img01.jpg'),
              'name': '产品名称1',
              'introduce': '产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
              'num': '月售89 赞9',
              'price': '¥49',
              'old': '¥64'
            },
            {
              'src': require('../assets/index_product_img01.jpg'),
              'name': '产品名称1',
              'introduce': '产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
              'num': '月售89 赞9',
              'price': '¥49',
              'old': '¥64'
            }
          ]
        },
        {
          'tit': '产品9',
          'pro': [
            {
              'src': require('../assets/index_product_img01.jpg'),
              'name': '产品名称1',
              'introduce': '产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
              'num': '月售89 赞9',
              'price': '¥49',
              'old': '¥64'
            },
            {
              'src': require('../assets/index_product_img01.jpg'),
              'name': '产品名称1',
              'introduce': '产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
              'num': '月售89 赞9',
              'price': '¥49',
              'old': '¥64'
            },
            {
              'src': require('../assets/index_product_img01.jpg'),
              'name': '产品名称1',
              'introduce': '产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
              'num': '月售89 赞9',
              'price': '¥49',
              'old': '¥64'
            },
            {
              'src': require('../assets/index_product_img01.jpg'),
              'name': '产品名称1',
              'introduce': '产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
              'num': '月售89 赞9',
              'price': '¥49',
              'old': '¥64'
            }
          ]
        },
        {
          'tit': '产品10',
          'pro': [
            {
              'src': require('../assets/index_product_img01.jpg'),
              'name': '产品名称1',
              'introduce': '产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
              'num': '月售89 赞9',
              'price': '¥49',
              'old': '¥64'
            },
            {
              'src': require('../assets/index_product_img01.jpg'),
              'name': '产品名称1',
              'introduce': '产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
              'num': '月售89 赞9',
              'price': '¥49',
              'old': '¥64'
            },
            {
              'src': require('../assets/index_product_img01.jpg'),
              'name': '产品名称1',
              'introduce': '产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
              'num': '月售89 赞9',
              'price': '¥49',
              'old': '¥64'
            }
          ]
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product{
  display: -webkit-flex;
  overflow: hidden;
  height: 100%;
}
.product .wrapper{
  -webkit-flex: 1;
  text-align: center;
  line-height: .5rem;
  overflow-y: scroll; 
}
.product ul li{
  background: #CCC;
  border-bottom: 1px solid #F2f2f2;
}
.product .message{
  -webkit-flex: 3;
  overflow-y: scroll;
}
.product .message h4{
  height: .4rem;
  line-height: .4rem;
  background: #e5e5e5;
  padding-left: .1rem;
}
.product .message dl{
  display: -webkit-flex;
  padding: .1rem;
  border-bottom: 1px solid #CCC;
}
.product .message dl dt{
  -webkit-flex: 1;
}
.product .message dl dt img{
  width: 100%;
}
.product .message dl dd{
  -webkit-flex: 3;
  padding-left: .1rem
}
.product .message dl dd .name{
  font-weight: 600;
  line-height: .2rem
}
.product .message dl dd .num{
  line-height: .2rem;
  color: #999;
}
.product .message dl dd .price span{
  font-size: .16rem;
  color: #f04848;
}
.product .message dl dd .price i{
  color: #fbf92f;
}
</style>
