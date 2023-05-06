import { Chip, Tooltip, User } from '@nextui-org/react'
import { DeleteIcon, EditIcon, EyeIcon } from '../../assets/icons/CrudIcons'

const statusColorMap = {
  active: 'success',
  paused: 'danger',
  vacation: 'warning'
}

export default (user, columnKey) => {
  const cellValue = user[columnKey]

  switch (columnKey) {
    case 'name':
      return (
        <User
          avatarProps={{ radius: 'lg', src: user.avatar }}
          description={user.email}
          name={cellValue}
        >
          {user.email}
        </User>
      )
    case 'role':
      return (
        <div className='flex flex-col'>
          <p className='text-bold text-sm capitalize'>{cellValue}</p>
          <p className='text-bold text-sm capitalize text-default-400'>{user.team}</p>
        </div>
      )
    case 'status':
      return (
        <Chip className='capitalize' color={statusColorMap[user.status]} size='sm' variant='flat'>
          {cellValue}
        </Chip>
      )
    case 'actions':
      return (
        <div className='relative flex items-center gap-2'>
          <Tooltip content='Details'>
            <span className='text-lg text-default-400 cursor-pointer active:opacity-50'>
              <EyeIcon />
            </span>
          </Tooltip>
          <Tooltip content='Edit user'>
            <span className='text-lg text-default-400 cursor-pointer active:opacity-50'>
              <EditIcon />
            </span>
          </Tooltip>
          <Tooltip color='danger' content='Delete user'>
            <span className='text-lg text-danger cursor-pointer active:opacity-50'>
              <DeleteIcon />
            </span>
          </Tooltip>
        </div>
      )
    default:
      return cellValue
  }
}
