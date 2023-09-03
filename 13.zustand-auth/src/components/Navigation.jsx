import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/auth'

function Navigation () {
  const isAuth = useAuthStore(state => state.isAuth)
  const logout = useAuthStore(state => state.logout)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }
  return (
    <nav className='w-full bg-slate-800/40 shadow-md shadow-slate-950 relative'>
      <ul className='w-full flex gap-x-7 justify-center p-4 text-slate-400 font-medium'>
        <li>
          <Link className='hover:text-orange-600' to='/'>Home</Link>
        </li>
        {!isAuth
          ? (
            <>
              <li>
                <Link className='hover:text-orange-600' to='/login'>Login</Link>
              </li>
              <li>
                <Link className='hover:text-orange-600' to='/register'>Register</Link>
              </li>
            </>
            )
          : (
            <>
              <li>
                <Link className='hover:text-orange-600' to='/profile'>Profile</Link>
              </li>
              <li>
                <Link className='hover:text-orange-600' onClick={handleLogout}>Logout</Link>
              </li>
            </>
            )}
      </ul>
    </nav>
  )
}

export default Navigation
