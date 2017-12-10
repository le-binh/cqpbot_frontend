import axiosClient from './axios-client'
import { FB_LOGIN_ENDPOINT } from './endpoints'

export const sendCredentials = async (token, userID) => {
  try {
    console.log(token)
    console.log(userID)
    const response = await axiosClient.post(FB_LOGIN_ENDPOINT, {
      token: token,
      fbAppId: userID
    })
    const responseData = response.data
    if (responseData.meta.success) {
      console.log(responseData.data.token)
      return responseData.data.token
    }
  } catch (e) {}
}
