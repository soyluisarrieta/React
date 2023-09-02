import { createContext, useEffect, useState } from 'react'
import { csrfService as csrf, loginService, logoutService, profileService, registerService } from '../services/auth'

const AuthContext = createContext({})

function AuthProvider ({ children }) {
  const [user, setUser] = useState(null)
  const [errors, setErrors] = useState(null)
  const [loading, setLoading] = useState(false)

  const sessionData = window.localStorage.getItem('sessionVerified')
  const initialSessionVerified = sessionData ? JSON.parse(sessionData) : null
  const [sessionVerified, setSessionVerified] = useState(initialSessionVerified)

  const getUser = async () => {
    const { data } = await profileService()
    setUser(data)
    setSessionVerified(true)
    window.localStorage.setItem('sessionVerified', 'true')
  }

  const login = async ({ ...credentials }) => {
    setErrors(null)
    setLoading(true)
    try {
      await csrf()
      await loginService(credentials)
      await getUser()
    } catch (e) {
      if (typeof e === 'object' && e !== null && 'response' in e) {
        console.warn(e.response.data)
        setErrors(e.response.data.errors)
      } else {
        console.error(e)
      }
    } finally {
      setTimeout(() => setLoading(false), 500)
    }
  }

  const register = async ({ ...user }) => {
    setErrors(null)
    setLoading(true)
    try {
      await csrf()
      await registerService(user)
      await getUser()
    } catch (e) {
      if (typeof e === 'object' && e !== null && 'response' in e) {
        console.warn(e.response.data)
        setErrors(e.response.data.errors)
      } else {
        console.error(e)
      }
    } finally {
      setTimeout(() => setLoading(false), 500)
    }
  }

  const logout = async () => {
    setLoading(true)
    window.localStorage.setItem('sessionVerified', 'false')
    try {
      await logoutService()
      setUser(null)
    } catch (err) {
      console.error(err)
    } finally {
      setSessionVerified(false)
      setLoading(false)
    }
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await getUser()
      } catch (e) {
        console.warn(e)
        window.localStorage.setItem('sessionVerified', 'false')
      } finally {
        setSessionVerified(false)
      }
    }

    if (!user && (initialSessionVerified === null || initialSessionVerified)) {
      fetchUser()
    }
  }, [])

  const value = {
    // States
    user,
    loading,
    errors,
    sessionVerified,

    // Actions
    csrf,
    getUser,
    login,
    register,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }
export default AuthContext
