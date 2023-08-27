import { createBrowserRouter } from 'react-router-dom'

import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'
import NotFound from '../pages/errors/NotFound'

const router = createBrowserRouter([
  PublicRoutes,
  PrivateRoutes,
  {
    path: '*',
    element: <NotFound />
  }
])

export default router
