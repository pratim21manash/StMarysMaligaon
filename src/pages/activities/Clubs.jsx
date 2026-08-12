import React, { useState } from 'react'
import { 
  Users, 
  Rocket, 
  Leaf, 
  BookOpen, 
  Camera, 
  Music, 
  Disc,
  Heart,
  Award,
  Globe,
  Mic,
  Shield,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  Sparkles
} from 'lucide-react'
import SectionWrapper from '../../components/common/SectionWrapper.jsx'

const Clubs = () => {
  const [expandedClub, setExpandedClub] = useState(null)

  const toggleClub = (clubName) => {
    if (expandedClub === clubName) {
      setExpandedClub(null)
    } else {
      setExpandedClub(clubName)
    }
  }

  const clubsData = [
    {
      id: 'guides',
      name: 'Guides',
      icon: <Heart size={18} />,
      color: 'blue',
      incharge: 'Mrs. Sunita Chettri',
      description: 'Regular Guides classes are held once a month in the school and a St. Mary\'s school Scouts & Guides Camporee is held annually.',
      details: [
        'Guides are prepared for Governor\'s Award & President\'s Award within a span of four years of training',
        'Prepared for Regional, National & International Events',
        'Presently, about 30 Volunteers from classes 4 to 10',
        'Several students have been awarded with the Governor\'s Award',
        'Tasks include: making an illiterate literate, volunteer service at charitable institutions',
        'Visits to children wards and old people\'s wards at Guwahati Medical College Hospital',
        'Forming Peace Committees, visiting slum/poor areas and forming social action projects',
        'Take part in school functions: Independence Day, Republic Day, Sports\' Day, Inter School Competitions'
      ]
    },
    {
      id: 'vides',
      name: 'VIDES',
      icon: <Globe size={18} />,
      color: 'purple',
      incharge: 'Sr. Agnes Ezung (Co-ordinator)',
      description: 'Started on November 7th 2009 with local delegate Sr. Mariam, Sr. Catherine K.P. Superior, Sr. Lissy Rose Mathew Headmistress.',
      members: ['Miss Richa Sharma', 'Miss Panchali Das', 'Mrs. Bornali Saikia', 'Miss Basabi Chanda', 'Mrs. Nilotpala Sarma', 'Mrs Mousumi Das'],
      objectives: [
        'To create a declaration of Human Right',
        'To analyze the existing relation between Common Goods and Human Rights',
        'To deepen International and Church documents pertaining to Education, Human Rights and the Common Goods',
        'To appreciate how the right to education serves the common good',
        'To realize the importance of networking with GO\'s, NGO\'s, FBO\'s and PO\'s',
        'To discover new ways that will strengthen and sustain the education of women and children',
        'To intensify our commitment to the education of women and children',
        'To share local and international initiatives of VIDES for the education of women and children'
      ],
      activities: [
        'Rendering economic aid to the poor in need',
        'Providing food items (Rice, Dal, Sugar, Refined oil etc.)',
        'Providing books, School fees to the poor',
        'Adoption of children',
        'Conducting various talents competitions and celebrating important days with the poor',
        'Training of different teaching skills',
        'Evening coaching centers',
        'Special attention to the weak students',
        'Each one teaches one',
        'Scholarship for poor children',
        'To give awareness for higher class studies to the students',
        'Encouraging the students for their better academic performance by giving prizes',
        'Conducting computer class',
        'Literacy programme for the Self Help Group',
        'Awareness programmes for women on Empowerment and Human Rights',
        'Providing help to start small-scale business to women',
        'Celebration of women\'s day',
        'Self Help Group to stand on their own feet',
        'Awareness about all forms of violence against woman lobbying for necessary legal procedures',
        'Gender based violence awareness',
        'Encouraging Self-help Group, self-employment and income generating programmes',
        'Adult Education and leadership training for women',
        'Awareness programmes for mothers on child care',
        'Awareness programmes for unwed mothers on the evil of abortion and female infanticide',
        'Awareness about healthy Food habits to mothers',
        'Awareness programme on media especially good and bad',
        'Medical camp in the villages',
        'Awareness programmes on HIV/AIDS',
        'Conducting awareness programmes on various issues especially cleanliness of the environment',
        'Awareness programme for health and hygiene',
        'Raising financial help for major surgeries like Kidney transplant, bypass heart surgery etc.',
        'Keeping environment clean'
      ]
    },
    {
      id: 'media',
      name: 'Media Club',
      icon: <Camera size={18} />,
      color: 'red',
      incharge: 'Mrs. Nizara Kalita, Mrs. Chayanika Sarma, Mrs. Deepanwita Bose, Mrs. Shyamali Chanda & Mrs. Nandita Sengupta'
    },
    {
      id: 'eco',
      name: 'Eco Club',
      icon: <Leaf size={18} />,
      color: 'green',
      incharge: 'Mrs. Trupti Das, Ms. Joyeeta Kar, Mrs. Arpana Kalita, Mrs. Minakshi Devi & Mrs. Dhriti Das',
      objectives: [
        'To be aware of our surroundings',
        'To be sensitive about the environment',
        'To have knowledge about the environmental problems',
        'To develop activities through projects, group discussions etc. Through this activity they will motivate all the students to make use of cloth bags instead of polythene bags',
        'To motivate the students to preserve and protect the environment in all possible ways'
      ]
    },
    {
      id: 'literature',
      name: 'Literature Club',
      icon: <BookOpen size={18} />,
      color: 'amber',
      incharge: 'Mrs. Nabamita Boral, Mrs. Dipti Deka, Mrs. Hema Tiwari, Mrs. Jaba Kumari, Mrs. Liza Paul & Mrs. Komal Choudhury'
    },
    {
      id: 'band',
      name: 'Band Group',
      icon: <Music size={18} />,
      color: 'indigo',
      incharge: 'Mr. Indrajit Kalita, Ms. Tanaya Baruah & Kakoli Patwary'
    },
    {
      id: 'vocal',
      name: 'Vocal Music',
      icon: <Mic size={18} />,
      color: 'pink',
      incharge: 'Ms. Shyamali Chanda & Mrs. Rupa Kaur'
    },
    {
      id: 'instrumental',
      name: 'Musical Instrument',
      icon: <Disc size={18} />,
      color: 'teal',
      incharge: 'Mr. Hrisikesh Saikia'
    },
    {
      id: 'dance',
      name: 'Dance Group',
      icon: <Sparkles size={18} />,
      color: 'rose',
      incharge: 'Mrs. Juli Devi & Mrs. Rupjyoti Saharia'
    },
    {
      id: 'karate',
      name: 'Karate Group',
      icon: <Shield size={18} />,
      color: 'orange',
      incharge: 'Mr. Mrinmoy Sarma'
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        iconBg: 'bg-blue-100',
        iconText: 'text-blue-600',
        text: 'text-blue-700',
        gradient: 'from-blue-50 to-indigo-50',
        hover: 'hover:border-blue-300'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        iconBg: 'bg-purple-100',
        iconText: 'text-purple-600',
        text: 'text-purple-700',
        gradient: 'from-purple-50 to-violet-50',
        hover: 'hover:border-purple-300'
      },
      red: {
        bg: 'bg-red-50',
        border: 'border-red-200',
        iconBg: 'bg-red-100',
        iconText: 'text-red-600',
        text: 'text-red-700',
        gradient: 'from-red-50 to-rose-50',
        hover: 'hover:border-red-300'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        iconBg: 'bg-green-100',
        iconText: 'text-green-600',
        text: 'text-green-700',
        gradient: 'from-green-50 to-emerald-50',
        hover: 'hover:border-green-300'
      },
      amber: {
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        iconBg: 'bg-amber-100',
        iconText: 'text-amber-600',
        text: 'text-amber-700',
        gradient: 'from-amber-50 to-yellow-50',
        hover: 'hover:border-amber-300'
      },
      indigo: {
        bg: 'bg-indigo-50',
        border: 'border-indigo-200',
        iconBg: 'bg-indigo-100',
        iconText: 'text-indigo-600',
        text: 'text-indigo-700',
        gradient: 'from-indigo-50 to-purple-50',
        hover: 'hover:border-indigo-300'
      },
      pink: {
        bg: 'bg-pink-50',
        border: 'border-pink-200',
        iconBg: 'bg-pink-100',
        iconText: 'text-pink-600',
        text: 'text-pink-700',
        gradient: 'from-pink-50 to-rose-50',
        hover: 'hover:border-pink-300'
      },
      teal: {
        bg: 'bg-teal-50',
        border: 'border-teal-200',
        iconBg: 'bg-teal-100',
        iconText: 'text-teal-600',
        text: 'text-teal-700',
        gradient: 'from-teal-50 to-cyan-50',
        hover: 'hover:border-teal-300'
      },
      rose: {
        bg: 'bg-rose-50',
        border: 'border-rose-200',
        iconBg: 'bg-rose-100',
        iconText: 'text-rose-600',
        text: 'text-rose-700',
        gradient: 'from-rose-50 to-pink-50',
        hover: 'hover:border-rose-300'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        iconBg: 'bg-orange-100',
        iconText: 'text-orange-600',
        text: 'text-orange-700',
        gradient: 'from-orange-50 to-amber-50',
        hover: 'hover:border-orange-300'
      }
    }
    return colors[color] || colors.blue
  }

  return (
    <div>
      {/* Page Header without breadcrumb */}
      <div className="bg-gradient-to-r from-maroon-900 to-maroon-700 text-white py-6 px-4">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gold-500/20 rounded-lg">
              <Users size={20} className="text-gold-300" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold">Clubs and Associations</h1>
              <p className="text-sm text-gold-300/80 mt-0.5">Explore interests beyond academics</p>
            </div>
          </div>
        </div>
      </div>
      
      <section className="section-padding">
        <div className="container-custom max-w-5xl mx-auto">

          {/* Clubs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {clubsData.map((club) => {
              const colors = getColorClasses(club.color)
              const isExpanded = expandedClub === club.id
              const hasDetails = club.details || club.objectives || club.activities || club.members

              return (
                <div 
                  key={club.id}
                  className={`bg-white rounded-2xl shadow-sm border ${colors.border} ${colors.hover} transition-all duration-300 overflow-hidden`}
                >
                  {/* Club Header - Clickable */}
                  <div 
                    className={`p-4 cursor-pointer transition-colors duration-200 ${colors.bg}`}
                    onClick={() => hasDetails && toggleClub(club.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className={`flex-shrink-0 mt-0.5 ${colors.iconBg} rounded-xl p-2.5`}>
                          <div className={colors.iconText}>
                            {club.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className={`font-bold text-sm ${colors.text}`}>{club.name}</h3>
                          {club.incharge && (
                            <p className="text-xs text-gray-500 mt-0.5">In-charge: {club.incharge}</p>
                          )}
                        </div>
                      </div>
                      {hasDetails && (
                        <div className="flex-shrink-0 mt-1">
                          {isExpanded ? (
                            <ChevronUp size={18} className="text-gray-400" />
                          ) : (
                            <ChevronDown size={18} className="text-gray-400" />
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Expandable Content */}
                  {isExpanded && hasDetails && (
                    <div className="p-4 border-t border-gray-100 space-y-3 max-h-[400px] overflow-y-auto">
                      {club.description && (
                        <p className="text-xs text-gray-600 leading-relaxed">{club.description}</p>
                      )}

                      {club.members && (
                        <div>
                          <h4 className="text-xs font-semibold text-maroon-800 mb-1">Members:</h4>
                          <div className="flex flex-wrap gap-1">
                            {club.members.map((member) => (
                              <span key={member} className="text-xs bg-gray-50 px-2 py-0.5 rounded-full text-gray-600">
                                {member}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {club.details && (
                        <div>
                          <h4 className="text-xs font-semibold text-maroon-800 mb-1">Details:</h4>
                          <ul className="space-y-0.5">
                            {club.details.map((item) => (
                              <li key={item} className="text-xs text-gray-600 flex items-start gap-1.5">
                                <span className="text-gold-500">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {club.objectives && (
                        <div>
                          <h4 className="text-xs font-semibold text-maroon-800 mb-1">Objectives:</h4>
                          <ul className="space-y-0.5">
                            {club.objectives.map((item) => (
                              <li key={item} className="text-xs text-gray-600 flex items-start gap-1.5">
                                <span className="text-gold-500">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {club.activities && (
                        <div>
                          <h4 className="text-xs font-semibold text-maroon-800 mb-1">Activities:</h4>
                          <ul className="space-y-0.5">
                            {club.activities.map((item) => (
                              <li key={item} className="text-xs text-gray-600 flex items-start gap-1.5">
                                <span className="text-gold-500">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Footer Note */}
          <div className="mt-6 text-center p-3 bg-gold-50 rounded-lg border border-gold-200">
            <p className="text-xs text-maroon-800 flex items-center justify-center gap-2">
              <Award size={14} className="text-gold-600" />
              <span>All clubs and associations are designed to develop students' talents and leadership skills.</span>
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Clubs