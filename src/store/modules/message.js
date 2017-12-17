import { FINISH_CREATING_MESSAGE, START_CREATING_MESSAGE, UPDATE_CREATED_MESSAGE_ID } from '../mutation-types'

import campaignApi from '../../apis/campaign'

const constructMessageButtonsData = buttons => {
  return buttons.map(({ title, link }) => ({ text: title, target: link }))
}

const state = {
  loading: true,
  id: undefined
}

const actions = {
  async createNewBasicMessage ({ commit }, { pageId, message, groups, buttons }) {
    commit(START_CREATING_MESSAGE)
    const requestData = {
      pageId,
      title: message,
      target: { groups: groups },
      buttons: constructMessageButtonsData((buttons))
    }
    const messageId = await campaignApi.createMessage(requestData)
    commit(UPDATE_CREATED_MESSAGE_ID, { id: messageId })
    commit(FINISH_CREATING_MESSAGE)
    return messageId !== undefined
  },
  async createNewAdvancedMessage ({ commit }, { pageId, title, subTitle, groups, buttons }) {
    commit(START_CREATING_MESSAGE)
    const requestData = {
      pageId,
      title,
      subTitle,
      target: { groups },
      buttons: constructMessageButtonsData(buttons)
    }
    const messageId = await campaignApi.createMessage(requestData)
    commit(UPDATE_CREATED_MESSAGE_ID, { id: messageId })
    commit(FINISH_CREATING_MESSAGE)
    return messageId !== undefined
  },
  updateCreatedMessageId ({ commit }, id) {
    commit(UPDATE_CREATED_MESSAGE_ID, { id })
  }
}

const mutations = {
  [START_CREATING_MESSAGE] (state) {
    state.loading = true
  },
  [FINISH_CREATING_MESSAGE] (state) {
    state.loading = false
  },
  [UPDATE_CREATED_MESSAGE_ID] (state, { id }) {
    state.id = id
  }
}

export default {
  state,
  actions,
  mutations
}
