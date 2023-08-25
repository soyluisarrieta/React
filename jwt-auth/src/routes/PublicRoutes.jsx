import PublicLayout from '../layouts/PublicLayout'
import Home from '../pages/public/Home'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'

const LAYOUT = { path: '/', element: <PublicLayout /> }

const ROUTES = [
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> }
]

export default { ...LAYOUT, children: ROUTES }
