import React from 'react'

import { Outlet } from 'react-router-dom'

import MasterLayout from '@components/layouts/MasterLayout'

function GuestLayout () {
  return (
    <MasterLayout>
      <Outlet />
    </MasterLayout>
  )
}

export default GuestLayout
