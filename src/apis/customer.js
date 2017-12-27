import axiosClient from './axios-client'
import { PAGE_MEMBERS_ENDPOINT } from './endpoints'
import store from '../store'

const getCustomers = async (pageId) => {
  try {
    const response = await axiosClient.get(PAGE_MEMBERS_ENDPOINT, {
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

export default {
  getCustomers
}
