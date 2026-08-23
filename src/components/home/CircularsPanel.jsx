// // src/components/home/CircularsPanel.jsx

// import React, { useState } from 'react'
// import { Bell, Calendar, Clock, X, Download, FileText, AlertCircle, ExternalLink, Sparkles } from 'lucide-react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { schoolInfo } from '../../data/seedData.js'

// const CircularsPanel = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   // Static circular data - Admission Notice
//   const circular = {
//     id: 1,
//     title: '📢 ADMISSION NOTICE 2027',
//     subtitle: 'Class K.G. 2027 Admissions Open',
//     description: `The application form for admission to Class K.G. 2027 can be downloaded from the school website between 24th August 2026, 8:00 a.m. to 6th September 2026, 8:00 p.m.

// The procedure for admission will be provided in the form itself.

// 📅 Last Date: 6th September 2026, 8:00 PM`,
//     date: '2026-08-17',
//     time: '10:00:00',
//     pdf: '/uploads/AdmissionNotice.pdf'
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

//   const handleCircularClick = () => {
//     setIsModalOpen(true)
//   }

//   const closeModal = () => {
//     setIsModalOpen(false)
//   }

//   const handleDownloadPDF = () => {
//     window.open(circular.pdf, '_blank')
//   }

//   return (
//     <>
//       <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-full h-full flex flex-col relative">
//         {/* Premium Glowing Border Animation */}
//         <div className="absolute inset-0 rounded-2xl pointer-events-none z-0">
//           <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-2xl opacity-75 blur-sm animate-pulse" />
//           <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-2xl opacity-50 blur-md animate-pulse" style={{ animationDelay: '150ms' }} />
//           <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-300 via-amber-400 to-gold-500 rounded-2xl opacity-30 blur-xl animate-pulse" style={{ animationDelay: '300ms' }} />
//         </div>

//         {/* Inner Content */}
//         <div className="relative z-10 flex flex-col h-full">
//           {/* Header - Premium Glowing */}
//           <div className="relative bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 px-4 py-4 flex items-center gap-3 flex-shrink-0 overflow-hidden">
//             {/* Animated background glow */}
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent shimmer-animation" />
//             <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/30 via-amber-300/20 to-amber-400/30 blur-xl animate-pulse" />
            
//             <div className="relative flex items-center gap-3 w-full">
//               <div className="animate-pulse">
//                 <Bell size={22} className="text-white drop-shadow-lg" />
//               </div>
//               <h3 className="text-white font-bold text-base tracking-wide flex items-center gap-2 drop-shadow-lg">
//                 🔔 Latest Circulars
//                 <span className="ml-1 text-[10px] bg-white/20 text-white px-2.5 py-0.5 rounded-full font-medium animate-pulse border border-white/30">
//                   ⚡ Important
//                 </span>
//               </h3>
//               <span className="ml-auto text-[10px] text-white font-medium bg-white/20 px-2.5 py-0.5 rounded-full animate-pulse border border-white/30">
//                 1 New
//               </span>
//             </div>
//           </div>

//           {/* Circular Content - Premium Glowing Effect */}
//           <div className="flex-1 flex flex-col cursor-pointer hover:bg-amber-50/50 transition-all duration-300 relative" onClick={handleCircularClick}>
//             {/* Glowing Alert Banner */}
//             <div className="relative mx-4 mt-4 rounded-lg overflow-hidden group">
//               {/* Glow background */}
//               <div className="absolute inset-0 bg-gradient-to-r from-amber-400/50 via-amber-300/30 to-amber-400/50 blur-xl animate-pulse" />
//               <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-transparent to-amber-500/20 shimmer-animation" />
              
