import axiosApi from '../lib/axios.js'

export const csrf = async () => axiosApi.get('/sanctum/csrf-cookie')

export const profileRequest = async () => await axiosApi.get('/api/user')

export const loginRequest = async ({ email, password }) => {
  const payload = { email, password }
  await axiosApi.post('/login', payload)
}
