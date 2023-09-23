import { Link, Route } from 'wouter'

function InboxPage () {
  return (
    <>
      <h1>Im imbox</h1>
      <Link href='..'>Back</Link>
    </>
  )
}

function App () {
  return (
    <div>
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
      </header>

      <Route path='/about'>About Us</Route>
      <Route path='/users/:name'>{(params) => <div>Hello, {params.name}!</div>}</Route>
      <Route path='/inbox' component={InboxPage} />
    </div>
  )
}

export default App
