import axiosClient from './axios-client'
import {
  PAGE_MESSAGES_ENDPOINT, MESSAGE_ENDPOINT, MESSAGE_PHOTO_ENDPOINT, SEND_MESSAGE_ENDPOINT
} from './endpoints'
import store from '../store'
import common from './common'

const getPageMessages = async (pageId) => {
  try {
    const response = await axiosClient.get(PAGE_MESSAGES_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${store.state.auth.shopToken}`
      },
      params: { pageId }
    })
    const responseData = response.data
    if (responseData.meta.success) {
      return responseData.data.data
    } else {
      return []
    }
  } catch (e) {
    return []
  }
}

const createMessage = async (params) => {
  try {
    const response = await axiosClient.post(MESSAGE_ENDPOINT, params, {
      headers: {
        Authorization: `Bearer ${store.state.auth.shopToken}`
      }
    })
    const responseData = response.data
    if (responseData.meta.success) {
      return responseData.data._id
    } else {
      return undefined
    }
  } catch (e) {
    return undefined
  }
}

const updateMessagePhoto = async (id, file) => {
  const url = MESSAGE_PHOTO_ENDPOINT.replace('id', id)
  const response = await common.uploadFile(url, file)
  return response
}

const sendMessage = async (id) => {
  try {
    const url = SEND_MESSAGE_ENDPOINT.replace('id', id)
    const response = await axiosClient.put(url, {}, {
      headers: {
        Authorization: `Bearer ${store.state.auth.shopToken}`
      }
    })
    const responseData = response.data
    if (responseData.meta.success) {
      return true
    } else {
      return false
    }
  } catch (e) {
    return false
  }
}

export default {
  getPageMessages,
  createMessage,
  updateMessagePhoto,
  sendMessage
}
