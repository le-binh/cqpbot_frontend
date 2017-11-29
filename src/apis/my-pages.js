import axiosClient from './axios-client'
import { MY_PAGES_ENDPOINT } from './endpoints'
import store from '../store'

export const getMyPages = async () => {
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
