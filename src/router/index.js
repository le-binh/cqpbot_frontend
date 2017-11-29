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
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/my_pages', name: 'My-Pages', component: MyPages, meta: { requiresAuth: true } },
    { path: '/my_pages/:id',
      component: PageDetail,
      meta: { requiresAuth: true },
      children: [
        { path: '', name: 'Campaign', component: Campaign, meta: { requiresAuth: true } },
        { path: 'training', component: Training, meta: { requiresAuth: true } },
        { path: 'new-arrival', component: NewArrival, meta: { requiresAuth: true } },
        { path: 'customer', component: Customer, meta: { requiresAuth: true } },
        { path: 'customer-group', component: CustomerGroup, meta: { requiresAuth: true } }
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
