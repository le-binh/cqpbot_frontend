import axios from 'axios'

const axiosConfig = {
  baseURL: 'https://dev-api.misena.me',
  timeout: 20000
}

const axiosClient = axios.create(axiosConfig)
axiosClient.interceptors.request.use(config => {
  console.log(config)
  return config
})

export default axiosClient
