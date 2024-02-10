import { useEffect, useState } from 'react'
import { DataTable } from '@/components/ui/data-table'
import { type Users as UsersType, users as userMock } from '@/mocks/users'
import { columns } from '@/users/Columns'

const getData = async (): Promise<UsersType[]> => userMock

export default function Users (): JSX.Element {
  const [users, setUsers] = useState<UsersType[]>([])

  useEffect(() => {
    void (async () => {
      const result = await getData()
      setUsers(result)
    })()
  }, [])

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={users} />
    </div>
  )
}
