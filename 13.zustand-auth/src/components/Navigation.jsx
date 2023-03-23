import { Link } from 'react-router-dom'

function Navigation () {
  return (
    <nav className='w-full bg-slate-800 shadow-md shadow-slate-950 relative'>
      <ul className='w-full flex gap-x-7 justify-center p-4 text-slate-400 font-medium'>
        <li>
          <Link className='hover:text-orange-600' to='/'>Home</Link>
        </li>
        <li>
          <Link className='hover:text-orange-600' to='/login'>Login</Link>
        </li>
        <li>
          <Link className='hover:text-orange-600' to='/register'>Register</Link>
        </li>
        <li>
          <Link className='hover:text-orange-600' to='/profile'>Profile</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
