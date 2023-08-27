import { createContext, useState } from 'react'
import { logout } from '../services/auth'

const AuthContext = createContext({})

function AuthProvider ({ children }) {
  const [auth, setAuth] = useState({})

  const onLogout = () => logout(auth.accessToken)

  const value = {
    auth,
    setAuth,
    onLogout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }
export default AuthContext
