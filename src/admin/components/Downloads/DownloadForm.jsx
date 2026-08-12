import React, { useState, useEffect } from 'react'
import { X, Upload, FileText } from 'lucide-react'

const DownloadForm = ({ onSubmit, onCancel, initialData }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: 'General',
    file: null,
    order: 0,
    isActive: true
  })
  const [fileName, setFileName] = useState('')
  const [filePreview, setFilePreview] = useState(null)

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        category: initialData.category || 'General',
        file: null,
        order: initialData.order || 0,
        isActive: initialData.isActive !== undefined ? initialData.isActive : true
      })
      if (initialData.file) {
        setFilePreview(initialData.file)
        setFileName(initialData.file.split('/').pop())
      }
    }
  }, [initialData])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Validate file size (max 20MB)
      if (file.size > 20 * 1024 * 1024) {
        alert('File size must be less than 20MB')
        e.target.value = ''
        return
      }
      setFormData({ ...formData, file })
      setFileName(file.name)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.file && !initialData?.file) {
      alert('Please upload a file')
      return
    }
    onSubmit(formData)
  }

  const categories = [
    'General',
    'Admission',
    'Fees',
    'Academics',
    'Forms',
    'Notices',
    'Reports',
    'Others'
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          {initialData ? 'Edit Download' : 'Add Download'}
        </h2>
        <button onClick={onCancel} className="p-2 hover:bg-gray-100 rounded-lg">
          <X size={20} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="e.g., School Prospectus 2026-27"
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Upload File *</label>
          <div className="flex items-center gap-4">
            <label className="cursor-pointer">
              <div className="flex items-center gap-2 px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg hover:border-maroon-400 transition-colors">
                <Upload size={18} className="text-gray-400" />
                <span className="text-sm text-gray-500">Choose File</span>
              </div>
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.zip,.rar"
              />
            </label>
            {fileName && (
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200">
                <FileText size={18} className="text-maroon-600" />
                <span className="text-sm text-gray-600 truncate max-w-xs">{fileName}</span>
              </div>
            )}
            {filePreview && !initialData && (
              <span className="text-xs text-gray-400">(New file will replace existing)</span>
            )}
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Supported formats: PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX, TXT, ZIP, RAR (Max 20MB)
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Order</label>
            <input
              type="number"
              name="order"
              value={formData.order}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-maroon-500"
            />
          </div>
          <div className="flex items-center pt-6">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="isActive"
                checked={formData.isActive}
                onChange={handleChange}
                className="w-4 h-4 text-maroon-600 rounded focus:ring-maroon-500"
              />
              <span className="text-sm text-gray-700">Active</span>
            </label>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-maroon-800 text-white rounded-lg hover:bg-maroon-700 transition-colors"
          >
            {initialData ? 'Update' : 'Add'} File
          </button>
        </div>
      </form>
    </div>
  )
}

export default DownloadForm