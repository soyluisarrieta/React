import { useEffect, useState } from 'react'
import UsersList from './components/UsersList'

function App () {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(async res => await res.json())
      .then(res => {
        setUsers(res.results)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <h1>Usuarios</h1>
      <UsersList users={users} />
    </>
  )
}

export default App
