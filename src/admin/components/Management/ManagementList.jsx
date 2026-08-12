import React from 'react'
import { Edit, Trash2, User } from 'lucide-react'

const ManagementList = ({ data, loading, onEdit, onDelete }) => {
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
        <User size={48} className="mx-auto text-gray-300" />
        <p className="text-gray-500 mt-4">No management members added yet.</p>
        <p className="text-sm text-gray-400">Click "Add Member" to get started.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Image</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Designation</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data.map((item) => (
            <tr key={item._id} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <img
                  src={item.image || `https://ui-avatars.com/api/?name=${item.name}`}
                  alt={item.name}
                  className="w-10 h-10 rounded-lg object-cover"
                />
              </td>
              <td className="px-6 py-4 font-medium text-gray-800">{item.name}</td>
              <td className="px-6 py-4 text-gray-600">{item.designation}</td>
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
  )
}

export default ManagementList