import {
  START_LOADING_NEW_ARRIVALS, FINISH_LOADING_NEW_ARRIVALS, RECEIVE_LOADING_NEW_ARRIVALS,
  START_CREATING_NEW_ARRIVAL, FINISH_CREATING_NEW_ARRIVAL
} from '../mutation-types'
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
  },
  async createNewArrival ({ commit }, { pageId, title, subTitle, buttons }) {
    const requestData = {
      pageId,
      title,
      subTitle,
      buttons: buttons.map(({ title, link }) => ({ text: title, target: link })),
      type: 'newArrival'
    }
    commit(START_CREATING_NEW_ARRIVAL)
    const newArrival = await newArrivalApi.createNewArrival(requestData)
    commit(FINISH_CREATING_NEW_ARRIVAL)
    return newArrival ? newArrival['_id'] : undefined
  },
  async updateNewArrivalPhoto ({ commit }, { id, file }) {
    newArrivalApi.updateNewArrivalPhoto(id, file).then(success => {
      console.log('UPDATE NEW ARRIVAL PHOTO: ', success)
    })
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
  },
  [START_CREATING_NEW_ARRIVAL] (state) {
    state.loading = true
  },
  [FINISH_CREATING_NEW_ARRIVAL] (state) {
    state.loading = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
