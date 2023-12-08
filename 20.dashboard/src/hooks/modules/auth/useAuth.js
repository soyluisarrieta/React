import { profileService } from '@services'
import { csrfService, loginService, logoutService, registerService } from '@services/authService'
import { useAuthStore, useSessionVerified } from '@store/AuthStore'
import nProgress from 'nprogress'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

export function useAuth () {
  const [isLoading, setIsLoading] = useState(false)

  const { profile, setProfile } = useAuthStore()
  const { setSessionVerified } = useSessionVerified()

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  // Fn: Get user data
  const getProfile = async () => {
    try {
      const userData = await profileService()
      setProfile(userData)
    } catch (error) {
      console.warn(error)
      setProfile(null)
      setSessionVerified(false)
    }
  }

  // Fn: Login
  const login = async (credentials, { setErrors }, welcomeIcon) => {
    setIsLoading(true)
    nProgress.start()
    try {
      await loginService(credentials)
      nProgress.inc(0.4)
      await getProfile()
      navigate(from)
      toast('¡Te doy la más cordial bienvenida!', {
        position: 'top-right',
        duration: 5000,
        icon: welcomeIcon
      })
    } catch (e) {
      if (typeof e === 'object' && e !== null && 'response' in e) {
        console.warn(e.response.data)
        setErrors(e.response.data.errors)
      } else {
        console.error(e)
        toast.error('Se ha producido un error inesperado. Por favor, inténtelo de nuevo más tarde.')
      }
    } finally {
      setIsLoading(false)
      nProgress.done()
    }
  }

  // Fn: Register
  const register = async (userData, { setErrors }, welcomeIcon) => {
    setIsLoading(true)
    nProgress.start()
    try {
      await csrfService()
      await registerService(userData)
      await getProfile()
      toast('¡Te doy la más cordial bienvenida!', {
        position: 'top-right',
        duration: 5000,
        icon: welcomeIcon
      })
    } catch (e) {
      if (typeof e === 'object' && e !== null && 'response' in e) {
        console.warn(e.response.data)
        setErrors(e.response.data.errors)
      } else {
        console.error(e)
        toast.error('Se ha producido un error inesperado. Por favor, inténtelo de nuevo más tarde.')
      }
    } finally {
      setIsLoading(false)
      nProgress.done()
    }
  }

  // Fn: Logout
  const logout = async () => {
    setIsLoading(true)
    nProgress.start()
    try {
      await logoutService()
      setProfile(null)
      setIsLoading(true)
      toast.success('Sesión cerrada correctamente', { position: 'top-right' })
    } catch (e) {
      setIsLoading(false)
      console.warn(e)
    } finally {
      nProgress.done()
    }
  }

  // Response
  return {
    profile,
    isLoading,
    login,
    register,
    logout,
    getProfile
  }
}
