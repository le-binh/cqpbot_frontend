import axiosClient from './axios-client'
import { CAMPAIGNS_ENDPOINT } from './endpoints'
import store from '../store'

export const getCampaigns = async () => {
  try {
    const response = await axiosClient.get(CAMPAIGNS_ENDPOINT, {
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
