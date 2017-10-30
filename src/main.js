// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import { Button, Row, Col, Card } from 'element-ui'

import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
