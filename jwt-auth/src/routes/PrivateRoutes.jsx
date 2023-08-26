import AdminLayout from '../layouts/AdminLayout'
import Dashboard from '../pages/admin/Dashboard'

const LAYOUT = { path: '/', element: <AdminLayout /> }
const ROUTES = [
  { path: '/', element: <Dashboard /> },
  { path: '/home', element: <Dashboard /> }
]

export default { ...LAYOUT, children: ROUTES }
