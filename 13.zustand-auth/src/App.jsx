import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import Navigation from './components/Navigation'
import ProtectedRoute from './components/ProtectedRoute'
import { useAuthStore } from './store/auth'

function App () {
  const isAuth = useAuthStore(state => state.isAuth)

  return (
    <div className='min-h-screen bg-slate-900'>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />

          <Route element={<ProtectedRoute isAllowed={isAuth} />}>
            <Route path='/profile' element={<ProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
