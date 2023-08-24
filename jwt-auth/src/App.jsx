import React from 'react'
import PublicLayout from './layouts/PublicLayout'
import Register from './pages/Register'

export default function App () {
  return (
    <>
      <PublicLayout>
        <Register />
      </PublicLayout>
    </>
  )
}
