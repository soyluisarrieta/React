import React from 'react'
import { RouterProvider } from 'react-router'
import router from './routes/router'

export default function App () {
  return (
    <RouterProvider router={router} />
  )
}
