import {
  ADD_NEW_GROUP_CONDITION, DELETE_GROUP_CONDITION, START_CREATING_CUSTOMER_GROUP,
  FINISH_CREATING_CUSTOMER_GROUP
} from '../mutation-types'
import { genderDict, comparisonDict } from '../constants'
import customerGroupsApi from '../../apis/customer-group'

const state = {
  pageId: '',
  title: '',
  conditions: {},
  loading: false
}

const normalizeConditions = conditions => {
  let normalizedConditions = []
  Object.keys(conditions).forEach(key => {
    if (key === 'name') {
      normalizedConditions.push({key: key, value: `Chứa ${conditions[key]}`})
    } else if (key === 'gender') {
      normalizedConditions.push({key: key, value: `Những bạn ${genderDict[conditions[key]]}`})
    } else if (key === 'subscribed') {
      normalizedConditions.push({key: key, value: conditions[key] ? 'Đã đăng kí nhận tin' : 'Chưa đăng kí nhận tin'})
    } else if (key === 'comments') {
      normalizedConditions.push({key: key, value: `Comment ${comparisonDict[conditions[key]['condition']]} ${conditions[key]['value']}`})
    } else if (key === 'inbox') {
      normalizedConditions.push({key: key, value: `Inbox ${comparisonDict[conditions[key]['condition']]} ${conditions[key]['value']}`})
    } else if (key === 'likes') {
      normalizedConditions.push({key: key, value: `Like ${comparisonDict[conditions[key]['condition']]} ${conditions[key]['value']}`})
    } else if (key === 'lastInteract') {
      normalizedConditions.push({key: key, value: `Tương tác trong ${conditions[key]} ngày qua`})
    }
  })
  return normalizedConditions
}

const getters = {
  displayedCustomerGroupConditions: state => normalizeConditions(state.conditions)
}

const actions = {
  addNewCondition ({ commit }, { key, value }) {
    commit(ADD_NEW_GROUP_CONDITION, { key, value })
  },
  deleteCondition ({ commit }, conditionKey) {
    commit(DELETE_GROUP_CONDITION, conditionKey)
  },
  async createCustomerGroup ({ commit }, pageId) {
    commit(START_CREATING_CUSTOMER_GROUP)
    const success = await customerGroupsApi.createCustomerGroup(pageId, state.conditions)
    commit(FINISH_CREATING_CUSTOMER_GROUP)
    return success
  }
}

const mutations = {
  [ADD_NEW_GROUP_CONDITION] (state, { key, value }) {
    state.conditions = { ...state.conditions, [key]: value }
  },
  [DELETE_GROUP_CONDITION] (state, conditionKey) {
    let conditions = { ...state.conditions }
    delete conditions[conditionKey]
    state.conditions = { ...conditions }
  },
  [START_CREATING_CUSTOMER_GROUP] (state) {
    state.loading = true
  },
  [FINISH_CREATING_CUSTOMER_GROUP] (state) {
    state.loading = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
