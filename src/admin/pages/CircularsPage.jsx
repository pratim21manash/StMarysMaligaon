import React, { useState, useEffect } from 'react'
import AdminLayout from '../components/AdminLayout'
import CircularList from '../components/Circulars/CircularList'
import CircularForm from '../components/Circulars/CircularForm'
import adminApi from '../utils/adminApi'
import { Plus } from 'lucide-react'
import { toast } from 'react-hot-toast'

const CircularsPage = () => {
  const [circulars, setCirculars] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingItem, setEditingItem] = useState(null)

  useEffect(() => {
    fetchCirculars()
  }, [])

  const fetchCirculars = async () => {
    try {
      const { data } = await adminApi.get('/circulars/all')
      setCirculars(data.data)
    } catch (error) {
      toast.error('Failed to fetch circulars')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (formData) => {
    try {
      const form = new FormData()
      Object.keys(formData).forEach(key => {
        if (key === 'pdf' && formData[key] instanceof File) {
          form.append('pdf', formData[key])
        } else if (key !== 'pdf') {
          form.append(key, formData[key])
        }
      })

      if (editingItem) {
        await adminApi.put(`/circulars/${editingItem._id}`, form, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        toast.success('Circular updated successfully')
      } else {
        await adminApi.post('/circulars', form, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        toast.success('Circular added successfully')
      }
      fetchCirculars()
      setShowForm(false)
      setEditingItem(null)
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to save')
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this circular?')) return
    try {
      await adminApi.delete(`/circulars/${id}`)
      toast.success('Deleted successfully')
      fetchCirculars()
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
            <h1 className="text-2xl font-serif font-bold text-gray-800">Circulars</h1>
            <p className="text-gray-500 text-sm">Manage school notices and circulars</p>
          </div>
          <button
            onClick={() => { setShowForm(true); setEditingItem(null) }}
            className="px-4 py-2 bg-maroon-800 text-white rounded-lg hover:bg-maroon-700 flex items-center gap-2"
          >
            <Plus size={18} />
            Add Circular
          </button>
        </div>

        {showForm && (
          <CircularForm
            onSubmit={handleSubmit}
            onCancel={() => { setShowForm(false); setEditingItem(null) }}
            initialData={editingItem}
          />
        )}

        <CircularList
          data={circulars}
          loading={loading}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </AdminLayout>
  )
}

export default CircularsPage