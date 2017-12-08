import axiosClient from './axios-client'
import { PAGE_MESSAGES_ENDPOINT } from './endpoints'
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

export default {
  getPageMessages
}
