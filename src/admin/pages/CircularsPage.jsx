// import React, { useState, useEffect } from 'react'
// import AdminLayout from '../components/AdminLayout'
// import CircularList from '../components/Circulars/CircularList'
// import CircularForm from '../components/Circulars/CircularForm'
// import adminApi from '../utils/adminApi'
// import { Plus } from 'lucide-react'
// import { toast } from 'react-hot-toast'

// const CircularsPage = () => {
//   const [circulars, setCirculars] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [showForm, setShowForm] = useState(false)
//   const [editingItem, setEditingItem] = useState(null)

//   useEffect(() => {
//     fetchCirculars()
//   }, [])

//   const fetchCirculars = async () => {
//     try {
//       const { data } = await adminApi.get('/circulars/all')
//       setCirculars(data.data)
//     } catch (error) {
//       toast.error('Failed to fetch circulars')
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleSubmit = async (formData) => {
//     try {
//       const form = new FormData()
//       Object.keys(formData).forEach(key => {
//         if (key === 'pdf' && formData[key] instanceof File) {
//           form.append('pdf', formData[key])
//         } else if (key !== 'pdf') {
//           form.append(key, formData[key])
//         }
//       })

//       if (editingItem) {
//         await adminApi.put(`/circulars/${editingItem._id}`, form, {
//           headers: { 'Content-Type': 'multipart/form-data' }
//         })
//         toast.success('Circular updated successfully')
//       } else {
//         await adminApi.post('/circulars', form, {
//           headers: { 'Content-Type': 'multipart/form-data' }
//         })
//         toast.success('Circular added successfully')
//       }
//       fetchCirculars()
//       setShowForm(false)
//       setEditingItem(null)
//     } catch (error) {
//       toast.error(error.response?.data?.message || 'Failed to save')
//     }
//   }

//   const handleDelete = async (id) => {
//     if (!window.confirm('Are you sure you want to delete this circular?')) return
//     try {
//       await adminApi.delete(`/circulars/${id}`)
//       toast.success('Deleted successfully')
//       fetchCirculars()
//     } catch (error) {
//       toast.error('Failed to delete')
//     }
//   }

//   const handleEdit = (item) => {
//     setEditingItem(item)
//     setShowForm(true)
//   }

//   return (
//     <AdminLayout>
//       <div className="space-y-6">
//         <div className="flex justify-between items-center">
//           <div>
//             <h1 className="text-2xl font-serif font-bold text-gray-800">Circulars</h1>
//             <p className="text-gray-500 text-sm">Manage school notices and circulars</p>
//           </div>
//           <button
//             onClick={() => { setShowForm(true); setEditingItem(null) }}
//             className="px-4 py-2 bg-maroon-800 text-white rounded-lg hover:bg-maroon-700 flex items-center gap-2"
//           >
//             <Plus size={18} />
//             Add Circular
//           </button>
//         </div>

//         {showForm && (
//           <CircularForm
//             onSubmit={handleSubmit}
//             onCancel={() => { setShowForm(false); setEditingItem(null) }}
//             initialData={editingItem}
//           />
//         )}

//         <CircularList
//           data={circulars}
//           loading={loading}
//           onEdit={handleEdit}
//           onDelete={handleDelete}
//         />
//       </div>
//     </AdminLayout>
//   )
// }

// export default CircularsPage



// src/components/home/CircularsPanel.jsx

import React, { useState } from 'react';
import { Bell, Calendar, Clock, X, Download, FileText, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { schoolInfo } from '../../data/seedData.js';

// Static circular data
const staticCirculars = [
  {
    id: 1,
    title: 'Admission Notice for Class K.G. 2027',
    description: 'The application form for admission to Class K.G. 2027 can be downloaded from the school website between 24th August 2026, 8:00 a.m. to 6th September 2026, 8:00 p.m. The procedure for admission will be provided in the form itself.',
    date: '2026-08-17',
    time: '10:00:00',
    pdf: '/AdmissionNotice.pdf'
  }
];

const CircularsPanel = () => {
  const [selectedCircular, setSelectedCircular] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formatDateWithTime = (dateStr, timeStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year} ${timeStr || '00:00:00'}`;
  };

  const formatDateOnly = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleCircularClick = (circular) => {
    setSelectedCircular(circular);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCircular(null);
  };

  const handleDownloadPDF = () => {
    if (selectedCircular?.pdf) {
      // Create a link and trigger download
      const link = document.createElement('a');
      link.href = selectedCircular.pdf;
      link.download = selectedCircular.pdf.split('/').pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleViewPDF = () => {
    if (selectedCircular?.pdf) {
      window.open(selectedCircular.pdf, '_blank');
    }
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-full max-w-sm h-full flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-maroon-800 to-maroon-700 px-4 py-3 flex items-center gap-2 flex-shrink-0">
          <Bell size={18} className="text-gold-400" />
          <h3 className="text-white font-semibold text-sm tracking-wide">Latest Circulars</h3>
          <span className="ml-auto text-[10px] text-gold-300 font-medium bg-white/10 px-2 py-0.5 rounded-full">
            {staticCirculars.length} New
          </span>
        </div>

        {/* Circulars List */}
        <div className="flex-1 divide-y divide-gray-100 overflow-y-auto min-h-0">
          {staticCirculars.length === 0 ? (
            <div className="p-6 text-center text-gray-400 text-sm">
              No circulars available
            </div>
          ) : (
            staticCirculars.map((circular, index) => (
              <motion.div
                key={circular.id}
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
                    {circular.pdf && (
                      <div className="mt-1">
                        <span className="text-[10px] text-gold-600 font-medium flex items-center gap-1">
                          <FileText size={10} />
                          PDF Available
                        </span>
                      </div>
                    )}
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
                <div className="border-t border-gray-100 pt-4 mt-2">
                  <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                    {selectedCircular.description}
                  </p>
                </div>

                {/* Notice Details Box */}
                <div className="bg-maroon-50 border border-maroon-200 rounded-lg p-4 mt-2">
                  <p className="text-sm text-maroon-800">
                    <span className="font-semibold">📌 Important:</span> The application form for admission to Class K.G. 2027 can be downloaded from{' '}
                    <a 
                      href="https://www.stmarysmaligoan.in" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-maroon-600 font-semibold hover:underline"
                    >
                      www.stmarysmaligoan.in
                    </a>
                    {' '}between 24th August 2026, 8:00 a.m. to 6th September 2026, 8:00 p.m.
                  </p>
                </div>

                {selectedCircular.pdf && (
                  <div className="border-t border-gray-100 pt-4 mt-2">
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={handleViewPDF}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-maroon-600 hover:bg-maroon-700 text-white text-sm font-medium rounded-lg transition-colors"
                      >
                        <ExternalLink size={16} />
                        View PDF
                      </button>
                      <button
                        onClick={handleDownloadPDF}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500 hover:bg-gold-600 text-maroon-900 text-sm font-medium rounded-lg transition-colors"
                      >
                        <Download size={16} />
                        Download PDF
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 bg-gray-50/80 border-t border-gray-100 rounded-b-2xl flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CircularsPanel;