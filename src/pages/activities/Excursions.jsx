import React from 'react'
import { 
  Compass, 
  MapPin, 
  Building, 
  Landmark, 
  Users, 
  Calendar,
  Bus,
  Camera,
  Globe,
  Award
} from 'lucide-react'
import SectionWrapper from '../../components/common/SectionWrapper.jsx'

const EducationalVisits = () => {
  const visitTypes = [
    { 
      icon: <MapPin size={16} />, 
      name: 'Regional Science Center, Khanapara',
      description: 'Students from various classes are taken there regularly'
    },
    { 
      icon: <Building size={16} />, 
      name: 'Factories',
      description: 'Industrial visits for practical learning'
    },
    { 
      icon: <Landmark size={16} />, 
      name: 'Institutions',
      description: 'Visits to educational and research institutions'
    },
    { 
      icon: <Globe size={16} />, 
      name: 'Cultural Centres',
      description: 'Exposure to art, culture and heritage'
    }
  ]

  return (
    <div>
      {/* Page Header without breadcrumb */}
      <div className="bg-gradient-to-r from-maroon-900 to-maroon-700 text-white py-6 px-4">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gold-500/20 rounded-lg">
              <Compass size={20} className="text-gold-300" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold">Educational Visits</h1>
              <p className="text-sm text-gold-300/80 mt-0.5">Learning beyond the classroom walls</p>
            </div>
          </div>
        </div>
      </div>
      
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">

          {/* Introduction */}
          <SectionWrapper className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-10 h-10 rounded-xl bg-maroon-50 flex items-center justify-center text-maroon-700">
                  <Bus size={20} />
                </div>
              </div>
              <div>
                <h3 className="font-serif font-bold text-maroon-900 text-sm">Field Trips & Excursions</h3>
                <p className="text-sm text-gray-600 leading-relaxed mt-1">
                  Students are taken on regular field trips, visits outside the school and hiking. 
                  The class teachers accompany the students on these tours.
                </p>
              </div>
            </div>
          </SectionWrapper>

          {/* Registered Institution */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-5 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-100">
                <Award size={18} className="text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 text-sm">Registered With</h4>
                <p className="text-sm font-medium text-blue-800">Regional Science Center, Khanapara</p>
                <p className="text-xs text-gray-600 mt-0.5">Students from various classes are taken there regularly</p>
              </div>
            </div>
          </div>

          {/* Visit Types Grid */}
          <h2 className="text-lg font-serif font-bold text-maroon-900 mb-3 flex items-center gap-2">
            <MapPin size={18} className="text-gold-600" />
            Places of Visit
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {visitTypes.map((visit) => (
              <div 
                key={visit.name} 
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-all duration-300 hover:border-gold-300"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-8 h-8 rounded-lg bg-maroon-50 flex items-center justify-center text-maroon-700">
                      {visit.icon}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-maroon-800 text-sm">{visit.name}</h5>
                    <p className="text-xs text-gray-500 mt-0.5">{visit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 text-center hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-full bg-maroon-50 flex items-center justify-center mx-auto mb-1.5 text-maroon-700">
                <Users size={14} />
              </div>
              <p className="text-xs font-medium text-gray-700">Class Teachers</p>
              <p className="text-[10px] text-gray-400">Accompany students</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 text-center hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-full bg-maroon-50 flex items-center justify-center mx-auto mb-1.5 text-maroon-700">
                <Calendar size={14} />
              </div>
              <p className="text-xs font-medium text-gray-700">Regular Visits</p>
              <p className="text-[10px] text-gray-400">Throughout the year</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 text-center hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-full bg-maroon-50 flex items-center justify-center mx-auto mb-1.5 text-maroon-700">
                <Compass size={14} />
              </div>
              <p className="text-xs font-medium text-gray-700">Hiking</p>
              <p className="text-[10px] text-gray-400">Outdoor adventures</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 text-center hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-full bg-maroon-50 flex items-center justify-center mx-auto mb-1.5 text-maroon-700">
                <Camera size={14} />
              </div>
              <p className="text-xs font-medium text-gray-700">Learning</p>
              <p className="text-[10px] text-gray-400">Practical exposure</p>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-6 text-center p-3 bg-gold-50 rounded-lg border border-gold-200">
            <p className="text-xs text-maroon-800 flex items-center justify-center gap-2">
              <Compass size={14} className="text-gold-600" />
              <span>Educational visits provide practical exposure and enhance learning beyond textbooks.</span>
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}

export default EducationalVisits