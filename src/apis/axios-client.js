import axios from 'axios'

const axiosConfig = {
  baseURL: 'https://dev-api.misena.me',
  timeout: 20000
}

export default axios.create(axiosConfig)
