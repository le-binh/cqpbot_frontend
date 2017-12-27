import axiosClient from './axios-client'
import store from '../store'
import {
  PAGE_PRODUCTS_ENDPOINT, PRODUCTS_ENDPOINT, PRODUCT_PHOTO_ENDPOINT, PRODUCT_DETAIL_ENDPOINT
} from './endpoints'
import common from './common'

const getNewArrivals = async (pageId) => {
  try {
    const response = await axiosClient.get(
      PAGE_PRODUCTS_ENDPOINT,
      {
        headers: {
          Authorization: `Bearer ${store.state.auth.shopToken}`
        },
        params: {
          type: 'newArrival',
          pageId
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

const deleteNewArrival = async (id) => {
  try {
    const url = PRODUCT_DETAIL_ENDPOINT.replace('id', id)
    const response = await axiosClient.delete(url,
      {
        headers: {
          Authorization: `Bearer ${store.state.auth.shopToken}`
        }
      }
    )
    const responseData = response.data
    if (responseData.meta.success) {
      return true
    }
    return false
  } catch (e) {
    return false
  }
}

const updateNewArrivalPhoto = async (id, file) => {
  const url = PRODUCT_PHOTO_ENDPOINT.replace('id', id)
  const response = await common.uploadFile(url, file)
  return response
}

export default {
  getNewArrivals,
  createNewArrival,
  updateNewArrivalPhoto,
  deleteNewArrival
}
