import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAdminAuth } from '../context/AdminAuthContext'

const ProtectedAdminRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAdminAuth()
  
  console.log('ProtectedAdminRoute - isAuthenticated:', isAuthenticated, 'loading:', loading)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-maroon-600 border-t-transparent mx-auto"></div>
          <p className="text-gray-500 mt-4 text-sm">Verifying credentials...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    console.log('Not authenticated, redirecting to login')
    return <Navigate to="/admin/login" replace />
  }

  console.log('Authenticated, rendering children')
  return children
}

export default ProtectedAdminRoute