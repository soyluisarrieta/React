import { routes } from '@assets/router'
import { NextUIProvider } from '@nextui-org/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import '@assets/lib/tailwind/input.css'
import '@assets/lib/nprogress/nprogress.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}>
      <NextUIProvider />
    </RouterProvider>
    <Toaster position='top-center' />
  </React.StrictMode>
)
