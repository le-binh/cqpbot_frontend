import axiosClient from './axios-client'
import store from '../store'
import { QUESTIONS_ENDPOINT } from './endpoints'
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

const getInboxes = async ({ page }) => {
  try {
    const response = await axiosClient.get(
      QUESTIONS_ENDPOINT,
      {
        headers: {
          Authorization: `Bearer ${store.state.auth.shopToken}`
        },
        params: {
          type: 'guess',
          page
        }
      }
    )
    const responseData = response.data
    if (responseData.meta.success) {
      return { isEnd: response.data.isEnd, inboxes: responseData.data.data }
    }
  } catch (e) {}
}

const getNotUnderstandQuestions = async (pageId) => {
  const pages = await myPagesApi.getMyPages()
  const page = pages.find(page => page._id === pageId)
  return page.notUnderstandQuestions
}

export default {
  createNewInbox,
  getInboxes,
  createNotUnderstandQuestion,
  getNotUnderstandQuestions
}
