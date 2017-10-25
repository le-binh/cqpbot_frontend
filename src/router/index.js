import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Admin from '@/components/Admin'
import Login from '@/components/Login'
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/admin', name: 'Admin', component: Admin },
    { path: '/login', name: 'Login', component: Login }
  ],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.path === '/admin') {
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
