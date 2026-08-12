import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

const PageHeader = ({ title, subtitle, icon }) => {
  return (
    <div className="relative bg-maroon-900 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(217,164,65,0.5),transparent_45%)]" />
      <div className="container-custom relative py-10 md:py-14">
        <div className="flex items-center gap-2 text-maroon-200 text-xs font-medium mb-3">
          <Link to="/" className="flex items-center gap-1 hover:text-gold-300 transition-colors">
            <Home size={12} /> Home
          </Link>
          <ChevronRight size={12} />
          <span className="text-gold-300">{title}</span>
        </div>
        <div className="flex items-center gap-3">
          {icon && (
            <span className="w-10 h-10 rounded-xl bg-gold-400/20 text-gold-300 flex items-center justify-center">
              {icon}
            </span>
          )}
          <div>
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-white">{title}</h1>
            {subtitle && <p className="text-maroon-200 text-sm mt-1">{subtitle}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageHeader
