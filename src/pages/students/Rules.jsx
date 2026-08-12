import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { 
  BookMarked, 
  Clock, 
  Shield, 
  AlertCircle, 
  Phone, 
  BookOpen, 
  Users, 
  GraduationCap,
  Building,
  Calendar,
  Award,
  ChevronRight,
  XCircle,
  CheckCircle,
  Info,
  Sparkles,
  Flag,
  Target
} from 'lucide-react'

const Rules = () => {
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
      transition: { staggerChildren: 0.06 }
    }
  }

  const generalRules = [
    { 
      text: 'Every student must possess a school calendar which should be brought to school daily.',
      icon: Calendar,
      category: 'Essential',
      color: 'red'
    },
    { 
      text: 'The school hours are from 7:45 AM to 2:00 PM. Students must be on the school campus at 7:30 AM.',
      icon: Clock,
      category: 'Timing',
      color: 'blue'
    },
    { 
      text: 'To acquire greater communication facility only English should be spoken in the school campus.',
      icon: BookOpen,
      category: 'Communication',
      color: 'green'
    },
    { 
      text: 'Irregular attendance, habitual want of application, insubordination, any kind of cheating or serious misconduct, even outside the school campus or any habit or behaviour objectionable to the good name of the school are sufficient reasons to take disciplinary actions against the students.',
      icon: Shield,
      category: 'Discipline',
      color: 'purple'
    },
    { 
      text: 'No books, periodicals, newspapers or any other item of objectionable nature shall be brought to the school. Parcels and letters addressed to the students are subjected to inspection before handing them over to the students.',
      icon: BookMarked,
      category: 'Restrictions',
      color: 'orange'
    },
    { 
      text: 'Students are responsible for the safe custody of their books and belongings. Mobile phones, pen drives, CDs and any other electronic gadgets of objectionable nature as well as ornaments and jewellery of any kind are not allowed in the school.',
      icon: XCircle,
      category: 'Prohibited Items',
      color: 'rose'
    },
    { 
      text: 'Any damage done to the school property should be made good by the student concerned.',
      icon: AlertCircle,
      category: 'Responsibility',
      color: 'amber'
    },
    { 
      text: 'No present or any demonstration to the teachers is allowed without the previous consent of the school authorities. Collection for any purpose whatsoever requires the Principal\'s sanction.',
      icon: Users,
      category: 'Protocol',
      color: 'indigo'
    },
    { 
      text: 'Every student attending the school is obliged to take part in all the extra-curricular activities of the school as part of their integral training and no one will be excused except for valid reasons. No student will abstain from physical exercise without the doctor\'s certificate.',
      icon: Award,
      category: 'Activities',
      color: 'pink'
    },
    { 
      text: 'Parents/ Guardians are not allowed to see their children or interview teachers during the school hours.',
      icon: Phone,
      category: 'Parent Guidelines',
      color: 'teal'
    },
    { 
      text: 'Certificate, concession forms, recommendation letters etc. will be issued only two days after the application has been submitted in the office.',
      icon: GraduationCap,
      category: 'Administrative',
      color: 'cyan'
    },
    { 
      text: 'Being a Catholic institution, only Christian festivals are celebrated within the school campus. No disrespect will be shown to articles and images of religion and worship proper to Christian faith. Besides, every student is required to show respect for all religions and faiths.',
      icon: Building,
      category: 'Religious Policy',
      color: 'violet'
    }
  ]

  const admissionRules = [
    {
      text: 'New admissions are made only to K.G. Other admissions if any, will depend on the availability of seats and on the competence of the student.',
      icon: GraduationCap,
      color: 'blue'
    },
    {
      text: 'Students coming from other school are required to bring a School Leaving Certificate from the last school they attended and the mark sheet of the last Annual Examination.',
      icon: BookOpen,
      color: 'green'
    },
    {
      text: 'New students must be introduced personally by their parents or guardians who will be responsible for their regularity, conduct and fees.',
      icon: Users,
      color: 'purple'
    },
    {
      text: 'If the school authorities think it convenient, they will examine the new applicants and place them in the class they are found fit for.',
      icon: Award,
      color: 'amber'
    },
    {
      text: 'When admitted at any part of the year, they pay an entrance fee, the annual fee and the school fee of the whole year.',
      icon: AlertCircle,
      color: 'red'
    },
    {
      text: 'No transfer certificate will be issued until all dues to the school have been paid in full and that too only on receipt of written application from the parents or guardians.',
      icon: Shield,
      color: 'orange'
    },
    {
      text: 'A fee of Rs. 100/- will be charged whenever an application for transfer certificate or a duplicate of the same is made. A fee Rs. 50/- will be charged for any extra from the register.',
      icon: AlertCircle,
      color: 'rose'
    }
  ]

  const quickHighlights = [
    { label: 'School Hours', value: '7:45 AM - 2:00 PM', icon: Clock },
    { label: 'Reporting Time', value: '7:30 AM', icon: Clock },
    { label: 'Language Policy', value: 'English Only', icon: BookOpen },
    { label: 'TC Fee', value: '₹ 100', icon: AlertCircle },
  ]

  const getColorClasses = (color) => {
    const colors = {
      red: { bg: 'bg-red-50', border: 'border-red-200', tag: 'bg-red-100 text-red-700', iconBg: 'bg-red-100', iconText: 'text-red-600' },
      blue: { bg: 'bg-blue-50', border: 'border-blue-200', tag: 'bg-blue-100 text-blue-700', iconBg: 'bg-blue-100', iconText: 'text-blue-600' },
      green: { bg: 'bg-green-50', border: 'border-green-200', tag: 'bg-green-100 text-green-700', iconBg: 'bg-green-100', iconText: 'text-green-600' },
      purple: { bg: 'bg-purple-50', border: 'border-purple-200', tag: 'bg-purple-100 text-purple-700', iconBg: 'bg-purple-100', iconText: 'text-purple-600' },
      orange: { bg: 'bg-orange-50', border: 'border-orange-200', tag: 'bg-orange-100 text-orange-700', iconBg: 'bg-orange-100', iconText: 'text-orange-600' },
      rose: { bg: 'bg-rose-50', border: 'border-rose-200', tag: 'bg-rose-100 text-rose-700', iconBg: 'bg-rose-100', iconText: 'text-rose-600' },
      amber: { bg: 'bg-amber-50', border: 'border-amber-200', tag: 'bg-amber-100 text-amber-700', iconBg: 'bg-amber-100', iconText: 'text-amber-600' },
      indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', tag: 'bg-indigo-100 text-indigo-700', iconBg: 'bg-indigo-100', iconText: 'text-indigo-600' },
      pink: { bg: 'bg-pink-50', border: 'border-pink-200', tag: 'bg-pink-100 text-pink-700', iconBg: 'bg-pink-100', iconText: 'text-pink-600' },
      teal: { bg: 'bg-teal-50', border: 'border-teal-200', tag: 'bg-teal-100 text-teal-700', iconBg: 'bg-teal-100', iconText: 'text-teal-600' },
      cyan: { bg: 'bg-cyan-50', border: 'border-cyan-200', tag: 'bg-cyan-100 text-cyan-700', iconBg: 'bg-cyan-100', iconText: 'text-cyan-600' },
      violet: { bg: 'bg-violet-50', border: 'border-violet-200', tag: 'bg-violet-100 text-violet-700', iconBg: 'bg-violet-100', iconText: 'text-violet-600' }
    }
    return colors[color] || colors.blue
  }

  const getCategoryColor = (category) => {
    const map = {
      'Essential': 'bg-red-100 text-red-700',
      'Timing': 'bg-blue-100 text-blue-700',
      'Communication': 'bg-green-100 text-green-700',
      'Discipline': 'bg-purple-100 text-purple-700',
      'Restrictions': 'bg-orange-100 text-orange-700',
      'Prohibited Items': 'bg-rose-100 text-rose-700',
      'Responsibility': 'bg-amber-100 text-amber-700',
      'Protocol': 'bg-indigo-100 text-indigo-700',
      'Activities': 'bg-pink-100 text-pink-700',
      'Parent Guidelines': 'bg-teal-100 text-teal-700',
      'Administrative': 'bg-cyan-100 text-cyan-700',
      'Religious Policy': 'bg-violet-100 text-violet-700'
    }
    return map[category] || 'bg-gray-100 text-gray-700'
  }

  const SectionTitle = ({ icon: Icon, title, subtitle, count }) => (
    <motion.div 
      variants={fadeInUp}
      className="flex items-center gap-3 mb-5"
    >
      <div className="p-2 bg-gold-100 rounded-lg">
        <Icon size={18} className="text-maroon-700" />
      </div>
      <div>
        <h2 className="text-xl font-serif font-bold text-maroon-900">{title}</h2>
        {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
      </div>
      {count && <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2.5 py-0.5 rounded-full">{count} Rules</span>}
      <div className="flex-1 h-px bg-gradient-to-r from-gold-300/50 to-transparent" />
    </motion.div>
  )

  return (
    <div className="bg-gradient-to-b from-white to-[#FBF6EC] min-h-screen">
      
      {/* ========================================================== */}
      {/* COMPACT HERO HEADER */}
      {/* ========================================================== */}
      <div className="bg-maroon-900 text-white py-8 px-4">
        <div className="container-custom mx-auto">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gold-500/20 rounded-lg">
              <BookMarked size={20} className="text-gold-300" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-serif font-bold">Rules & Regulations</h1>
              <p className="text-gold-300 text-sm mt-0.5">Guidelines for a disciplined and harmonious school environment</p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================== */}
      {/* MAIN CONTENT */}
      {/* ========================================================== */}
      <section ref={ref} className="py-8 md:py-10">
        <div className="container-custom max-w-5xl mx-auto">

          {/* Quick Highlights */}
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6"
          >
            {quickHighlights.map((item) => {
              const Icon = item.icon
              return (
                <motion.div 
                  key={item.label} 
                  variants={fadeInUp}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-3.5 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 group"
                >
                  <div className="flex items-center justify-center gap-2 mb-0.5">
                    <div className="p-1 rounded-lg bg-gold-50 group-hover:bg-gold-100 transition-colors">
                      <Icon size={14} className="text-gold-600" />
                    </div>
                    <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">{item.label}</span>
                  </div>
                  <p className="text-maroon-900 font-bold text-sm">{item.value}</p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* General Rules */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="mb-6"
          >
            <SectionTitle 
              icon={Flag} 
              title="General Rules" 
              count="12" 
            />
            
            <motion.div 
              variants={staggerChildren}
              initial="hidden"
              animate={controls}
              className="space-y-2.5"
            >
              {generalRules.map((rule, index) => {
                const colors = getColorClasses(rule.color)
                const Icon = rule.icon
                const categoryColor = getCategoryColor(rule.category)
                return (
                  <motion.div 
                    key={index} 
                    variants={fadeInUp}
                    className={`${colors.bg} rounded-xl border ${colors.border} p-4 hover:shadow-md transition-all duration-300 group hover:border-gold-300`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`flex-shrink-0 mt-0.5 ${colors.iconBg} rounded-full p-1.5 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={16} className={colors.iconText} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start flex-wrap gap-2">
                          <p className="text-sm text-gray-700 leading-relaxed flex-1">{rule.text}</p>
                          <span className={`flex-shrink-0 text-[10px] font-medium px-2.5 py-0.5 rounded-full ${categoryColor}`}>
                            {rule.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Admission & Withdrawal Rules */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="mb-6"
          >
            <SectionTitle 
              icon={GraduationCap} 
              title="Admission & Withdrawal" 
              count="7" 
            />

            <div className="bg-gradient-to-br from-maroon-50 to-white rounded-xl border border-maroon-100 p-5 shadow-sm">
              <motion.div 
                variants={staggerChildren}
                initial="hidden"
                animate={controls}
                className="grid grid-cols-1 md:grid-cols-2 gap-3"
              >
                {admissionRules.map((rule, index) => {
                  const colors = getColorClasses(rule.color)
                  const Icon = rule.icon
                  return (
                    <motion.div 
                      key={index} 
                      variants={fadeInUp}
                      className={`${colors.bg} rounded-xl border ${colors.border} p-3.5 hover:shadow-md transition-all duration-300 group hover:border-gold-300`}
                    >
                      <div className="flex items-start gap-2.5">
                        <div className={`flex-shrink-0 mt-0.5 ${colors.iconBg} rounded-full p-1.5 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon size={14} className={colors.iconText} />
                        </div>
                        <p className="text-xs text-gray-700 leading-relaxed flex-1">{rule.text}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          </motion.div>

          {/* Fee Information Cards */}
          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
          >
            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-5 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-blue-100 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap size={18} className="text-blue-700" />
                </div>
                <h4 className="font-bold text-blue-900 text-sm">Transfer Certificate (TC)</h4>
              </div>
              <ul className="space-y-1.5 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <ChevronRight size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>TC issued only after all dues are cleared</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Written application required from parents/guardians</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>TC Fee: <span className="font-semibold">₹100/-</span> per application</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Extra copies from register: <span className="font-semibold">₹50/-</span> each</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-orange-200 p-5 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-orange-100 group-hover:scale-110 transition-transform duration-300">
                  <AlertCircle size={18} className="text-orange-700" />
                </div>
                <h4 className="font-bold text-orange-900 text-sm">Important Notes</h4>
              </div>
              <ul className="space-y-1.5 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>New admissions primarily for KG only</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Admission based on seat availability & competence</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Full year fees applicable for mid-year admissions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Parents responsible for student's regularity, conduct & fees</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="text-center p-4 bg-gradient-to-r from-gold-50 to-amber-50 rounded-xl border border-gold-200"
          >
            <div className="flex items-center justify-center gap-2">
              <Sparkles size={16} className="text-gold-600" />
              <p className="text-xs text-gray-600">
                <span className="font-medium text-maroon-700">These rules</span> are designed to create a disciplined, respectful, and conducive learning environment for all students.
              </p>
              <Sparkles size={16} className="text-gold-600" />
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

export default Rules