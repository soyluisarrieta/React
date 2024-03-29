import AdminLayout from '../layouts/AdminLayout'
import Dashboard from '../pages/admin/Dashboard'
import Profile from '../pages/admin/Profile'
import Users from '../pages/admin/Users'

const LAYOUT = { path: '/', element: <AdminLayout /> }
const ROUTES = [
  { path: '/', element: <Dashboard /> },
  { path: '/home', element: <Dashboard /> },
  { path: '/profile', element: <Profile /> },
  { path: '/users', element: <Users /> }
]

export default { ...LAYOUT, children: ROUTES }
