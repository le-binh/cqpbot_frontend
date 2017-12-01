import { FINISH_LOADING_CAMPAIGNS, RECEIVE_ALL_CAMPAIGNS, START_LOADING_CAMPAIGNS } from '../mutation-types'
import { getCampaigns } from '../../apis/campaign'

const state = {
  campaigns: [],
  loading: true
}

const getters = {
  campaigns: state => state.campaigns
}

const actions = {
  getAllCampaigns ({ commit }) {
    commit(START_LOADING_CAMPAIGNS)
    getCampaigns().then(campaigns => {
      commit(FINISH_LOADING_CAMPAIGNS)
      console.log(campaigns)
      const dummyCampaigns = [{
        name: 'Sinh nhật quán',
        type: 'Gửi ngay',
        total: 1000,
        sent: 1000,
        read: 950,
        clicked: 900,
        interacted: 500
      }, {
        name: 'Thứ 2 cuối mỗi tháng',
        type: 'Gửi theo lịch',
        total: 1000,
        sent: 1000,
        read: 950,
        clicked: 900,
        interacted: 500
      }]
      commit(RECEIVE_ALL_CAMPAIGNS, { campaigns: dummyCampaigns })
    })
  }
}

const mutations = {
  [RECEIVE_ALL_CAMPAIGNS] (state, { campaigns }) {
    state.campaigns = campaigns
  },
  [START_LOADING_CAMPAIGNS] (state) {
    state.loading = true
  },
  [FINISH_LOADING_CAMPAIGNS] (state) {
    state.loading = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
