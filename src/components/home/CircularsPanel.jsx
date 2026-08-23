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
import React, { useState } from 'react'
import { Bell, Calendar, Clock, X, Download, FileText, ArrowRight, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { schoolInfo } from '../../data/seedData.js'

const CircularsPanel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCircular, setSelectedCircular] = useState(null)

  // Static circulars data
  const circulars = [
    {
      id: 1,
      title: 'KG ADMISSION FORM 2027-28',
      subtitle: 'Application Form Now Available',
      description: `The application form for admission to Class K.G. 2027-28 is now available for download. 

📅 Last Date to Submit: 6th September 2026, 8:00 PM

Important Instructions:
• Fill the form completely and accurately.
• Attach required documents (Birth Certificate, Aadhar, etc.)
• Submit the form at the school office or via email.
• For any queries, contact the admission office.

Download the form below and start your child's journey with St. Mary's!`,
      date: '2026-08-20',
      time: '08:00:00',
      pdf: '/wp-content/uploads/2026/05/KG_APPLICATION_FORM-2027-28.pdf',
      isPrimary: true,
      badge: 'NEW',
      badgeColor: 'bg-gold-500'
    },
    {
      id: 2,
      title: 'Admission Notice 2027',
      subtitle: 'Class K.G. 2027 Admissions Open',
      description: `The application form for admission to Class K.G. 2027 can be downloaded from the school website between 24th August 2026, 8:00 a.m. to 6th September 2026, 8:00 p.m.

The procedure for admission will be provided in the form itself.

📅 Last Date: 6th September 2026, 8:00 PM`,
      date: '2026-08-17',
      time: '10:00:00',
      pdf: '/wp-content/uploads/2026/05/AdmissionNotice.pdf',
      isPrimary: false,
      badge: 'Notice',
      badgeColor: 'bg-maroon-600'
    }
  ]

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

  const handleDownloadPDF = (pdfUrl) => {
    window.open(pdfUrl, '_blank')
  }

  const primaryCircular = circulars.find(c => c.isPrimary)
  const otherCirculars = circulars.filter(c => !c.isPrimary)

  return (
    <>
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-full h-full flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-maroon-800 to-maroon-700 px-4 py-3 flex items-center gap-2 flex-shrink-0">
          <div className="animate-pulse">
            <Bell size={18} className="text-gold-400" />
          </div>
          <h3 className="text-white font-semibold text-sm tracking-wide flex items-center gap-2">
            🔔 Important Notices
            <span className="text-[10px] bg-gold-500/20 text-gold-300 px-2 py-0.5 rounded-full animate-pulse border border-gold-400/30">
              {circulars.length} New
            </span>
          </h3>
          <span className="ml-auto text-[10px] text-gold-300 font-medium bg-gold-500/20 px-2.5 py-0.5 rounded-full animate-pulse border border-gold-400/30">
            ⚡ Urgent
          </span>
        </div>

        {/* Main Content - Compact */}
        <div className="flex-1 flex flex-col p-3 space-y-2 bg-gradient-to-b from-maroon-50/30 to-white overflow-y-auto">
          
          {/* ===================== PRIMARY NOTICE - PREMIUM ===================== */}
          {primaryCircular && (
            <div className="relative group">
              {/* Animated Gold Border Glow */}
              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-gold-400 via-maroon-600 to-gold-400 animate-border-flow opacity-70" />
              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-gold-300 via-amber-400 to-gold-300 animate-border-flow-reverse opacity-40" style={{ animationDelay: '0.5s' }} />
              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-gold-400/20 via-transparent to-gold-400/20 blur-sm animate-pulse" />

              {/* Inner Content */}
              <div className="relative bg-gradient-to-br from-white via-amber-50/10 to-white rounded-lg p-3 border border-gold-200/50 shadow-md shadow-gold-200/20">
                
                {/* Decorative Gold Corners */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-400/30 rounded-tl-lg" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold-400/30 rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold-400/30 rounded-bl-lg" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold-400/30 rounded-br-lg" />

                {/* Badges */}
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 bg-gradient-to-r from-gold-500 to-amber-500 text-white text-[10px] font-bold rounded-full shadow-md shadow-gold-500/30 flex items-center gap-1">
                    <Sparkles size={10} className="text-white animate-pulse" />
                    ADMISSION OPEN
                  </span>
                  <span className="px-2.5 py-0.5 bg-maroon-700 text-gold-300 text-[10px] font-bold rounded-full border border-gold-400/30">
                    2027-28
                  </span>
                </div>

                {/* Title */}
                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold text-maroon-900 leading-tight tracking-tight">
                    {primaryCircular.title}
                  </h4>
                  <p className="text-xs font-semibold text-gold-600 flex items-center gap-1.5">
                    <Sparkles size={12} className="text-gold-500 animate-sparkle" />
                    {primaryCircular.subtitle}
                  </p>
                </div>

                {/* Description preview */}
                <div className="mt-1.5 bg-white/70 rounded-md p-1.5 border border-gold-100/50 shadow-inner">
                  <p className="text-[11px] text-gray-700 leading-relaxed line-clamp-2">
                    {primaryCircular.description.split('\n')[0]}
                  </p>
                  <p className="text-[10px] font-semibold text-maroon-700 mt-0.5 flex items-center gap-1">
                    <span className="text-[9px] animate-pulse text-gold-500">📅</span>
                    Last Date: 6th September 2026
                  </p>
                </div>

                {/* Action Buttons - No Enquire, just View & Download */}
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleCircularClick(primaryCircular)}
                    className="flex-1 py-1.5 bg-gradient-to-r from-maroon-700 to-maroon-800 hover:from-maroon-800 hover:to-maroon-900 text-white text-xs font-semibold rounded-lg shadow-md hover:shadow-lg hover:shadow-maroon-500/30 transition-all duration-300 flex items-center justify-center gap-1.5 group"
                  >
                    <FileText size={13} className="text-gold-300" />
                    View Details
                    <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform text-gold-300" />
                  </button>
                  <button
                    onClick={() => handleDownloadPDF(primaryCircular.pdf)}
                    className="flex-1 py-1.5 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-maroon-900 font-semibold rounded-lg transition-all duration-300 text-xs flex items-center justify-center gap-1 shadow-sm hover:shadow-md"
                  >
                    <Download size={13} />
                    Download Form
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ===================== OTHER NOTICES ===================== */}
          {otherCirculars.map((circular) => (
            <div
              key={circular.id}
              className="bg-white/90 rounded-lg border border-maroon-100 shadow-sm p-2.5 hover:shadow-md transition-all duration-300 cursor-pointer hover:border-gold-300"
              onClick={() => handleCircularClick(circular)}
            >
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-maroon-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Bell size={13} className="text-maroon-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-gray-800 line-clamp-1">
                    {circular.title}
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-medium ${circular.badgeColor} text-white`}>
                      {circular.badge}
                    </span>
                    <span className="text-[10px] text-gray-400 flex items-center gap-1">
                      <Calendar size={10} />
                      {formatDateOnly(circular.date)}
                    </span>
                  </div>
                </div>
                <ArrowRight size={13} className="text-gray-300 flex-shrink-0 mt-1" />
              </div>
            </div>
          ))}

          {/* Footer */}
          <div className="text-center text-[9px] text-gray-400 mt-auto pt-1.5 border-t border-gray-100">
            <p>{schoolInfo.shortName || schoolInfo.name} - {schoolInfo.branch}</p>
          </div>
        </div>
      </div>

      {/* ========================================================== */}
      {/* MODAL - Same as before, but without Enquire button */}
      {/* ========================================================== */}
      <AnimatePresence>
        {isModalOpen && selectedCircular && (
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
                  <h3 className="text-white font-bold text-lg">
                    {selectedCircular.isPrimary ? '📋 Application Form' : '📢 Notice'}
                  </h3>
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
                {selectedCircular.isPrimary && (
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-gold-500 to-amber-500 text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-md shadow-gold-500/30">
                      <Sparkles size={12} className="animate-pulse" />
                      ADMISSION OPEN
                    </span>
                    <span className="px-3 py-1 bg-maroon-700 text-gold-300 text-xs font-bold rounded-full border border-gold-400/30">
                      2027-28
                    </span>
                  </div>
                )}
                <h4 className="text-xl font-bold text-maroon-900">{selectedCircular.title}</h4>
                <p className="text-sm font-semibold text-gold-600">{selectedCircular.subtitle}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500 bg-maroon-50 p-3 rounded-lg border border-maroon-100">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={16} className="text-gold-500" />
                    {formatDateWithTime(selectedCircular.date, selectedCircular.time).split(' ')[0]}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={16} className="text-gold-500" />
                    {selectedCircular.time || '00:00:00'}
                  </span>
                </div>

                {selectedCircular.description && (
                  <div className="border-t border-maroon-100 pt-4">
                    <div className="bg-maroon-50/50 p-4 rounded-lg border border-maroon-100">
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                        {selectedCircular.description}
                      </p>
                    </div>
                  </div>
                )}

                <div className="space-y-2 pt-2">
                  {selectedCircular.pdf && (
                    <button
                      onClick={() => handleDownloadPDF(selectedCircular.pdf)}
                      className="w-full py-2.5 bg-maroon-700 hover:bg-maroon-800 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <Download size={16} />
                      {selectedCircular.isPrimary ? 'Download Application Form (PDF)' : 'Download Notice (PDF)'}
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

      <style>{`
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
        @keyframes sparkle {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
          50% { transform: scale(1.2) rotate(10deg); opacity: 0.7; }
        }
        .animate-border-flow {
          background-size: 200% 200%;
          animation: borderFlow 3s ease-in-out infinite;
        }
        .animate-border-flow-reverse {
          background-size: 200% 200%;
          animation: borderFlowReverse 3s ease-in-out infinite;
        }
        .animate-sparkle {
          animation: sparkle 1.5s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}

export default CircularsPanel
