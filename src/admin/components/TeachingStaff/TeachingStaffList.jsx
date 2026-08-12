import React, { useState } from 'react'
import { Edit, Trash2, GraduationCap, ChevronDown, ChevronRight } from 'lucide-react'

const TeachingStaffList = ({ data, loading, onEdit, onDelete }) => {
  const [expandedCategory, setExpandedCategory] = useState(null)

  const categories = {
    prt: { label: 'PRT Staff', icon: '👶', color: 'bg-green-100 text-green-700' },
    tgt: { label: 'TGT Staff', icon: '📚', color: 'bg-blue-100 text-blue-700' },
    pgt: { label: 'PGT Staff', icon: '🎓', color: 'bg-purple-100 text-purple-700' }
  }

  const groupedData = data.reduce((acc, item) => {
    const category = item.category || 'tgt'
    if (!acc[category]) acc[category] = []
    acc[category].push(item)
    return acc
  }, {})

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category)
  }

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
        <GraduationCap size={48} className="mx-auto text-gray-300" />
        <p className="text-gray-500 mt-4">No teaching staff added yet.</p>
        <p className="text-sm text-gray-400">Click "Add Teacher" to get started.</p>
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
    <div className="space-y-4">
      {Object.keys(categories).map((categoryKey) => {
        const items = groupedData[categoryKey] || []
        const isExpanded = expandedCategory === categoryKey
        const categoryInfo = categories[categoryKey]

        return (
          <div key={categoryKey} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <button
              onClick={() => toggleCategory(categoryKey)}
              className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{categoryInfo.icon}</span>
                <span className="font-semibold text-gray-800">{categoryInfo.label}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${categoryInfo.color}`}>
                  {items.length}
                </span>
              </div>
              {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>

            {isExpanded && (
              <div className="overflow-x-auto border-t border-gray-100">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Image</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Designation</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Qualification</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Experience</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {items.map((item) => (
                      <tr key={item._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <img
                            src={item.image || `https://ui-avatars.com/api/?name=${item.name}&background=7A0C1E&color=fff&size=40`}
                            alt={item.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        </td>
                        <td className="px-6 py-4 font-medium text-gray-800">{item.name}</td>
                        <td className="px-6 py-4 text-gray-600">{item.designation}</td>
                        <td className="px-6 py-4 text-gray-600">{item.qualification || 'N/A'}</td>
                        <td className="px-6 py-4 text-gray-600">{item.experience || 0} years</td>
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
            )}
          </div>
        )
      })}
    </div>
  )
}

export default TeachingStaffList