// import React, { createContext, useContext, useState, useEffect } from 'react'

// const AuthContext = createContext(null)

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const stored = window.sessionStorage?.getItem?.('smss_user')
//     if (stored) {
//       try {
//         setUser(JSON.parse(stored))
//       } catch {
//         setUser(null)
//       }
//     }
//     setLoading(false)
//   }, [])

//   const login = async (email, password) => {
//     // Placeholder auth — replace with a real API call in services/api.js
//     if (email && password) {
//       const fakeUser = { name: email.split('@')[0], email }
//       setUser(fakeUser)
//       window.sessionStorage?.setItem?.('smss_user', JSON.stringify(fakeUser))
//       return { success: true }
//     }
//     return { success: false, message: 'Please enter valid credentials.' }
//   }

//   const logout = () => {
//     setUser(null)
//     window.sessionStorage?.removeItem?.('smss_user')
//   }

//   return (
//     <AuthContext.Provider value={{ user, loading, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export const useAuth = () => {
//   const ctx = useContext(AuthContext)
//   if (!ctx) throw new Error('useAuth must be used within an AuthProvider')
//   return ctx
// }

// export default AuthContext


import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const stored = window.sessionStorage?.getItem?.('smss_user')
    if (stored) {
      try {
        setUser(JSON.parse(stored))
      } catch {
        setUser(null)
      }
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    // Placeholder auth — replace with a real API call in services/api.js
    if (email && password) {
      const fakeUser = { name: email.split('@')[0], email }
      setUser(fakeUser)
      window.sessionStorage?.setItem?.('smss_user', JSON.stringify(fakeUser))
      return { success: true }
    }
    return { success: false, message: 'Please enter valid credentials.' }
  }

  const logout = () => {
    setUser(null)
    window.sessionStorage?.removeItem?.('smss_user')
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider')
  return ctx
}

export default AuthContext