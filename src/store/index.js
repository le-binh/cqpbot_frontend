import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import myPages from './modules/my_pages'
import customer from './modules/customer'
import campaign from './modules/campaign'
import customerGroup from './modules/customer-group'
import training from './modules/training'
import message from './modules/message'
import addNewGroup from './modules/add-new-group'
import pageDetail from './modules/page-detail'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    myPages,
    customer,
    campaign,
    customerGroup,
    training,
    message,
    addNewGroup,
    pageDetail
  }
})
