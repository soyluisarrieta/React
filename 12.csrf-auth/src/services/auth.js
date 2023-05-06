import axiosClient from '../axios.client'

export const csrfService = async () => await axiosClient.get('/sanctum/csrf-cookie')

export const profileService = async () => {
  // TODO: Desestructurar los datos del usuario para definir la respuesta
  return await axiosClient.get('/api/user')
}

export const loginService = async ({ email, password }) => {
  const payload = { email, password }
  return await axiosClient.post('/login', payload)
}

export const registerService = async ({ name, lastname, email, password, passwordConfirmation }) => {
  const payload = {
    name,
    lastname,
    email,
    password,
    password_confirmation: passwordConfirmation
  }
  return await axiosClient.post('/register', payload)
}

export const logoutService = async () => await axiosClient.post('/logout')
