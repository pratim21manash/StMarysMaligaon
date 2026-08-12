import React, { useState, useEffect } from 'react'
import { Download, FileText, FileCheck, FileSpreadsheet } from 'lucide-react'
import PageHeader from '../components/common/PageHeader.jsx'
import SectionWrapper from '../components/common/SectionWrapper.jsx'

const BACKEND_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const Downloads = () => {
  const [downloads, setDownloads] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDownloads()
  }, [])

  const fetchDownloads = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/downloads`)
      const data = await response.json()
      console.log('Downloads data:', data)
      setDownloads(data.data || [])
    } catch (error) {
      console.error('Error fetching downloads:', error)
      setDownloads([])
    } finally {
      setLoading(false)
    }
  }

  const getFileIcon = (fileUrl) => {
    if (!fileUrl) return <FileText size={20} />
    const ext = fileUrl.split('.').pop()?.toLowerCase()
    switch(ext) {
      case 'pdf': return <FileCheck size={20} />
      case 'doc':
      case 'docx': return <FileSpreadsheet size={20} />
      default: return <FileText size={20} />
    }
  }

  const getFullFileUrl = (url) => {
    if (!url) return '#'
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url
    }
    return `${BACKEND_URL}${url}`
  }

  const groupByCategory = (items) => {
    return items.reduce((acc, item) => {
      const category = item.category || 'General'
      if (!acc[category]) acc[category] = []
      acc[category].push(item)
      return acc
    }, {})
  }

  if (loading) {
    return (
      <div>
        <PageHeader title="Downloads" subtitle="Forms, notices and documents" icon={<Download size={18} />} />
        <section className="section-padding">
          <div className="container-custom flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-maroon-600 border-t-transparent"></div>
          </div>
        </section>
      </div>
    )
  }

  const groupedDownloads = groupByCategory(downloads)
  const categories = Object.keys(groupedDownloads)

  return (
    <div>
      <PageHeader title="Downloads" subtitle="Forms, notices and documents" icon={<Download size={18} />} />

      <section className="section-padding">
        <div className="container-custom">
          {downloads.length === 0 ? (
            <div className="text-center py-12">
              <FileText size={48} className="mx-auto text-gray-300" />
              <p className="text-gray-500 mt-4">No downloads available.</p>
            </div>
          ) : (
            <div className="space-y-8 max-w-3xl mx-auto">
              {categories.map((category) => (
                <div key={category}>
                  <h2 className="font-serif text-xl font-bold text-maroon-900 mb-4">{category}</h2>
                  <div className="space-y-3">
                    {groupedDownloads[category].map((item) => (
                      <SectionWrapper key={item._id} className="bg-white rounded-xl shadow-sm border border-gray-100">
                        <a
                          href={getFullFileUrl(item.file)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-4 hover:bg-maroon-50/50 rounded-xl transition-all duration-300 group"
                        >
                          <span className="w-11 h-11 rounded-xl bg-maroon-50 text-maroon-800 flex items-center justify-center flex-shrink-0 group-hover:bg-maroon-100 transition-colors">
                            {getFileIcon(item.file)}
                          </span>
                          <div className="flex-1">
                            <p className="font-medium text-maroon-900 group-hover:text-maroon-700 transition-colors">
                              {item.title}
                            </p>
                            <p className="text-xs text-gray-400">
                              {item.category}
                            </p>
                          </div>
                          <Download size={18} className="text-gray-400 group-hover:text-maroon-600 transition-colors" />
                        </a>
                      </SectionWrapper>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Downloads