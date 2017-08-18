<template>
  <footer class="footer">
      <div class="footer-nav">
          <router-link to='/wrap/shouye'>
            <i class="icon-shouye iconfont f20"></i>
            <p>首页</p>
          </router-link>
          <router-link to='/wrap/order'>
            <i class="icon-market iconfont f20"></i>
            <p>订单</p>
          </router-link>
          <router-link to='/wrap/my'>
            <i class="icon-wode iconfont f20"></i>
            <p>我的</p>
          </router-link>
      </div>
  </footer>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .footer {
    height: 0.5rem;
    line-height: 0.2rem;
    text-align: center;
    background: #f8f8f8;
    padding-top: 0.05rem;
    border-top: 1px solid #ccc; 
  }

  .footer-nav {
    display: -webkit-flex; 
  }
  .footer-nav a {
    -webkit-flex: 1;
    color: #333;
    font-size: 0.14rem;
  }
  .footer-nav a.router-link-active {
    color: #eda72e; 
  }

</style>
