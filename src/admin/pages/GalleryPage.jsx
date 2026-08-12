import React, { useState, useEffect } from 'react'
import AdminLayout from '../components/AdminLayout'
import GalleryList from '../components/Gallery/GalleryList'
import GalleryForm from '../components/Gallery/GalleryForm'
import adminApi from '../utils/adminApi'
import { Plus } from 'lucide-react'
import { toast } from 'react-hot-toast'

const GalleryPage = () => {
  const [galleries, setGalleries] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingItem, setEditingItem] = useState(null)

  useEffect(() => {
    fetchGalleries()
  }, [])

  const fetchGalleries = async () => {
    try {
      const response = await adminApi.get('/gallery/all')
      console.log('Gallery response:', response.data)
      setGalleries(response.data.data || [])
    } catch (error) {
      console.error('Fetch gallery error:', error)
      toast.error('Failed to fetch gallery data')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (formData) => {
    try {
      const form = new FormData()
      
      // Append all form fields
      Object.keys(formData).forEach(key => {
        if (key === 'images' && formData[key] && formData[key].length > 0) {
          // CRITICAL FIX: Handle images as Array (not FileList)
          if (Array.isArray(formData[key])) {
            formData[key].forEach((image) => {
              if (image instanceof File) {
                console.log('Appending file:', image.name)
                form.append('images', image)
              }
            })
          }
        } else if (key !== 'images' && key !== 'existingImages') {
          form.append(key, formData[key])
        }
      })

      // Log FormData contents for debugging
      for (let pair of form.entries()) {
        console.log('FormData:', pair[0], pair[1])
      }

      if (editingItem) {
        await adminApi.put(`/gallery/${editingItem._id}`, form, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        toast.success('Gallery updated successfully')
      } else {
        await adminApi.post('/gallery', form, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        toast.success('Gallery added successfully')
      }
      fetchGalleries()
      setShowForm(false)
      setEditingItem(null)
    } catch (error) {
      console.error('Submit error:', error)
      toast.error(error.response?.data?.message || 'Failed to save')
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this gallery event?')) return
    try {
      await adminApi.delete(`/gallery/${id}`)
      toast.success('Deleted successfully')
      fetchGalleries()
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
            <h1 className="text-2xl font-serif font-bold text-gray-800">Gallery</h1>
            <p className="text-gray-500 text-sm">Manage school event photos (max 4 images per event)</p>
          </div>
          <button
            onClick={() => { setShowForm(true); setEditingItem(null) }}
            className="px-4 py-2 bg-maroon-800 text-white rounded-lg hover:bg-maroon-700 flex items-center gap-2"
          >
            <Plus size={18} />
            Add Event
          </button>
        </div>

        {showForm && (
          <GalleryForm
            onSubmit={handleSubmit}
            onCancel={() => { setShowForm(false); setEditingItem(null) }}
            initialData={editingItem}
          />
        )}

        <GalleryList
          data={galleries}
          loading={loading}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </AdminLayout>
  )
}

export default GalleryPage