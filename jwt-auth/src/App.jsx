import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout'
import Home from './pages/Public/Home'
import Login from './pages/Auth/Login'
import Register from './pages/Register'
import Dashboard from './pages/Admin/Dashboard'
import Unauthorized from './pages/Errors/Unauthorized'
import NotFound from './pages/Errors/NotFound'

export default function App () {
  return (
    <Routes>
      {/* Public routes */}
      <Route path='/' element={<PublicLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='unauthorized' element={<Unauthorized />} />

        {/* Protected routes */}
        <Route path='/' element={<Dashboard />} />

        {/* Not found - 404 */}
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}
