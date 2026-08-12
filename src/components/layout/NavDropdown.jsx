// src/components/layout/NavDropdown.jsx

import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

const NavDropdown = ({ label, items }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div 
      className="relative" 
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-maroon-900 hover:text-maroon-600 transition-colors"
      >
        {label}
        <ChevronDown 
          size={14} 
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Fixed: Added pt-2 to bridge the gap between button and dropdown */}
      {open && (
        <div className="absolute left-0 top-full pt-2 w-56 z-50">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-100 py-2">
            {items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-maroon-50 hover:text-maroon-800 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default NavDropdown