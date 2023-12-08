import MasterLayout from '@components/layouts/MasterLayout'
import { Spinner } from '@nextui-org/react'
import React from 'react'

function AuthLoading () {
  return (
    <MasterLayout>
      <div className='w-full min-h-screen text-center flex flex-col justify-center items-center gap-2 p-5'>
        <Spinner size='lg' />
        <h1 className='font-semibold opacity-70'>Verificando autenticación...</h1>
      </div>
    </MasterLayout>
  )
}

export default AuthLoading
