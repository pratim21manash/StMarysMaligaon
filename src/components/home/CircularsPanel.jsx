// import React, { useState, useEffect } from 'react'
// import { Bell, Calendar, Clock, X, Download, FileText } from 'lucide-react'
// import { motion, AnimatePresence } from 'framer-motion'
// import jsPDF from 'jspdf'
// import api from '../../services/api'
// import { schoolInfo } from '../../data/seedData'

// const CircularsPanel = () => {
//   const [circulars, setCirculars] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [selectedCircular, setSelectedCircular] = useState(null)
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   useEffect(() => {
//     fetchCirculars()
//   }, [])

//   const fetchCirculars = async () => {
//     try {
//       const data = await api.get('/circulars')
//       setCirculars(data.data || [])
//     } catch (error) {
//       console.error('Error fetching circulars:', error)
//       setCirculars([])
//     } finally {
//       setLoading(false)
//     }
//   }

//   const formatDateWithTime = (dateStr, timeStr) => {
//     if (!dateStr) return ''
//     const date = new Date(dateStr)
//     const day = String(date.getDate()).padStart(2, '0')
//     const month = String(date.getMonth() + 1).padStart(2, '0')
//     const year = date.getFullYear()
//     return `${day}/${month}/${year} ${timeStr || '00:00:00'}`
//   }

//   const formatDateOnly = (dateStr) => {
//     if (!dateStr) return ''
//     const date = new Date(dateStr)
//     const day = String(date.getDate()).padStart(2, '0')
//     const month = String(date.getMonth() + 1).padStart(2, '0')
//     const year = date.getFullYear()
//     return `${day}/${month}/${year}`
//   }

//   const handleCircularClick = (circular) => {
//     setSelectedCircular(circular)
//     setIsModalOpen(true)
//   }

//   const closeModal = () => {
//     setIsModalOpen(false)
//     setSelectedCircular(null)
//   }

//   const handleDownloadPDF = () => {
//     if (!selectedCircular) return

//     const doc = new jsPDF()
//     const pageWidth = doc.internal.pageSize.getWidth()
//     const margin = 20
//     let y = 20

//     // Title: School Name
//     doc.setFontSize(18)
//     doc.setTextColor(128, 0, 32)
//     doc.text(schoolInfo.name, margin, y)
//     y += 8
//     doc.setFontSize(12)
//     doc.setTextColor(100)
//     doc.text(schoolInfo.branch, margin, y)
//     y += 12

//     // Circular Title
//     doc.setFontSize(16)
//     doc.setTextColor(0)
//     doc.text('Circular', margin, y)
//     y += 10
//     doc.setFontSize(14)
//     doc.setTextColor(50)
//     const titleLines = doc.splitTextToSize(selectedCircular.title, pageWidth - 2 * margin)
//     doc.text(titleLines, margin, y)
//     y += titleLines.length * 7 + 8

//     // Date & Time
//     doc.setFontSize(12)
//     doc.setTextColor(80)
//     const formatted = formatDateWithTime(selectedCircular.date, selectedCircular.time)
//     doc.text(`Date & Time: ${formatted}`, margin, y)
//     y += 8

//     // Description
//     if (selectedCircular.description) {
//       doc.setFontSize(12)
//       doc.setTextColor(50)
//       const descLines = doc.splitTextToSize(selectedCircular.description, pageWidth - 2 * margin)
//       doc.text(descLines, margin, y)
//       y += descLines.length * 7 + 8
//     }

//     // Footer
//     doc.setFontSize(10)
//     doc.setTextColor(150)
//     doc.text(`Generated from ${schoolInfo.shortName || schoolInfo.name}`, margin, y + 10)

//     doc.save(`circular-${selectedCircular._id || 'notice'}.pdf`)
//   }

//   const handleDownloadOriginal = () => {
//     if (selectedCircular?.pdf) {
//       window.open(`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'}${selectedCircular.pdf}`, '_blank')
//     }
//   }

//   if (loading) {
//     return (
//       <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-full max-w-sm h-full flex items-center justify-center min-h-[300px]">
//         <div className="animate-spin rounded-full h-8 w-8 border-4 border-maroon-600 border-t-transparent"></div>
//       </div>
//     )
//   }

//   return (
//     <>
//       <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-full max-w-sm h-full flex flex-col">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-maroon-800 to-maroon-700 px-4 py-3 flex items-center gap-2 flex-shrink-0">
//           <Bell size={18} className="text-gold-400" />
//           <h3 className="text-white font-semibold text-sm tracking-wide">Latest Circulars</h3>
//           <span className="ml-auto text-[10px] text-gold-300 font-medium bg-white/10 px-2 py-0.5 rounded-full">
//             {circulars.length} New
//           </span>
//         </div>

//         {/* Circulars List */}
//         <div className="flex-1 divide-y divide-gray-100 overflow-y-auto min-h-0">
//           {circulars.length === 0 ? (
//             <div className="p-6 text-center text-gray-400 text-sm">
//               No circulars available
//             </div>
//           ) : (
//             circulars.map((circular, index) => (
//               <motion.div
//                 key={circular._id || index}
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: index * 0.1, duration: 0.4 }}
//                 onClick={() => handleCircularClick(circular)}
//                 className="block px-4 py-3 hover:bg-maroon-50/50 transition-all duration-300 group cursor-pointer"
//               >
//                 <div className="flex items-start gap-3">
//                   <div className="w-8 h-8 rounded-lg bg-maroon-50 flex items-center justify-center flex-shrink-0 group-hover:bg-maroon-100 transition-colors mt-0.5">
//                     <Bell size={14} className="text-maroon-600" />
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <p className="text-sm font-medium text-gray-800 group-hover:text-maroon-700 transition-colors line-clamp-2">
//                       {circular.title}
//                     </p>
//                     <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
//                       <span className="flex items-center gap-1">
//                         <Calendar size={11} />
//                         {formatDateOnly(circular.date)}
//                       </span>
//                       <span className="flex items-center gap-1">
//                         <Clock size={11} />
//                         {circular.time || '00:00'}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))
//           )}
//         </div>

