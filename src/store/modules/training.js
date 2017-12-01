import { SAVE_NEW_INBOX } from '../mutation-types'

const dummyConfusingQuestions = [
  { id: 1, question: 'Foo Bar' },
  { id: 2, question: 'Foo Bar' },
  { id: 3, question: 'Foo Bar' }
]

const state = {
  inboxes: [],
  confusingQuestions: [...dummyConfusingQuestions]
}

const getters = {
  inboxes: state => state.inboxes,
  confusingQuestions: state => state.confusingQuestions
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
