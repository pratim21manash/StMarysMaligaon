// src/components/home/CircularsPanel.jsx

import React, { useState } from 'react'
import { Bell, Calendar, Clock, X, Download, FileText } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { schoolInfo } from '../../data/seedData.js'

const CircularsPanel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Static circular data - Admission Notice
  const circular = {
    id: 1,
    title: 'Admission Notice for Class K.G. 2027',
    description: `The application form for admission to Class K.G. 2027 can be downloaded from the school website between 24th August 2026, 8:00 a.m. to 6th September 2026, 8:00 p.m.

The procedure for admission will be provided in the form itself.

Date: 17/08/2026`,
    date: '2026-08-17',
    time: '10:00:00',
    // PDF location in public folder - exact path from your image
    pdf: '/wp-content/uploads/2026/05/AdmissionNotice.pdf'
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

  const handleCircularClick = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleDownloadPDF = () => {
    // Open PDF from public folder - exact path from your image
    window.open(circular.pdf, '_blank')
  }

  return (
    <>
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-full max-w-sm h-full flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-maroon-800 to-maroon-700 px-4 py-3 flex items-center gap-2 flex-shrink-0">
          <Bell size={18} className="text-gold-400" />
          <h3 className="text-white font-semibold text-sm tracking-wide">Latest Circulars</h3>
          <span className="ml-auto text-[10px] text-gold-300 font-medium bg-white/10 px-2 py-0.5 rounded-full">
            1 New
          </span>
        </div>

        {/* Circulars List */}
        <div className="flex-1 divide-y divide-gray-100 overflow-y-auto min-h-0">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            onClick={handleCircularClick}
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
        {isModalOpen && (
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
                <h4 className="text-xl font-bold text-gray-800">{circular.title}</h4>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {formatDateWithTime(circular.date, circular.time).split(' ')[0]}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={16} />
                    {circular.time || '00:00:00'}
                  </span>
                </div>
                {circular.description && (
                  <div className="border-t border-gray-100 pt-4 mt-2">
                    <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                      {circular.description}
                    </p>
                  </div>
                )}
                {circular.pdf && (
                  <div className="border-t border-gray-100 pt-4 mt-2">
                    <button
                      onClick={handleDownloadPDF}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-maroon-600 hover:bg-maroon-700 text-white text-sm font-medium rounded-lg transition-colors"
                    >
                      <FileText size={16} />
                      Download Original PDF
                    </button>
                    <p className="text-xs text-gray-400 mt-2">
                      Click to download the admission notice PDF
                    </p>
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