import { Navigate, Outlet, useLocation } from 'react-router'
import useAuth from '../../hooks/useAuth'

function RequireAuth () {
  const { auth } = useAuth()
  const location = useLocation()

  return (
    auth?.user
      ? <Outlet />
      : <Navigate to='/login' state={{ from: location }} replace />
  )
}

export default RequireAuth
