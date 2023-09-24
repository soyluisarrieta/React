import { useEffect } from 'react'
import { Link, Route, useLocation } from 'wouter'

function InboxPage () {
  return (
    <>
      <h1>Im imbox</h1>
      <Link href='..'>Back</Link>
    </>
  )
}

function App () {
  const [location, navigate] = useLocation()

  useEffect(() => {
    console.log(location)
    if (location === '/about') {
      navigate('/inbox')
    }
  }, [location])

  return (
    <div>
      {/* Current route */}
      {location}

      {/* Navigation */}
      <header>
        <Link href='/users/1'>
          <a className='link'>Profile</a>
        </Link>
        <Link href='/about'>
          <a className='link'>About</a>
        </Link>
        <Link href='/inbox'>
          <a className='link'>Inbox</a>
        </Link>

        <button onClick={() => navigate('/inbox')}>Inbox</button>
      </header>

      {/* Routes */}
      <Route path='/about'>About Us</Route>
      <Route path='/users/:userid'>{(params) => <div>Hello, {params.userid}!</div>}</Route>
      <Route path='/inbox' component={InboxPage} />

    </div>
  )
}

export default App
