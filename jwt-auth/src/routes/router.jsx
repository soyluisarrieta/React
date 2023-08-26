import { createBrowserRouter } from 'react-router-dom'

import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'
import NotFound from '../pages/errors/NotFound'
import RequireAuth from '../components/Auth/requireAuth'

const router = createBrowserRouter([
  PublicRoutes,
  {
    element: <RequireAuth />,
    children: [PrivateRoutes]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router
