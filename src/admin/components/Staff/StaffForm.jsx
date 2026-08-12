import React, { useState, useEffect } from 'react'
import { X, Upload } from 'lucide-react'

const StaffForm = ({ onSubmit, onCancel, initialData }) => {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    image: null,
    dob: '',
    qualification: '',
    experience: 0,
    dateOfAppointment: '',
    typeOfAppointment: 'permanent',
    order: 0,
    isActive: true
  })
  const [imagePreview, setImagePreview] = useState(null)

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || '',
        designation: initialData.designation || '',
        image: null,
        dob: initialData.dob ? new Date(initialData.dob).toISOString().split('T')[0] : '',
        qualification: initialData.qualification || '',
        experience: initialData.experience || 0,
        dateOfAppointment: initialData.dateOfAppointment ? new Date(initialData.dateOfAppointment).toISOString().split('T')[0] : '',
        typeOfAppointment: initialData.typeOfAppointment || 'permanent',
        order: initialData.order || 0,
        isActive: initialData.isActive !== undefined ? initialData.isActive : true
      })
      if (initialData.image) {
        setImagePreview(initialData.image)
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
      setFormData({ ...formData, image: file })
      const reader = new FileReader()
      reader.onloadend = () => setImagePreview(reader.result)
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
          {initialData ? 'Edit Staff Member' : 'Add Staff Member'}
        </h2>
        <button onClick={onCancel} className="p-2 hover:bg-gray-100 rounded-lg">
          <X size={20} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Designation *</label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Qualification</label>
            <input
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Experience (years)</label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              min="0"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date of Appointment</label>
            <input
              type="date"
              name="dateOfAppointment"
              value={formData.dateOfAppointment}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Type of Appointment</label>
          <select
            name="typeOfAppointment"
            value={formData.typeOfAppointment}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
          >
            <option value="permanent">Permanent</option>
            <option value="contract">Contract</option>
            <option value="temporary">Temporary</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
          <div className="flex items-center gap-4">
            <label className="cursor-pointer">
              <div className="flex items-center gap-2 px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg hover:border-maroon-400 transition-colors">
                <Upload size={18} className="text-gray-400" />
                <span className="text-sm text-gray-500">Upload Image</span>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
            {imagePreview && (
              <img src={imagePreview} alt="Preview" className="w-12 h-12 rounded-lg object-cover" />
            )}
          </div>
          <p className="text-xs text-gray-400 mt-1">Recommended: 400x400px, max 5MB</p>
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
            {initialData ? 'Update' : 'Add'} Staff
          </button>
        </div>
      </form>
    </div>
  )
}

export default StaffForm