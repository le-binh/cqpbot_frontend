import { FINISH_LOADING_CUSTOMERS, RECEIVE_ALL_CUSTOMERS, START_LOADING_CUSTOMERS } from '../mutation-types'
import customerApi from '../../apis/customer'

const state = {
  customers: [],
  loading: true
}

const getters = {
  customers: state => state.customers
}

const actions = {
  async getCustomers ({ commit }, pageId) {
    commit(START_LOADING_CUSTOMERS)
    const customers = await customerApi.getCustomers(pageId)
    commit(FINISH_LOADING_CUSTOMERS)
    commit(RECEIVE_ALL_CUSTOMERS, { customers })
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
