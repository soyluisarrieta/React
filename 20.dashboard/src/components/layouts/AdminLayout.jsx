import MasterLayout from '@components/layouts/MasterLayout'
import AuthLoading from '@components/pages/auth/AuthLoading'
import { useAuth, useCheckAuth } from '@hooks/modules/auth'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

function AdminLayout () {
  const { sessionVerified } = useCheckAuth()
  const { profile } = useAuth()
  const location = useLocation()

  // Checking authentication
  if (profile && !sessionVerified) {
    return (<AuthLoading />)
  }

  // User not authenticated
  if (!profile || !sessionVerified) {
    return (<Navigate to='/ingresar' state={{ from: location }} replace />)
  }

  return (
    <MasterLayout>
      <Outlet />
    </MasterLayout>
  )
}

export default AdminLayout
