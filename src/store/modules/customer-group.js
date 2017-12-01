import { FINISH_LOADING_CUSTOMERS_GROUP, RECEIVE_ALL_CUSTOMERS_GROUP, START_LOADING_CUSTOMERS_GROUP } from '../mutation-types'
import { getCustomerGroups } from '../../apis/customer-group'

const state = {
  customerGroups: [],
  loading: true
}

const getters = {
  customerGroups: state => state.customerGroups
}

const actions = {
  getAllCustomerGroups ({ commit }) {
    commit(START_LOADING_CUSTOMERS_GROUP)
    getCustomerGroups().then(customerGroups => {
      commit(FINISH_LOADING_CUSTOMERS_GROUP)
      console.log(customerGroups)
      const dummyCustomerGroups = [{
        groupName: 'Beautiful girl',
        customerName: 'chứa: Ngọc Trinh ',
        gender: 'Nữ',
        like: '= 100',
        comments: '> 5',
        inbox: '< 100',
        lastInteraction: '= 3 ngày'
      }, {
        groupName: 'Beautiful girl',
        customerName: 'chứa: Nguyễn Khánh Linh',
        gender: 'Nữ',
        like: '< 100',
        comments: '',
        inbox: '',
        lastInteraction: '>= 3 ngày'
      }]
      commit(RECEIVE_ALL_CUSTOMERS_GROUP, { customerGroups: dummyCustomerGroups })
    })
  }
}

const mutations = {
  [RECEIVE_ALL_CUSTOMERS_GROUP] (state, { customerGroups }) {
    state.customerGroups = customerGroups
  },
  [START_LOADING_CUSTOMERS_GROUP] (state) {
    state.loading = true
  },
  [FINISH_LOADING_CUSTOMERS_GROUP] (state) {
    state.loading = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
