import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute ({ isAllowed, children, redirectTo = '/login' }) {
  if (!isAllowed) return <Navigate to={redirectTo} />
  return children || <Outlet />
}

export default ProtectedRoute
