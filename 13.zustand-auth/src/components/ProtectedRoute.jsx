import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute ({ isAllowed, children }) {
  if (!isAllowed) return <Navigate to='/login' />
  return children || <Outlet />
}

export default ProtectedRoute
