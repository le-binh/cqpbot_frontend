import { START_LOADING_NEW_ARRIVALS, FINISH_LOADING_NEW_ARRIVALS, RECEIVE_LOADING_NEW_ARRIVALS } from '../mutation-types'
import newArrivalApi from '../../apis/new-arrival'

const state = {
  loading: false,
  newArrivals: []
}

const getters = {
  newArrivals: state => state.newArrivals
}

const actions = {
  async getNewArrivals ({ commit }, pageId) {
    commit(START_LOADING_NEW_ARRIVALS)
    const newArrivals = await newArrivalApi.getNewArrivals(pageId)
    commit(FINISH_LOADING_NEW_ARRIVALS)
    commit(RECEIVE_LOADING_NEW_ARRIVALS, newArrivals)
  }
}

const mutations = {
  [START_LOADING_NEW_ARRIVALS] (state) {
    state.loading = true
  },
  [FINISH_LOADING_NEW_ARRIVALS] (state) {
    state.loading = false
  },
  [RECEIVE_LOADING_NEW_ARRIVALS] (state, newArrivals) {
    state.newArrivals = newArrivals
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
