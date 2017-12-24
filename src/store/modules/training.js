import {
  SAVE_NEW_INBOX, START_SAVING_NEW_INBOX, FINISH_SAVING_NEW_INBOX, START_LOADING_INBOXES,
  FINISH_LOADING_INBOXES, RECEIVE_NEW_INBOXES, START_LOADING_NOT_UNDERSTAND_QUESTIONS,
  FINISH_LOADING_NOT_UNDERSTAND_QUESTIONS, RECEIVE_NOT_UNDERSTAND_QUESTIONS, START_CREATING_NOT_UNDERSTAND_QUESTION,
  FINISH_CREATING_NOT_UNDERSTAND_QUESTION, UPDATE_NOT_UNDERSTAND_QUESTIONS, UPDATE_PAGINATION,
  START_LOADING_CONFUSING_QUESTIONS, FINISH_LOADING_CONFUSING_QUESTIONS, RECEIVE_NEW_CONFUSING_QUESTIONS,
  START_UPDATING_CONFUSING_QUESTION, FINISH_UPDATING_CONFUSING_QUESTION, UPDATE_CONFUSING_QUESTIONS
} from '../mutation-types'
import trainingApi from '../../apis/training'

const state = {
  loading: false,
  inboxes: [],
  notUnderstandQuestions: [],
  confusingQuestions: [],
  pagination: {
    inbox: {
      hasNext: false,
      currentPage: 0
    },
    confusing: {
      hasNext: false,
      currentPage: 0
    }
  }
}

const getters = {
  inboxes: state => state.inboxes,
  notUnderstandQuestions: state => state.notUnderstandQuestions,
  confusingQuestions: state => state.confusingQuestions,
  hasNextInboxes: state => state.pagination.inbox.hasNext,
  hasPreviousInboxes: state => state.pagination.inbox.currentPage > 0,
  currentInboxesPage: state => state.pagination.inbox.currentPage,
  hasNextConfusingQuestions: state => state.pagination.confusing.hasNext,
  hasPreviousConfusingQuestions: state => state.pagination.confusing.currentPage > 0,
  currentConfusingQuestionsPage: state => state.pagination.confusing.currentPage
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
  async getInboxes ({ commit }, { page }) {
    commit(START_LOADING_INBOXES)
    const response = await trainingApi.getInboxes({ page })
    commit(FINISH_LOADING_INBOXES)
    if (response) {
      const { isEnd, inboxes } = response
      commit(UPDATE_PAGINATION, { page: 'inbox', value: { hasNext: !isEnd, currentPage: page } })
      commit(RECEIVE_NEW_INBOXES, inboxes)
    }
  },
  async getNotUnderstandQuestions ({ commit }, pageId) {
    commit(START_LOADING_NOT_UNDERSTAND_QUESTIONS)
    const questions = await trainingApi.getNotUnderstandQuestions(pageId)
    commit(FINISH_LOADING_NOT_UNDERSTAND_QUESTIONS)
    commit(RECEIVE_NOT_UNDERSTAND_QUESTIONS, questions)
  },
  async getConfusingQuestions ({ commit }, { page }) {
    commit(START_LOADING_CONFUSING_QUESTIONS)
    const response = await trainingApi.getConfusingQuestions({ page })
    commit(FINISH_LOADING_CONFUSING_QUESTIONS)
    if (response) {
      const { isEnd, questions } = response
      commit(UPDATE_PAGINATION, { page: 'confusing', value: { hasNext: !isEnd, currentPage: page } })
      commit(RECEIVE_NEW_CONFUSING_QUESTIONS, questions)
    }
  },
  async createNotUnderstandQuestion ({ commit, dispatch }, { pageId, question, answers }) {
    commit(START_CREATING_NOT_UNDERSTAND_QUESTION)
    const createdQuestion = await trainingApi.createNotUnderstandQuestion(pageId, question.question, answers)
    commit(FINISH_CREATING_NOT_UNDERSTAND_QUESTION)
    if (createdQuestion) {
      dispatch('refreshInboxes')
      commit(UPDATE_NOT_UNDERSTAND_QUESTIONS, question)
      return true
    }
    return false
  },
  async refreshInboxes ({ commit, getters }) {
    const response = await trainingApi.getInboxes({ page: getters.currentInboxesPage })
    if (response) {
      commit(RECEIVE_NEW_INBOXES, response.inboxes)
    }
  },
  async updateQuestion ({ commit, dispatch }, { id, question, answers }) {
    commit(START_UPDATING_CONFUSING_QUESTION)
    const success = await trainingApi.updateQuestion(id, question, answers)
    commit(FINISH_UPDATING_CONFUSING_QUESTION)
    if (success) {
      dispatch('refreshInboxes')
      commit(UPDATE_CONFUSING_QUESTIONS, id)
    }
    return success
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
  [RECEIVE_NEW_INBOXES] (state, inboxes) {
    state.inboxes = inboxes
  },
  [START_LOADING_CONFUSING_QUESTIONS] (state) {
    state.loading = true
  },
  [FINISH_LOADING_CONFUSING_QUESTIONS] (state) {
    state.loading = false
  },
  [RECEIVE_NEW_CONFUSING_QUESTIONS] (state, questions) {
    state.confusingQuestions = questions
  },
  [START_LOADING_NOT_UNDERSTAND_QUESTIONS] (state) {
    state.loading = true
  },
  [FINISH_LOADING_NOT_UNDERSTAND_QUESTIONS] (state) {
    state.loading = false
  },
  [RECEIVE_NOT_UNDERSTAND_QUESTIONS] (state, questions) {
    state.notUnderstandQuestions = questions.map((question, index) => ({ id: index, question }))
  },
  [START_CREATING_NOT_UNDERSTAND_QUESTION] (state) {
    state.loading = true
  },
  [FINISH_CREATING_NOT_UNDERSTAND_QUESTION] (state) {
    state.loading = false
  },
  [UPDATE_NOT_UNDERSTAND_QUESTIONS] (state, question) {
    state.notUnderstandQuestions = state.notUnderstandQuestions.filter(q => question.id !== q.id)
  },
  [UPDATE_PAGINATION] (state, { page, value }) {
    state.pagination[page] = value
  },
  [START_UPDATING_CONFUSING_QUESTION] (state) {
    state.loading = true
  },
  [FINISH_UPDATING_CONFUSING_QUESTION] (state) {
    state.loading = false
  },
  [UPDATE_CONFUSING_QUESTIONS] (state, id) {
    state.confusingQuestions = state.confusingQuestions.filter(q => q._id !== id)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
