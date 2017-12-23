import {
  SAVE_NEW_INBOX, START_SAVING_NEW_INBOX, FINISH_SAVING_NEW_INBOX, START_LOADING_INBOXES,
  FINISH_LOADING_INBOXES, RECEIVE_LOADING_INBOXES
} from '../mutation-types'
import trainingApi from '../../apis/training'

const dummyConfusingQuestions = [
  { id: 1, question: 'Foo Bar' },
  { id: 2, question: 'Foo Bar' },
  { id: 3, question: 'Foo Bar' }
]

const dummyDoubtQuestions = [
  { id: 1, question: 'Foo Bar', answer: 'Foo Bar', doubt: 'Foo Bar' }
]

const state = {
  loading: false,
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
  async createNewInbox ({ commit }, { pageId, inbox }) {
    commit(START_SAVING_NEW_INBOX)
    const question = inbox.question
    const answers = inbox.answers.map(answer => answer.value)
    const createdInbox = await trainingApi.createNewInbox(pageId, question, answers)
    commit(FINISH_SAVING_NEW_INBOX)
    if (createdInbox) {
      commit(SAVE_NEW_INBOX, createdInbox)
      return true
    }
    return false
  },
  async getInboxes ({ commit }) {
    commit(START_LOADING_INBOXES)
    const inboxes = await trainingApi.getInboxes()
    commit(FINISH_LOADING_INBOXES)
    commit(RECEIVE_LOADING_INBOXES, inboxes)
  }
}

const mutations = {
  [SAVE_NEW_INBOX] (state, inbox) {
    state.inboxes.unshift(inbox)
  },
  [START_SAVING_NEW_INBOX] (state) {
    state.loading = true
  },
  [FINISH_SAVING_NEW_INBOX] (state) {
    state.loading = false
  },
  [START_LOADING_INBOXES] (state) {
    state.loading = true
  },
  [FINISH_LOADING_INBOXES] (state) {
    state.loading = false
  },
  [RECEIVE_LOADING_INBOXES] (state, inboxes) {
    state.inboxes = inboxes
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
