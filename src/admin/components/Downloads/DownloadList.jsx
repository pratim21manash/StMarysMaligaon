import React, { useState } from 'react'
import { Edit, Trash2, FileText, Download, ChevronDown, ChevronRight } from 'lucide-react'

const DownloadList = ({ data, loading, onEdit, onDelete }) => {
  const [expandedCategories, setExpandedCategories] = useState({})

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
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
        <FileText size={48} className="mx-auto text-gray-300" />
        <p className="text-gray-500 mt-4">No files added yet.</p>
        <p className="text-sm text-gray-400">Click "Add File" to get started.</p>
      </div>
    )
  }

  // Group by category
  const groupedData = data.reduce((acc, item) => {
    const category = item.category || 'General'
    if (!acc[category]) acc[category] = []
    acc[category].push(item)
    return acc
  }, {})

  const getFileExtension = (fileUrl) => {
    if (!fileUrl) return 'file'
    return fileUrl.split('.').pop()?.toUpperCase() || 'FILE'
  }

  return (
    <div className="space-y-4">
      {Object.keys(groupedData).map((category) => {
        const items = groupedData[category]
        const isExpanded = expandedCategories[category]

        return (
          <div key={category} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <button
              onClick={() => toggleCategory(category)}
              className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                <span className="font-semibold text-gray-800">{category}</span>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                  {items.length} files
                </span>
              </div>
            </button>

            {isExpanded && (
              <div className="border-t border-gray-100 divide-y divide-gray-100">
                {items.map((item) => (
                  <div key={item._id} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-maroon-50 text-maroon-800 flex items-center justify-center">
                        <FileText size={18} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{item.title}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs text-gray-400">{getFileExtension(item.file)}</span>
                          <span className="text-xs text-gray-300">•</span>
                          <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-medium ${item.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {item.isActive ? 'Active' : 'Inactive'}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.file && (
                        <a
                          href={`${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}${item.file}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-500 hover:text-maroon-600 hover:bg-maroon-50 rounded-lg transition-colors"
                        >
                          <Download size={18} />
                        </a>
                      )}
                      <button
                        onClick={() => onEdit(item)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => onDelete(item._id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default DownloadList