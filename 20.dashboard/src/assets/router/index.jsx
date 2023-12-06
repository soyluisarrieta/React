import { createBrowserRouter } from 'react-router-dom'

import GuestRoute from '@assets/router/GuestRoute'
import PrivateRoute from '@assets/router/PrivateRoute'
import PublicRoute from '@assets/router/PublicRoute'

import NotFoundPage from '@components/pages/errors/NotFoundPage'

export const routes = createBrowserRouter([
  PrivateRoute,
  GuestRoute,
  PublicRoute,
  { path: '*', element: <NotFoundPage /> }
])
