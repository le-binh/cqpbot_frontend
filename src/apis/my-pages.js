import axiosClient from './axios-client'
import { MY_PAGES_ENDPOINT, ACTIVATE_PAGE_ENDPOINT } from './endpoints'
import store from '../store'

const getMyPages = async () => {
  try {
    const response = await axiosClient.get(MY_PAGES_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${store.state.auth.shopToken}`
      }
    })
    const responseData = response.data
    if (responseData.meta.success) {
      return responseData.data
    } else {
      return []
    }
  } catch (e) {
    return []
  }
}

const activatePage = async (pageId) => {
  try {
    const url = ACTIVATE_PAGE_ENDPOINT.replace('pageId', pageId)
    const response = await axiosClient.put(url, {
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

const deactivatePage = async (pageId) => {
  try {
    const url = ACTIVATE_PAGE_ENDPOINT.replace('pageId', pageId)
    const response = await axiosClient.delete(url, {
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
  getMyPages,
  activatePage,
  deactivatePage
}
