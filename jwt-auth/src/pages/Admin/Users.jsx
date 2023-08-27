import { useEffect, useState } from 'react'
import usersMock from '../../services/mocks/users.json'
import TableUsers from '../../components/user/TableUsers'

function Users () {
  const [users, setUsers] = useState(usersMock)

  useEffect(() => {
    if (!usersMock) { return null }
    setUsers(usersMock)
  }, [])
  return (
    <section className='container mx-auto py-5'>
      <h1 className='font-semibold text-2xl mb-3'>Users</h1>
      <TableUsers users={users} />
    </section>
  )
}

export default Users
