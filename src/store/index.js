import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import myPages from './modules/my_pages'
import customer from './modules/customer'
import campaign from './modules/campaign'
import customerGroup from './modules/customer-group'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    myPages,
    customer,
    campaign,
    customerGroup
  }
})
