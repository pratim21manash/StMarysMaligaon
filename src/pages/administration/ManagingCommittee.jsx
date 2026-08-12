import React, { useState, useEffect } from 'react'
import { Users } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader.jsx'
import SectionWrapper from '../../components/common/SectionWrapper.jsx'
import api from '../../services/api.js'

const ManagingCommittee = () => {
  const [committee, setCommittee] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCommittee()
  }, [])

  const fetchCommittee = async () => {
    try {
      const data = await api.get('/managing-committee')
      setCommittee(data.data || [])
    } catch (error) {
      console.error('Error fetching committee:', error)
      setCommittee([])
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div>
        <PageHeader title="Managing Committee" subtitle="Meet the governing body" icon={<Users size={18} />} />
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
      <PageHeader title="Managing Committee" subtitle="Meet the governing body" icon={<Users size={18} />} />
      <section className="section-padding">
        <div className="container-custom grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {committee.length === 0 ? (
            <p className="text-center text-gray-500 col-span-2">No committee members found.</p>
          ) : (
            committee.map((m) => (
              <SectionWrapper key={m._id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-center gap-4">
                <img
                  src={m.image || `https://ui-avatars.com/api/?name=${m.name}&background=7A0C1E&color=fff&size=48`}
                  alt={m.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-maroon-900 text-sm">{m.name}</p>
                  <p className="text-xs text-gold-600 font-medium">{m.designation}</p>
                  {m.tenure && <p className="text-xs text-gray-400">{m.tenure}</p>}
                </div>
              </SectionWrapper>
            ))
          )}
        </div>
      </section>
    </div>
  )
}

export default ManagingCommittee