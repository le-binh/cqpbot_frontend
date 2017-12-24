import axiosClient from './axios-client'
import store from '../store'
import { QUESTIONS_ENDPOINT } from './endpoints'

const createQuestion = async (params) => {
  try {
    const response = await axiosClient.post(QUESTIONS_ENDPOINT, params,
      {
        headers: {
          Authorization: `Bearer ${store.state.auth.shopToken}`
        }
      }
    )
    const responseData = response.data
    if (responseData.meta.success) {
      return responseData.data.question
    }
  } catch (e) {}
}

const createNewInbox = async (pageId, question, answers) => {
  const createdQuestion = await createQuestion({ pageId, question, answers })
  return createdQuestion
}

const createNotUnderstandQuestion = async (pageId, question, answers) => {
  const createdQuestion = await createQuestion({ pageId, question, answers, understand: true })
  return createdQuestion
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
  getInboxes,
  createNotUnderstandQuestion
}
