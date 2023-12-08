import React from 'react'

import { Outlet } from 'react-router-dom'
import MasterLayout from '@components/layouts/MasterLayout'

function AdminLayout () {
  return (
    <MasterLayout>
      <Outlet />
    </MasterLayout>
  )
}

export default AdminLayout
