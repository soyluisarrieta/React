import { Navigate, Outlet } from 'react-router'

function AdminLayout () {
  const isUserAuthenticated = true
  if (isUserAuthenticated) { return <Navigate to='/login' /> }

  return (
    <Outlet />
  )
}

export default AdminLayout
