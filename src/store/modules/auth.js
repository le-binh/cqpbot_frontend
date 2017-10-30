import { CLEAR_USER_CREDENTIALS, SAVE_USER_CREDENTIALS } from '../mutation-types'

const state = {
  shopToken: undefined
}

const getters = {
  isLoggedIn: state => state.shopToken !== undefined
}

const actions = {
  saveUserCredentials ({ commit }, { token }) {
    commit(SAVE_USER_CREDENTIALS, { token })
  },

  clearUserCredentials ({ commit }) {
    commit(CLEAR_USER_CREDENTIALS)
  }
}

const mutations = {
  [SAVE_USER_CREDENTIALS] (state, { token }) {
    if (state.shopToken !== token) {
      state.shopToken = token
    }
  },

  [CLEAR_USER_CREDENTIALS] (state) {
    state.shopToken = undefined
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
