import { Navigate, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import useAuth from '../hooks/auth/useAuth'

function PublicLayout () {
  const { user, sessionVerified } = useAuth()

  return (
    <>
      <Navbar />
      <main>
        {sessionVerified && !user
          ? (<h1>Authenticating...</h1>)
          : (!user ? <Outlet /> : <Navigate to='/' />)}
      </main>
    </>
  )
}

export default PublicLayout
