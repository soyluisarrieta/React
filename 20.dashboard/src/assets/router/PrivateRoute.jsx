import AdminLayout from '@components/layouts/AdminLayout'
import DashboardPage from '@components/pages/admin/DashboardPage'

const layout = { element: <AdminLayout /> }
const routes = [
  { path: '/admin', element: <DashboardPage /> }
]

export default { ...layout, children: routes }
