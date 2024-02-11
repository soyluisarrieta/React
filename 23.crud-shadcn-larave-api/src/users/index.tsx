import { useEffect, useState } from 'react'
import { DataTable } from '@/components/ui/data-table'
import { type Users as UsersType, users as userMock } from '@/mocks/users'
import { columns } from '@/users/Columns'
import UserForm from '@/users/UserForm'
import { DrawerDialog } from '@/components/ui/drawer-dialog'

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
      <div className='flex'>
        <div className='flex-1 mb-7'>
          <h1 className='font-semibold text-4xl mb-2'>Usuarios</h1>
          <p className='text-muted-foreground text-lg'>
            Gestione los datos de los usuarios
          </p>
        </div>
        <DrawerDialog
          title='Nuevo usuario'
          description='Rellene el formulario completo y haga clic en guardar.'
          buttonLabel={'Añadir usuario'}
        >
          <UserForm className='px-6' />
        </DrawerDialog>
      </div>

      <DataTable
        columns={columns}
        data={users}
      />
    </div>
  )
}
