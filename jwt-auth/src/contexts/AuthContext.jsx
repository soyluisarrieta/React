import { createContext, useState } from 'react'

const AuthContext = createContext({})

function AuthProvider ({ children }) {
  const [auth, setAuth] = useState({})

  const value = {
    auth,
    setAuth
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }
export default AuthContext
