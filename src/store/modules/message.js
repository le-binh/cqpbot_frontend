import {
  UPDATE_SELECTED_GROUPS, UPDATE_MESSAGE, UPDATE_BASIC_BUTTONS, UPDATE_ADVANCED_BUTTONS,
  ADD_NEW_ADVANCED_BUTTON, ADD_NEW_BASIC_BUTTON, DELETE_ADVANCED_BUTTON, DELETE_BASIC_BUTTON,
  FINISH_CREATING_MESSAGE, START_CREATING_MESSAGE, UPDATE_MESSAGE_TITLE, UPDATE_MESSAGE_SUBTITLE,
  UPDATE_CREATED_MESSAGE_ID
} from '../mutation-types'

import campaignApi from '../../apis/campaign'
import uuidv1 from 'uuid/v1'

const initialButton = () => ({ id: uuidv1(), title: '', link: '' })

const constructMessageButtonsData = buttons => {
  return buttons.map(({ title, link }) => ({ text: title, target: link }))
}

const state = {
  loading: true,
  id: undefined,
  groups: [],
  message: '',
  title: '',
  subTitle: '',
  basicButtons: [initialButton()],
  advancedButtons: [initialButton()]
}

const getters = {
  basicButtons: state => state.basicButtons,
  advancedButtons: state => state.advancedButtons
}

const actions = {
  updateSelectedGroups ({ commit }, groups) {
    commit(UPDATE_SELECTED_GROUPS, { groups })
  },
  updateMessage ({ commit }, message) {
    commit(UPDATE_MESSAGE, { message })
  },
  updateMessageTitle ({ commit }, title) {
    commit(UPDATE_MESSAGE_TITLE, { title })
  },
  updateMessageSubTitle ({ commit }, subTitle) {
    commit(UPDATE_MESSAGE_SUBTITLE, { subTitle })
  },
  updateBasicButtons ({ commit }, buttons) {
    commit(UPDATE_BASIC_BUTTONS, { buttons })
  },
  updateAdvancedButtons ({ commit }, buttons) {
    commit(UPDATE_ADVANCED_BUTTONS, { buttons })
  },
  addNewBasicButton ({ commit }) {
    commit(ADD_NEW_BASIC_BUTTON)
  },
  addNewAdvancedButton ({ commit }) {
    commit(ADD_NEW_ADVANCED_BUTTON)
  },
  deleteBasicButton ({ commit }, id) {
    commit(DELETE_BASIC_BUTTON, { id })
  },
  deleteAdvancedButton ({ commit }, id) {
    commit(DELETE_ADVANCED_BUTTON, { id })
  },
  async createNewBasicMessage ({ commit, state }, pageId) {
    commit(START_CREATING_MESSAGE)
    const { message, groups, basicButtons } = state
    const requestData = {
      title: message,
      target: { groups: groups },
      buttons: constructMessageButtonsData((basicButtons))
    }
    const messageId = await campaignApi.createMessage(pageId, requestData)
    if (messageId) {
      commit(UPDATE_CREATED_MESSAGE_ID, { id: messageId })

      commit(UPDATE_MESSAGE, { message: '' })
      commit(UPDATE_BASIC_BUTTONS, { buttons: [initialButton()] })
      commit(UPDATE_SELECTED_GROUPS, { groups: [] })
    }
    commit(FINISH_CREATING_MESSAGE)
    return messageId !== undefined
  },
  async createNewAdvancedMessage ({ commit, state }, pageId) {
    commit(START_CREATING_MESSAGE)
    const { title, subTitle, groups, advancedButtons } = state
    const requestData = {
      title,
      subTitle,
      target: { groups },
      buttons: constructMessageButtonsData(advancedButtons)
    }
    const messageId = await campaignApi.createMessage(pageId, requestData)
    if (messageId) {
      commit(UPDATE_CREATED_MESSAGE_ID, { id: messageId })

      commit(UPDATE_MESSAGE_TITLE, { title: '' })
      commit(UPDATE_MESSAGE_SUBTITLE, { subTitle: '' })
      commit(UPDATE_ADVANCED_BUTTONS, { buttons: [initialButton()] })
      commit(UPDATE_SELECTED_GROUPS, { groups: [] })
    }
    commit(FINISH_CREATING_MESSAGE)
    return messageId !== undefined
  },
  updateCreatedMessageId ({ commit }, id) {
    commit(UPDATE_CREATED_MESSAGE_ID, { id })
  }
}

const mutations = {
  [UPDATE_SELECTED_GROUPS] (state, { groups }) {
    state.groups = groups
  },
  [UPDATE_MESSAGE] (state, { message }) {
    state.message = message
  },
  [UPDATE_MESSAGE_TITLE] (state, { title }) {
    state.title = title
  },
  [UPDATE_MESSAGE_SUBTITLE] (state, { subTitle }) {
    state.subTitle = subTitle
  },
  [UPDATE_BASIC_BUTTONS] (state, { buttons }) {
    state.basicButtons = buttons
  },
  [UPDATE_ADVANCED_BUTTONS] (state, { buttons }) {
    state.advancedButtons = buttons
  },
  [ADD_NEW_BASIC_BUTTON] (state) {
    state.basicButtons = [...state.basicButtons, { id: uuidv1(), title: '', link: '' }]
  },
  [ADD_NEW_ADVANCED_BUTTON] (state) {
    state.advancedButtons = [...state.advancedButtons, { id: uuidv1(), title: '', link: '' }]
  },
  [DELETE_BASIC_BUTTON] (state, { id }) {
    state.basicButtons = state.basicButtons.filter(button => button.id !== id)
  },
  [DELETE_ADVANCED_BUTTON] (state, { id }) {
    state.advancedButtons = state.advancedButtons.filter(button => button.id !== id)
  },
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
  getters,
  actions,
  mutations
}
