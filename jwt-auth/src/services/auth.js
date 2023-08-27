import axiosClient from '../axios.client'

export const logout = async (token) => {
  const response = await axiosClient.post('/auth/logout', { access_token: token }, {
    withCredentials: true
  })
  console.log({ logout: response })
  return true
}
