import axiosClient from './axios-client'
import { FB_LOGIN_ENDPOINT } from './endpoints'

export const sendCredentials = async (token, userID) => {
  try {
    const response = await axiosClient.post(FB_LOGIN_ENDPOINT, {
      token: token,
      fbAppId: userID
    })
    const responseData = response.data
    console.log(responseData.data)
    if (responseData.meta.success) {
      return responseData.data.token
    }
  } catch (e) {}
}
