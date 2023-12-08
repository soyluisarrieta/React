import { useAuth } from '@hooks/modules/auth/useAuth'
import { useSessionVerified } from '@store/AuthStore'
import nProgress from 'nprogress'
import { useEffect } from 'react'

// Hook to check authentication
export function useCheckAuth () {
  const { getProfile } = useAuth()
  const { sessionVerified, setSessionVerified } = useSessionVerified()

  const checkAuthentication = async () => {
    nProgress.start()
    try {
      await getProfile()
    } catch (e) {
      console.warn(e)
    } finally {
      setSessionVerified(true)
      nProgress.done()
    }
  }

  useEffect(() => {
    !sessionVerified && checkAuthentication()
  }, [])

  return { sessionVerified }
}
