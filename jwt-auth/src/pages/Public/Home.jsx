import { Link } from 'react-router-dom'

function Home () {
  return (
    <>
      <Link to='/login'>Login </Link>
      or
      <Link to='/signup'>Sign up </Link>
    </>
  )
}

export default Home
