import React, { useState, useEffect } from 'react'
import { X, Upload, FileText } from 'lucide-react'

const CircularForm = ({ onSubmit, onCancel, initialData }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '00:00:00',
    pdf: null,
    order: 0,
    isActive: true
  })
  const [pdfPreview, setPdfPreview] = useState(null)
  const [pdfName, setPdfName] = useState('')

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        description: initialData.description || '',
        date: initialData.date ? new Date(initialData.date).toISOString().split('T')[0] : '',
        time: initialData.time || '00:00:00',
        pdf: null,
        order: initialData.order || 0,
        isActive: initialData.isActive !== undefined ? initialData.isActive : true
      })
      if (initialData.pdf) {
        setPdfPreview(initialData.pdf)
        setPdfName(initialData.pdf.split('/').pop())
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
      setFormData({ ...formData, pdf: file })
      setPdfName(file.name)
      const reader = new FileReader()
      reader.onloadend = () => setPdfPreview(reader.result)
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          {initialData ? 'Edit Circular' : 'Add New Circular'}
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
            placeholder="Enter circular title"
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            placeholder="Enter circular description (optional)"
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent resize-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">PDF Upload</label>
          <div className="flex items-center gap-4">
            <label className="cursor-pointer">
              <div className="flex items-center gap-2 px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg hover:border-maroon-400 transition-colors">
                <Upload size={18} className="text-gray-400" />
                <span className="text-sm text-gray-500">Upload PDF</span>
              </div>
              <input
                type="file"
                accept=".pdf,application/pdf"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
            {pdfName && (
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200">
                <FileText size={18} className="text-maroon-600" />
                <span className="text-sm text-gray-600 truncate max-w-xs">{pdfName}</span>
              </div>
            )}
          </div>
          <p className="text-xs text-gray-400 mt-1">Max file size: 10MB, only PDF files allowed</p>
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
            {initialData ? 'Update' : 'Add'} Circular
          </button>
        </div>
      </form>
    </div>
  )
}

export default CircularForm