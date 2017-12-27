import {
  CLEAR_SHOP_TOKEN, SAVE_SHOP_TOKEN, START_CHECKING_LOGIN_STATUS, FINISH_CHECKING_LOGIN_STATUS,
  START_LOGIN, FINISH_LOGIN, SAVE_USER_INFO
} from '../mutation-types'
import { fbLogin, fbCheckLoginStatus } from '../../utils/facebook'
import { sendCredentials } from '../../apis/auth'

const state = {
  shopToken: undefined,
  loggingIn: false,
  checkingLoginStatus: true,
  userInfo: {
    id: undefined,
    avatar: ''
  }
}

const getters = {
  isLoggedIn: state => state.shopToken !== undefined,
  loading: state => state.loggingIn || state.checkingLoginStatus,
  userAvatar: state => state.userInfo.avatar
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
    const sendCredentialsResponse = await sendCredentials(accessToken, userID)
    if (!sendCredentialsResponse) {
      commit(FINISH_LOGIN)
      return false
    }
    commit(SAVE_SHOP_TOKEN, { shopToken: sendCredentialsResponse.token })
    commit(SAVE_USER_INFO, { userInfo: sendCredentialsResponse.userInfo })
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
    const sendCredentialsResponse = await sendCredentials(accessToken, userID)
    if (!sendCredentialsResponse) {
      commit(FINISH_CHECKING_LOGIN_STATUS)
      return false
    }
    commit(SAVE_SHOP_TOKEN, { shopToken: sendCredentialsResponse.token })
    commit(SAVE_USER_INFO, { userInfo: sendCredentialsResponse.userInfo })
    commit(FINISH_CHECKING_LOGIN_STATUS)
    return true
  },

  logout ({ commit }) {
    commit(CLEAR_SHOP_TOKEN)
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
  },
  [SAVE_USER_INFO] (state, { userInfo }) {
    state.userInfo = userInfo
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
