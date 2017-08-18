import Vue from 'vue'
import Router from 'vue-router'
import wrap from '@/components/wrap'
import shouye from '@/components/shouye'
import order from '@/components/order'
import my from '@/components/my'
import more from '@/components/more'
import address from '@/components/address'
import thank from '@/components/thank'
import ruzhu from '@/components/ruzhu'
import question from '@/components/question'
import balance from '@/components/balance'
import collect from '@/components/collect'
import userInfo from '@/components/userInfo'
import login from '@/components/login'
import revise from '@/components/revise'
import retrieve from '@/components/retrieve'
import information from '@/components/information'
import product from '@/components/product'
import screen from '@/components/screen'
import placeOrder from '@/components/placeOrder'
Vue.use(Router)
const childrenRoute = [
  {
    path: 'shouye',
    name: 'shouye',
    component: shouye
  },
  {
    path: 'order',
    name: 'order',
    component: order
  },
  {
    path: 'my',
    name: 'my',
    component: my
  }
]

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/wrap',
    component: wrap,
    children: childrenRoute
  },
  {
    path: '/more',
    name: 'more',
    component: more
  },
  {
    path: '/address',
    name: 'address',
    component: address
  },
  {
    path: '/thank',
    name: 'thank',
    component: thank
  },
  {
    path: '/ruzhu',
    name: 'ruzhu',
    component: ruzhu
  },
  {
    path: '/question',
    name: 'question',
    component: question
  },
  {
    path: '/balance',
    name: 'balance',
    component: balance
  },
  {
    path: '/collect',
    name: 'collect',
    component: collect
  },
  {
    path: '/userInfo',
    name: 'userInfo',
    component: userInfo
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/revise',
    name: 'revise',
    component: revise
  },
  {
    path: '/retrieve',
    name: 'retrieve',
    component: retrieve
  },
  {
    path: '/information',
    name: 'information',
    component: information,
    children: [
      {
        path: '/information',
        redirect: '/information/product'
      },
      {
        path: 'product',
        name: 'product',
        component: product
      },
      {
        path: 'screen',
        name: 'screen',
        component: screen
      }
    ]
  },
  {
    path: '/placeOrder',
    name: 'placeOrder',
    component: placeOrder
  }
]
export default new Router({
  mode: 'history',
  routes: routes
})
