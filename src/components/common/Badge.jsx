import React from 'react'

const Badge = ({ children, className = '' }) => {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gold-100 text-maroon-800 ${className}`}>
      {children}
    </span>
  )
}

export default Badge
