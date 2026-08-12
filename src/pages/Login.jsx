import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { LogIn, Mail, Lock, GraduationCap } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const result = await login(email, password)
    setLoading(false)
    if (result.success) {
      navigate('/')
    } else {
      setError(result.message || 'Login failed. Please try again.')
    }
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#FBF6EC] py-16 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 p-8">
        <div className="flex flex-col items-center mb-6">
          <span className="w-14 h-14 rounded-2xl bg-maroon-800 text-gold-300 flex items-center justify-center mb-3">
            <GraduationCap size={26} />
          </span>
          <h1 className="font-serif text-2xl font-bold text-maroon-900">Welcome Back</h1>
          <p className="text-sm text-gray-500 mt-1">Sign in to access your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-maroon-400 focus:ring-2 focus:ring-maroon-100 outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-maroon-400 focus:ring-2 focus:ring-maroon-100 outline-none transition-all"
              />
            </div>
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button type="submit" disabled={loading} className="btn-primary w-full">
            <LogIn size={16} /> {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Back to{' '}
          <Link to="/" className="text-maroon-700 font-medium hover:underline">
            Homepage
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
