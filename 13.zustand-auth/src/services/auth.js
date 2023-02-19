import axiosApi from '../lib/axios.js'

export const csrf = async () => axiosApi.get('/sanctum/csrf-cookie')

export const loginRequest = async ({ email, password }) => {
  await csrf()
  const payload = { email, password }
  return axiosApi.post('/login', payload)
}
