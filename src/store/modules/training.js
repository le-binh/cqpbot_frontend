import { SAVE_NEW_INBOX } from '../mutation-types'

const state = {
  inboxes: []
}

const getters = {
  inboxes: state => state.inboxes
}

const actions = {
  saveNewInbox ({ commit }, inbox) {
    commit(SAVE_NEW_INBOX, { inbox })
  }
}

const mutations = {
  [SAVE_NEW_INBOX] (state, { inbox }) {
    state.inboxes.unshift(inbox)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
