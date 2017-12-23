import axiosClient from './axios-client'
import store from '../store'
import { PAGE_PRODUCTS_ENDPOINT, PRODUCTS_ENDPOINT } from './endpoints'

const getNewArrivals = async (pageId) => {
  try {
    const url = PAGE_PRODUCTS_ENDPOINT.replace('pageId', pageId)
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

const createNewArrival = async (params) => {
  try {
    const response = await axiosClient.post(PRODUCTS_ENDPOINT, params,
      {
        headers: {
          Authorization: `Bearer ${store.state.auth.shopToken}`
        }
      }
    )
    const responseData = response.data
    if (responseData.meta.success) {
      return responseData.data
    }
  } catch (e) {}
}

export default {
  getNewArrivals,
  createNewArrival
}
