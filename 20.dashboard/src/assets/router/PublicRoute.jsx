import PublicLayout from '@components/layouts/PublicLayout'
import HomePage from '@components/pages/public/HomePage'

const layout = { path: '/', element: <PublicLayout /> }
const routes = [
  { path: '/', element: <HomePage /> }
]

export default { ...layout, children: routes }
