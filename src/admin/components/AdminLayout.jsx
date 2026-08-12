import React, { useState } from 'react'
import AdminSidebar from './AdminSidebar'
import AdminNavbar from './AdminNavbar'

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex">
        <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
          <div className="p-6 mt-16">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default AdminLayout