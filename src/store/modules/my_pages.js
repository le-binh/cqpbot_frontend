import {
  FINISH_LOADING_PAGES, RECEIVE_ALL_PAGES, START_LOADING_PAGES,
  START_ACTIVATING_PAGE, FINISH_ACTIVATING_PAGE, PAGE_BECOME_ACTIVE,
  START_DEACTIVATING_PAGE, FINISH_DEACTIVATING_PAGE, PAGE_BECOME_INACTIVE
} from '../mutation-types'
import myPagesApi from '../../apis/my-pages'

const state = {
  pages: [],
  loading: true
}

const getters = {
  allPages: state => state.pages,
  getPageById: state => id => {
    return state.pages.find(page => page._id === id)
  }
}

const actions = {
  async getMyPages ({ commit }) {
    commit(START_LOADING_PAGES)
    const pages = await myPagesApi.getMyPages()
    commit(FINISH_LOADING_PAGES)
    commit(RECEIVE_ALL_PAGES, { pages })
  },
  activatePage ({ commit }, pageId) {
    commit(START_ACTIVATING_PAGE)
    myPagesApi.activatePage(pageId).then(success => {
      if (success) {
        commit(PAGE_BECOME_ACTIVE, { pageId })
      }
      commit(FINISH_ACTIVATING_PAGE)
    })
  },
  deactivatePage ({ commit }, pageId) {
    commit(START_DEACTIVATING_PAGE)
    myPagesApi.deactivatePage(pageId).then(success => {
      if (success) {
        commit(PAGE_BECOME_INACTIVE, { pageId })
      }
      commit(FINISH_DEACTIVATING_PAGE)
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
  },
  [START_ACTIVATING_PAGE] (state) {
    state.loading = true
  },
  [FINISH_ACTIVATING_PAGE] (state) {
    state.loading = false
  },
  [PAGE_BECOME_ACTIVE] (state, { pageId }) {
    state.pages = state.pages.map(page => {
      return {
        ...page,
        active: page._id === pageId ? true : page.active
      }
    })
  },
  [START_DEACTIVATING_PAGE] (state) {
    state.loading = true
  },
  [FINISH_DEACTIVATING_PAGE] (state) {
    state.loading = false
  },
  [PAGE_BECOME_INACTIVE] (state, { pageId }) {
    state.pages = state.pages.map(page => {
      return {
        ...page,
        active: page._id === pageId ? false : page.active
      }
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
