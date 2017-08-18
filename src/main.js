// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import element from './element-ui'
import myFoot from './components/myfoot'
import './style/iconfont.css'
import './style/font-awesome.min.css'
import './style/reset.css'
import './style/common.css'

Vue.component('my-foot', myFoot)

Vue.config.productionTip = false

Vue.use(element)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

