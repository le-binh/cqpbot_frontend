import { FINISH_LOADING_CUSTOMERS, RECEIVE_ALL_CUSTOMERS, START_LOADING_CUSTOMERS } from '../mutation-types'
import { getCustomers } from '../../apis/customer'

const state = {
  customers: [],
  loading: true
}

const getters = {
  customers: state => state.customers
}

const actions = {
  getAllCustomers ({ commit }, pageId) {
    commit(START_LOADING_CUSTOMERS)
    getCustomers(pageId).then(customers => {
      console.log(customers)
      commit(FINISH_LOADING_CUSTOMERS)
      commit(RECEIVE_ALL_CUSTOMERS, { customers })
    })
  }
}

const mutations = {
  [RECEIVE_ALL_CUSTOMERS] (state, { customers }) {
    state.customers = customers
  },
  [START_LOADING_CUSTOMERS] (state) {
    state.loading = true
  },
  [FINISH_LOADING_CUSTOMERS] (state) {
    state.loading = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
