import React, { useState } from 'react'
import {
  Bell,
  Calendar,
  Clock,
  X,
  Download,
  Phone,
  ArrowRight,
  Sparkles,
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
      id: 2,
      isNew: true,
      theme: 'gold',
      badge: 'NEW ANNOUNCEMENT',
      badgeIcon: '✨',
      title: '📅 KG Admission 2026-27',
      subtitle: 'Interaction Date & Time',
      message:
        'Interaction Date and Time for KG admission 26-27 will be announced on 19th September 2026',
      highlight: '19th September 2026',
      date: '2026-09-19',
      time: null,
      session: '2026-27',
      pdf: null,
    },
    {
      id: 1,
      isNew: false,
      theme: 'maroon',
      badge: 'ADMISSION OPEN',
      badgeIcon: '🔥',
      title: '📢 KG ADMISSION 2027',
      subtitle: 'Class K.G. 2027 Admissions',
      message:
        'The filled up KG admission form shall be submitted by 12 September',
      highlight: '12 September',
      date: '2026-09-12',
      time: '10:30:00',
      session: '2027-28',
      pdf: '/wp-content/uploads/2026/05/AdmissionNotice.pdf',
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

  const formatDateWithTime = (dateStr, timeStr) => {
    if (!dateStr) return ''
    return `${formatDateOnly(dateStr)} ${timeStr || '00:00:00'}`
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
    if (pdf) window.open(pdf, '_blank')
  }

  const handleEnquireNow = () => {
    window.location.href = '/contact-us'
  }

  /* ------------------------------------------------------------------
   *  RENDER
   * ------------------------------------------------------------------ */
  return (
    <>
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-full h-full flex flex-col">
        {/* ---------------- Header - Maroon Theme ---------------- */}
        <div className="bg-gradient-to-r from-maroon-800 to-maroon-700 px-4 py-4 flex items-center gap-2 flex-shrink-0">
          <div className="animate-pulse">
            <Bell size={20} className="text-gold-400" />
          </div>
          <h3 className="text-white font-bold text-sm tracking-wide flex items-center gap-2">
            🔔 Important Notices
            <span className="text-[10px] bg-gold-500/20 text-gold-300 px-2 py-0.5 rounded-full animate-pulse border border-gold-400/30">
              {notices.length} New
            </span>
          </h3>
          <span className="ml-auto text-[10px] text-gold-300 font-medium bg-gold-500/20 px-2.5 py-0.5 rounded-full animate-pulse border border-gold-400/30">
            ⚡ Urgent
          </span>
        </div>

        {/* ---------------- Notice List (scrollable) ---------------- */}
        <div className="flex-1 overflow-y-auto p-3.5 space-y-3 bg-gradient-to-b from-maroon-50/30 to-white">
          {notices.map((notice) => (
            <motion.div
              key={notice.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: notice.isNew ? 0 : 0.1 }}
              className={`relative overflow-hidden rounded-xl border-2 shadow-sm hover:shadow-lg transition-shadow duration-300 ${
                notice.theme === 'gold'
                  ? 'border-gold-300 bg-gradient-to-br from-gold-50 via-white to-maroon-50'
                  : 'border-maroon-200 bg-white'
              }`}
            >
              {/* Decorative glow (only for the brand-new notice) */}
              {notice.isNew && (
                <div className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-gold-300/40 blur-2xl" />
              )}

              {/* Top accent bar */}
              <div
                className={`h-1 w-full ${
                  notice.theme === 'gold'
                    ? 'bg-gradient-to-r from-gold-400 via-maroon-500 to-gold-400'
                    : 'bg-gradient-to-r from-maroon-700 to-maroon-500'
                }`}
              />

              <div className="relative p-3.5 space-y-2.5">
                {/* ---- Badges ---- */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className={`px-2.5 py-0.5 text-[10px] font-bold rounded-full border ${
                      notice.theme === 'gold'
                        ? 'bg-gold-100 text-maroon-800 border-gold-300 animate-pulse'
                        : 'bg-maroon-100 text-maroon-800 border-maroon-200'
                    }`}
                  >
                    {notice.badgeIcon} {notice.badge}
                  </span>

                  <span className="px-2.5 py-0.5 bg-white text-maroon-800 text-[10px] font-bold rounded-full border border-maroon-200">
                    {notice.session}
                  </span>

                  {notice.isNew && (
                    <span className="ml-auto flex items-center gap-1 text-[10px] font-extrabold text-gold-600 tracking-wide">
                      <Sparkles size={11} className="animate-pulse" />
                      NEW
                    </span>
                  )}
                </div>

                {/* ---- Title ---- */}
                <div>
                  <h4 className="text-sm font-bold text-maroon-900 leading-snug">
                    {notice.title}
                  </h4>
                  <p className="text-[11px] font-semibold text-gold-600 mt-0.5">
                    {notice.subtitle}
                  </p>
                </div>

                {/* ---- Message Box ---- */}
                <div
                  className={`rounded-lg p-3 border ${
                    notice.theme === 'gold'
                      ? 'bg-white/85 border-gold-200 shadow-inner'
                      : 'bg-maroon-50/70 border-maroon-100'
                  }`}
                >
                  <p className="text-[13px] font-semibold text-maroon-900 leading-relaxed text-center">
                    {renderMessage(notice)}
                  </p>
                </div>

                {/* ---- Meta ---- */}
                <div className="flex items-center gap-3 text-[11px] text-maroon-600 font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} className="text-gold-500" />
                    {formatDateOnly(notice.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} className="text-gold-500" />
                    {notice.time ? notice.time : 'To be announced'}
                  </span>
                </div>

                {/* ---- Actions ---- */}
                <div className="flex gap-2 pt-0.5">
                  <button
                    onClick={() => openModal(notice)}
                    className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors border ${
                      notice.theme === 'gold'
                        ? 'bg-white hover:bg-gold-50 text-maroon-800 border-gold-300'
                        : 'bg-maroon-50 hover:bg-maroon-100 text-maroon-800 border-maroon-200'
                    }`}
                  >
                    View Details
                  </button>

                  {notice.pdf ? (
                    <button
                      onClick={() => handleDownloadPDF(notice.pdf)}
                      className="flex-1 py-2 bg-maroon-700 hover:bg-maroon-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1"
                    >
                      <Download size={13} />
                      Download PDF
                    </button>
                  ) : (
                    <button
                      onClick={handleEnquireNow}
                      className="flex-1 py-2 bg-gradient-to-r from-maroon-700 to-maroon-800 hover:from-maroon-800 hover:to-maroon-900 text-white text-xs font-semibold rounded-lg shadow-md hover:shadow-lg hover:shadow-maroon-500/30 transition-all duration-300 flex items-center justify-center gap-1 group"
                    >
                      <Phone size={13} className="text-gold-400" />
                      Enquire Now
                      <ArrowRight
                        size={12}
                        className="group-hover:translate-x-0.5 transition-transform"
                      />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ---------------- Footer ---------------- */}
        <div className="bg-maroon-50 px-4 py-2 border-t border-maroon-100 flex-shrink-0">
          <p className="text-[10px] text-maroon-600 font-medium tracking-wide text-center">
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
                <div className="space-y-2 pt-2">
                  <button
                    onClick={handleEnquireNow}
                    className="w-full py-3 bg-gradient-to-r from-maroon-700 to-maroon-800 hover:from-maroon-800 hover:to-maroon-900 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-maroon-500/30 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Phone size={18} className="text-gold-400" />
                    Enquire Now
                  </button>

                  {activeNotice.pdf && (
                    <button
                      onClick={() => handleDownloadPDF(activeNotice.pdf)}
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
