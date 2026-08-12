import React from 'react'
import { Link } from 'react-router-dom'
import { Home, SearchX } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <span className="w-20 h-20 rounded-full bg-maroon-50 text-maroon-700 flex items-center justify-center mb-6">
        <SearchX size={36} />
      </span>
      <h1 className="font-serif text-5xl font-bold text-maroon-900 mb-2">404</h1>
      <p className="text-gray-500 mb-8 max-w-md">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Link to="/" className="btn-primary">
        <Home size={16} /> Back to Home
      </Link>
    </div>
  )
}

export default NotFound
