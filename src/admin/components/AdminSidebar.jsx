import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Users,
  Users2,
  UserCog,
  GraduationCap,
  Bell,
  Image,
  Download,
  Settings,
  LogOut
} from 'lucide-react'
import { useAdminAuth } from '../context/AdminAuthContext'

const AdminSidebar = ({ open }) => {
  const { logout } = useAdminAuth()

  const menuItems = [
    { to: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/admin/management', icon: Users, label: 'Management' },
    { to: '/admin/committee', icon: Users2, label: 'Managing Committee' },
    { to: '/admin/staff', icon: UserCog, label: 'Staff' },
    { to: '/admin/teaching-staff', icon: GraduationCap, label: 'Teaching Staff' },
    { to: '/admin/circulars', icon: Bell, label: 'Circulars' },
    { to: '/admin/gallery', icon: Image, label: 'Gallery' },
    { to: '/admin/downloads', icon: Download, label: 'Downloads' },
  ]

  return (
    <aside className={`fixed left-0 top-16 h-full bg-white border-r border-gray-200 transition-all duration-300 z-40 ${open ? 'w-64' : 'w-20'}`}>
      <div className="h-full flex flex-col">
        <nav className="flex-1 py-4 space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 mx-2 rounded-lg transition-colors
                ${isActive ? 'bg-maroon-50 text-maroon-800' : 'text-gray-700 hover:bg-gray-100'}
                ${!open && 'justify-center'}
              `}
            >
              <item.icon size={20} />
              {open && <span className="text-sm font-medium">{item.label}</span>}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button
            onClick={logout}
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors ${!open && 'justify-center'}`}
          >
            <LogOut size={20} />
            {open && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>
      </div>
    </aside>
  )
}

export default AdminSidebar