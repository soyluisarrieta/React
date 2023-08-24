import React from 'react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/react'

export default function App () {
  return (
    <main className='w-full p-5'>
      <h1 className='mb-3 text-4xl text-indigo-600 font-bold'>Hello Tailwind</h1>
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant='bordered'
          >
            Open Menu
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label='Static Actions'>
          <DropdownItem key='new'>New file</DropdownItem>
          <DropdownItem key='copy'>Copy link</DropdownItem>
          <DropdownItem key='edit'>Edit file</DropdownItem>
          <DropdownItem key='delete' className='text-danger' color='danger'>
            Delete file
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </main>
  )
}
