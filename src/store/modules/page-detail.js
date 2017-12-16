import { LOAD_PAGE_INFO } from '../mutation-types'

const state = {
  _id: '',
  name: '',
  avatar: ''
}

const getters = {
  pageInfoLoaded: state => state._id !== ''
}

const actions = {
  loadPageInfo ({ commit }, pageInfo) {
    commit(LOAD_PAGE_INFO, pageInfo)
  }
}

const mutations = {
  [LOAD_PAGE_INFO] (state, pageInfo) {
    const { _id, name, avatar } = pageInfo

    state._id = _id
    state.name = name
    state.avatar = avatar
    state.loaded = true
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
