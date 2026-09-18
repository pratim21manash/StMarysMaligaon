import React, { useState } from 'react'
import {
  Bell,
  Calendar,
  Clock,
  X,
  Download,
  FileText,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { schoolInfo } from '../../data/seedData.js'

const CircularsPanel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeNotice, setActiveNotice] = useState(null)

  /* ------------------------------------------------------------------
   *  NOTICES  (newest first)
   * ------------------------------------------------------------------ */
    const notices = [
      {
        id: 1,
        isNew: true,
        theme: 'gold',
        badge: 'NEW ANNOUNCEMENT',
        badgeIcon: '✨',
        title: '📅 KG Admission 2027-28',
        subtitle: 'Interaction Date & Time',
        message:
          'Kindly download the Interaction Date & Time for KG Admission 2027-2028.',
        highlight: 'Interaction Date & Time',
        date: '2026-09-19',
        time: '10:00:00',
        session: '2027-28',
        pdf: '/management/kgAdmission.pdf',
      },
    ]

  /* ------------------------------------------------------------------
   *  HELPERS
   * ------------------------------------------------------------------ */
  const formatDateOnly = (dateStr) => {
    if (!dateStr) return ''
    const date = new Date(dateStr)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  /** Renders the message with the important date highlighted in gold */
  const renderMessage = (notice) => {
    if (!notice.highlight || !notice.message.includes(notice.highlight)) {
      return notice.message
    }
    const [before, after] = notice.message.split(notice.highlight)
    return (
      <>
        {before}
        <span className="text-gold-600 font-extrabold">{notice.highlight}</span>
        {after}
      </>
    )
  }

  const openModal = (notice) => {
    setActiveNotice(notice)
    setIsModalOpen(true)
  }

  const closeModal = () => setIsModalOpen(false)

  const handleDownloadPDF = (pdf) => {
    if (!pdf) return
    const link = document.createElement('a')
    link.href = pdf
    link.download = 'kgAdmission.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  /* ------------------------------------------------------------------
   *  RENDER
   * ------------------------------------------------------------------ */
  return (
    <>
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-full h-full min-h-0 flex flex-col">
        {/* ---------------- Header - Maroon Theme ---------------- */}
        <div className="bg-gradient-to-r from-maroon-800 to-maroon-700 px-3.5 py-3 flex items-center gap-2 flex-shrink-0">
          <div className="animate-pulse">
            <Bell size={17} className="text-gold-400" />
          </div>
          <h3 className="text-white font-bold text-[11px] tracking-wide flex items-center gap-1.5">
            🔔 Important Notice
            <span className="text-[9px] bg-gold-500/20 text-gold-300 px-1.5 py-0.5 rounded-full animate-pulse border border-gold-400/30">
              New
            </span>
          </h3>
          <span className="ml-auto text-[9px] text-gold-300 font-medium bg-gold-500/20 px-2 py-0.5 rounded-full animate-pulse border border-gold-400/30">
            ⚡ Urgent
          </span>
        </div>

        {/* Single Notice */}
        <div className="flex-1 min-h-0 p-3.5 bg-gradient-to-b from-maroon-50/40 via-white to-maroon-50/30 flex flex-col">
          {notices.map((notice) => (
            <motion.div
              key={notice.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative flex-1 flex flex-col overflow-hidden rounded-2xl border-2 border-gold-300 bg-gradient-to-br from-gold-50 via-white to-maroon-50 shadow-lg"
            >
              <div className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gold-300/40 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-maroon-300/30 blur-3xl" />
              <div className="h-1.5 w-full bg-gradient-to-r from-gold-400 via-maroon-600 to-gold-400" />

              <div className="relative flex-1 flex flex-col p-4 space-y-3">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="px-2.5 py-1 bg-gold-100 text-maroon-800 text-[10px] font-bold rounded-full border border-gold-300 animate-pulse">
                    {notice.badgeIcon} {notice.badge}
                  </span>
                  <span className="px-2.5 py-1 bg-white text-maroon-800 text-[10px] font-bold rounded-full border border-maroon-200">
                    {notice.session}
                  </span>
                  <span className="ml-auto flex items-center gap-1 text-[10px] font-extrabold text-gold-600 tracking-wide">
                    <Sparkles size={11} className="animate-pulse" />
                    NEW
                  </span>
                </div>

                <div className="text-center pt-1">
                  <h4 className="text-base font-extrabold text-maroon-900 leading-snug">
                    {notice.title}
                  </h4>
                  <p className="text-[11px] font-semibold text-gold-600 mt-0.5">
                    {notice.subtitle}
                  </p>
                </div>

                <div className="flex-1 flex items-center justify-center py-2">
                  <div className="relative w-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-gold-400 via-maroon-500 to-gold-400 rounded-xl blur opacity-25 animate-pulse" />
                    <div className="relative bg-white/90 border-2 border-gold-300 rounded-xl px-4 py-5 shadow-inner text-center">
                      <FileText size={26} className="mx-auto text-gold-500 mb-2" />
                      <p className="text-[13px] md:text-sm font-extrabold text-maroon-900 leading-relaxed">
                        {renderMessage(notice)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 text-[10px] text-maroon-600 font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar size={11} className="text-gold-500" />
                    {formatDateOnly(notice.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} className="text-gold-500" />
                    {notice.time ? notice.time : 'To be announced'}
                  </span>
                </div>

                <div className="space-y-2 pt-1">
                  {notice.pdf && (
                    <button
                      onClick={() => handleDownloadPDF(notice.pdf)}
                      className="w-full py-2.5 bg-gradient-to-r from-maroon-700 to-maroon-800 hover:from-maroon-800 hover:to-maroon-900 text-white text-[12px] font-bold rounded-xl shadow-md hover:shadow-lg hover:shadow-maroon-500/30 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <Download size={15} className="text-gold-400" />
                      Download PDF
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  )}

                  <button
                    onClick={() => openModal(notice)}
                    className="w-full py-2 bg-white hover:bg-gold-50 text-maroon-800 text-[11px] font-semibold rounded-lg transition-colors border border-gold-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ---------------- Footer ---------------- */}
        <div className="bg-maroon-50 px-3 py-1.5 border-t border-maroon-100 flex-shrink-0">
          <p className="text-[9px] text-maroon-600 font-medium tracking-wide text-center">
            📍 {schoolInfo.shortName || schoolInfo.name} - {schoolInfo.branch}
          </p>
        </div>
      </div>

      {/* ---------------- Modal - Full Details ---------------- */}
      <AnimatePresence>
        {isModalOpen && activeNotice && (
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
              <div className="sticky top-0 bg-gradient-to-r from-maroon-800 to-maroon-700 px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
                <div className="flex items-center gap-2">
                  <Bell size={20} className="text-gold-400" />
                  <h3 className="text-white font-bold text-lg">📢 Notice Details</h3>
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
                {/* Badges */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className={`px-3 py-1 text-xs font-bold rounded-full border ${
                      activeNotice.theme === 'gold'
                        ? 'bg-gold-100 text-maroon-800 border-gold-300 animate-pulse'
                        : 'bg-maroon-100 text-maroon-800 border-maroon-200'
                    }`}
                  >
                    {activeNotice.badgeIcon} {activeNotice.badge}
                  </span>
                  <span className="px-3 py-1 bg-gold-100 text-maroon-800 text-xs font-bold rounded-full border border-gold-200">
                    {activeNotice.session}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h4 className="text-xl font-bold text-maroon-900">
                    {activeNotice.title}
                  </h4>
                  <p className="text-sm font-semibold text-gold-600 mt-0.5">
                    {activeNotice.subtitle}
                  </p>
                </div>

                {/* Date & Time */}
                <div className="flex items-center gap-4 text-sm text-gray-500 bg-maroon-50 p-3 rounded-lg border border-maroon-100">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={16} className="text-gold-500" />
                    {formatDateOnly(activeNotice.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={16} className="text-gold-500" />
                    {activeNotice.time || 'To be announced'}
                  </span>
                </div>

                {/* Highlighted Message */}
                <div className="border-t border-maroon-100 pt-4">
                  <div className="bg-gradient-to-r from-gold-50 to-maroon-50 p-6 rounded-xl border-2 border-gold-300 shadow-inner">
                    <p className="text-lg md:text-xl font-extrabold text-maroon-900 text-center leading-relaxed">
                      {renderMessage(activeNotice)}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                {activeNotice.pdf && (
                  <div className="pt-2">
                    <button
                      onClick={() => handleDownloadPDF(activeNotice.pdf)}
                      className="w-full py-2.5 bg-maroon-700 hover:bg-maroon-800 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <Download size={16} />
                      Download Interaction Notice (PDF)
                    </button>
                  </div>
                )}
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