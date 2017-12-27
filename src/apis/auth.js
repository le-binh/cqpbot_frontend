import axiosClient from './axios-client'
import { FB_LOGIN_ENDPOINT } from './endpoints'

export const sendCredentials = async (token, userID) => {
  try {
    const response = await axiosClient.post(FB_LOGIN_ENDPOINT, {
      token: token,
      fbAppId: userID
    })
    const responseData = response.data
    if (responseData.meta.success) {
      const { token, _id, avatar } = responseData.data
      return {
        userInfo: {
          id: _id,
          avatar
        },
        token
      }
    }
  } catch (e) {}
}
