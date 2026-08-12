import React from 'react'
import { 
  Trophy, 
  Dumbbell, 
  Activity,
  Hand,
  Clock,
  Award,
  Users,
  Calendar,
  Circle
} from 'lucide-react'
import SectionWrapper from '../../components/common/SectionWrapper.jsx'

const Sports = () => {
  const sports = [
    { name: 'Basketball', icon: <Activity size={16} /> },
    { name: 'Handball', icon: <Hand size={16} /> },
    { name: 'Chess', icon: <Circle size={16} /> },
    { name: 'Carom', icon: <Dumbbell size={16} /> }
  ]

  return (
    <div>
      {/* Page Header without breadcrumb */}
      <div className="bg-gradient-to-r from-maroon-900 to-maroon-700 text-white py-6 px-4">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gold-500/20 rounded-lg">
              <Trophy size={20} className="text-gold-300" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold">Sports & Games</h1>
              <p className="text-sm text-gold-300/80 mt-0.5">Building fitness, teamwork, and sportsmanship</p>
            </div>
          </div>
        </div>
      </div>
      
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">

          {/* Sports Overview */}
          <SectionWrapper className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-10 h-10 rounded-xl bg-maroon-50 flex items-center justify-center text-maroon-700">
                  <Dumbbell size={20} />
                </div>
              </div>
              <div>
                <h3 className="font-serif font-bold text-maroon-900 text-sm">Sports Program</h3>
                <p className="text-sm text-gray-600 leading-relaxed mt-1">
                  Every class has one period allotted to physical training and one period for games 
                  (basketball, handball, chess & carom). Coaching is also available after classes for Basket Ball.
                </p>
              </div>
            </div>
          </SectionWrapper>

          {/* Sports Grid */}
          <h2 className="text-lg font-serif font-bold text-maroon-900 mb-3 flex items-center gap-2">
            <Award size={18} className="text-gold-600" />
            Sports Offered
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {sports.map((sport) => (
              <div 
                key={sport.name} 
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-gold-300"
              >
                <div className="w-12 h-12 rounded-full bg-maroon-50 flex items-center justify-center mx-auto mb-2 text-maroon-700">
                  {sport.icon}
                </div>
                <p className="text-sm font-semibold text-gray-800">{sport.name}</p>
              </div>
            ))}
          </div>

          {/* Schedule Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded-lg bg-blue-100">
                  <Clock size={16} className="text-blue-600" />
                </div>
                <h4 className="font-semibold text-blue-900 text-sm">Physical Training</h4>
              </div>
              <p className="text-xs text-gray-600">One period per class</p>
              <p className="text-xs text-gray-500 mt-1">Fitness & conditioning</p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded-lg bg-green-100">
                  <Users size={16} className="text-green-600" />
                </div>
                <h4 className="font-semibold text-green-900 text-sm">Games Period</h4>
              </div>
              <p className="text-xs text-gray-600">One period per class</p>
              <p className="text-xs text-gray-500 mt-1">Basketball, Handball, Chess & Carom</p>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200 p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded-lg bg-amber-100">
                  <Calendar size={16} className="text-amber-600" />
                </div>
                <h4 className="font-semibold text-amber-900 text-sm">After Class Coaching</h4>
              </div>
              <p className="text-xs text-gray-600">Available after classes</p>
              <p className="text-xs text-gray-500 mt-1">Specialized Basket Ball coaching</p>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-6 text-center p-4 bg-gold-50 rounded-xl border border-gold-200">
            <p className="text-xs text-maroon-800 flex items-center justify-center gap-2">
              <Trophy size={14} className="text-gold-600" />
              <span>Students are encouraged to participate in sports as part of a well-rounded education.</span>
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Sports