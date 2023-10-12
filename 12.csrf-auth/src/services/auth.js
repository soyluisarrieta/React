import axiosClient from '../axios.client'

export const csrfService = () => axiosClient.get('/sanctum/csrf-cookie')

export const profileService = () => {
  // TODO: Desestructurar los datos del usuario para definir la respuesta
  return axiosClient.get('/api/user')
}

export const loginService = ({ email, password }) => {
  const payload = { email, password }
  return axiosClient.post('/login', payload)
}

export const registerService = (userData) => {
  return axiosClient.post('/register', payload)
}

export const logoutService = async () => await axiosClient.post('/logout')
