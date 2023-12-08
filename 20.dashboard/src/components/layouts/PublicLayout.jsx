import React from 'react'

import MasterLayout from '@components/layouts/MasterLayout'
import { Outlet } from 'react-router-dom'

function PublicLayout () {
  return (
    <MasterLayout>
      <Outlet />
    </MasterLayout>
  )
}

export default PublicLayout
