import { CLEAR_USER_CREDENTIALS, SAVE_USER_CREDENTIALS } from '../mutation-types'

const state = {
  token: undefined,
  userID: undefined
}

const getters = {
  isLoggedIn: state => state.token !== undefined
}

const actions = {
  saveUserCredentials ({ commit }, { token, userID }) {
    commit(SAVE_USER_CREDENTIALS, { token, userID })
  },

  clearUserCredentials ({ commit }) {
    commit(CLEAR_USER_CREDENTIALS)
  }
}

const mutations = {
  [SAVE_USER_CREDENTIALS] (state, { token, userID }) {
    if (state.token !== token) {
      state.token = token
      state.userID = userID
    }
  },

  [CLEAR_USER_CREDENTIALS] (state) {
    state.token = undefined
    state.userID = undefined
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
