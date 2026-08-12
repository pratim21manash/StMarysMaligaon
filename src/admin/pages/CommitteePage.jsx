import React, { useState, useEffect } from 'react'
import AdminLayout from '../components/AdminLayout'
import CommitteeList from '../components/ManagingCommittee/CommitteeList'
import CommitteeForm from '../components/ManagingCommittee/CommitteeForm'
import adminApi from '../utils/adminApi'
import { Plus } from 'lucide-react'
import { toast } from 'react-hot-toast'

const CommitteePage = () => {
  const [committee, setCommittee] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingItem, setEditingItem] = useState(null)

  useEffect(() => {
    fetchCommittee()
  }, [])

  const fetchCommittee = async () => {
    try {
      const { data } = await adminApi.get('/managing-committee/all')
      setCommittee(data.data)
    } catch (error) {
      toast.error('Failed to fetch committee data')
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
        await adminApi.put(`/managing-committee/${editingItem._id}`, form, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        toast.success('Committee member updated successfully')
      } else {
        await adminApi.post('/managing-committee', form, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        toast.success('Committee member added successfully')
      }
      fetchCommittee()
      setShowForm(false)
      setEditingItem(null)
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to save')
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this committee member?')) return
    try {
      await adminApi.delete(`/managing-committee/${id}`)
      toast.success('Deleted successfully')
      fetchCommittee()
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
            <h1 className="text-2xl font-serif font-bold text-gray-800">Managing Committee</h1>
            <p className="text-gray-500 text-sm">Manage the school's governing committee members</p>
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
          <CommitteeForm
            onSubmit={handleSubmit}
            onCancel={() => { setShowForm(false); setEditingItem(null) }}
            initialData={editingItem}
          />
        )}

        <CommitteeList
          data={committee}
          loading={loading}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </AdminLayout>
  )
}

export default CommitteePage