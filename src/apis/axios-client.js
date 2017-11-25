import axios from 'axios'

const axiosConfig = {
  baseURL: 'https://dm-autobot.herokuapp.com',
  timeout: 20000
}

export default axios.create(axiosConfig)
