import axiosClient from './axios-client'
import store from '../store'

const uploadFile = async (url, file) => {
  try {
    const formData = new FormData()
    formData.append('file', file)
    const response = await axiosClient.put(url, formData, {
      headers: {
        Authorization: `Bearer ${store.state.auth.shopToken}`,
        'Content-Type': 'multipart/form-data'
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

export default {
  uploadFile
}
