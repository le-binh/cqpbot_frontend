import axiosClient from './axios-client'
import { PAGE_MEMBERS_ENDPOINT } from './endpoints'
import store from '../store'

export const getCustomers = async (pageId) => {
  try {
    const url = PAGE_MEMBERS_ENDPOINT.replace('pageId', pageId)
    const response = await axiosClient.get(url, {
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
