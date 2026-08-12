import React from 'react'
import { 
  Palette, 
  Music, 
  Mic2, 
  Brush, 
  Users, 
  Trophy, 
  BookOpen,
  Award,
  Star,
  Heart,
  Shield,
  Sparkles,
  Feather,
  Zap,
  Crown
} from 'lucide-react'
import SectionWrapper from '../../components/common/SectionWrapper.jsx'

const CoCurricular = () => {
  const houses = [
    { 
      name: 'Red House', 
      patron: 'Laura V.', 
      motto: 'Sacrifice in love',
      color: 'red',
      icon: <Heart size={16} />
    },
    { 
      name: 'Blue House', 
      patron: 'Don Bosco', 
      motto: 'Joyful Service',
      color: 'blue',
      icon: <Star size={16} />
    },
    { 
      name: 'Green House', 
      patron: 'Dominic Savio', 
      motto: 'Death rather than sin',
      color: 'green',
      icon: <Shield size={16} />
    },
    { 
      name: 'Yellow House', 
      patron: 'Mother Mazzarello', 
      motto: 'Selfless devotion',
      color: 'yellow',
      icon: <Sparkles size={16} />
    }
  ]

  const activities = [
    { icon: <Palette size={16} />, name: 'Painting & Drawing' },
    { icon: <Brush size={16} />, name: 'Flower Arrangement' },
    { icon: <Music size={16} />, name: 'Singing & Dance' },
    { icon: <Mic2 size={16} />, name: 'Elocution & Debate' },
    { icon: <Feather size={16} />, name: 'Creative Writing' },
    { icon: <Zap size={16} />, name: 'Quiz Sessions' },
    { icon: <Crown size={16} />, name: 'One-act Play' },
    { icon: <BookOpen size={16} />, name: 'Theatre' }
  ]

  const clubs = ['Guide', 'Red Cross', 'Media Smart Club']

  const getColorClasses = (color) => {
    const colors = {
      red: {
        bg: 'bg-red-50',
        border: 'border-red-200',
        iconBg: 'bg-red-100',
        iconText: 'text-red-600',
        text: 'text-red-700',
        gradient: 'from-red-50 to-rose-50'
      },
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        iconBg: 'bg-blue-100',
        iconText: 'text-blue-600',
        text: 'text-blue-700',
        gradient: 'from-blue-50 to-indigo-50'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        iconBg: 'bg-green-100',
        iconText: 'text-green-600',
        text: 'text-green-700',
        gradient: 'from-green-50 to-emerald-50'
      },
      yellow: {
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        iconBg: 'bg-amber-100',
        iconText: 'text-amber-600',
        text: 'text-amber-700',
        gradient: 'from-amber-50 to-yellow-50'
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
              <Palette size={20} className="text-gold-300" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold">Co-Curricular Activities</h1>
              <p className="text-sm text-gold-300/80 mt-0.5">Beyond the classroom</p>
            </div>
          </div>
        </div>
      </div>
      
      <section className="section-padding">
        <div className="container-custom max-w-5xl mx-auto">

          {/* Introduction */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200 p-5 mb-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <div className="p-2 rounded-xl bg-purple-100">
                  <Sparkles size={18} className="text-purple-600" />
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Opportunities galore for the students of St. Mary's School to grow up into multi-faceted personalities. 
                  The concept of testing the multiple intelligence of the child makes every student feel like winner. 
                  Ample opportunities are available for the students to develop their innate talents or to hone further 
                  their skills they have already acquired.
                </p>
              </div>
            </div>
          </div>

          {/* Clubs */}
          <div className="mb-6">
            <h2 className="text-lg font-serif font-bold text-maroon-900 mb-3 flex items-center gap-2">
              <Users size={18} className="text-gold-600" />
              Clubs
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {clubs.map((club) => (
                <div key={club} className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 text-center hover:shadow-md transition-shadow hover:border-gold-300">
                  <p className="text-sm font-medium text-maroon-800">{club}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Activities Grid */}
          <div className="mb-8">
            <h2 className="text-lg font-serif font-bold text-maroon-900 mb-3 flex items-center gap-2">
              <Award size={18} className="text-gold-600" />
              Skill Honing Activities
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {activities.map((activity) => (
                <div 
                  key={activity.name} 
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 text-center hover:shadow-md transition-shadow hover:border-gold-300 hover:-translate-y-0.5 duration-200"
                >
                  <div className="w-8 h-8 rounded-full bg-maroon-50 flex items-center justify-center mx-auto mb-1.5 text-maroon-700">
                    {activity.icon}
                  </div>
                  <p className="text-xs font-medium text-gray-700 leading-tight">{activity.name}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              All activities are under the guidance of qualified Teachers
            </p>
          </div>

          {/* House System */}
          <div className="mb-6">
            <h2 className="text-lg font-serif font-bold text-maroon-900 mb-3 flex items-center gap-2">
              <Trophy size={18} className="text-gold-600" />
              House System
            </h2>
            <p className="text-xs text-gray-600 mb-3">
              All the activities of the school are directed by the HOUSE SYSTEM. Four houses having its own colour, 
              patron motto and guided by appointed Moderators. House system governs the activities of Class IV to X.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {houses.map((house) => {
                const colors = getColorClasses(house.color)
                return (
                  <div 
                    key={house.name} 
                    className={`${colors.bg} rounded-xl border ${colors.border} p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                  >
                    <div className={`${colors.iconBg} rounded-full p-2 inline-block mb-2`}>
                      <div className={colors.iconText}>
                        {house.icon}
                      </div>
                    </div>
                    <h4 className={`font-bold text-sm ${colors.text}`}>{house.name}</h4>
                    <p className="text-xs text-gray-600 mt-0.5 font-medium">{house.patron}</p>
                    <p className="text-xs text-gray-500 italic mt-1">"{house.motto}"</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* House System Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
              <h4 className="font-semibold text-maroon-900 text-sm flex items-center gap-2 mb-2">
                <Users size={16} className="text-gold-600" />
                House Leadership
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-600 mt-1.5 flex-shrink-0"></span>
                  <span>Each house is guided by Captain and Vice Captains</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-600 mt-1.5 flex-shrink-0"></span>
                  <span>Reward and punishment by merits and demerits for conduct and studies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-600 mt-1.5 flex-shrink-0"></span>
                  <span>Competitions encourage each House to work hard and aim high everyday</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
              <h4 className="font-semibold text-maroon-900 text-sm flex items-center gap-2 mb-2">
                <Trophy size={16} className="text-gold-600" />
                Activities & Rewards
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-600 mt-1.5 flex-shrink-0"></span>
                  <span>Quiz competition increases general knowledge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-600 mt-1.5 flex-shrink-0"></span>
                  <span>One-act play, elocution, painting, drawing, singing, dance, flower arrangement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-600 mt-1.5 flex-shrink-0"></span>
                  <span>Trophies presented to winning House and best classes for studies, games and activities</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Democratic System Note */}
          <div className="bg-gradient-to-r from-maroon-50 to-rose-50 rounded-2xl border border-maroon-200 p-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <div className="p-1.5 rounded-lg bg-maroon-100">
                  <Crown size={16} className="text-maroon-600" />
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-700 leading-relaxed">
                  <span className="font-semibold text-maroon-800">Democratic System:</span> This democratic system draws the best out of the students 
                  and trains them for leadership. It teaches them to excel in what they do. At the end of each year, 
                  trophies are presented to the winning House and to the best classes for studies, games and activities.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-400">
              All activities are designed to form character and develop aesthetic talents of the students.
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}

export default CoCurricular