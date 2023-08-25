import React from 'react'
import PublicLayout from './layouts/PublicLayout'

import Register from './pages/Register'
import Login from './pages/Login'

export default function App () {
  return (
    <PublicLayout>
      <Login />
    </PublicLayout>
  )
}
