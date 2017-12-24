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
      ...normalizeGroupsConditions(group.conditions),
      id: group._id,
      groupName: group.title
    }
  })
}

const normalizeGroupsConditions = conditions => {
  if (conditions === undefined) {
    return {
      customerName: '',
      gender: '',
      like: '',
      lastInteraction: '',
      comments: '',
      inbox: '',
      reactions: ''
    }
  } else {
    return {
      customerName: conditions.name ? `Chứa ${conditions.name}` : '',
      gender: genderDict[conditions.gender || 'all'],
      like: '',
      lastInteraction: conditions.lastInteract ? `${conditions.lastInteract} ngày` : '',
      comments: conditions.comments ? parsingGroupCondition(conditions.comments) : '',
      inbox: conditions.inbox ? parsingGroupCondition(conditions.inbox) : '',
      reactions: conditions.reactions ? parsingGroupCondition(conditions.reactions) : ''
    }
  }
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
