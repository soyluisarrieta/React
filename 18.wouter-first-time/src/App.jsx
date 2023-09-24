import { useEffect } from 'react'
import { Link, Route, Switch, useLocation, useRoute } from 'wouter'

function InboxPage () {
  return (
    <>
      <h1>Im imbox</h1>
      <Link href='..'>Back</Link>
    </>
  )
}

function App () {
  // Obtener ruta completa
  const [location, navigate] = useLocation()

  useEffect(() => {
    if (location === '/about') {
      navigate('/inbox')
    }
  }, [location])

  // Verificar si coincide con la ruta
  const [match, params] = useRoute('/users/:id')
  console.log('useRoute:', { match, params })

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
      <Switch>
        <Route path='/about'>About Us</Route>
        <Route path='/users/:userid'>{(params) => <div>Hello, {params.userid}!</div>}</Route>
        <Route path='/inbox' component={InboxPage} />
        <Route><h1>404 - not found (x-x)</h1></Route>
      </Switch>
    </div>
  )
}

export default App
