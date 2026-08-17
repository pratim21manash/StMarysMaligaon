// src/components/layout/TopBar.jsx

import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, LogIn } from 'lucide-react'
import { schoolInfo } from '../../data/seedData.js'

const TopBar = () => {
  return (
    <div className="bg-maroon-950 text-maroon-100 text-xs border-b border-maroon-800">
      <div className="container-custom px-4 sm:px-6 py-1.5">
        <div className="flex flex-wrap items-center justify-between gap-1.5">
          {/* Left: Contact Info */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[10px] sm:text-xs">
            <span className="flex items-center gap-1">
              <MapPin size={11} className="text-gold-400 flex-shrink-0" />
              <span className="hidden xs:inline">{schoolInfo.address}</span>
              <span className="xs:hidden">Maligaon, Guwahati</span>
            </span>
            <span className="flex items-center gap-1">
              <Phone size={11} className="text-gold-400 flex-shrink-0" />
              {schoolInfo.phone}
            </span>
            <span className="flex items-center gap-1">
              <Mail size={11} className="text-gold-400 flex-shrink-0" />
              <span className="hidden sm:inline">{schoolInfo.email}</span>
              <span className="sm:hidden">Email</span>
            </span>
          </div>

          {/* Right: Affiliation + Login Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden sm:inline text-gold-300 font-medium tracking-wide text-[9px] sm:text-[10px] whitespace-nowrap">
              Affiliated to {schoolInfo.affiliation} • Est. {schoolInfo.established}
            </span>

            {/* Admin Login Button */}
            <Link
              to="/admin/login"
              className="inline-flex items-center gap-1 bg-gold-500 hover:bg-gold-400 text-maroon-900 font-medium px-3 py-1 rounded-full transition-all duration-300 text-[9px] sm:text-[10px] shadow-md hover:shadow-lg hover:scale-105"
            >
              <LogIn size={12} className="sm:size-12" />
              <span className="hidden xs:inline">Admin Login</span>
              <span className="xs:hidden">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar