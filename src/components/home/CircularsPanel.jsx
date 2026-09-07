import React, { useState } from 'react'
import { Bell, Calendar, Clock, X, Download, FileText, Phone, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { schoolInfo } from '../../data/seedData.js'

const CircularsPanel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Static circular data - Simplified
  const circular = {
    id: 1,
    title: '📢 KG ADMISSION 2027',
    subtitle: 'Class K.G. 2027 Admissions',
    description: `The filled up KG admission form shall be submitted by 12 September`,
    date: '2026-09-12',
    time: '23:59:59',
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
    window.open(circular.pdf, '_blank')
  }

  const handleEnquireNow = () => {
    window.location.href = '/contact-us'
  }

  return (
    <>
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-full h-full flex flex-col">
        {/* Header - Maroon Theme */}
        <div className="bg-gradient-to-r from-maroon-800 to-maroon-700 px-4 py-4 flex items-center gap-2 flex-shrink-0">
          <div className="animate-pulse">
            <Bell size={20} className="text-gold-400" />
          </div>
          <h3 className="text-white font-bold text-sm tracking-wide flex items-center gap-2">
            🔔 Important Notice
            <span className="text-[10px] bg-gold-500/20 text-gold-300 px-2 py-0.5 rounded-full animate-pulse border border-gold-400/30">
              New
            </span>
          </h3>
          <span className="ml-auto text-[10px] text-gold-300 font-medium bg-gold-500/20 px-2.5 py-0.5 rounded-full animate-pulse border border-gold-400/30">
            ⚡ Urgent
          </span>
        </div>

        {/* Main Content - Full height notice */}
        <div className="flex-1 flex flex-col p-4 space-y-3 bg-gradient-to-b from-maroon-50/30 to-white">
          {/* Notice Badge */}
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-maroon-100 text-maroon-800 text-xs font-bold rounded-full animate-pulse border border-maroon-200">
              🔥 ADMISSION OPEN
            </span>
            <span className="px-3 py-1 bg-gold-100 text-maroon-800 text-xs font-bold rounded-full border border-gold-200">
              2027-28
            </span>
          </div>

          {/* Main Message - Big, Bold, Center */}
          <div className="flex-1 flex flex-col items-center justify-center py-4 px-2">
            <div className="text-center space-y-3">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-gold-400 via-maroon-500 to-gold-400 rounded-lg blur opacity-30 animate-pulse"></div>
                <p className="relative text-2xl md:text-3xl font-extrabold text-maroon-900 leading-tight tracking-wide bg-white/80 px-4 py-3 rounded-lg border-2 border-gold-300 shadow-lg">
                  The filled up KG admission form
                  <br />
                  shall be submitted by
                  <br />
                  <span className="text-3xl md:text-4xl text-gold-600 block mt-1 animate-pulse">
                    12 September
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-maroon-600 font-medium">
                <Clock size={16} className="text-gold-500" />
                <span>⏰ Last Date: 12th September 2026, 10.30 PM</span>
              </div>
            </div>
          </div>

          {/* Action Buttons - Full width */}
          <div className="space-y-2 mt-auto">
            {/* Enquire Now Button - Primary CTA */}
            <button
              onClick={handleEnquireNow}
              className="w-full py-3 bg-gradient-to-r from-maroon-700 to-maroon-800 hover:from-maroon-800 hover:to-maroon-900 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-maroon-500/30 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <Phone size={18} className="text-gold-400" />
              Enquire Now
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* View Details & Download */}
            <div className="flex gap-2">
              <button
                onClick={handleCircularClick}
                className="flex-1 py-2.5 bg-maroon-50 hover:bg-maroon-100 text-maroon-800 font-medium rounded-lg transition-colors text-sm border border-maroon-200"
              >
                View Details
              </button>
              <button
                onClick={handleDownloadPDF}
                className="flex-1 py-2.5 bg-maroon-700 hover:bg-maroon-800 text-white font-medium rounded-lg transition-colors text-sm flex items-center justify-center gap-1"
              >
                <Download size={14} />
                Download PDF
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-maroon-50 px-4 py-2 border-t border-maroon-100 flex-shrink-0">
          <p className="text-[10px] text-maroon-600 font-medium tracking-wide text-center">
            📍 {schoolInfo.shortName || schoolInfo.name} - {schoolInfo.branch}
          </p>
        </div>
      </div>

      {/* Modal - Full Details */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto border-t-4 border-gold-500"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-gradient-to-r from-maroon-800 to-maroon-700 px-6 py-4 flex items-center justify-between rounded-t-2xl">
                <div className="flex items-center gap-2">
                  <Bell size={20} className="text-gold-400" />
                  <h3 className="text-white font-bold text-lg">📢 Admission Notice</h3>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-1.5"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-maroon-100 text-maroon-800 text-xs font-bold rounded-full animate-pulse border border-maroon-200">
                    🔥 ADMISSION OPEN
                  </span>
                  <span className="px-3 py-1 bg-gold-100 text-maroon-800 text-xs font-bold rounded-full border border-gold-200">
                    2027-28
                  </span>
                </div>

                <h4 className="text-xl font-bold text-maroon-900">{circular.title}</h4>
                <p className="text-sm font-semibold text-gold-600">{circular.subtitle}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500 bg-maroon-50 p-3 rounded-lg border border-maroon-100">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={16} className="text-gold-500" />
                    {formatDateWithTime(circular.date, circular.time).split(' ')[0]}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={16} className="text-gold-500" />
                    {circular.time || '00:00:00'}
                  </span>
                </div>

                {circular.description && (
                  <div className="border-t border-maroon-100 pt-4">
                    <div className="bg-gradient-to-r from-gold-50 to-maroon-50 p-6 rounded-xl border-2 border-gold-300 shadow-inner">
                      <p className="text-2xl md:text-3xl font-extrabold text-maroon-900 text-center leading-relaxed">
                        The filled up KG admission form
                        <br />
                        shall be submitted by
                        <br />
                        <span className="text-3xl md:text-4xl text-gold-600 block mt-2 animate-pulse">
                          12 September
                        </span>
                      </p>
                    </div>
                  </div>
                )}

                <div className="space-y-2 pt-2">
                  <button
                    onClick={handleEnquireNow}
                    className="w-full py-3 bg-gradient-to-r from-maroon-700 to-maroon-800 hover:from-maroon-800 hover:to-maroon-900 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-maroon-500/30 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Phone size={18} className="text-gold-400" />
                    Enquire Now
                  </button>

                  {circular.pdf && (
                    <button
                      onClick={handleDownloadPDF}
                      className="w-full py-2.5 bg-maroon-700 hover:bg-maroon-800 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <Download size={16} />
                      Download Admission Notice (PDF)
                    </button>
                  )}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-3 bg-maroon-50/80 border-t border-maroon-100 rounded-b-2xl flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-maroon-800 transition-colors hover:bg-maroon-100 rounded-lg"
                >
                  Close
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