//         {/* Footer */}
//         <div className="bg-gray-50/80 px-4 py-2.5 border-t border-gray-100 flex-shrink-0">
//           <p className="text-[10px] text-gray-500 font-medium tracking-wide text-center">
//             {schoolInfo.shortName || schoolInfo.name} - {schoolInfo.branch}
//           </p>
//         </div>
//       </div>

//       {/* Modal */}
//       <AnimatePresence>
//         {isModalOpen && selectedCircular && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
//             onClick={closeModal}
//           >
//             <motion.div
//               initial={{ scale: 0.9, y: 20 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.9, y: 20 }}
//               transition={{ type: 'spring', damping: 25, stiffness: 300 }}
//               className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Modal Header */}
//               <div className="sticky top-0 bg-gradient-to-r from-maroon-800 to-maroon-700 px-6 py-4 flex items-center justify-between rounded-t-2xl">
//                 <h3 className="text-white font-semibold text-lg flex items-center gap-2">
//                   <Bell size={20} className="text-gold-400" />
//                   Circular Details
//                 </h3>
//                 <button
//                   onClick={closeModal}
//                   className="text-white/70 hover:text-white transition-colors"
//                 >
//                   <X size={24} />
//                 </button>
//               </div>

//               {/* Modal Body */}
//               <div className="p-6 space-y-4">
//                 <h4 className="text-xl font-bold text-gray-800">{selectedCircular.title}</h4>
//                 <div className="flex items-center gap-4 text-sm text-gray-500">
//                   <span className="flex items-center gap-1">
//                     <Calendar size={16} />
//                     {formatDateWithTime(selectedCircular.date, selectedCircular.time).split(' ')[0]}
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <Clock size={16} />
//                     {selectedCircular.time || '00:00:00'}
//                   </span>
//                 </div>
//                 {selectedCircular.description && (
//                   <div className="border-t border-gray-100 pt-4 mt-2">
//                     <p className="text-gray-600 text-sm leading-relaxed">
//                       {selectedCircular.description}
//                     </p>
//                   </div>
//                 )}
//                 {selectedCircular.pdf && (
//                   <div className="border-t border-gray-100 pt-4 mt-2">
//                     <button
//                       onClick={handleDownloadOriginal}
//                       className="inline-flex items-center gap-2 text-maroon-600 hover:text-maroon-700 font-medium text-sm"
//                     >
//                       <FileText size={16} />
//                       Download Original PDF
//                     </button>
//                   </div>
//                 )}
//               </div>

