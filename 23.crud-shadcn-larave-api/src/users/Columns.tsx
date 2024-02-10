import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { type Users } from '@/mocks/users'
import { type ColumnDef } from '@tanstack/react-table'
import { MoreHorizontalIcon } from 'lucide-react'

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
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const users = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Menú de opciones</span>
              <MoreHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={async () => { await navigator.clipboard.writeText(users.id) }}
            >
              Copiar ID del usuario
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Ver detalles</DropdownMenuItem>
            <DropdownMenuItem>Editar</DropdownMenuItem>
            <DropdownMenuItem>Eliminar</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]
