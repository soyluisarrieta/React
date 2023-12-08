import PrivateRoute from '@assets/router/PrivateRoute'
import PublicRoute from '@assets/router/PublicRoute'
import NotFoundPage from '@components/pages/errors/NotFoundPage'
import { createBrowserRouter } from 'react-router-dom'

export const routes = createBrowserRouter([
  PublicRoute,
  PrivateRoute,
  { path: '*', element: <NotFoundPage /> }
])
