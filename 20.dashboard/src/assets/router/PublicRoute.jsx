import GuestLayout from '@components/layouts/GuestLayout'
import AuthPage from '@components/pages/auth/AuthPage'
import HomePage from '@components/pages/public/HomePage'

const layout = { element: <GuestLayout /> }
const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/ingresar', element: <AuthPage /> },
  { path: '/registrarse', element: <AuthPage /> }
]

export default { ...layout, children: routes }
