import React, { useState, useEffect } from 'react'
import AdminLayout from '../components/AdminLayout'
import TeachingStaffList from '../components/TeachingStaff/TeachingStaffList'
import TeachingStaffForm from '../components/TeachingStaff/TeachingStaffForm'
import adminApi from '../utils/adminApi'
import { Plus } from 'lucide-react'
import { toast } from 'react-hot-toast'

const TeachingStaffPage = () => {
  const [teachingStaff, setTeachingStaff] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingItem, setEditingItem] = useState(null)

  useEffect(() => {
    fetchTeachingStaff()
  }, [])

  const fetchTeachingStaff = async () => {
    try {
      const { data } = await adminApi.get('/teaching-staff/all')
      setTeachingStaff(data.data)
    } catch (error) {
      toast.error('Failed to fetch teaching staff data')
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
        await adminApi.put(`/teaching-staff/${editingItem._id}`, form, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        toast.success('Teaching staff updated successfully')
      } else {
        await adminApi.post('/teaching-staff', form, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        toast.success('Teaching staff added successfully')
      }
      fetchTeachingStaff()
      setShowForm(false)
      setEditingItem(null)
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to save')
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this teaching staff member?')) return
    try {
      await adminApi.delete(`/teaching-staff/${id}`)
      toast.success('Deleted successfully')
      fetchTeachingStaff()
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
            <h1 className="text-2xl font-serif font-bold text-gray-800">Teaching Staff</h1>
            <p className="text-gray-500 text-sm">Manage PRT, TGT, and PGT teachers</p>
          </div>
          <button
            onClick={() => { setShowForm(true); setEditingItem(null) }}
            className="px-4 py-2 bg-maroon-800 text-white rounded-lg hover:bg-maroon-700 flex items-center gap-2"
          >
            <Plus size={18} />
            Add Teacher
          </button>
        </div>

        {showForm && (
          <TeachingStaffForm
            onSubmit={handleSubmit}
            onCancel={() => { setShowForm(false); setEditingItem(null) }}
            initialData={editingItem}
          />
        )}

        <TeachingStaffList
          data={teachingStaff}
          loading={loading}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </AdminLayout>
  )
}

export default TeachingStaffPage