import axios from 'axios'

const baseURL = 'http://localhost:8000'

const authApi = axios.create({
  baseURL,
  withCredentials: true
})

export default authApi
