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
  const [location, setLocation] = useLocation()

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

        <button onClick={() => setLocation('/inbox')}>Inbox</button>
      </header>

      {/* Routes */}
      <Route path='/about'>About Us</Route>
      <Route path='/users/:name'>{(params) => <div>Hello, {params.name}!</div>}</Route>
      <Route path='/inbox' component={InboxPage} />

    </div>
  )
}

export default App
