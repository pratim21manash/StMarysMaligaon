import React from 'react'
import { Bus, MapPin, ShieldCheck, Clock, Phone, User, Building, AlertCircle } from 'lucide-react'
import SectionWrapper from '../../components/common/SectionWrapper.jsx'

const Transport = () => {
  const operators = [
    'Mr. Babul Baishya',
    'Md. Babujan Mia',
    'Mrs. Mary Sangma',
    'Green Valley Pvt. Ltd.'
  ]

  const vehicles = [
    {
      sl: 1,
      number: 'AS01HC2324',
      owner: 'Mr. Nila Das',
      contact: '9127122829',
      route: 'Ajara, Dharapur, Khanamukh, Lonkeshwar, Forest School, Hindu Garigaon, Khatmail, APR, Engineering College, Khundarbari, Nursery, GotaNagar'
    }
  ]

  return (
    <div>
      {/* Page Header without breadcrumb */}
      <div className="bg-gradient-to-r from-maroon-900 to-maroon-700 text-white py-6 px-4">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gold-500/20 rounded-lg">
              <Bus size={20} className="text-gold-300" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold">Transport</h1>
              <p className="text-sm text-gold-300/80 mt-0.5">Safe and reliable school transport</p>
            </div>
          </div>
        </div>
      </div>
      
      <section className="section-padding">
        <div className="container-custom max-w-5xl mx-auto">

          {/* Authorized Operators Notice */}
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-4 mb-6">
            <p className="text-sm text-amber-800 flex items-start gap-2">
              <AlertCircle size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <span>
                <span className="font-semibold">As per CBSE norms,</span> the School has authorized the following 
                bus-operators only for the safe transportation of the students.
              </span>
            </p>
          </div>

          {/* Operators List */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {operators.map((operator, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 text-center hover:shadow-md transition-shadow hover:border-gold-300"
              >
                <div className="w-8 h-8 rounded-full bg-maroon-50 flex items-center justify-center mx-auto mb-1.5">
                  <User size={14} className="text-maroon-700" />
                </div>
                <p className="text-xs font-medium text-gray-800 leading-tight">{operator}</p>
              </div>
            ))}
          </div>

          {/* Vehicle Details */}
          <h2 className="text-lg font-serif font-bold text-maroon-900 mb-4 flex items-center gap-2">
            <Bus size={18} className="text-gold-600" />
            Authorized Vehicles
          </h2>

          <SectionWrapper className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-maroon-800 text-white">
                    <th className="px-4 py-3 text-left font-semibold">Sl.</th>
                    <th className="px-4 py-3 text-left font-semibold">Vehicle Number</th>
                    <th className="px-4 py-3 text-left font-semibold">Owner</th>
                    <th className="px-4 py-3 text-left font-semibold">Contact</th>
                  </tr>
                </thead>
                <tbody>
                  {vehicles.map((vehicle) => (
                    <tr key={vehicle.sl} className="hover:bg-maroon-50/30 transition-colors duration-150">
                      <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{vehicle.sl}</td>
                      <td className="px-4 py-3 font-medium text-maroon-900 border-b border-gray-100">
                        {vehicle.number}
                      </td>
                      <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{vehicle.owner}</td>
                      <td className="px-4 py-3 text-gray-600 border-b border-gray-100 flex items-center gap-1.5">
                        <Phone size={12} className="text-gold-600" />
                        {vehicle.contact}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionWrapper>

          {/* Route Details */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-5 mb-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <div className="p-2 rounded-xl bg-blue-100">
                  <MapPin size={18} className="text-blue-600" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 text-sm">Route Details</h4>
                <p className="text-xs text-gray-700 mt-1 leading-relaxed">
                  <span className="font-medium">Vehicle No. AS01HC2324 covers:</span> {vehicles[0].route}
                </p>
              </div>
            </div>
          </div>

          {/* Transport Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-maroon-50 text-maroon-800 flex items-center justify-center mx-auto mb-2.5">
                <MapPin size={20} />
              </div>
              <h4 className="font-serif font-bold text-maroon-900 text-sm">Wide Route Coverage</h4>
              <p className="text-gray-600 text-xs mt-1">Buses cover major residential areas across Maligaon and greater Guwahati.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-maroon-50 text-maroon-800 flex items-center justify-center mx-auto mb-2.5">
                <ShieldCheck size={20} />
              </div>
              <h4 className="font-serif font-bold text-maroon-900 text-sm">Safety First</h4>
              <p className="text-gray-600 text-xs mt-1">GPS-tracked buses with trained drivers and an attendant on every route.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-maroon-50 text-maroon-800 flex items-center justify-center mx-auto mb-2.5">
                <Clock size={20} />
              </div>
              <h4 className="font-serif font-bold text-maroon-900 text-sm">Punctual Timing</h4>
              <p className="text-gray-600 text-xs mt-1">Fixed pick-up and drop-off schedules shared with parents each term.</p>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-6 text-center p-3 bg-gold-50 rounded-lg border border-gold-200">
            <p className="text-xs text-maroon-800 flex items-center justify-center gap-2">
              <Building size={14} className="text-gold-600" />
              <span>For route details and transport fees, please contact the school transport office.</span>
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Transport