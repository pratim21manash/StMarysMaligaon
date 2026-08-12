import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { 
  ShieldCheck, 
  Users, 
  Clock, 
  AlertCircle, 
  Handshake,
  BookOpen,
  CheckCircle,
  XCircle,
  Sparkles,
  Award,
  Star
} from 'lucide-react'

const Discipline = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    }
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const disciplinePoints = [
    {
      text: "Students are expected to maintain courtesy and discipline both inside and outside the classroom.",
      icon: Users,
      color: 'bg-blue-100 text-blue-700',
      borderColor: 'border-blue-200'
    },
    {
      text: "Punctuality and regular attendance are essential to maintaining good academic standing.",
      icon: Clock,
      color: 'bg-green-100 text-green-700',
      borderColor: 'border-green-200'
    },
    {
      text: "Any act of dishonesty, including cheating in examinations, will invite strict disciplinary action.",
      icon: AlertCircle,
      color: 'bg-red-100 text-red-700',
      borderColor: 'border-red-200'
    },
    {
      text: "Repeated violations of school rules may lead to parent counseling or suspension.",
      icon: ShieldCheck,
      color: 'bg-orange-100 text-orange-700',
      borderColor: 'border-orange-200'
    },
    {
      text: "Students are encouraged to resolve conflicts respectfully and report concerns to a teacher.",
      icon: Handshake,
      color: 'bg-purple-100 text-purple-700',
      borderColor: 'border-purple-200'
    }
  ]

  const rulesSummary = [
    { label: 'Attendance', value: '75% Minimum', icon: Clock, status: 'Required' },
    { label: 'Uniform', value: 'Compulsory', icon: ShieldCheck, status: 'Mandatory' },
    { label: 'Mobile Phones', value: 'Not Permitted', icon: XCircle, status: 'Strictly Prohibited' },
    { label: 'Respect', value: 'Mandatory', icon: CheckCircle, status: 'Expected' },
    { label: 'Discipline', value: 'Zero Tolerance', icon: ShieldCheck, status: 'Strict' }
  ]

  return (
    <div className="bg-gradient-to-b from-white to-[#FBF6EC] min-h-screen">
      
      {/* ========================================================== */}
      {/* COMPACT HERO HEADER */}
      {/* ========================================================== */}
      <div className="bg-maroon-900 text-white py-8 px-4">
        <div className="container-custom mx-auto">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gold-500/20 rounded-lg">
              <ShieldCheck size={20} className="text-gold-300" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-serif font-bold">Discipline & Conduct</h1>
              <p className="text-gold-300 text-sm mt-0.5">Code of conduct for all students</p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================== */}
      {/* MAIN CONTENT */}
      {/* ========================================================== */}
      <section ref={ref} className="py-8 md:py-10">
        <div className="container-custom max-w-4xl mx-auto">
          
          {/* Rules Summary Cards */}
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-6"
          >
            {rulesSummary.map((rule) => (
              <motion.div
                key={rule.label}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 text-center hover:shadow-md transition-all duration-300 hover:border-gold-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-maroon-50 text-maroon-700 flex items-center justify-center mx-auto mb-2 group-hover:bg-maroon-100 transition-colors">
                  <rule.icon size={18} />
                </div>
                <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wide">{rule.label}</p>
                <p className="text-xs font-bold text-maroon-900 mt-0.5">{rule.value}</p>
                <p className={`text-[9px] font-medium mt-0.5 px-2 py-0.5 rounded-full inline-block ${
                  rule.status === 'Required' ? 'bg-blue-100 text-blue-700' :
                  rule.status === 'Mandatory' ? 'bg-amber-100 text-amber-700' :
                  rule.status === 'Strictly Prohibited' ? 'bg-red-100 text-red-700' :
                  rule.status === 'Expected' ? 'bg-green-100 text-green-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {rule.status}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Discipline Points */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-maroon-800 to-maroon-700 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-gold-500/20 rounded-lg">
                  <BookOpen size={18} className="text-gold-300" />
                </div>
                <h2 className="text-white font-bold text-sm tracking-wide">
                  CODE OF CONDUCT
                </h2>
                <span className="ml-auto text-[10px] text-gold-300/70 font-medium">
                  {disciplinePoints.length} Guidelines
                </span>
              </div>
            </div>

            {/* Points List */}
            <div className="divide-y divide-gray-100">
              {disciplinePoints.map((point, index) => {
                const Icon = point.icon
                return (
                  <motion.div 
                    key={index} 
                    variants={fadeInUp}
                    className="flex items-start gap-4 p-5 hover:bg-maroon-50/30 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <div className={`w-9 h-9 rounded-full ${point.color} flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}>
                        <Icon size={16} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {point.text}
                      </p>
                    </div>
                    <div className="flex-shrink-0 flex items-center gap-2">
                      <span className="text-xs font-medium text-gray-400">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className={`w-1 h-6 rounded-full ${point.borderColor} bg-opacity-30`} />
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Footer */}
            <div className="bg-gradient-to-r from-gray-50 to-gold-50/30 px-6 py-3 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-500 flex items-center gap-1.5">
                  <Sparkles size={14} className="text-gold-500" />
                  All students are expected to adhere to these guidelines at all times.
                </p>
                <div className="flex items-center gap-1">
                  <Award size={14} className="text-gold-500" />
                  <span className="text-[10px] text-gold-600 font-medium">Discipline First</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Quote / Motto */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="mt-6 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-maroon-50 to-gold-50/30 rounded-2xl px-6 py-3 border border-maroon-100/60">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Star size={16} className="text-gold-500 fill-gold-500" />
                <span className="font-semibold text-maroon-700">"Discipline is the bridge between goals and accomplishment."</span>
                <Star size={16} className="text-gold-500 fill-gold-500" />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <style>{`
        .container-custom {
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }

        @media (min-width: 640px) {
          .container-custom {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .container-custom {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Discipline