import { useEffect, useState } from 'react'
import UsersList from './components/UsersList'

import './App.css'

function App () {
  const [users, setUsers] = useState([])
  const [showColors, setShowColors] = useState(false)

  const toggleShowColors = () => {
    setShowColors(!showColors)
  }

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
      <header>
        <button onClick={toggleShowColors}>Mostrar colores</button>
      </header>
      <UsersList showColors={showColors} users={users} />
    </>
  )
}

export default App
