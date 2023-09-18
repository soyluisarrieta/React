import { useMemo, useState } from 'react'
import UsersList from './components/UsersList'

import './App.css'
import { useUsers } from './hooks/useUsers'

function App () {
  const [showColors, setShowColors] = useState(false)
  const [sortByCountry, setSortByCountry] = useState(false)
  const [filterCountry, setFilterCountry] = useState(null)

  const {
    isLoading,
    isError,
    users,
    refetch,
    fetchNextPage,
    hasNextPage
  } = useUsers()

  const toggleShowColors = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    setSortByCountry(prevState => !prevState)
  }

  const handleDelete = (email) => {
    // const filteredUsers = users.filter((user) => user.email !== email)
    // setUsers(filteredUsers)
  }

  const handleReset = async () => {
    await refetch()
  }

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

        {isLoading && <strong>Cargando...</strong>}
        {isError && <p>Ha habido un error</p>}
        {!isLoading && !isError && users.length === 0 && <p>No hay usuarios</p>}

        {!isLoading && !isError && hasNextPage === true && (
          <button onClick={() => { fetchNextPage() }}>
            Cargar más resultados
          </button>
        )}

        {!isLoading && !isError && hasNextPage === false && <p>No hay más resultados</p>}
      </main>
    </>
  )
}

export default App
