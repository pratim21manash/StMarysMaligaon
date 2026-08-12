import React, { useState, useEffect } from 'react'
import { X, Upload, Trash2 } from 'lucide-react'

const GalleryForm = ({ onSubmit, onCancel, initialData }) => {
  const [formData, setFormData] = useState({
    eventName: '',
    description: '',
    date: '',
    images: [], // This should always be an array of File objects
    isActive: true
  })
  const [imagePreviews, setImagePreviews] = useState([])
  const [existingImages, setExistingImages] = useState([])

  useEffect(() => {
    if (initialData) {
      setFormData({
        eventName: initialData.eventName || '',
        description: initialData.description || '',
        date: initialData.date ? new Date(initialData.date).toISOString().split('T')[0] : '',
        images: [], // Reset for new uploads
        isActive: initialData.isActive !== undefined ? initialData.isActive : true
      })
      if (initialData.images && initialData.images.length > 0) {
        setExistingImages(initialData.images)
        setImagePreviews(initialData.images.map(img => img.url))
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
    const files = Array.from(e.target.files)
    
    // Limit to 4 images total (existing + new)
    const totalImages = imagePreviews.length + files.length
    if (totalImages > 4) {
      alert('Maximum 4 images allowed per event')
      e.target.value = ''
      return
    }

    // Validate file size (max 5MB each)
    const validFiles = files.filter(file => {
      if (file.size > 5 * 1024 * 1024) {
        alert(`File ${file.name} is too large. Max 5MB allowed.`)
        return false
      }
      return true
    })

    if (validFiles.length === 0) {
      e.target.value = ''
      return
    }

    // Add valid files to the images array (these are File objects)
    setFormData({
      ...formData,
      images: [...formData.images, ...validFiles]
    })

    // Create previews for display
    const newPreviews = validFiles.map(file => URL.createObjectURL(file))
    setImagePreviews([...imagePreviews, ...newPreviews])
    
    e.target.value = ''
  }

  const removeImage = (index) => {
    const newPreviews = [...imagePreviews]
    newPreviews.splice(index, 1)
    setImagePreviews(newPreviews)

    const newImages = [...formData.images]
    newImages.splice(index, 1)
    setFormData({ ...formData, images: newImages })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    console.log('Submitting form data:', formData)
    console.log('Images to upload:', formData.images)
    
    // Check if there are images
    if (formData.images.length === 0 && imagePreviews.length === 0) {
      alert('Please upload at least one image')
      return
    }
    
    // Send only new images that are File objects
    const submitData = {
      ...formData,
      images: formData.images.filter(img => img instanceof File)
    }
    
    console.log('Submit data:', submitData)
    onSubmit(submitData)
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          {initialData ? 'Edit Gallery Event' : 'Add Gallery Event'}
        </h2>
        <button onClick={onCancel} className="p-2 hover:bg-gray-100 rounded-lg">
          <X size={20} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Event Name *</label>
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            required
            placeholder="e.g., Annual Sports Day 2026"
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="2"
            placeholder="Brief description of the event (optional)"
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Event Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Photos (Max 4)</label>
          <div className="flex items-center gap-4">
            <label className="cursor-pointer">
              <div className={`flex items-center gap-2 px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg hover:border-maroon-400 transition-colors ${imagePreviews.length >= 4 ? 'opacity-50 cursor-not-allowed' : ''}`}>
                <Upload size={18} className="text-gray-400" />
                <span className="text-sm text-gray-500">
                  {imagePreviews.length >= 4 ? 'Max 4 images' : 'Upload Images'}
                </span>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                multiple
                disabled={imagePreviews.length >= 4}
              />
            </label>
            <span className="text-xs text-gray-400">
              {imagePreviews.length}/4 images
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">Max 4 images per event, 5MB each, auto-compressed</p>
        </div>

        {imagePreviews.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
            {imagePreviews.map((preview, index) => (
              <div key={index} className="relative group">
                <img
                  src={preview}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg shadow-sm"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 p-1 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700"
                >
                  <Trash2 size={14} />
                </button>
                <span className="absolute bottom-1 left-1 text-[10px] bg-black/50 text-white px-1.5 py-0.5 rounded">
                  {index + 1}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center">
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
            {initialData ? 'Update' : 'Add'} Event
          </button>
        </div>
      </form>
    </div>
  )
}

export default GalleryForm