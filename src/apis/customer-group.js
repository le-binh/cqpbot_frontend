import axiosClient from './axios-client'
import { CUSTOMER_GROUPS_ENDPOINT } from './endpoints'
import store from '../store'

const getCustomerGroups = async (pageId) => {
  try {
    const url = CUSTOMER_GROUPS_ENDPOINT.replace('pageId', pageId)
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
  getCustomerGroups
}
