import React, { useState, useEffect } from 'react'
import AdminLayout from '../components/AdminLayout'
import { useAdminAuth } from '../context/AdminAuthContext'
import adminApi from '../utils/adminApi'
import {
  Users,
  Users2,
  UserCog,
  GraduationCap,
  Bell,
  Image,
  Download,
  TrendingUp,
  Calendar,
  Clock
} from 'lucide-react'

const StatCard = ({ title, value, icon: Icon, color, bgColor }) => (
  <div className={`${bgColor} rounded-xl p-6 shadow-sm border border-gray-100`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
      </div>
      <div className={`${color} p-3 rounded-lg`}>
        <Icon size={20} className="text-white" />
      </div>
    </div>
  </div>
)

const AdminDashboard = () => {
  const { admin } = useAdminAuth()
  const [stats, setStats] = useState({
    management: 0,
    committee: 0,
    staff: 0,
    teachingStaff: 0,
    circulars: 0,
    gallery: 0,
    downloads: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const [
        managementRes,
        committeeRes,
        staffRes,
        teachingStaffRes,
        circularsRes,
        galleryRes,
        downloadsRes
      ] = await Promise.all([
        adminApi.get('/management/all'),
        adminApi.get('/managing-committee/all'),
        adminApi.get('/staff/all'),
        adminApi.get('/teaching-staff/all'),
        adminApi.get('/circulars/all'),
        adminApi.get('/gallery/all'),
        adminApi.get('/downloads/all')
      ])

      setStats({
        management: managementRes.data.data.length,
        committee: committeeRes.data.data.length,
        staff: staffRes.data.data.length,
        teachingStaff: teachingStaffRes.data.data.length,
        circulars: circularsRes.data.data.length,
        gallery: galleryRes.data.data.length,
        downloads: downloadsRes.data.data.length
      })
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const statCards = [
    { title: 'Management', value: stats.management, icon: Users, color: 'bg-blue-600', bgColor: 'bg-white' },
    { title: 'Managing Committee', value: stats.committee, icon: Users2, color: 'bg-purple-600', bgColor: 'bg-white' },
    { title: 'Staff', value: stats.staff, icon: UserCog, color: 'bg-green-600', bgColor: 'bg-white' },
    { title: 'Teaching Staff', value: stats.teachingStaff, icon: GraduationCap, color: 'bg-amber-600', bgColor: 'bg-white' },
    { title: 'Circulars', value: stats.circulars, icon: Bell, color: 'bg-red-600', bgColor: 'bg-white' },
    { title: 'Gallery Events', value: stats.gallery, icon: Image, color: 'bg-pink-600', bgColor: 'bg-white' },
    { title: 'Downloads', value: stats.downloads, icon: Download, color: 'bg-teal-600', bgColor: 'bg-white' },
  ]

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Welcome */}
        <div className="bg-gradient-to-r from-maroon-800 to-maroon-700 rounded-2xl p-6 text-white">
          <h1 className="text-2xl font-serif font-bold">Welcome back, {admin?.name || 'Admin'}!</h1>
          <p className="text-maroon-200 mt-1">Here's what's happening with your school website today.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <a href="/admin/management" className="p-4 bg-blue-50 rounded-lg text-center hover:bg-blue-100 transition-colors">
              <Users size={24} className="mx-auto text-blue-600" />
              <p className="text-xs font-medium text-gray-700 mt-2">Add Management</p>
            </a>
            <a href="/admin/teaching-staff" className="p-4 bg-amber-50 rounded-lg text-center hover:bg-amber-100 transition-colors">
              <GraduationCap size={24} className="mx-auto text-amber-600" />
              <p className="text-xs font-medium text-gray-700 mt-2">Add Teacher</p>
            </a>
            <a href="/admin/circulars" className="p-4 bg-red-50 rounded-lg text-center hover:bg-red-100 transition-colors">
              <Bell size={24} className="mx-auto text-red-600" />
              <p className="text-xs font-medium text-gray-700 mt-2">Post Circular</p>
            </a>
            <a href="/admin/gallery" className="p-4 bg-pink-50 rounded-lg text-center hover:bg-pink-100 transition-colors">
              <Image size={24} className="mx-auto text-pink-600" />
              <p className="text-xs font-medium text-gray-700 mt-2">Add Gallery</p>
            </a>
          </div>
        </div>

        {/* Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <Calendar size={20} className="text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-blue-800">Getting Started</p>
              <p className="text-sm text-blue-700 mt-1">
                Use the sidebar to manage all sections of your school website. 
                All changes will be reflected on the public website immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminDashboard