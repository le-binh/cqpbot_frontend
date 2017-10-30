import axios from 'axios'

const axiosConfig = {
  baseURL: 'https://dm-autobot.herokuapp.com',
  timeout: 1000
}

export default axios.create(axiosConfig)
