import React from 'react'
import { Landmark } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader.jsx'
import SectionWrapper from '../../components/common/SectionWrapper.jsx'

// Static management data — all images from public/management/
const management = [
  {
    _id: '1',
    name: 'Sr. Lissy Mathew',
    designation: 'Manager',
    image: '/management/Lissy.jpeg'
  },
  {
    _id: '2',
    name: 'Sr. Grace Pemmila',
    designation: 'Principal',
    image: '/management/Grace.jpeg'
  },
  {
    _id: '3',
    name: 'Sr. Pinki Topno',
    designation: 'Vice Principal',
    image: '/management/pinkiTopno.jpeg'
  },
  {
    _id: '4',
    name: 'Sr. Dawhou Zhoposelu Jennifer',
    designation: 'TGT',
    image: '/management/dawhou.jpeg'
  },
  {
    _id: '5',
    name: 'Sr. Martha Soigi',
    designation: 'TGT',
    image: '/management/martha.jpeg'
  },
  {
    _id: '6',
    name: 'Sr. Caroline Chongloi',
    designation: 'TGT',
    image: '/management/caroline.jpeg'
  },
  {
    _id: '7',
    name: 'Sr. Bishantis Myrthong',
    designation: 'Nurse',
    image: '/management/bishantis.jpeg'
  }
]

const Management = () => {
  return (
    <div>
      <PageHeader
        title="Management"
        subtitle="Governance and leadership"
        icon={<Landmark size={18} />}
      />

      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
       

          {/* Management Team Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {management.map((member) => (
              <SectionWrapper
                key={member._id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square bg-maroon-50 flex items-center justify-center overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        member.name
                      )}&size=200&background=7A0C1E&color=ffffff`
                    }}
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl font-bold text-maroon-900">
                    {member.name}
                  </h3>
                  <p className="text-gold-600 font-medium text-sm mt-1">
                    {member.designation}
                  </p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Management