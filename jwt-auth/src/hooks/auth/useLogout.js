import axiosClient from '../../axios.client'
import useAuth from './useAuth'

function useLogout () {
  const { auth, setAuth } = useAuth()
  const logout = async () => {
    await axiosClient.post('/auth/logout', null, {
      headers: {
        Authorization: `Bearer ${auth?.accessToken}`
      },
      withCredentials: true
    })
    setAuth({})
  }
  return logout
}

export default useLogout
