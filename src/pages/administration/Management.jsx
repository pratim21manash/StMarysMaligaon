import React, { useState, useEffect } from 'react'
import { Landmark, User, Mail, Phone } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader.jsx'
import SectionWrapper from '../../components/common/SectionWrapper.jsx'
import api from '../../services/api.js'

const Management = () => {
  const [management, setManagement] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchManagement()
  }, [])

  const fetchManagement = async () => {
    try {
      setLoading(true)
      // Fetch from API - no auth required for public view
      const data = await api.get('/management')
      console.log('Management data:', data)
      
      // Check if data has the expected structure
      if (data && data.success) {
        setManagement(data.data)
      } else if (Array.isArray(data)) {
        setManagement(data)
      } else if (data && data.data && Array.isArray(data.data)) {
        setManagement(data.data)
      } else {
        setManagement([])
      }
    } catch (err) {
      console.error('Error fetching management:', err)
      setError('Failed to load management team. Please try again later.')
      setManagement([])
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div>
        <PageHeader title="Management" subtitle="Governance and leadership" icon={<Landmark size={18} />} />
        <section className="section-padding">
          <div className="container-custom max-w-3xl mx-auto">
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-maroon-600 border-t-transparent mx-auto"></div>
                <p className="text-gray-500 mt-4">Loading management team...</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <PageHeader title="Management" subtitle="Governance and leadership" icon={<Landmark size={18} />} />
        <section className="section-padding">
          <div className="container-custom max-w-3xl mx-auto">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
              <p className="text-red-600">{error}</p>
              <button 
                onClick={fetchManagement}
                className="mt-4 px-4 py-2 bg-maroon-600 text-white rounded-lg hover:bg-maroon-700"
              >
                Retry
              </button>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div>
      <PageHeader title="Management" subtitle="Governance and leadership" icon={<Landmark size={18} />} />
      
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          {/* Description */}
          <SectionWrapper className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
            <p className="text-gray-600 leading-relaxed">
              St. Mary's Senior Secondary School, Maligaon is managed by a dedicated governing body committed to upholding the
              school's founding values while steering its academic and administrative growth. The
              management works closely with the Principal, teaching faculty, and Managing Committee to
              ensure the institution continues to meet CBSE standards and serve its community well.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Key responsibilities include policy oversight, infrastructure planning, financial
              governance, and ensuring compliance with all regulatory and affiliation requirements.
            </p>
          </SectionWrapper>

          {/* Management Team Cards */}
          {management.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
              <User size={48} className="mx-auto text-gray-300" />
              <p className="text-gray-500 mt-4">No management members to display.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {management.map((member) => (
                <SectionWrapper key={member._id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-square bg-maroon-50 flex items-center justify-center overflow-hidden">
                    {member.image ? (
                      <img 
                        src={`http://localhost:5000${member.image}`} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=200&background=7A0C1E&color=ffffff`
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-maroon-100 to-maroon-200 flex items-center justify-center">
                        <span className="text-6xl font-serif font-bold text-maroon-600">
                          {member.name?.charAt(0) || 'M'}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-serif text-xl font-bold text-maroon-900">{member.name}</h3>
                    <p className="text-gold-600 font-medium text-sm mt-1">{member.designation}</p>
                    {member.email && (
                      <p className="text-gray-500 text-xs mt-2 flex items-center justify-center gap-1">
                        <Mail size={12} />
                        {member.email}
                      </p>
                    )}
                  </div>
                </SectionWrapper>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Management