import React, { useState, useEffect } from 'react'
import AdminLayout from '../components/AdminLayout'
import DownloadList from '../components/Downloads/DownloadList'
import DownloadForm from '../components/Downloads/DownloadForm'
import adminApi from '../utils/adminApi'
import { Plus } from 'lucide-react'
import { toast } from 'react-hot-toast'

const DownloadsPage = () => {
  const [downloads, setDownloads] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingItem, setEditingItem] = useState(null)

  useEffect(() => {
    fetchDownloads()
  }, [])

  const fetchDownloads = async () => {
    try {
      const { data } = await adminApi.get('/downloads/all')
      setDownloads(data.data)
    } catch (error) {
      toast.error('Failed to fetch downloads')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (formData) => {
    try {
      const form = new FormData()
      Object.keys(formData).forEach(key => {
        if (key === 'file' && formData[key] instanceof File) {
          form.append('file', formData[key])
        } else if (key !== 'file') {
          form.append(key, formData[key])
        }
      })

      if (editingItem) {
        await adminApi.put(`/downloads/${editingItem._id}`, form, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        toast.success('Download updated successfully')
      } else {
        await adminApi.post('/downloads', form, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        toast.success('Download added successfully')
      }
      fetchDownloads()
      setShowForm(false)
      setEditingItem(null)
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to save')
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this file?')) return
    try {
      await adminApi.delete(`/downloads/${id}`)
      toast.success('Deleted successfully')
      fetchDownloads()
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
            <h1 className="text-2xl font-serif font-bold text-gray-800">Downloads</h1>
            <p className="text-gray-500 text-sm">Manage downloadable documents and forms</p>
          </div>
          <button
            onClick={() => { setShowForm(true); setEditingItem(null) }}
            className="px-4 py-2 bg-maroon-800 text-white rounded-lg hover:bg-maroon-700 flex items-center gap-2"
          >
            <Plus size={18} />
            Add File
          </button>
        </div>

        {showForm && (
          <DownloadForm
            onSubmit={handleSubmit}
            onCancel={() => { setShowForm(false); setEditingItem(null) }}
            initialData={editingItem}
          />
        )}

        <DownloadList
          data={downloads}
          loading={loading}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </AdminLayout>
  )
}

export default DownloadsPage