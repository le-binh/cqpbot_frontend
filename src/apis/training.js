import axiosClient from './axios-client'
import store from '../store'
import { QUESTIONS_ENDPOINT } from './endpoints'

const createNewInbox = async (pageId, question, answers) => {
  try {
    const response = await axiosClient.post(
      QUESTIONS_ENDPOINT,
      {pageId, question, answers},
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

const getInboxes = async () => {
  try {
    const response = await axiosClient.get(
      QUESTIONS_ENDPOINT,
      {
        headers: {
          Authorization: `Bearer ${store.state.auth.shopToken}`
        },
        params: {
          type: 'guess'
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
  createNewInbox,
  getInboxes
}
