import React, {
  createContext,
  useContext,
  useState,
  useEffect
} from 'react'

import adminApi from '../utils/adminApi'
import { toast } from 'react-hot-toast'

const AdminAuthContext = createContext()

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext)

  if (!context) {
    throw new Error('useAdminAuth must be used within AdminAuthProvider')
  }

  return context
}

export const AdminAuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      console.log('Checking authentication...')

      const { data } = await adminApi.get('/auth/check')

      console.log('Auth check response:', data)

      if (data.success) {
        setAdmin(data.data)
      } else {
        setAdmin(null)
      }

    } catch (error) {
      console.error('Auth check failed:', error)
      setAdmin(null)
    } finally {
      setLoading(false)
    }
  }

  const login = async (email, password) => {
    try {
      console.log('Attempting login...')

      const { data } = await adminApi.post('/auth/login', {
        email,
        password
      })

      console.log('Login response:', data)

      if (data.success) {

        // Backend returns admin inside data.data
        setAdmin(data.data)

        toast.success('Login successful!')

        console.log('Login successful, admin set:', data.data)

        return {
          success: true
        }
      }

      return {
        success: false,
        message: data.message || 'Login failed'
      }

    } catch (error) {

      console.error('Login error:', error)

      const message =
        error.response?.data?.message || 'Login failed'

      toast.error(message)

      return {
        success: false,
        message
      }
    }
  }

  const logout = async () => {
    try {
      await adminApi.post('/auth/logout')
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      setAdmin(null)
      toast.success('Logged out successfully')
    }
  }

  return (
    <AdminAuthContext.Provider
      value={{
        admin,
        loading,
        login,
        logout,
        isAuthenticated: !!admin
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  )
}