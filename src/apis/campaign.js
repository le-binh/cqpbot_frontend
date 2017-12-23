import axiosClient from './axios-client'
import { PAGE_MESSAGES_ENDPOINT, MESSAGE_ENDPOINT, MESSAGE_PHOTO_ENDPOINT } from './endpoints'
import store from '../store'
import common from './common'

const getPageMessages = async (pageId) => {
  try {
    const url = PAGE_MESSAGES_ENDPOINT.replace('pageId', pageId)
    const response = await axiosClient.get(url, {
      headers: {
        Authorization: `Bearer ${store.state.auth.shopToken}`
      }
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

export default {
  getPageMessages,
  createMessage,
  updateMessagePhoto
}
