import Navbar from '../components/Navbar'
import { Navigate, useLocation, Outlet } from 'react-router'
import useAuth from '../hooks/auth/useAuth'

function AdminLayout () {
  const { user } = useAuth()
  const location = useLocation()

  return !user
    ? (<Navigate to='/login' state={{ from: location }} replace />)
    : (
      <>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </>
      )
}

export default AdminLayout
