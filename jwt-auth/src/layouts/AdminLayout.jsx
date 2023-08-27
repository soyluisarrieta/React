import { Outlet } from 'react-router'
import RequireAuth from '../components/auth/requireAuth'

function AdminLayout () {
  return (
    <RequireAuth>
      <Outlet />
    </RequireAuth>
  )
}

export default AdminLayout
