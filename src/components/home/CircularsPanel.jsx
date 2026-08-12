import React, { useState, useEffect } from 'react'
import { Bell, Calendar, Clock, X, Download, FileText } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import jsPDF from 'jspdf'
import api from '../../services/api'
import { schoolInfo } from '../../data/seedData'

const CircularsPanel = () => {
  const [circulars, setCirculars] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCircular, setSelectedCircular] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    fetchCirculars()
  }, [])

  const fetchCirculars = async () => {
    try {
      const data = await api.get('/circulars')
      setCirculars(data.data || [])
    } catch (error) {
      console.error('Error fetching circulars:', error)
      setCirculars([])
    } finally {
      setLoading(false)
    }
  }

  const formatDateWithTime = (dateStr, timeStr) => {
    if (!dateStr) return ''
    const date = new Date(dateStr)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}/${month}/${year} ${timeStr || '00:00:00'}`
  }

  const formatDateOnly = (dateStr) => {
    if (!dateStr) return ''
    const date = new Date(dateStr)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  const handleCircularClick = (circular) => {
    setSelectedCircular(circular)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedCircular(null)
  }

  const handleDownloadPDF = () => {
    if (!selectedCircular) return

    const doc = new jsPDF()
    const pageWidth = doc.internal.pageSize.getWidth()
    const margin = 20
    let y = 20

    // Title: School Name
    doc.setFontSize(18)
    doc.setTextColor(128, 0, 32)
    doc.text(schoolInfo.name, margin, y)
    y += 8
    doc.setFontSize(12)
    doc.setTextColor(100)
    doc.text(schoolInfo.branch, margin, y)
    y += 12

    // Circular Title
    doc.setFontSize(16)
    doc.setTextColor(0)
    doc.text('Circular', margin, y)
    y += 10
    doc.setFontSize(14)
    doc.setTextColor(50)
    const titleLines = doc.splitTextToSize(selectedCircular.title, pageWidth - 2 * margin)
    doc.text(titleLines, margin, y)
    y += titleLines.length * 7 + 8

    // Date & Time
    doc.setFontSize(12)
    doc.setTextColor(80)
    const formatted = formatDateWithTime(selectedCircular.date, selectedCircular.time)
    doc.text(`Date & Time: ${formatted}`, margin, y)
    y += 8

    // Description
    if (selectedCircular.description) {
      doc.setFontSize(12)
      doc.setTextColor(50)
      const descLines = doc.splitTextToSize(selectedCircular.description, pageWidth - 2 * margin)
      doc.text(descLines, margin, y)
      y += descLines.length * 7 + 8
    }

    // Footer
    doc.setFontSize(10)
    doc.setTextColor(150)
    doc.text(`Generated from ${schoolInfo.shortName || schoolInfo.name}`, margin, y + 10)

    doc.save(`circular-${selectedCircular._id || 'notice'}.pdf`)
  }

  const handleDownloadOriginal = () => {
    if (selectedCircular?.pdf) {
      window.open(`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'}${selectedCircular.pdf}`, '_blank')
    }
  }

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-full max-w-sm h-full flex items-center justify-center min-h-[300px]">
        <div className="animate-spin rounded-full h-8 w-8 border-4 border-maroon-600 border-t-transparent"></div>
      </div>
    )
  }

  return (
    <>
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-full max-w-sm h-full flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-maroon-800 to-maroon-700 px-4 py-3 flex items-center gap-2 flex-shrink-0">
          <Bell size={18} className="text-gold-400" />
          <h3 className="text-white font-semibold text-sm tracking-wide">Latest Circulars</h3>
          <span className="ml-auto text-[10px] text-gold-300 font-medium bg-white/10 px-2 py-0.5 rounded-full">
            {circulars.length} New
          </span>
        </div>

        {/* Circulars List */}
        <div className="flex-1 divide-y divide-gray-100 overflow-y-auto min-h-0">
          {circulars.length === 0 ? (
            <div className="p-6 text-center text-gray-400 text-sm">
              No circulars available
            </div>
          ) : (
            circulars.map((circular, index) => (
              <motion.div
                key={circular._id || index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                onClick={() => handleCircularClick(circular)}
                className="block px-4 py-3 hover:bg-maroon-50/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-maroon-50 flex items-center justify-center flex-shrink-0 group-hover:bg-maroon-100 transition-colors mt-0.5">
                    <Bell size={14} className="text-maroon-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 group-hover:text-maroon-700 transition-colors line-clamp-2">
                      {circular.title}
                    </p>
                    <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        {formatDateOnly(circular.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {circular.time || '00:00'}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50/80 px-4 py-2.5 border-t border-gray-100 flex-shrink-0">
          <p className="text-[10px] text-gray-500 font-medium tracking-wide text-center">
            {schoolInfo.shortName || schoolInfo.name} - {schoolInfo.branch}
          </p>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedCircular && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-gradient-to-r from-maroon-800 to-maroon-700 px-6 py-4 flex items-center justify-between rounded-t-2xl">
                <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                  <Bell size={20} className="text-gold-400" />
                  Circular Details
                </h3>
                <button
                  onClick={closeModal}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-4">
                <h4 className="text-xl font-bold text-gray-800">{selectedCircular.title}</h4>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {formatDateWithTime(selectedCircular.date, selectedCircular.time).split(' ')[0]}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={16} />
                    {selectedCircular.time || '00:00:00'}
                  </span>
                </div>
                {selectedCircular.description && (
                  <div className="border-t border-gray-100 pt-4 mt-2">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {selectedCircular.description}
                    </p>
                  </div>
                )}
                {selectedCircular.pdf && (
                  <div className="border-t border-gray-100 pt-4 mt-2">
                    <button
                      onClick={handleDownloadOriginal}
                      className="inline-flex items-center gap-2 text-maroon-600 hover:text-maroon-700 font-medium text-sm"
                    >
                      <FileText size={16} />
                      Download Original PDF
                    </button>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 bg-gray-50/80 border-t border-gray-100 rounded-b-2xl flex justify-end gap-3">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={handleDownloadPDF}
                  className="px-4 py-2 bg-maroon-600 hover:bg-maroon-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
                >
                  <Download size={16} />
                  Download PDF
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default CircularsPanel