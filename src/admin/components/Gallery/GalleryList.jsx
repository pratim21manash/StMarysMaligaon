import React, { useState } from 'react'
import { Edit, Trash2, Image, Eye, ChevronDown, ChevronRight } from 'lucide-react'

const BACKEND_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const GalleryList = ({ data, loading, onEdit, onDelete }) => {
  const [expandedItems, setExpandedItems] = useState({})

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const getFullImageUrl = (url) => {
    if (!url) return ''
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url
    }
    return `${BACKEND_URL}${url}`
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
        <Image size={48} className="mx-auto text-gray-300" />
        <p className="text-gray-500 mt-4">No gallery events added yet.</p>
        <p className="text-sm text-gray-400">Click "Add Event" to get started.</p>
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
      {data.map((item) => {
        const isExpanded = expandedItems[item._id]
        const imageCount = item.images?.length || 0

        return (
          <div key={item._id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors">
              <button
                onClick={() => toggleExpand(item._id)}
                className="flex items-center gap-4 flex-1"
              >
                {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800">{item.eventName}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-gray-500">{formatDate(item.date)}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">{imageCount} photos</span>
                  </div>
                </div>
              </button>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {item.isActive ? 'Active' : 'Inactive'}
                </span>
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

            {isExpanded && (
              <div className="border-t border-gray-100 p-4">
                {item.description && (
                  <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                )}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {item.images?.map((img, idx) => {
                    const imageUrl = getFullImageUrl(img.url)
                    console.log('Admin image URL:', imageUrl)
                    return (
                      <div key={idx} className="relative group">
                        <img
                          src={imageUrl}
                          alt={img.caption || item.eventName}
                          className="w-full h-32 object-cover rounded-lg shadow-sm"
                          onError={(e) => {
                            console.error('Failed to load admin image:', imageUrl)
                            e.target.src = 'https://via.placeholder.com/400x300?text=No+Image'
                          }}
                        />
                        {img.caption && (
                          <span className="absolute bottom-1 left-1 text-[10px] bg-black/50 text-white px-1.5 py-0.5 rounded">
                            {img.caption}
                          </span>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default GalleryList