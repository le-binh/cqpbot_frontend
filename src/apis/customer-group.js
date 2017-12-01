import axiosClient from './axios-client'
import { CUSTOMER_GROUPS_ENDPOINT } from './endpoints'
import store from '../store'

export const getCustomerGroups = async () => {
  try {
    const response = await axiosClient.get(CUSTOMER_GROUPS_ENDPOINT, {
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
