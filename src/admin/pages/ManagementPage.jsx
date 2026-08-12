import React, { useState, useEffect } from 'react'
import AdminLayout from '../components/AdminLayout'
import ManagementList from '../components/Management/ManagementList'
import ManagementForm from '../components/Management/ManagementForm'
import adminApi from '../utils/adminApi'
import { Plus } from 'lucide-react'
import { toast } from 'react-hot-toast'

const ManagementPage = () => {
  const [management, setManagement] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingItem, setEditingItem] = useState(null)

  useEffect(() => {
    fetchManagement()
  }, [])

  const fetchManagement = async () => {
    try {
      const { data } = await adminApi.get('/management/all')
      setManagement(data.data)
    } catch (error) {
      toast.error('Failed to fetch management data')
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
        await adminApi.put(`/management/${editingItem._id}`, form, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        toast.success('Management updated successfully')
      } else {
        await adminApi.post('/management', form, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        toast.success('Management added successfully')
      }
      fetchManagement()
      setShowForm(false)
      setEditingItem(null)
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to save')
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this?')) return
    try {
      await adminApi.delete(`/management/${id}`)
      toast.success('Deleted successfully')
      fetchManagement()
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
            <h1 className="text-2xl font-serif font-bold text-gray-800">Management</h1>
            <p className="text-gray-500 text-sm">Manage school management team members</p>
          </div>
          <button
            onClick={() => { setShowForm(true); setEditingItem(null) }}
            className="px-4 py-2 bg-maroon-800 text-white rounded-lg hover:bg-maroon-700 flex items-center gap-2"
          >
            <Plus size={18} />
            Add Member
          </button>
        </div>

        {showForm && (
          <ManagementForm
            onSubmit={handleSubmit}
            onCancel={() => { setShowForm(false); setEditingItem(null) }}
            initialData={editingItem}
          />
        )}

        <ManagementList
          data={management}
          loading={loading}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </AdminLayout>
  )
}

export default ManagementPage