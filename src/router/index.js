import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Admin from '@/components/Admin'
import Login from '@/components/Login'
import Campaign from '@/components/Campaign'
import Training from '@/components/Training'
import NewArrival from '@/components/NewArrival'
import Customer from '@/components/Customer'
import CustomerGroup from '@/components/CustomerGroup'
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/admin',
      component: Admin,
      children: [
        { path: '', name: 'Campaign', component: Campaign },
        { path: 'training', component: Training },
        { path: 'new-arrival', component: NewArrival },
        { path: 'customer', component: Customer },
        { path: 'customer-group', component: CustomerGroup }
      ]
    },
    { path: '/login', name: 'Login', component: Login }
  ],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.path.startsWith('/admin/')) {
    if (store.getters.isLoggedIn) {
      next()
    } else {
      router.push({name: 'Login'})
      return
    }
  }
  next()
})

export default router
