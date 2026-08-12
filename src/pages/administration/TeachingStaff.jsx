import React, { useState, useEffect } from 'react'
import { GraduationCap } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader.jsx'
import SectionWrapper from '../../components/common/SectionWrapper.jsx'
import StaffCard from '../../components/common/StaffCard.jsx'
import api from '../../services/api.js'

const TeachingStaff = () => {
  const [teachingStaff, setTeachingStaff] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTeachingStaff()
  }, [])

  const fetchTeachingStaff = async () => {
    try {
      const data = await api.get('/teaching-staff')
      setTeachingStaff(data.data || [])
    } catch (error) {
      console.error('Error fetching teaching staff:', error)
      setTeachingStaff([])
    } finally {
      setLoading(false)
    }
  }

  const categories = {
    prt: { label: 'PRT Staff', icon: '👶' },
    tgt: { label: 'TGT Staff', icon: '📚' },
    pgt: { label: 'PGT Staff', icon: '🎓' }
  }

  const groupedStaff = teachingStaff.reduce((acc, item) => {
    const category = item.category || 'tgt'
    if (!acc[category]) acc[category] = []
    acc[category].push(item)
    return acc
  }, {})

  if (loading) {
    return (
      <div>
        <PageHeader title="Teaching Staff" subtitle="Meet our dedicated educators" icon={<GraduationCap size={18} />} />
        <section className="section-padding">
          <div className="container-custom flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-maroon-600 border-t-transparent"></div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div>
      <PageHeader title="Teaching Staff" subtitle="Meet our dedicated educators" icon={<GraduationCap size={18} />} />
      <section className="section-padding">
        <div className="container-custom">
          {Object.keys(categories).map((categoryKey) => {
            const items = groupedStaff[categoryKey] || []
            if (items.length === 0) return null

            return (
              <div key={categoryKey} className="mb-8">
                <SectionWrapper>
                  <h2 className="font-serif text-xl font-bold text-maroon-900 mb-4 flex items-center gap-2">
                    <span>{categories[categoryKey].icon}</span>
                    {categories[categoryKey].label}
                    <span className="text-sm font-normal text-gray-500 ml-2">({items.length})</span>
                  </h2>
                </SectionWrapper>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {items.map((t) => (
                    <StaffCard 
                      key={t._id} 
                      name={t.name} 
                      subject={t.designation} 
                      qualification={t.qualification} 
                      photo={t.image} 
                    />
                  ))}
                </div>
              </div>
            )
          })}

          {teachingStaff.length === 0 && (
            <p className="text-center text-gray-500 py-8">No teaching staff members found.</p>
          )}
        </div>
      </section>
    </div>
  )
}

export default TeachingStaff