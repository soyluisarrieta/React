import axios from 'axios'

import { API_ENDPOINT } from '../../../constants.js'

export const axiosClient = axios.create({
  baseURL: API_ENDPOINT
})

export const axiosPrivate = axios.create({
  baseURL: API_ENDPOINT,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
})
