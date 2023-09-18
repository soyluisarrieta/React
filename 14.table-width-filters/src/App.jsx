import { useEffect, useMemo, useRef, useState } from 'react'
import UsersList from './components/UsersList'

import './App.css'

function App () {
  const [users, setUsers] = useState([])
  const [showColors, setShowColors] = useState(false)
  const [sortByCountry, setSortByCountry] = useState(false)
  const [filterCountry, setFilterCountry] = useState(null)

  const originalUsers = useRef([])

  const toggleShowColors = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    setSortByCountry(prevState => !prevState)
  }

  const handleDelete = (email) => {
    const filteredUsers = users.filter((user) => user.email !== email)
    setUsers(filteredUsers)
  }

  const handleReset = () => {
    setUsers(originalUsers.current)
  }

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(async res => await res.json())
      .then(res => {
        setUsers(res.results)
        originalUsers.current = res.results
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  const filteredUsers = useMemo(() => {
    return filterCountry !== null && filterCountry.length > 0
      ? users.filter((user) => {
        return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
      })
      : users
  }, [users, filterCountry])

  const sortedUsers = useMemo(() => {
    return sortByCountry
      ? users.toSorted((a, b) => a.location.country.localeCompare(b.location.country))
      : filteredUsers
  }, [filteredUsers, sortByCountry])

  return (
    <>
      <h1>Usuarios</h1>
      <header>
        <button onClick={handleReset}>Estado inicial</button>
        <button onClick={toggleShowColors}>Mostrar colores</button>
        <button onClick={toggleSortByCountry}>
          {sortByCountry ? 'No ordenar por país' : 'Ordenar por país'}
        </button>
        <input type='search' placeholder='Buscar por país' onChange={({ target }) => setFilterCountry(target.value)} />
      </header>
      <UsersList deleteUser={handleDelete} showColors={showColors} users={sortedUsers} />
    </>
  )
}

export default App
