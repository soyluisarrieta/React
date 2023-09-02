import { Link } from 'react-router-dom'

function Home () {
  return (
    <>
      <Link to='/login'>Login</Link>
      {' '} or {' '}
      <Link to='/register'>Register</Link>
    </>
  )
}

export default Home