//               <div className="relative bg-gradient-to-r from-amber-100 via-amber-50 to-amber-100 border-l-4 border-amber-500 p-3 rounded-r-lg shadow-lg shadow-amber-200/50">
//                 <div className="flex items-start gap-2">
//                   <div className="animate-pulse">
//                     <AlertCircle size={18} className="text-amber-600 flex-shrink-0 mt-0.5 drop-shadow-md" />
//                   </div>
//                   <div>
//                     <p className="text-xs font-bold text-amber-800 uppercase tracking-wide flex items-center gap-2">
//                       🔥 Admission Notice
//                       <span className="text-[8px] bg-amber-500 text-white px-1.5 py-0.5 rounded-full animate-pulse">NEW</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Main Notice Content - Glowing Card */}
//             <div className="flex-1 px-4 py-3 space-y-2">
//               <div className="relative bg-gradient-to-br from-amber-50/80 to-white rounded-xl p-3 border border-amber-200/50 shadow-lg shadow-amber-200/30 hover:shadow-xl hover:shadow-amber-300/40 transition-all duration-300">
//                 {/* Glow effect */}
//                 <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400/20 via-amber-300/10 to-amber-400/20 blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
//                 <div className="relative flex items-start gap-3">
//                   <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-amber-400/50 animate-pulse">
//                     <Bell size={20} className="text-white drop-shadow-md" />
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <p className="text-sm font-bold text-amber-800 leading-tight drop-shadow-sm">
//                       {circular.title}
//                     </p>
//                     <p className="text-xs font-semibold text-amber-600 mt-0.5 flex items-center gap-1">
//                       <Sparkles size={12} className="text-amber-400 animate-pulse" />
//                       {circular.subtitle}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Description with Glow */}
//                 <div className="mt-2 bg-white/60 rounded-lg p-2 border border-amber-100/50 shadow-inner">
//                   <p className="text-xs text-gray-700 leading-relaxed line-clamp-3">
//                     {circular.description.split('\n')[0]}
//                   </p>
//                   <p className="text-xs font-semibold text-amber-700 mt-1 flex items-center gap-1">
//                     <span className="text-[10px] animate-pulse">📅</span>
//                     Last Date: 6th September 2026
//                   </p>
//                 </div>

//                 {/* Date and Download Button with Glow */}
//                 <div className="flex items-center justify-between pt-2 mt-2 border-t border-amber-100/50">
//                   <div className="flex items-center gap-3 text-[10px] text-gray-400">
//                     <span className="flex items-center gap-1">
//                       <Calendar size={11} className="text-amber-500" />
//                       {formatDateOnly(circular.date)}
//                     </span>
//                     <span className="flex items-center gap-1">
//                       <Clock size={11} className="text-amber-500" />
//                       {circular.time || '00:00'}
//                     </span>
//                   </div>
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation()
//                       handleDownloadPDF()
//                     }}
//                     className="relative group/btn flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-[10px] font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-amber-400/50 overflow-hidden"
//                   >
//                     {/* Button glow effect */}
//                     <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent shimmer-animation" />
//                     <div className="absolute -inset-1 bg-amber-400/30 blur-md opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
//                     <Download size={12} className="relative z-10" />
//                     <span className="relative z-10">Download PDF</span>
//                   </button>
//                 </div>

//                 {/* Click to view */}
//                 <div className="text-center pt-1">
//                   <span className="text-[9px] text-amber-500 font-medium flex items-center justify-center gap-1 hover:underline group-hover:gap-2 transition-all duration-300">
//                     Click to view full notice
//                     <ExternalLink size={10} className="group-hover:translate-x-0.5 transition-transform" />
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="bg-gradient-to-r from-amber-50 to-amber-100/80 px-4 py-2.5 border-t border-amber-200/50 flex-shrink-0 relative">
//             <div className="absolute inset-0 bg-gradient-to-r from-amber-300/10 via-transparent to-amber-300/10 shimmer-animation" />
//             <p className="relative text-[10px] text-amber-700 font-medium tracking-wide text-center flex items-center justify-center gap-2">
//               <span className="animate-pulse">✦</span>
//               {schoolInfo.shortName || schoolInfo.name} - {schoolInfo.branch}
//               <span className="animate-pulse">✦</span>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Modal - Premium Glowing */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
//             onClick={closeModal}
//           >
//             <motion.div
//               initial={{ scale: 0.9, y: 20 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.9, y: 20 }}
//               transition={{ type: 'spring', damping: 25, stiffness: 300 }}
//               className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Modal Glow Border */}
//               <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-2xl opacity-60 blur-lg animate-pulse pointer-events-none" />
//               <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-300 via-amber-400 to-gold-500 rounded-2xl opacity-30 blur-xl animate-pulse pointer-events-none" style={{ animationDelay: '300ms' }} />
              
