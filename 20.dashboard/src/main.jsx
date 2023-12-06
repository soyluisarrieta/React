import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routes } from '@assets/router'
import { NextUIProvider } from '@nextui-org/react'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </RouterProvider>
  </React.StrictMode>
)
