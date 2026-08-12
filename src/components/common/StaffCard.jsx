import React from 'react'
import { User } from 'lucide-react'

const StaffCard = ({ name, role, subject, qualification, photo }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden text-center hover:shadow-xl transition-shadow duration-300">
      <div className="h-40 bg-maroon-50 flex items-center justify-center overflow-hidden">
        {photo ? (
          <img src={photo} alt={name} className="w-full h-full object-cover" loading="lazy" />
        ) : (
          <User size={40} className="text-maroon-300" />
        )}
      </div>
      <div className="p-4">
        <h4 className="font-serif font-semibold text-maroon-900">{name}</h4>
        {(role || subject) && <p className="text-sm text-gold-600 font-medium">{role || subject}</p>}
        {qualification && <p className="text-xs text-gray-500 mt-1">{qualification}</p>}
      </div>
    </div>
  )
}

export default StaffCard