//               <div className="relative bg-white rounded-2xl overflow-hidden border-t-4 border-amber-500">
//                 {/* Modal Header */}
//                 <div className="sticky top-0 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 px-6 py-5 flex items-center justify-between rounded-t-2xl overflow-hidden">
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent shimmer-animation" />
//                   <div className="absolute -inset-1 bg-amber-400/20 blur-xl animate-pulse" />
                  
//                   <div className="relative flex items-center gap-3">
//                     <div className="animate-pulse">
//                       <Bell size={24} className="text-white drop-shadow-lg" />
//                     </div>
//                     <div>
//                       <h3 className="text-white font-bold text-lg drop-shadow-lg flex items-center gap-2">
//                         ⚠️ Important Notice
//                         <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full animate-pulse border border-white/30">
//                           ADMISSION
//                         </span>
//                       </h3>
//                       <p className="text-amber-100 text-xs drop-shadow">Admission Notice 2027</p>
//                     </div>
//                   </div>
//                   <button
//                     onClick={closeModal}
//                     className="relative text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-1.5"
//                   >
//                     <X size={24} />
//                   </button>
//                 </div>

//                 {/* Modal Body */}
//                 <div className="p-6 space-y-4">
//                   {/* Glowing Alert Banner */}
//                   <div className="relative bg-gradient-to-r from-amber-100 via-amber-50 to-amber-100 border-l-4 border-amber-500 p-4 rounded-r-lg shadow-lg shadow-amber-200/50 overflow-hidden">
//                     <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 via-transparent to-amber-400/10 shimmer-animation" />
//                     <div className="absolute -inset-1 bg-amber-400/20 blur-md animate-pulse" />
                    
//                     <div className="relative flex items-start gap-3">
//                       <div className="animate-pulse">
//                         <AlertCircle size={24} className="text-amber-600 flex-shrink-0 mt-0.5 drop-shadow-md" />
//                       </div>
//                       <div>
//                         <h4 className="font-bold text-amber-800 text-lg drop-shadow-sm flex items-center gap-2">
//                           {circular.title}
//                           <span className="text-[8px] bg-amber-500 text-white px-1.5 py-0.5 rounded-full animate-pulse">HOT</span>
//                         </h4>
//                         <p className="text-sm font-semibold text-amber-600 flex items-center gap-1">
//                           <Sparkles size={14} className="text-amber-400 animate-pulse" />
//                           {circular.subtitle}
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-4 text-sm text-gray-500 bg-amber-50 p-3 rounded-lg border border-amber-200/50 shadow-inner">
//                     <span className="flex items-center gap-1.5">
//                       <Calendar size={16} className="text-amber-500" />
//                       {formatDateWithTime(circular.date, circular.time).split(' ')[0]}
//                     </span>
//                     <span className="flex items-center gap-1.5">
//                       <Clock size={16} className="text-amber-500" />
//                       {circular.time || '00:00:00'}
//                     </span>
//                   </div>

//                   {circular.description && (
//                     <div className="border-t border-amber-100 pt-4 mt-2">
//                       <div className="relative bg-gradient-to-br from-amber-50/80 to-white p-4 rounded-lg border border-amber-200/50 shadow-lg shadow-amber-200/30 overflow-hidden">
//                         <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 via-transparent to-amber-400/5 shimmer-animation" />
//                         <div className="relative">
//                           <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
//                             {circular.description}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                   {circular.pdf && (
//                     <div className="border-t border-amber-100 pt-4 mt-2">
//                       <button
//                         onClick={handleDownloadPDF}
//                         className="relative group/btn inline-flex items-center gap-2.5 px-5 py-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-amber-400/50 w-full justify-center overflow-hidden"
//                       >
//                         <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent shimmer-animation" />
//                         <div className="absolute -inset-1 bg-amber-400/30 blur-md opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
//                         <FileText size={18} className="relative z-10" />
//                         <span className="relative z-10">Download Admission Notice (PDF)</span>
//                         <Download size={16} className="relative z-10 group-hover/btn:translate-y-0.5 transition-transform" />
//                       </button>
//                       <p className="text-xs text-gray-400 mt-2 text-center flex items-center justify-center gap-1">
//                         <span className="animate-pulse">✦</span>
//                         Click to download the official admission notice
//                         <span className="animate-pulse">✦</span>
//                       </p>
//                     </div>
//                   )}
//                 </div>

