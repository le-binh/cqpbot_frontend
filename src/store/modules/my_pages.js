import { FINISH_LOADING_PAGES, RECEIVE_ALL_PAGES, START_LOADING_PAGES } from '../mutation-types'
import { getMyPages } from '../../apis/my-pages'

const state = {
  pages: [],
  loading: true
}

const getters = {
  allPages: state => state.pages
}

const actions = {
  getAllPages ({ commit }) {
    commit(START_LOADING_PAGES)
    getMyPages().then(pages => {
      commit(FINISH_LOADING_PAGES)
      commit(RECEIVE_ALL_PAGES, { pages })
    })
  }
}

const mutations = {
  [RECEIVE_ALL_PAGES] (state, { pages }) {
    state.pages = pages
  },
  [START_LOADING_PAGES] (state) {
    state.loading = true
  },
  [FINISH_LOADING_PAGES] (state) {
    state.loading = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
