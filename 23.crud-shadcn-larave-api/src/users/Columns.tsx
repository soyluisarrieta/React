import { type Users } from '@/mocks/users'
import { type ColumnDef } from '@tanstack/react-table'

export const columns: Array<ColumnDef<Users>> = [
  {
    accessorKey: 'id',
    header: 'ID'
  },
  {
    accessorKey: 'name',
    header: 'Nombre'
  },
  {
    accessorKey: 'lastname',
    header: 'Apellido'
  },
  {
    accessorKey: 'email',
    header: 'Correo electrónico'
  },
  {
    accessorKey: 'lastUpdateAt',
    header: 'Última actualización'
  }
]
