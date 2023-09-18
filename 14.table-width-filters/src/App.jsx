import { useEffect, useMemo, useRef, useState } from 'react'
import UsersList from './components/UsersList'

import './App.css'

const fetchUsers = async (page, quantityResults) => {
  return await fetch('http://localhost:3001/users')
    .then(async res => {
      if (!res.ok) { throw new Error('Error en la petición') }
      return await res.json()
    })
    .then(res => {
      // 🔹 Como estoy usando una API local sumularé la paginación
      // ---
      const startIndex = (page - 1) * quantityResults
      const endIndex = startIndex + quantityResults
      const usersPaginated = res.results.slice(startIndex, endIndex)
      // ---
      console.log({ usersPaginated })
      return usersPaginated
    })
}

function App () {
  const [users, setUsers] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [quantityResults, setQuantityResults] = useState(3)
  const [showColors, setShowColors] = useState(false)
  const [sortByCountry, setSortByCountry] = useState(false)
  const [filterCountry, setFilterCountry] = useState(null)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

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
    setLoading(true)
    setError(false)

    fetchUsers(currentPage, quantityResults)
      .then(users => {
        setUsers((prevUsers) => {
          const newUsers = prevUsers.concat(users)
          originalUsers.current = newUsers
          return newUsers
        })
      })
      .catch(err => {
        setError(err)
        console.error(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [currentPage, quantityResults])

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
  }, [users, filteredUsers, sortByCountry])

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
      <main>
        {users.length > 0 && (
          <UsersList deleteUser={handleDelete} showColors={showColors} users={sortedUsers} />
        )}

        {loading && <strong>Cargando...</strong>}
        {error && <p>Ha habido un error</p>}
        {!error && users.length === 0 && <p>No hay usuarios</p>}

        {!loading && !error && (
          <button onClick={() => setCurrentPage(currentPage + 1)}>
            Cargar más resultados
          </button>
        )}
      </main>
    </>
  )
}

export default App
