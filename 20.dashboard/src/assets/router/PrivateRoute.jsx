import AdminLayout from '@components/layouts/AdminLayout'
import DashboardPage from '@components/pages/admin/DashboardPage'

const layout = { path: '/', element: <AdminLayout /> }
const routes = [
  { path: '/', element: <DashboardPage /> },
  { path: '/inicio', element: <DashboardPage /> }
]

export default { ...layout, children: routes }
