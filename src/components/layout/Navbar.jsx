// src/components/layout/Navbar.jsx

import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import NavDropdown from './NavDropdown.jsx'
import { schoolInfo } from '../../data/seedData.js'
import SchoolLogo from '../../assets/School_Logo.jpeg'

const aboutItems = [
  { label: 'Founder', path: '/about/founder' },
  { label: 'Co-Founders', path: '/about/co-founders' },
  { label: 'History', path: '/about/history' },
  { label: 'Mission & Vision', path: '/about/mission-vision' },
  { label: 'Educational Approach', path: '/about/educational-approach' }
]

const administrationItems = [
  { label: 'Management', path: '/administration/management' },
  { label: 'Managing Committee', path: '/administration/managing-committee' },
  { label: 'Staff', path: '/administration/staff' },
  { label: 'Teaching Staff', path: '/administration/teaching-staff' }
]

const cbseItems = [
  { label: 'Mandatory Public Disclosure', path: '/cbse/mandatory-public-disclosure' },
  { label: 'School Information', path: '/cbse/school-info' }
]

const studentsItems = [
  { label: 'Fees', path: '/students/fees' },
  { label: 'Rules', path: '/students/rules' },
  { label: 'Leave', path: '/students/leave' },
  { label: 'Examination', path: '/students/examination' },
  { label: 'Discipline', path: '/students/discipline' },
  { label: 'Uniform', path: '/students/uniform' },
  { label: 'Parents Notice / Enrollment', path: '/students/parents-notice-enrollment' }
]

const activitiesItems = [
  { label: 'Co-Curricular', path: '/activities/co-curricular' },
  { label: 'Sports', path: '/activities/sports' },
  { label: 'Excursions', path: '/activities/excursions' },
  { label: 'Clubs', path: '/activities/clubs' }
]

const simpleLinks = [
  { label: 'Gallery', path: '/gallery' },
  { label: 'Downloads', path: '/downloads' },
  { label: 'Transport', path: '/infrastructure/transport' },
  { label: 'Contact', path: '/contact-us' }
]

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm w-full">
      <div className="flex items-center justify-between px-4 md:px-6 lg:px-8 py-3 w-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <img
            src={SchoolLogo}
            alt="School Logo"
            className="w-11 h-11 rounded-xl object-contain bg-maroon-800 p-1"
          />
          <span>
            <span className="block font-serif font-bold text-maroon-900 leading-tight text-sm sm:text-base">
              {schoolInfo.name}
            </span>
            <span className="block text-[10px] sm:text-xs text-gold-600 font-medium tracking-wide">
              {schoolInfo.branch}, {schoolInfo.city}
            </span>
          </span>
        </Link>

        {/* Desktop Navigation - Fixed: Added pb-4 to create bridge to dropdown */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 flex-nowrap">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-2 xl:px-3 py-2 text-[12px] xl:text-sm font-medium transition-colors whitespace-nowrap ${
                isActive ? 'text-maroon-800' : 'text-maroon-900 hover:text-maroon-600'
              }`
            }
          >
            Home
          </NavLink>
          <NavDropdown label="About Us" items={aboutItems} />
          <NavDropdown label="Administration" items={administrationItems} />
          <NavDropdown label="CBSE Information" items={cbseItems} />
          <NavDropdown label="Students" items={studentsItems} />
          <NavDropdown label="Activities" items={activitiesItems} />
          {simpleLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-2 xl:px-3 py-2 text-[12px] xl:text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive ? 'text-maroon-800' : 'text-maroon-900 hover:text-maroon-600'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-maroon-900 flex-shrink-0"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-1 max-h-[75vh] overflow-y-auto w-full">
          {[
            { label: 'Home', path: '/' },
            ...aboutItems,
            ...administrationItems,
            ...cbseItems,
            ...studentsItems,
            ...activitiesItems,
            ...simpleLinks
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-maroon-50 hover:text-maroon-800"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/login"
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-maroon-800 bg-gold-50"
          >
            Login
          </Link>
        </div>
      )}
    </header>
  )
}

export default Navbar