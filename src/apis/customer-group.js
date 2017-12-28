import axiosClient from './axios-client'
import { CUSTOMER_GROUPS_ENDPOINT, PAGE_GROUPS_ENDPOINT, CUSTOMER_GROUPS_OVERVIEW_ENDPOINT } from './endpoints'
import store from '../store'

const getCustomerGroups = async (pageId) => {
  try {
    const response = await axiosClient.get(PAGE_GROUPS_ENDPOINT, {
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

const createCustomerGroup = async (pageId, title, conditions) => {
  try {
    const response = await axiosClient.post(CUSTOMER_GROUPS_ENDPOINT, { pageId, title, conditions }, {
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

const groupOverview = async (pageId, conditions) => {
  try {
    const response = await axiosClient.post(CUSTOMER_GROUPS_OVERVIEW_ENDPOINT, { pageId, conditions }, {
      headers: {
        Authorization: `Bearer ${store.state.auth.shopToken}`
      }
    })
    const responseData = response.data
    if (responseData.meta.success) {
      return responseData.data
    } else {
      return 0
    }
  } catch (e) {
    return 0
  }
}

export default {
  getCustomerGroups,
  createCustomerGroup,
  groupOverview
}
