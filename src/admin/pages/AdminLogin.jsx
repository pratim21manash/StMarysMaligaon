import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAdminAuth } from '../context/AdminAuthContext'
import { Mail, Lock, LogIn, School } from 'lucide-react'

const AdminLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { login, isAuthenticated } = useAdminAuth()
  const navigate = useNavigate()

  // If already authenticated, redirect to dashboard
  useEffect(() => {
    console.log('isAuthenticated:', isAuthenticated)
    if (isAuthenticated) {
      console.log('Redirecting to dashboard...')
      navigate('/admin/dashboard', { replace: true })
    }
  }, [isAuthenticated, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    
    try {
      const result = await login(email, password)
      console.log('Login result:', result)
      
      if (result.success) {
        console.log('Login successful, navigating...')
        // Force navigation after login
        navigate('/admin/dashboard', { replace: true })
        // Fallback: if navigate doesn't work, use window.location
        setTimeout(() => {
          if (window.location.pathname !== '/admin/dashboard') {
            window.location.href = '/admin/dashboard'
          }
        }, 500)
      } else {
        setError(result.message || 'Login failed')
      }
    } catch (err) {
      setError('An error occurred during login')
      console.error('Login error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-maroon-50 to-gold-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-maroon-800 text-gold-300 flex items-center justify-center mx-auto mb-4">
              <School size={32} />
            </div>
            <h1 className="font-serif text-2xl font-bold text-maroon-900">Admin Login</h1>
            <p className="text-gray-500 text-sm mt-1">St. Mary's Sr. Secondary School</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
              <div className="relative">
                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="admin@stmarys.edu.in"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-maroon-400 focus:ring-2 focus:ring-maroon-100 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-maroon-400 focus:ring-2 focus:ring-maroon-100 outline-none transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-maroon-800 to-maroon-700 text-white rounded-xl font-semibold hover:from-maroon-700 hover:to-maroon-600 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                  Signing in...
                </>
              ) : (
                <>
                  <LogIn size={18} />
                  Sign In
                </>
              )}
            </button>
          </form>

          {/* Removed default credentials line */}
        </div>
      </div>
    </div>
  )
}

export default AdminLogin