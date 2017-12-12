import { SAVE_NEW_INBOX } from '../mutation-types'

const dummyConfusingQuestions = [
  { id: 1, question: 'Foo Bar' },
  { id: 2, question: 'Foo Bar' },
  { id: 3, question: 'Foo Bar' }
]

const dummyDoubtQuestions = [
  { id: 1, question: 'Foo Bar', answer: 'Foo Bar', doubt: 'Foo Bar' }
]

const state = {
  inboxes: [],
  confusingQuestions: [...dummyConfusingQuestions],
  doubtQuestions: [...dummyDoubtQuestions]
}

const getters = {
  inboxes: state => state.inboxes,
  confusingQuestions: state => state.confusingQuestions,
  doubtQuestions: state => state.doubtQuestions
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
