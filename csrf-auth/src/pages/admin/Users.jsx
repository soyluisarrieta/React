import { useEffect, useState } from 'react'
import usersMock from '../../services/mocks/users.json'
import UsersTable from '../../components/user/UsersTable'

function Users () {
  const [users, setUsers] = useState(usersMock)

  useEffect(() => {
    if (!usersMock) { return null }
    setUsers(usersMock)
  }, [])
  return (
    <section className='container mx-auto py-5'>
      <h1 className='font-semibold text-2xl mb-3'>Users</h1>
      <UsersTable users={users} />
    </section>
  )
}

export default Users
