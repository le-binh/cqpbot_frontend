import axiosClient from './axios-client'
import store from '../store'
import { PRODUCTS_ENDPOINT } from './endpoints'

const getNewArrivals = async (pageId) => {
  try {
    const url = PRODUCTS_ENDPOINT.replace('pageId', pageId)
    const response = await axiosClient.get(
      url,
      {
        headers: {
          Authorization: `Bearer ${store.state.auth.shopToken}`
        },
        params: {
          type: 'newArrival'
        }
      }
    )
    const responseData = response.data
    if (responseData.meta.success) {
      return responseData.data.data
    }
    return []
  } catch (e) {
    return []
  }
}

export default {
  getNewArrivals
}
