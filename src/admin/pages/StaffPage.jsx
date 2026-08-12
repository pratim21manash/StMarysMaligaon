import React, { useState, useEffect } from 'react'
import AdminLayout from '../components/AdminLayout'
import StaffList from '../components/Staff/StaffList'
import StaffForm from '../components/Staff/StaffForm'
import adminApi from '../utils/adminApi'
import { Plus } from 'lucide-react'
import { toast } from 'react-hot-toast'

const StaffPage = () => {
  const [staff, setStaff] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingItem, setEditingItem] = useState(null)

  useEffect(() => {
    fetchStaff()
  }, [])

  const fetchStaff = async () => {
    try {
      const { data } = await adminApi.get('/staff/all')
      setStaff(data.data)
    } catch (error) {
      toast.error('Failed to fetch staff data')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (formData) => {
    try {
      const form = new FormData()
      Object.keys(formData).forEach(key => {
        if (key === 'image' && formData[key] instanceof File) {
          form.append('image', formData[key])
        } else if (key !== 'image') {
          form.append(key, formData[key])
        }
      })

      if (editingItem) {
        await adminApi.put(`/staff/${editingItem._id}`, form, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        toast.success('Staff member updated successfully')
      } else {
        await adminApi.post('/staff', form, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        toast.success('Staff member added successfully')
      }
      fetchStaff()
      setShowForm(false)
      setEditingItem(null)
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to save')
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this staff member?')) return
    try {
      await adminApi.delete(`/staff/${id}`)
      toast.success('Deleted successfully')
      fetchStaff()
    } catch (error) {
      toast.error('Failed to delete')
    }
  }

  const handleEdit = (item) => {
    setEditingItem(item)
    setShowForm(true)
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-serif font-bold text-gray-800">Staff</h1>
            <p className="text-gray-500 text-sm">Manage non-teaching staff members</p>
          </div>
          <button
            onClick={() => { setShowForm(true); setEditingItem(null) }}
            className="px-4 py-2 bg-maroon-800 text-white rounded-lg hover:bg-maroon-700 flex items-center gap-2"
          >
            <Plus size={18} />
            Add Staff
          </button>
        </div>

        {showForm && (
          <StaffForm
            onSubmit={handleSubmit}
            onCancel={() => { setShowForm(false); setEditingItem(null) }}
            initialData={editingItem}
          />
        )}

        <StaffList
          data={staff}
          loading={loading}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </AdminLayout>
  )
}

export default StaffPage