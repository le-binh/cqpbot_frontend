import axiosClient from './axios-client'
import store from '../store'
import { QUESTIONS_ENDPOINT, CONFUSING_QUESTIONS_ENDPOINT, QUESTION_ENDPOINT } from './endpoints'
import myPagesApi from './my-pages'

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

const updateQuestion = async (id, question, answers) => {
  try {
    const url = QUESTION_ENDPOINT.replace('id', id)
    const requestData = { question, answers, correct: true }
    const response = await axiosClient.put(url, requestData,
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

const getInboxes = async ({ pageId, page }) => {
  try {
    const response = await axiosClient.get(
      QUESTIONS_ENDPOINT,
      {
        headers: {
          Authorization: `Bearer ${store.state.auth.shopToken}`
        },
        params: {
          type: 'guess',
          page,
          pageId
        }
      }
    )
    const responseData = response.data
    if (responseData.meta.success) {
      return { isEnd: responseData.data.isEnd, inboxes: responseData.data.data }
    }
  } catch (e) {}
}

const getNotUnderstandQuestions = async (pageId) => {
  const pages = await myPagesApi.getMyPages()
  const page = pages.find(page => page._id === pageId)
  return page.notUnderstandQuestions
}

const getConfusingQuestions = async ({ pageId, page }) => {
  try {
    const response = await axiosClient.get(
      CONFUSING_QUESTIONS_ENDPOINT,
      {
        headers: {
          Authorization: `Bearer ${store.state.auth.shopToken}`
        },
        params: {
          page,
          pageId
        }
      }
    )
    const responseData = response.data
    if (responseData.meta.success) {
      return { isEnd: responseData.data.isEnd, questions: responseData.data.data }
    }
  } catch (e) {}
}

export default {
  createNewInbox,
  getInboxes,
  createNotUnderstandQuestion,
  getNotUnderstandQuestions,
  getConfusingQuestions,
  updateQuestion
}
