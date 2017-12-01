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
  getAllCustomers ({ commit }) {
    commit(START_LOADING_CUSTOMERS)
    getCustomers().then(customers => {
      commit(FINISH_LOADING_CUSTOMERS)
      console.log(customers)
      const dummyCustomers = [{
        name: 'Cristano Ronaldo',
        like: 1000,
        comments: 500,
        inbox: 10000,
        batchNews: 950,
        read: 900,
        clicks: 500,
        react: 249,
        lastInteraction: '3 ngày trước'
      }, {
        name: 'Cristano Ronaldo',
        like: 1000,
        comments: 500,
        inbox: 10000,
        batchNews: 950,
        read: 900,
        clicks: 500,
        react: 249,
        lastInteraction: '3 ngày trước'
      }]
      commit(RECEIVE_ALL_CUSTOMERS, { customers: dummyCustomers })
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
