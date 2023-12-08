import MasterLayout from '@components/layouts/MasterLayout'
import AuthLoading from '@components/pages/auth/AuthLoading'
import { useAuth, useCheckAuth } from '@hooks/modules/auth'
import { Navigate, Outlet } from 'react-router-dom'

function GuestLayout () {
  const { profile } = useAuth()
  const { sessionVerified } = useCheckAuth()

  // Checking authentication
  if (profile && !sessionVerified) {
    return (<AuthLoading />)
  }

  // User authenticated
  if (profile && sessionVerified) {
    return (<Navigate to='/' />)
  }
  return (
    <MasterLayout>
      <Outlet />
    </MasterLayout>
  )
}

export default GuestLayout
