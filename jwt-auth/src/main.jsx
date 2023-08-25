import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <NextUIProvider>
          <Route path='/*' element={<App />} />
          <App />
        </NextUIProvider>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
