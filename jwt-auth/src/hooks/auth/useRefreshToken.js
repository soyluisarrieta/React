import axiosClient from '../../axios.client'
import useAuth from './useAuth'

function useRefreshToken () {
  const { auth, setAuth } = useAuth()
  const refresh = async () => {
    const response = await axiosClient.post('/auth/refresh', null, {
      headers: {
        Authorization: `Bearer ${auth?.accessToken}`
      },
      withCredentials: true
    })

    setAuth(prev => ({ ...prev, accessToken: response.data.data.authorization.access_token }))
    return response.data.data.authorization.access_token
  }
  return refresh
}

export default useRefreshToken
