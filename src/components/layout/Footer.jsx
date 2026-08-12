import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-maroon-950 text-maroon-100">
      <div className="container-custom py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1 - School Info */}
        <div>
          <h3 className="font-serif text-xl font-bold text-white mb-3">
            St. Mary's Senior Secondary School
          </h3>
          <p className="text-sm text-maroon-300 leading-relaxed">
            Maligaon, Guwahati, Assam — nurturing minds and building character since 1966.
          </p>
          <p className="text-sm text-maroon-400 mt-2 leading-relaxed">
            St. Mary's Senior Secondary School, Maligaon is an English medium School established in 1966, and is run by the Salesians Sisters of Don Bosco.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-400 hover:text-maroon-900 transition-colors">
              <Facebook size={16} />
            </a>
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-400 hover:text-maroon-900 transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-400 hover:text-maroon-900 transition-colors">
              <Youtube size={16} />
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h4 className="font-semibold text-gold-300 mb-3 text-sm tracking-wide uppercase">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about/history" className="hover:text-gold-300 transition-colors">About Us</Link></li>
            <li><Link to="/administration/staff" className="hover:text-gold-300 transition-colors">Staff</Link></li>
            <li><Link to="/students/fees" className="hover:text-gold-300 transition-colors">Fees</Link></li>
            <li><Link to="/downloads" className="hover:text-gold-300 transition-colors">Downloads</Link></li>
            <li><Link to="/gallery" className="hover:text-gold-300 transition-colors">Gallery</Link></li>
          </ul>
        </div>

        {/* Column 3 - CBSE Info */}
        <div>
          <h4 className="font-semibold text-gold-300 mb-3 text-sm tracking-wide uppercase">CBSE Info</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/cbse/mandatory-public-disclosure" className="hover:text-gold-300 transition-colors">Mandatory Public Disclosure</Link></li>
            <li><Link to="/cbse/school-info" className="hover:text-gold-300 transition-colors">School Information</Link></li>
            <li><Link to="/students/examination" className="hover:text-gold-300 transition-colors">Examination</Link></li>
            <li><Link to="/students/rules" className="hover:text-gold-300 transition-colors">Rules</Link></li>
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div>
          <h4 className="font-semibold text-gold-300 mb-3 text-sm tracking-wide uppercase">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-gold-400 mt-0.5 flex-shrink-0" />
              <span>St. Mary's Senior Secondary School, Maligaon, Nambari, Guwahati-781011</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-gold-400 flex-shrink-0" />
              <span>87520 16092</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-gold-400 flex-shrink-0" />
              <span>st.marysschool66@yahoo.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar - with real credit line */}
      <div className="border-t border-white/10 py-4">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-maroon-300">
          <span>
            © {currentYear} St. Mary's Sr. Sec. School | All Rights Reserved
          </span>
          <span>
            Designed by <span className="text-gold-400 font-medium">ApexAspire</span>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer