import {
  CLEAR_SHOP_TOKEN, SAVE_SHOP_TOKEN, START_CHECKING_LOGIN_STATUS, FINISH_CHECKING_LOGIN_STATUS,
  START_LOGIN, FINISH_LOGIN
} from '../mutation-types'
import { fbLogin, fbCheckLoginStatus } from '../../utils/facebook'
import { sendCredentials } from '../../apis/auth'

const state = {
  shopToken: undefined,
  loggingIn: false,
  checkingLoginStatus: true
}

const getters = {
  isLoggedIn: state => state.shopToken !== undefined,
  loading: state => state.loggingIn || state.checkingLoginStatus
}

const actions = {
  async login ({ commit }) {
    commit(START_LOGIN)
    const response = await fbLogin()
    if (!response) {
      commit(FINISH_LOGIN)
      return false
    }
    const [accessToken, userID] = response
    const shopToken = await sendCredentials(accessToken, userID)
    if (!shopToken) {
      commit(FINISH_LOGIN)
      return false
    }
    commit(SAVE_SHOP_TOKEN, { shopToken })
    commit(FINISH_LOGIN)
    return true
  },

  async checkLoginStatus ({ commit }) {
    commit(START_CHECKING_LOGIN_STATUS)
    const response = await fbCheckLoginStatus()
    if (!response) {
      commit(FINISH_CHECKING_LOGIN_STATUS)
      return false
    }
    const [accessToken, userID] = response
    const shopToken = await sendCredentials(accessToken, userID)
    if (!shopToken) {
      commit(FINISH_CHECKING_LOGIN_STATUS)
      return false
    }
    commit(SAVE_SHOP_TOKEN, { shopToken })
    commit(FINISH_CHECKING_LOGIN_STATUS)
    return true
  }
}

const mutations = {
  [SAVE_SHOP_TOKEN] (state, { shopToken }) {
    if (state.shopToken !== shopToken) {
      state.shopToken = shopToken
    }
  },

  [CLEAR_SHOP_TOKEN] (state) {
    state.shopToken = undefined
  },

  [START_LOGIN] (state) {
    state.loggingIn = true
  },

  [FINISH_LOGIN] (state) {
    state.loggingIn = false
  },

  [START_CHECKING_LOGIN_STATUS] (state) {
    state.checkingLoginStatus = true
  },

  [FINISH_CHECKING_LOGIN_STATUS] (state) {
    state.checkingLoginStatus = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
