import {
  FINISH_LOADING_CUSTOMERS_GROUP, RECEIVE_ALL_CUSTOMERS_GROUP, START_LOADING_CUSTOMERS_GROUP,
  SEARCH_GROUP
} from '../mutation-types'
import customerGroupsApi from '../../apis/customer-group'
import { genderDict, comparisonDict } from '../constants'

const parsingGroupCondition = (condition) => {
  return `${comparisonDict[condition.condition]} ${condition.value}`
}

const normalizeCustomerGroupsForDisplay = (groups) => {
  return groups.map(group => {
    return {
      id: group._id,
      groupName: group.title,
      customerName: group.conditions.name ? `Chứa ${group.conditions.name}` : '',
      gender: genderDict[group.conditions.gender || 'all'],
      like: 0,
      lastInteraction: group.conditions.lastInteract ? `${group.conditions.lastInteract} ngày` : '',
      comments: group.conditions.comments ? parsingGroupCondition(group.conditions.comments) : '',
      inbox: group.conditions.inbox ? parsingGroupCondition(group.conditions.inbox) : '',
      reactions: group.conditions.reactions ? parsingGroupCondition(group.conditions.reactions) : ''
    }
  })
}

const state = {
  customerGroups: [],
  loading: true,
  filteredCustomerGroups: []
}

const getters = {
  customerGroups: state => state.customerGroups,
  displayedCustomerGroups: state => normalizeCustomerGroupsForDisplay(state.customerGroups),
  filteredCustomerGroups: state => state.filteredCustomerGroups
}

const actions = {
  getCustomerGroups ({ commit }, pageId) {
    commit(START_LOADING_CUSTOMERS_GROUP)
    customerGroupsApi.getCustomerGroups(pageId).then(customerGroups => {
      commit(FINISH_LOADING_CUSTOMERS_GROUP)
      commit(RECEIVE_ALL_CUSTOMERS_GROUP, { customerGroups: customerGroups })
    })
  },
  searchGroup ({ commit, state }, query) {
    let groups
    if (query !== '') {
      groups = state.customerGroups.filter(group => {
        return group.title.toLowerCase()
          .indexOf(query.toLowerCase()) > -1
      })
    } else {
      groups = []
    }
    commit(SEARCH_GROUP, { groups })
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
  },
  [SEARCH_GROUP] (state, { groups }) {
    state.filteredCustomerGroups = groups
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
