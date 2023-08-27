import axiosClient from '../../axios.client'
import useAuth from './useAuth'

function useRefreshToken () {
  const { auth, setAuth } = useAuth()
  const refresh = async () => {
    const response = await axiosClient.post('/auth/refresh', {
      withCredentials: true
    })
    // setAuth(prev => ({ ...prev, accessToken: response.data.access_token }))
    return response.data.access_token
  }
  return refresh
}

export default useRefreshToken
