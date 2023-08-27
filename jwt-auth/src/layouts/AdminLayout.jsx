import Navbar from '../components/Navbar'
import { Navigate, useLocation, Outlet } from 'react-router'
import useAuth from '../hooks/auth/useAuth'

function AdminLayout () {
  const { auth } = useAuth()
  const location = useLocation()

  if (!auth?.user) {
    return <Navigate to='/login' state={{ from: location }} replace />
  }

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default AdminLayout
