import React from 'react'
import { Menu, User, LogOut } from 'lucide-react'
import { useAdminAuth } from '../context/AdminAuthContext'

const AdminNavbar = ({ sidebarOpen, setSidebarOpen }) => {
  const { admin, logout } = useAdminAuth()

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <Menu size={24} />
          </button>
          <span className="text-xl font-serif font-bold text-maroon-800">
            Admin Panel
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-maroon-100 text-maroon-800 flex items-center justify-center">
              <User size={16} />
            </div>
            <span className="text-sm font-medium hidden md:block">
              {admin?.name || 'Admin'}
            </span>
          </div>
          <button
            onClick={logout}
            className="p-2 rounded-lg hover:bg-red-50 text-red-600"
          >
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default AdminNavbar