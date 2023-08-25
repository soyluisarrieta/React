import { createBrowserRouter } from 'react-router-dom'

import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'
import NotFound from '../pages/errors/NotFound'

const router = createBrowserRouter([
  PrivateRoutes,
  PublicRoutes,
  {
    path: '*',
    element: <NotFound />
  }
])

export default router
