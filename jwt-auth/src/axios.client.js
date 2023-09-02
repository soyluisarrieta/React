import axios from 'axios'

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}`

const axiosClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
})

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
})

export default axiosClient
