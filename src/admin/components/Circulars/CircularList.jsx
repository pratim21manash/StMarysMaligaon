import React from 'react'
import { Edit, Trash2, Bell, FileText, Eye } from 'lucide-react'

const CircularList = ({ data, loading, onEdit, onDelete }) => {
  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-maroon-600 border-t-transparent"></div>
        </div>
      </div>
    )
  }

  if (data.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
        <Bell size={48} className="mx-auto text-gray-300" />
        <p className="text-gray-500 mt-4">No circulars added yet.</p>
        <p className="text-sm text-gray-400">Click "Add Circular" to get started.</p>
      </div>
    )
  }

  const formatDate = (date) => {
    if (!date) return 'N/A'
    return new Date(date).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    })
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">PDF</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((item) => (
              <tr key={item._id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium text-gray-800">{item.title}</p>
                    {item.description && (
                      <p className="text-sm text-gray-500 truncate max-w-xs">{item.description}</p>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600">{formatDate(item.date)}</td>
                <td className="px-6 py-4 text-gray-600">{item.time || '00:00:00'}</td>
                <td className="px-6 py-4">
                  {item.pdf ? (
                    <a
                      href={`${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}${item.pdf}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-maroon-600 hover:text-maroon-700 text-sm"
                    >
                      <FileText size={16} />
                      View PDF
                    </a>
                  ) : (
                    <span className="text-gray-400 text-sm">No PDF</span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {item.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => onEdit(item)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => onDelete(item._id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors ml-1"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CircularList