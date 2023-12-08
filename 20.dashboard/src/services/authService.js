import { axiosPrivate } from '@assets/lib/axios/axiosClient'

export const csrfService = async () => {
  await axiosPrivate.get('/sanctum/csrf-cookie')
}

export const profileService = async () => {
  const response = await axiosPrivate.get('/api/profile')
  return response.data
}

export const logoutService = async () => {
  return await axiosPrivate.post('/logout')
}

export const loginService = async ({ email, password }) => {
  const credentials = { email, password }
  return await axiosPrivate.post('/login', credentials)
}

export const registerService = async (userData) => {
  return await axiosPrivate.post('/register', userData)
}
