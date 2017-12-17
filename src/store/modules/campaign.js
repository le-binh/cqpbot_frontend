import { FINISH_LOADING_PAGE_MESSAGES, RECEIVE_ALL_PAGE_MESSAGES, START_LOADING_PAGE_MESSAGES } from '../mutation-types'
import campaignApi from '../../apis/campaign'

const state = {
  messages: [],
  loading: true
}

const getters = {
  messages: state => state.messages.map(message => ({
    name: message.title,
    sent: message.statistic.sent,
    read: message.statistic.read,
    clicked: message.statistic.clicked
  }))
}

const actions = {
  async getPageMessages ({ commit }, pageId) {
    commit(START_LOADING_PAGE_MESSAGES)
    const messages = await campaignApi.getPageMessages(pageId)
    commit(FINISH_LOADING_PAGE_MESSAGES)
    commit(RECEIVE_ALL_PAGE_MESSAGES, { messages: messages })
    return messages
  }
}

const mutations = {
  [RECEIVE_ALL_PAGE_MESSAGES] (state, { messages }) {
    state.messages = messages
  },
  [START_LOADING_PAGE_MESSAGES] (state) {
    state.loading = true
  },
  [FINISH_LOADING_PAGE_MESSAGES] (state) {
    state.loading = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
