import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import PageDetail from '@/components/PageDetail'
import Login from '@/components/Login'
import Campaign from '@/components/Campaign'
import Training from '@/components/Training'
import NewArrival from '@/components/NewArrival'
import Customer from '@/components/Customer'
import CustomerGroup from '@/components/CustomerGroup'
import MyPages from '@/components/MyPages'
import AddNewMessage from '@/components/AddNewMessage'

import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/pages', name: 'MyPages', component: MyPages, meta: { requiresAuth: true } },
    {
      path: '/pages/:id/campaigns',
      component: PageDetail,
      children: [
        { path: '', name: 'Campaign', component: Campaign, meta: { requiresAuth: true }, props: true },
        { path: '/pages/:id/campaigns/add-new-message', name: 'AddNewMessage', component: AddNewMessage, meta: { requiresAuth: true }, props: true }
      ]
    },
    {
      path: '/pages/:id/training',
      component: PageDetail,
      children: [
        { path: '', name: 'Training', component: Training, meta: { requiresAuth: true } }
      ]
    },
    {
      path: '/pages/:id/new-arrival',
      component: PageDetail,
      children: [
        { path: '', name: 'NewArrival', component: NewArrival, meta: { requiresAuth: true } }
      ]
    },
    {
      path: '/pages/:id/customer',
      component: PageDetail,
      children: [
        { path: '', name: 'Customer', component: Customer, meta: { requiresAuth: true } }
      ]
    },
    {
      path: '/pages/:id/customer-group',
      component: PageDetail,
      children: [
        { path: '', name: 'CustomerGroup', component: CustomerGroup, meta: { requiresAuth: true } }
      ]
    }
  ],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.fullPath } })
    }
  } else {
    next()
  }
})

export default router
