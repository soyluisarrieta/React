import GuestLayout from '@components/layouts/GuestLayout'
import LoginPage from '@components/pages/auth/LoginPage'
import RegisterPage from '@components/pages/auth/RegisterPage'
import HomePage from '@components/pages/public/HomePage'

const layout = { element: <GuestLayout /> }
const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/ingresar', element: <LoginPage /> },
  { path: '/registrarse', element: <RegisterPage /> }
]

export default { ...layout, children: routes }
