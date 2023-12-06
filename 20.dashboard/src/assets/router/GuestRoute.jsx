import GuestLayout from '@components/layouts/GuestLayout'
import AuthPage from '@components/pages/auth/AuthPage'

const layout = { path: '/', element: <GuestLayout /> }
const routes = [
  { path: '/ingresar', element: <AuthPage /> },
  { path: '/registrarse', element: <AuthPage /> }
]

export default { ...layout, children: routes }
