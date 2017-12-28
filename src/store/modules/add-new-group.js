import {
  ADD_NEW_GROUP_CONDITION, DELETE_GROUP_CONDITION, START_CREATING_CUSTOMER_GROUP,
  FINISH_CREATING_CUSTOMER_GROUP, CLEAR_ALL_CONDITIONS, UPDATE_GROUP_OVERVIEW
} from '../mutation-types'
import { genderDict, comparisonDict } from '../constants'
import customerGroupsApi from '../../apis/customer-group'

const state = {
  pageId: '',
  title: '',
  conditions: {},
  loading: false,
  overview: 0
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
  displayedCustomerGroupConditions: state => normalizeConditions(state.conditions),
  groupOverview: state => state.overview
}

const actions = {
  addNewCondition ({ commit, dispatch }, { pageId, key, value }) {
    commit(ADD_NEW_GROUP_CONDITION, { key, value })
    dispatch('updateGroupOverview', { pageId })
  },
  deleteCondition ({ commit, dispatch }, { pageId, conditionKey }) {
    commit(DELETE_GROUP_CONDITION, conditionKey)
    dispatch('updateGroupOverview', { pageId })
  },
  async createCustomerGroup ({ commit }, { pageId, title }) {
    commit(START_CREATING_CUSTOMER_GROUP)
    const success = await customerGroupsApi.createCustomerGroup(pageId, title, state.conditions)
    commit(FINISH_CREATING_CUSTOMER_GROUP)
    return success
  },
  clearAllConditions ({ commit }) {
    commit(CLEAR_ALL_CONDITIONS)
  },
  async updateGroupOverview ({ commit }, { pageId }) {
    const overview = await customerGroupsApi.groupOverview(pageId, state.conditions)
    commit(UPDATE_GROUP_OVERVIEW, overview)
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
  },
  [CLEAR_ALL_CONDITIONS] (state) {
    state.conditions = {}
  },
  [UPDATE_GROUP_OVERVIEW] (state, overview) {
    state.overview = overview
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