//               {/* Modal Footer */}
//               <div className="px-6 py-4 bg-gray-50/80 border-t border-gray-100 rounded-b-2xl flex justify-end gap-3">
//                 <button
//                   onClick={closeModal}
//                   className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
//                 >
//                   Close
//                 </button>
//                 <button
//                   onClick={handleDownloadPDF}
//                   className="px-4 py-2 bg-maroon-600 hover:bg-maroon-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
//                 >
//                   <Download size={16} />
//                   Download PDF
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }

// export default CircularsPanel






// src/components/home/CircularsPanel.jsx

import React, { useState, useEffect, useRef } from 'react'
import { Bell, Calendar, Clock, X, Download, FileText, AlertCircle, ExternalLink, Sparkles, Star } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { schoolInfo } from '../../data/seedData.js'

const CircularsPanel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)

  // Static circular data - Admission Notice
  const circular = {
    id: 1,
    title: '📢 ADMISSION NOTICE 2027',
    subtitle: 'Class K.G. 2027 Admissions Open',
    description: `The application form for admission to Class K.G. 2027 can be downloaded from the school website between 24th August 2026, 8:00 a.m. to 6th September 2026, 8:00 p.m.

The procedure for admission will be provided in the form itself.

📅 Last Date: 6th September 2026, 8:00 PM`,
    date: '2026-08-17',
    time: '10:00:00',
    pdf: '/uploads/AdmissionNotice.pdf'
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
        setMousePosition({ x, y })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

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

  // 3D Tilt effect
  const getTransform = () => {
    const rotateX = mousePosition.y * -8
    const rotateY = mousePosition.x * 8
    return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
  }

  return (
    <>
      <div 
        ref={cardRef}
        className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-full h-full flex flex-col relative transition-all duration-200 ease-out"
        style={{ 
          transform: getTransform(),
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* ====== 3D GLOWING BORDER ANIMATION ====== */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none z-0">
          {/* Maroon & Gold Glow Rings */}
          <div className="absolute -inset-1 bg-gradient-to-r from-maroon-700 via-gold-400 to-maroon-700 rounded-2xl opacity-75 blur-sm animate-pulse" />
          <div className="absolute -inset-1 bg-gradient-to-r from-maroon-600 via-gold-500 to-maroon-600 rounded-2xl opacity-50 blur-md animate-pulse" style={{ animationDelay: '150ms' }} />
          <div className="absolute -inset-1 bg-gradient-to-r from-maroon-500 via-gold-300 to-maroon-500 rounded-2xl opacity-30 blur-xl animate-pulse" style={{ animationDelay: '300ms' }} />
          
          {/* Floating Particles (3D Effect) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-gold-400/20 animate-float"
                style={{
                  width: Math.random() * 6 + 2 + 'px',
                  height: Math.random() * 6 + 2 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  animationDelay: Math.random() * 3 + 's',
                  animationDuration: Math.random() * 4 + 3 + 's',
                  opacity: Math.random() * 0.5 + 0.2
                }}
              />
            ))}
          </div>
        </div>

        {/* ====== INNER CONTENT ====== */}
        <div className="relative z-10 flex flex-col h-full">
          {/* ====== HEADER - MAROON & GOLD THEME ====== */}
          <div className="relative bg-gradient-to-r from-maroon-800 via-maroon-700 to-maroon-800 px-4 py-4 flex items-center gap-3 flex-shrink-0 overflow-hidden">
            {/* Animated shimmer overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/10 to-transparent shimmer-animation" />
            <div className="absolute -inset-1 bg-gradient-to-r from-gold-400/20 via-maroon-300/10 to-gold-400/20 blur-xl animate-pulse" />
            
            {/* Gold Border Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
            
            <div className="relative flex items-center gap-3 w-full">
              <div className="relative">
                <div className="absolute inset-0 bg-gold-400/30 blur-lg animate-pulse" />
                <Bell size={22} className="text-gold-300 drop-shadow-lg relative z-10" />
              </div>
              <h3 className="text-white font-bold text-base tracking-wide flex items-center gap-2 drop-shadow-lg">
                🔔 Latest Circulars
                <span className="ml-1 text-[10px] bg-gold-500/20 text-gold-300 px-2.5 py-0.5 rounded-full font-medium animate-pulse border border-gold-400/30">
                  ⚡ Important
                </span>
              </h3>
              <span className="ml-auto text-[10px] text-gold-300 font-medium bg-gold-500/20 px-2.5 py-0.5 rounded-full animate-pulse border border-gold-400/30">
                1 New
              </span>
            </div>
          </div>

          {/* ====== CIRCULAR CONTENT ====== */}
          <div className="flex-1 flex flex-col cursor-pointer hover:bg-maroon-50/30 transition-all duration-300 relative" onClick={handleCircularClick}>
            {/* ====== GLOWING ALERT BANNER ====== */}
            <div className="relative mx-4 mt-4 rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-maroon-400/30 via-gold-400/20 to-maroon-400/30 blur-xl animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 via-transparent to-gold-500/10 shimmer-animation" />
              
              <div className="relative bg-gradient-to-r from-maroon-50 via-gold-50 to-maroon-50 border-l-4 border-gold-500 p-3 rounded-r-lg shadow-lg shadow-gold-200/30">
                <div className="flex items-start gap-2">
                  <div className="animate-pulse">
                    <AlertCircle size={18} className="text-maroon-700 flex-shrink-0 mt-0.5 drop-shadow-md" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-maroon-800 uppercase tracking-wide flex items-center gap-2">
                      🔥 Admission Notice
                      <span className="text-[8px] bg-gradient-to-r from-maroon-600 to-maroon-700 text-white px-1.5 py-0.5 rounded-full animate-pulse shadow-md shadow-maroon-500/30">NEW</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ====== MAIN NOTICE CARD ====== */}
            <div className="flex-1 px-4 py-3 space-y-2">
              <div className="relative bg-gradient-to-br from-maroon-50/60 via-white to-gold-50/40 rounded-xl p-3 border border-gold-200/50 shadow-lg shadow-gold-200/20 hover:shadow-xl hover:shadow-maroon-300/20 transition-all duration-300 overflow-hidden group">
                {/* Glowing effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-400/20 via-maroon-400/10 to-gold-400/20 blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* 3D Floating Stars */}
                <div className="absolute top-0 right-0 text-gold-400/10 text-4xl animate-spin-slow">✦</div>
                <div className="absolute bottom-0 left-0 text-maroon-400/10 text-3xl animate-spin-slow-reverse">✦</div>
                
                <div className="relative flex items-start gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-maroon-600 blur-lg animate-pulse opacity-50" />
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 via-gold-500 to-maroon-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-gold-400/30 relative z-10">
                      <Bell size={20} className="text-white drop-shadow-md" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-maroon-900 leading-tight drop-shadow-sm">
                      {circular.title}
                    </p>
                    <p className="text-xs font-semibold text-gold-600 mt-0.5 flex items-center gap-1">
                      <Sparkles size={12} className="text-gold-400 animate-pulse" />
                      {circular.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-2 bg-white/70 rounded-lg p-2 border border-gold-100/50 shadow-inner">
                  <p className="text-xs text-gray-700 leading-relaxed line-clamp-3">
                    {circular.description.split('\n')[0]}
                  </p>
                  <p className="text-xs font-semibold text-maroon-700 mt-1 flex items-center gap-1">
                    <span className="text-[10px] animate-pulse text-gold-500">📅</span>
                    Last Date: 6th September 2026
                  </p>
                </div>

                {/* Date and Download */}
                <div className="flex items-center justify-between pt-2 mt-2 border-t border-gold-100/50">
                  <div className="flex items-center gap-3 text-[10px] text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} className="text-gold-500" />
                      {formatDateOnly(circular.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} className="text-gold-500" />
                      {circular.time || '00:00'}
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDownloadPDF()
                    }}
                    className="relative group/btn flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-maroon-700 to-maroon-800 hover:from-maroon-800 hover:to-maroon-900 text-white text-[10px] font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-maroon-500/40 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gold-400/20 to-transparent shimmer-animation" />
                    <div className="absolute -inset-1 bg-gold-400/20 blur-md opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                    <Download size={12} className="relative z-10" />
                    <span className="relative z-10">Download PDF</span>
                  </button>
                </div>

                {/* Click to view */}
                <div className="text-center pt-1">
                  <span className="text-[9px] text-gold-600 font-medium flex items-center justify-center gap-1 hover:underline group-hover:gap-2 transition-all duration-300">
                    Click to view full notice
                    <ExternalLink size={10} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ====== FOOTER ====== */}
          <div className="bg-gradient-to-r from-maroon-50 via-gold-50 to-maroon-50 px-4 py-2.5 border-t border-gold-200/50 flex-shrink-0 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-300/10 via-transparent to-gold-300/10 shimmer-animation" />
            <div className="absolute inset-0 bg-gradient-to-r from-maroon-500/5 via-gold-400/5 to-maroon-500/5" />
            <p className="relative text-[10px] text-maroon-700 font-medium tracking-wide text-center flex items-center justify-center gap-2">
              <span className="animate-pulse text-gold-500">✦</span>
              {schoolInfo.shortName || schoolInfo.name} - {schoolInfo.branch}
              <span className="animate-pulse text-gold-500">✦</span>
            </p>
          </div>
        </div>
      </div>

      {/* ====== MODAL - PREMIUM ====== */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, rotateX: -10 }}
              animate={{ scale: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.9, y: 20, rotateX: 10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal 3D Glow Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-400 via-maroon-600 to-gold-400 rounded-2xl opacity-60 blur-lg animate-pulse pointer-events-none" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-maroon-500 via-gold-400 to-maroon-500 rounded-2xl opacity-30 blur-xl animate-pulse pointer-events-none" style={{ animationDelay: '300ms' }} />
              
              <div className="relative bg-white rounded-2xl overflow-hidden border-t-4 border-gold-500">
                {/* Modal Header */}
                <div className="sticky top-0 bg-gradient-to-r from-maroon-800 via-maroon-700 to-maroon-800 px-6 py-5 flex items-center justify-between rounded-t-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/10 to-transparent shimmer-animation" />
                  <div className="absolute -inset-1 bg-gold-400/10 blur-xl animate-pulse" />
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
                  
                  <div className="relative flex items-center gap-3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gold-400/30 blur-lg animate-pulse" />
                      <Bell size={24} className="text-gold-300 drop-shadow-lg relative z-10" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg drop-shadow-lg flex items-center gap-2">
                        ⚠️ Important Notice
                        <span className="text-[10px] bg-gold-500/20 text-gold-300 px-2 py-0.5 rounded-full animate-pulse border border-gold-400/30">
                          ADMISSION
                        </span>
                      </h3>
                      <p className="text-gold-300/80 text-xs drop-shadow">Admission Notice 2027</p>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="relative text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-1.5"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 space-y-4">
                  {/* Alert Banner */}
                  <div className="relative bg-gradient-to-r from-maroon-50 via-gold-50 to-maroon-50 border-l-4 border-gold-500 p-4 rounded-r-lg shadow-lg shadow-gold-200/30 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-gold-400/5 via-transparent to-gold-400/5 shimmer-animation" />
                    <div className="absolute -inset-1 bg-gold-400/10 blur-md animate-pulse" />
                    
                    <div className="relative flex items-start gap-3">
                      <div className="animate-pulse">
                        <AlertCircle size={24} className="text-maroon-700 flex-shrink-0 mt-0.5 drop-shadow-md" />
                      </div>
                      <div>
                        <h4 className="font-bold text-maroon-900 text-lg drop-shadow-sm flex items-center gap-2">
                          {circular.title}
                          <span className="text-[8px] bg-gradient-to-r from-maroon-600 to-maroon-700 text-white px-1.5 py-0.5 rounded-full animate-pulse shadow-md shadow-maroon-500/30">HOT</span>
                        </h4>
                        <p className="text-sm font-semibold text-gold-600 flex items-center gap-1">
                          <Sparkles size={14} className="text-gold-400 animate-pulse" />
                          {circular.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-500 bg-gradient-to-r from-maroon-50 to-gold-50 p-3 rounded-lg border border-gold-200/50 shadow-inner">
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
                    <div className="border-t border-gold-100 pt-4 mt-2">
                      <div className="relative bg-gradient-to-br from-maroon-50/60 via-white to-gold-50/40 p-4 rounded-lg border border-gold-200/50 shadow-lg shadow-gold-200/20 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-gold-400/5 via-transparent to-gold-400/5 shimmer-animation" />
                        <div className="absolute top-0 right-0 text-gold-400/10 text-4xl animate-spin-slow">✦</div>
                        <div className="relative">
                          <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                            {circular.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {circular.pdf && (
                    <div className="border-t border-gold-100 pt-4 mt-2">
                      <button
                        onClick={handleDownloadPDF}
                        className="relative group/btn inline-flex items-center gap-2.5 px-5 py-3 bg-gradient-to-r from-maroon-700 to-maroon-800 hover:from-maroon-800 hover:to-maroon-900 text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-maroon-500/40 w-full justify-center overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-gold-400/20 to-transparent shimmer-animation" />
                        <div className="absolute -inset-1 bg-gold-400/20 blur-md opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                        <FileText size={18} className="relative z-10" />
                        <span className="relative z-10">Download Admission Notice (PDF)</span>
                        <Download size={16} className="relative z-10 group-hover/btn:translate-y-0.5 transition-transform" />
                      </button>
                      <p className="text-xs text-gray-400 mt-2 text-center flex items-center justify-center gap-1">
                        <span className="animate-pulse text-gold-500">✦</span>
                        Click to download the official admission notice
                        <span className="animate-pulse text-gold-500">✦</span>
                      </p>
                    </div>
                  )}
                </div>

                {/* Modal Footer */}
                <div className="px-6 py-4 bg-gradient-to-r from-maroon-50/80 via-gold-50/80 to-maroon-50/80 border-t border-gold-100 rounded-b-2xl flex justify-end relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-300/5 via-transparent to-gold-300/5 shimmer-animation" />
                  <button
                    onClick={closeModal}
                    className="relative px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-maroon-800 transition-colors hover:bg-gold-100 rounded-lg"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ====== CSS ANIMATIONS ====== */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .shimmer-animation {
          animation: shimmer 2s infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        @keyframes spin-slow-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  )
}

export default CircularsPanel