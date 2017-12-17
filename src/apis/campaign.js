import axiosClient from './axios-client'
import { PAGE_MESSAGES_ENDPOINT, MESSAGE_ENDPOINT, MESSAGE_PHOTO_ENDPOINT } from './endpoints'
import store from '../store'

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
  try {
    const formData = new FormData()
    formData.append('file', file)
    const url = MESSAGE_PHOTO_ENDPOINT.replace('id', id)
    const response = await axiosClient.put(url, formData, {
      headers: {
        Authorization: `Bearer ${store.state.auth.shopToken}`,
        'Content-Type': 'multipart/form-data'
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
  updateMessagePhoto
}