//                 {/* Modal Footer */}
//                 <div className="px-6 py-4 bg-amber-50/80 border-t border-amber-100 rounded-b-2xl flex justify-end relative">
//                   <div className="absolute inset-0 bg-gradient-to-r from-amber-300/5 via-transparent to-amber-300/5 shimmer-animation" />
//                   <button
//                     onClick={closeModal}
//                     className="relative px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors hover:bg-amber-100 rounded-lg"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* CSS Animations */}
//       <style>{`
//         @keyframes shimmer {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }
//         .shimmer-animation {
//           animation: shimmer 2s infinite;
//         }
//       `}</style>
//     </>
//   )
// }

// export default CircularsPanel










// src/components/home/CircularsPanel.jsx
import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { Bell, Calendar, Clock, X, Download, FileText, ArrowRight, Sparkles, AlertCircle, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { schoolInfo } from '../../data/seedData.js'

const CircularsPanel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCircular, setSelectedCircular] = useState(null)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef(null)

  // Static circulars data
  const circulars = [
    {
      id: 1,
      title: 'KG ADMISSION FORM 2027-28',
      subtitle: 'Application Form Now Available',
      description: `The application form for admission to Class K.G. 2027-28 is now available for download. 

📅 Last Date to Submit: 12th September 2026

Important Instructions:
• Fill the form completely and accurately.
• Attach required documents (Birth Certificate, Aadhar, etc.)
• Submit the form at the school office from 8.30am to 10 am.
• For any queries, contact the admission office.

Download the form below and start your child's journey with St. Mary's!`,
      date: '2026-08-20',
      pdf: '/wp-content/uploads/2026/05/KG_APPLICATION_FORM-2027-28.pdf',
      isPrimary: true,
      badge: 'NEW',
      badgeColor: 'bg-gold-500'
    },
    {
      id: 2,
      title: 'Admission Notice 2027',
      subtitle: 'Class K.G. 2027 Admissions Open',
      description: `The application form for admission to Class K.G. 2027 can be downloaded from the school website between 24th August 2026 to 12th September 2026.

The procedure for admission will be provided in the form itself.

📅 Last Date: 12th September 2026`,
      date: '2026-08-17',
      pdf: '/wp-content/uploads/2026/05/AdmissionNotice.pdf',
      isPrimary: false,
      badge: 'Notice',
      badgeColor: 'bg-maroon-600'
    }
  ]

  // Auto-play animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsHovered(prev => !prev)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const formatDateOnly = (dateStr) => {
    if (!dateStr) return ''
    const date = new Date(dateStr)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  const formatDateFull = (dateStr) => {
    if (!dateStr) return ''
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const handleCircularClick = (circular) => {
    setSelectedCircular(circular)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedCircular(null)
  }

  const handleDownloadPDF = (pdfUrl) => {
    window.open(pdfUrl, '_blank')
  }

  const primaryCircular = circulars.find(c => c.isPrimary)
  const otherCirculars = circulars.filter(c => !c.isPrimary)

  // Modal Component rendered via Portal
  const ModalComponent = () => {
    if (!isModalOpen || !selectedCircular) return null

    return ReactDOM.createPortal(
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={closeModal}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto relative border-t-4 border-gold-500"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Glow Border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-400 via-maroon-600 to-gold-400 rounded-2xl opacity-30 blur-lg animate-border-flow pointer-events-none" />

          {/* Modal Header */}
          <div className="relative sticky top-0 bg-gradient-to-r from-maroon-800 to-maroon-700 px-6 py-4 flex items-center justify-between rounded-t-2xl z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/10 to-transparent shimmer-line" />
            <div className="relative flex items-center gap-2">
              <Bell size={20} className="text-gold-400" />
              <h3 className="text-white font-bold text-lg">
                {selectedCircular.isPrimary ? '📋 Application Form' : '📢 Notice'}
              </h3>
            </div>
            <button
              onClick={closeModal}
              className="relative text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-1.5"
            >
              <X size={24} />
            </button>
          </div>

          {/* Modal Body - White Background, Black Text */}
          <div className="relative p-6 space-y-4 bg-white">
            {selectedCircular.isPrimary && (
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-gradient-to-r from-gold-500 to-amber-500 text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-lg shadow-gold-500/30">
                  <Sparkles size={12} className="animate-sparkle-icon" />
                  ADMISSION OPEN
                </span>
                <span className="px-3 py-1 bg-maroon-700 text-gold-300 text-xs font-bold rounded-full border border-gold-400/30">
                  2027-28
                </span>
              </div>
            )}
            <h4 className="text-xl font-bold text-black">{selectedCircular.title}</h4>
            <p className="text-sm font-semibold text-gold-600">{selectedCircular.subtitle}</p>

            <div className="flex items-center gap-4 text-sm text-gray-500 bg-gray-50 p-3 rounded-lg border border-gray-200">
              <span className="flex items-center gap-1.5">
                <Calendar size={16} className="text-gold-500" />
                <span className="text-black">{formatDateFull(selectedCircular.date)}</span>
              </span>
            </div>

            {selectedCircular.description && (
              <div className="border-t border-gray-200 pt-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-black text-sm leading-relaxed whitespace-pre-line">
                    {selectedCircular.description}
                  </p>
                </div>
              </div>
            )}

            <div className="space-y-2 pt-2">
              {selectedCircular.pdf && (
                <button
                  onClick={() => handleDownloadPDF(selectedCircular.pdf)}
                  className="w-full py-3 bg-gradient-to-r from-maroon-700 to-maroon-800 hover:from-maroon-800 hover:to-maroon-900 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-maroon-500/40 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Download size={18} className="text-gold-400 group-hover:scale-110 transition-transform" />
                  {selectedCircular.isPrimary ? 'Download Application Form (PDF)' : 'Download Notice (PDF)'}
                </button>
              )}
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 rounded-b-2xl flex justify-end">
            <button
              onClick={closeModal}
              className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-black transition-colors hover:bg-gray-100 rounded-lg"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>,
      document.body
    )
  }

  return (
    <>
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-full h-full flex flex-col relative">
        {/* ===== HEADER - MAROON & GOLD ===== */}
        <div className="relative bg-gradient-to-r from-maroon-900 via-maroon-800 to-maroon-700 px-4 py-3.5 flex items-center gap-2 flex-shrink-0 overflow-hidden">
          {/* Animated Shimmer Line */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/10 to-transparent shimmer-line" />
          
          {/* Bottom Gold Border */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent pulse-border" />

          <div className="relative flex items-center gap-2 w-full">
            <div className="animate-bell-pulse">
              <Bell size={20} className="text-gold-400 drop-shadow-lg" />
            </div>
            <h3 className="text-white font-bold text-sm tracking-wide flex items-center gap-2 drop-shadow-md">
              🔔 Important Notices
              <span className="text-[10px] bg-gold-500/30 text-gold-300 px-2.5 py-0.5 rounded-full animate-pulse border border-gold-400/40 shadow-lg shadow-gold-500/20">
                {circulars.length} New
              </span>
            </h3>
            <span className="ml-auto text-[10px] text-gold-300 font-medium bg-gold-500/20 px-3 py-0.5 rounded-full animate-pulse border border-gold-400/30 shadow-md shadow-gold-500/10">
              ⚡ Urgent
            </span>
          </div>
        </div>

        {/* ===== MAIN CONTENT ===== */}
        <div className="flex-1 flex flex-col p-3 space-y-2 bg-gradient-to-b from-maroon-50/20 to-white overflow-y-auto relative">
          
          {/* Decorative Pattern Background */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #7A0C1E 1px, transparent 1px), radial-gradient(circle at 80% 50%, #D9A441 1px, transparent 1px)`,
            backgroundSize: '40px 40px, 50px 50px',
            backgroundPosition: '0 0, 20px 20px'
          }} />

          {/* ===== PRIMARY NOTICE - ULTRA PREMIUM ===== */}
          {primaryCircular && (
            <div className="relative group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              {/* ===== LAYER 1: OUTER GLOW BORDER (Animated) ===== */}
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-gold-400 via-maroon-600 to-gold-400 animate-border-flow opacity-90 blur-sm" />
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-gold-300 via-amber-400 to-gold-300 animate-border-flow-reverse opacity-60 blur-md" style={{ animationDelay: '0.5s' }} />
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-gold-400/30 via-transparent to-gold-400/30 blur-xl animate-pulse-glow" />

              {/* ===== LAYER 2: PULSING GOLD RING (Attention Grabber) ===== */}
              <div className={`absolute -inset-2 rounded-xl border-2 border-gold-400/30 animate-ping-ring transition-opacity duration-1000 ${isHovered ? 'opacity-100' : 'opacity-70'}`} />
              <div className={`absolute -inset-3 rounded-xl border border-gold-400/20 animate-ping-ring-delayed transition-opacity duration-1000 ${isHovered ? 'opacity-80' : 'opacity-50'}`} />

              {/* ===== LAYER 3: SCANNER EFFECT ===== */}
              <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-400/5 to-transparent scanner-effect" />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-maroon-400/5 to-transparent scanner-effect-reverse" />
              </div>

              {/* ===== INNER CONTENT ===== */}
              <div className="relative bg-gradient-to-br from-white via-gold-50/20 to-white rounded-xl p-3.5 border-2 border-gold-300/60 shadow-2xl shadow-gold-200/30 backdrop-blur-sm">

                {/* ===== DECORATIVE GOLD CORNERS ===== */}
                <div className="absolute top-0 left-0 w-10 h-10 border-t-3 border-l-3 border-gold-400/50 rounded-tl-xl animate-corner-glow" />
                <div className="absolute top-0 right-0 w-10 h-10 border-t-3 border-r-3 border-gold-400/50 rounded-tr-xl animate-corner-glow-delay" />
                <div className="absolute bottom-0 left-0 w-10 h-10 border-b-3 border-l-3 border-gold-400/50 rounded-bl-xl animate-corner-glow" />
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-3 border-r-3 border-gold-400/50 rounded-br-xl animate-corner-glow-delay" />

                {/* ===== FLOATING SPARKLES ===== */}
                <div className="absolute top-1 right-8 text-gold-400/20 text-xl animate-float-sparkle">✦</div>
                <div className="absolute bottom-8 left-2 text-gold-400/15 text-lg animate-float-sparkle-delay">✦</div>
                <div className="absolute top-1/2 left-1 text-gold-400/10 text-sm animate-float-sparkle-slow">✦</div>

                {/* ===== BADGES ===== */}
                <div className="flex items-center gap-2 mb-1.5 relative">
                  <span className="px-3 py-0.5 bg-gradient-to-r from-gold-500 to-amber-500 text-white text-[10px] font-bold rounded-full shadow-lg shadow-gold-500/40 flex items-center gap-1.5 animate-badge-pulse">
                    <Sparkles size={10} className="text-white animate-sparkle-icon" />
                    ADMISSION OPEN
                  </span>
                  <span className="px-3 py-0.5 bg-gradient-to-r from-maroon-700 to-maroon-800 text-gold-300 text-[10px] font-bold rounded-full border border-gold-400/40 shadow-md shadow-maroon-900/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                    2027-28
                  </span>
                  <span className="ml-auto px-2.5 py-0.5 bg-red-600 text-white text-[9px] font-bold rounded-full animate-pulse shadow-lg shadow-red-500/30">
                    NEW
                  </span>
                </div>

                {/* ===== TITLE ===== */}
                <div className="space-y-0.5 relative">
                  <h4 className="text-sm font-bold text-maroon-900 leading-tight tracking-tight flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
                    {primaryCircular.title}
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
                  </h4>
                  <p className="text-xs font-semibold text-gold-600 flex items-center gap-1.5">
                    <span className="relative">
                      <Sparkles size={12} className="text-gold-500 animate-sparkle-icon" />
                      <span className="absolute inset-0 animate-ping-opacity rounded-full bg-gold-400/30" />
                    </span>
                    {primaryCircular.subtitle}
                  </p>
                </div>

                {/* ===== DESCRIPTION PREVIEW ===== */}
                <div className="mt-1.5 bg-white/80 rounded-lg p-2 border border-gold-200/60 shadow-inner relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-400/5 via-transparent to-gold-400/5 shimmer-line" />
                  <p className="text-[11px] text-gray-700 leading-relaxed line-clamp-2 relative z-10">
                    {primaryCircular.description.split('\n')[0]}
                  </p>
                  <p className="text-[10px] font-semibold text-maroon-700 mt-0.5 flex items-center gap-1.5 relative z-10">
                    <span className="flex items-center gap-1 text-[9px] animate-pulse text-gold-500">
                      <span className="block w-1.5 h-1.5 rounded-full bg-gold-500 animate-ping" />
                      📅
                    </span>
                    Last Date: 12th September 2026
                  </p>
                </div>

                {/* ===== ACTION BUTTONS ===== */}
                <div className="flex gap-2 mt-2.5">
                  <button
                    onClick={() => handleCircularClick(primaryCircular)}
                    className="flex-1 py-2 bg-gradient-to-r from-maroon-700 to-maroon-800 hover:from-maroon-800 hover:to-maroon-900 text-white text-xs font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-maroon-500/40 transition-all duration-300 flex items-center justify-center gap-1.5 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 shimmer-button" />
                    <span className="relative z-10 flex items-center gap-1.5">
                      <FileText size={13} className="text-gold-300" />
                      View Details
                      <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform text-gold-300" />
                    </span>
                  </button>
                  <button
                    onClick={() => handleDownloadPDF(primaryCircular.pdf)}
                    className="flex-1 py-2 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-maroon-900 font-bold rounded-lg transition-all duration-300 text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-gold-400/30 hover:shadow-xl hover:shadow-gold-500/40 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 shimmer-button" />
                    <span className="relative z-10 flex items-center gap-1.5">
                      <Download size={13} className="group-hover:scale-110 transition-transform" />
                      Download Form
                    </span>
                  </button>
                </div>

                {/* ===== BOTTOM GLOW BAR ===== */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400/60 to-transparent animate-slide-glow" />
              </div>
            </div>
          )}

          {/* ===== OTHER NOTICES ===== */}
          <div className="space-y-1.5 relative z-10">
            {otherCirculars.map((circular) => (
              <div
                key={circular.id}
                className="bg-white rounded-lg border border-maroon-100 shadow-sm p-2.5 hover:shadow-md hover:border-gold-300 transition-all duration-300 cursor-pointer group"
                onClick={() => handleCircularClick(circular)}
              >
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-maroon-50 to-maroon-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                    <Bell size={13} className="text-maroon-600 group-hover:text-gold-600 transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-gray-800 group-hover:text-maroon-700 transition-colors line-clamp-1">
                      {circular.title}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-medium ${circular.badgeColor} text-white shadow-sm`}>
                        {circular.badge}
                      </span>
                      <span className="text-[10px] text-gray-400 flex items-center gap-1">
                        <Calendar size={10} />
                        {formatDateOnly(circular.date)}
                      </span>
                    </div>
                  </div>
                  <ChevronRight size={14} className="text-gray-300 group-hover:text-gold-500 group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0 mt-1" />
                </div>
              </div>
            ))}
          </div>

          {/* ===== FOOTER ===== */}
          <div className="text-center text-[9px] text-gray-400 mt-auto pt-1.5 border-t border-gray-100 relative z-10">
            <p className="flex items-center justify-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-gold-400/50 animate-pulse" />
              {schoolInfo.shortName || schoolInfo.name} - {schoolInfo.branch}
              <span className="w-1 h-1 rounded-full bg-gold-400/50 animate-pulse" />
            </p>
          </div>
        </div>
      </div>

      {/* ===== MODAL - RENDERED AT ROOT LEVEL VIA PORTAL ===== */}
      <ModalComponent />

      {/* ========================================================== */}
      {/* CSS ANIMATIONS */}
      {/* ========================================================== */}
      <style>{`
        /* ===== BORDER FLOW ANIMATIONS ===== */
        @keyframes borderFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes borderFlowReverse {
          0% { background-position: 100% 50%; }
          50% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-border-flow {
          background-size: 200% 200%;
          animation: borderFlow 3s ease-in-out infinite;
        }
        .animate-border-flow-reverse {
          background-size: 200% 200%;
          animation: borderFlowReverse 3s ease-in-out infinite;
        }

        /* ===== PULSE GLOW ===== */
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }

        /* ===== PING RING ===== */
        @keyframes pingRing {
          0% { transform: scale(0.95); opacity: 1; }
          100% { transform: scale(1.05); opacity: 0; }
        }
        .animate-ping-ring {
          animation: pingRing 2s ease-out infinite;
        }
        .animate-ping-ring-delayed {
          animation: pingRing 2s ease-out infinite 0.5s;
        }

        /* ===== CORNER GLOW ===== */
        @keyframes cornerGlow {
          0%, 100% { border-color: rgba(217, 164, 65, 0.3); }
          50% { border-color: rgba(217, 164, 65, 0.9); }
        }
        .animate-corner-glow {
          animation: cornerGlow 1.5s ease-in-out infinite;
        }
        .animate-corner-glow-delay {
          animation: cornerGlow 1.5s ease-in-out infinite 0.75s;
        }

        /* ===== SHIMMER LINE ===== */
        @keyframes shimmerLine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .shimmer-line {
          animation: shimmerLine 3s ease-in-out infinite;
        }

        /* ===== SCANNER EFFECT ===== */
        @keyframes scannerEffect {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .scanner-effect {
          animation: scannerEffect 4s ease-in-out infinite;
        }
        .scanner-effect-reverse {
          animation: scannerEffect 4s ease-in-out infinite reverse;
        }

        /* ===== SLIDE GLOW ===== */
        @keyframes slideGlow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-slide-glow {
          animation: slideGlow 2s ease-in-out infinite;
        }

        /* ===== SHIMMER BUTTON ===== */
        @keyframes shimmerButton {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .shimmer-button {
          animation: shimmerButton 2s ease-in-out infinite;
        }

        /* ===== BELL PULSE ===== */
        @keyframes bellPulse {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.15); }
          75% { transform: scale(1.05); }
        }
        .animate-bell-pulse {
          animation: bellPulse 2s ease-in-out infinite;
        }

        /* ===== SPARKLE ICON ===== */
        @keyframes sparkleIcon {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
          50% { transform: scale(1.3) rotate(15deg); opacity: 0.7; }
        }
        .animate-sparkle-icon {
          animation: sparkleIcon 1.5s ease-in-out infinite;
        }

        /* ===== FLOAT SPARKLE ===== */
        @keyframes floatSparkle {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-5px) rotate(15deg); opacity: 0.5; }
        }
        .animate-float-sparkle {
          animation: floatSparkle 4s ease-in-out infinite;
        }
        .animate-float-sparkle-delay {
          animation: floatSparkle 4s ease-in-out infinite 1s;
        }
        .animate-float-sparkle-slow {
          animation: floatSparkle 6s ease-in-out infinite 2s;
        }

        /* ===== BADGE PULSE ===== */
        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 0 10px rgba(217, 164, 65, 0.3); }
          50% { box-shadow: 0 0 25px rgba(217, 164, 65, 0.7); }
        }
        .animate-badge-pulse {
          animation: badgePulse 2s ease-in-out infinite;
        }

        /* ===== PING OPACITY ===== */
        @keyframes pingOpacity {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .animate-ping-opacity {
          animation: pingOpacity 1.5s ease-out infinite;
        }

        /* ===== PULSE BORDER ===== */
        @keyframes pulseBorder {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        .pulse-border {
          animation: pulseBorder 2s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}

export default CircularsPanel

