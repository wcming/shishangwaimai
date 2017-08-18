<template>
  <div class="wrap">
    <header class="header">
        常见问题
        <router-link to='/ruzhu' class="back">
          <i class="fa fa-angle-left f20"></i>
        </router-link>
    </header>
    <div class="content">
      <div class="question" v-for='item in question'>
        <h3>{{item.matter}}</h3>
        <p>{{item.answer}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shangjia',
  data () {
    return {
      question: [
        {
          'matter': 'Q；关于美团外卖合作是否收费？',
          'answer': '不同地区标准有差异，具体合作费用及结算问题，在资质审核通过后，当地业务员与你和谈。'
        },
        {
          'matter': 'Q；关于美团外卖合作是否收费？',
          'answer': '不同地区标准有差异，具体合作费用及结算问题，在资质审核通过后，当地业务员与你和谈。'
        },
        {
          'matter': 'Q；关于美团外卖合作是否收费？',
          'answer': '不同地区标准有差异，具体合作费用及结算问题，在资质审核通过后，当地业务员与你和谈。'
        },
        {
          'matter': 'Q；关于美团外卖合作是否收费？',
          'answer': '不同地区标准有差异，具体合作费用及结算问题，在资质审核通过后，当地业务员与你和谈。'
        },
        {
          'matter': 'Q；关于美团外卖合作是否收费？',
          'answer': '不同地区标准有差异，具体合作费用及结算问题，在资质审核通过后，当地业务员与你和谈。'
        },
        {
          'matter': 'Q；关于美团外卖合作是否收费？',
          'answer': '不同地区标准有差异，具体合作费用及结算问题，在资质审核通过后，当地业务员与你和谈。'
        },
        {
          'matter': 'Q；关于美团外卖合作是否收费？',
          'answer': '不同地区标准有差异，具体合作费用及结算问题，在资质审核通过后，当地业务员与你和谈。'
        },
        {
          'matter': 'Q；关于美团外卖合作是否收费？',
          'answer': '不同地区标准有差异，具体合作费用及结算问题，在资质审核通过后，当地业务员与你和谈。'
        }
      ]
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
  position: relative;}
  .header .back {
    position: absolute;
    left: 0.1rem;
    line-height: 0.44rem;
    color: #FFF; }
.content {
  -webkit-flex: 1;
  overflow-y: scroll;
  background: #FFF; 
}
  .content .question {
    padding: 0.1rem;
    border-bottom: 1px solid #CCC;
  }
    .content .question h3 {
      line-height: 0.3rem; }
    .content .question p {
      text-wrap: wrap;
      line-height: 0.2rem;
      font-size: 0.14rem; }

</style>
