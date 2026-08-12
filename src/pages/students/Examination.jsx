import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { 
  FileSpreadsheet, 
  Award, 
  AlertCircle, 
  CheckCircle, 
  XCircle, 
  Users, 
  Calendar,
  BarChart,
  BookOpen,
  GraduationCap,
  Clock,
  TrendingUp,
  TrendingDown,
  ChevronRight,
  Info,
  Shield,
  Sparkles,
  Target,
  Flag
} from 'lucide-react'

const Examination = () => {
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
      transition: { staggerChildren: 0.08 }
    }
  }

  const promotionRules = [
    {
      text: "Promotion depends on the student's performance throughout the year and not merely on marks scored in the final examination.",
      icon: TrendingUp,
      color: 'emerald'
    },
    {
      text: "Reports of terminal examination and unit tests are given in the student's report cards. Parents/Guardian should sign them regularly and follow the progress of their children/wards. A student found with report unsigned will not be admitted in the class.",
      icon: FileSpreadsheet,
      color: 'blue'
    },
    {
      text: "Promotion is decided at the meeting of the Principal and the Teachers concerned. Hence results are final and cannot be re-considered. Final Examination answer scripts shall not be shown.",
      icon: Shield,
      color: 'purple'
    },
    {
      text: "No student will be allowed to repeat the same class for a third time. A student who fails twice in three consecutive years is considered as withdrawn from the school.",
      icon: XCircle,
      color: 'red'
    },
    {
      text: "A student who fails in any two major subjects is considered to have failed.",
      icon: TrendingDown,
      color: 'rose'
    },
    {
      text: "No student will be allowed to sit for the promotion examination if the attendance during the year is below 90%.",
      icon: Clock,
      color: 'amber'
    }
  ]

  const keyHighlights = [
    { label: 'Minimum Attendance', value: '90% required for promotion exam', icon: Clock },
    { label: 'Repeat Policy', value: 'Maximum 2 failures allowed', icon: XCircle },
    { label: 'Major Subjects', value: 'Failure in 2 = Failed', icon: AlertCircle },
    { label: 'Final Decision', value: 'Principal & Teachers meeting', icon: Users },
  ]

  const getColorClasses = (color) => {
    const colors = {
      emerald: {
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        iconBg: 'bg-emerald-100',
        iconText: 'text-emerald-600',
        tag: 'bg-emerald-100 text-emerald-700',
        gradient: 'from-emerald-50 to-teal-50',
        hover: 'hover:border-emerald-300 hover:shadow-emerald-100'
      },
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        iconBg: 'bg-blue-100',
        iconText: 'text-blue-600',
        tag: 'bg-blue-100 text-blue-700',
        gradient: 'from-blue-50 to-indigo-50',
        hover: 'hover:border-blue-300 hover:shadow-blue-100'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        iconBg: 'bg-purple-100',
        iconText: 'text-purple-600',
        tag: 'bg-purple-100 text-purple-700',
        gradient: 'from-purple-50 to-violet-50',
        hover: 'hover:border-purple-300 hover:shadow-purple-100'
      },
      red: {
        bg: 'bg-red-50',
        border: 'border-red-200',
        iconBg: 'bg-red-100',
        iconText: 'text-red-600',
        tag: 'bg-red-100 text-red-700',
        gradient: 'from-red-50 to-rose-50',
        hover: 'hover:border-red-300 hover:shadow-red-100'
      },
      rose: {
        bg: 'bg-rose-50',
        border: 'border-rose-200',
        iconBg: 'bg-rose-100',
        iconText: 'text-rose-600',
        tag: 'bg-rose-100 text-rose-700',
        gradient: 'from-rose-50 to-pink-50',
        hover: 'hover:border-rose-300 hover:shadow-rose-100'
      },
      amber: {
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        iconBg: 'bg-amber-100',
        iconText: 'text-amber-600',
        tag: 'bg-amber-100 text-amber-700',
        gradient: 'from-amber-50 to-orange-50',
        hover: 'hover:border-amber-300 hover:shadow-amber-100'
      }
    }
    return colors[color] || colors.blue
  }

  const SectionTitle = ({ icon: Icon, title, subtitle }) => (
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
              <FileSpreadsheet size={20} className="text-gold-300" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-serif font-bold">Examination & Promotion</h1>
              <p className="text-gold-300 text-sm mt-0.5">Assessment structure, policies and promotion criteria</p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================== */}
      {/* MAIN CONTENT */}
      {/* ========================================================== */}
      <section ref={ref} className="py-8 md:py-10">
        <div className="container-custom max-w-5xl mx-auto">

          {/* Key Highlights */}
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6"
          >
            {keyHighlights.map((item) => {
              const Icon = item.icon
              return (
                <motion.div 
                  key={item.label} 
                  variants={fadeInUp}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 group"
                >
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <div className="p-1.5 rounded-lg bg-gold-50 group-hover:bg-gold-100 transition-colors">
                      <Icon size={14} className="text-gold-600" />
                    </div>
                    <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">{item.label}</span>
                  </div>
                  <p className="text-maroon-900 font-semibold text-xs leading-tight">{item.value}</p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Promotion Rules */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="mb-6"
          >
            <SectionTitle 
              icon={Flag} 
              title="Promotion Regulations" 
              subtitle="Rules & Policies" 
            />
            
            <motion.div 
              variants={staggerChildren}
              initial="hidden"
              animate={controls}
              className="space-y-3"
            >
              {promotionRules.map((rule, index) => {
                const colors = getColorClasses(rule.color)
                const Icon = rule.icon
                return (
                  <motion.div 
                    key={index} 
                    variants={fadeInUp}
                    className={`${colors.bg} rounded-xl border ${colors.border} p-4 hover:shadow-lg transition-all duration-300 group ${colors.hover}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 mt-0.5 ${colors.iconBg} rounded-xl p-2.5 group-hover:scale-110 transition-transform duration-300`}>
                        <div className={colors.iconText}>
                          <Icon size={16} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {rule.text}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <span className={`text-[10px] font-medium px-2.5 py-0.5 rounded-full ${colors.tag}`}>
                            Rule {index + 1}
                          </span>
                        </div>
                      </div>
                      <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ChevronRight size={18} className="text-gold-500" />
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Assessment Structure */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="mb-6"
          >
            <SectionTitle 
              icon={Target} 
              title="Assessment Structure" 
              subtitle="Examination Types" 
            />
            
            <motion.div 
              variants={staggerChildren}
              initial="hidden"
              animate={controls}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {/* Unit Tests */}
              <motion.div 
                variants={fadeInUp}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200 p-5 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2.5 rounded-xl bg-blue-100 group-hover:scale-110 transition-transform duration-300">
                    <BarChart size={18} className="text-blue-600" />
                  </div>
                  <h4 className="font-bold text-blue-900 text-sm">Unit Tests</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Regular unit tests conducted throughout the year to track continuous progress and identify areas for improvement.
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-blue-700 bg-blue-100/50 px-3 py-1 rounded-full w-fit">
                  <Calendar size={12} />
                  <span>Conducted periodically</span>
                </div>
              </motion.div>

              {/* Terminal Exams */}
              <motion.div 
                variants={fadeInUp}
                className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-200 p-5 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2.5 rounded-xl bg-purple-100 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen size={18} className="text-purple-600" />
                  </div>
                  <h4 className="font-bold text-purple-900 text-sm">Terminal Exams</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Comprehensive terminal examinations assessing the syllabus covered in each academic term.
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-purple-700 bg-purple-100/50 px-3 py-1 rounded-full w-fit">
                  <FileSpreadsheet size={12} />
                  <span>Report cards issued</span>
                </div>
              </motion.div>

              {/* Final Promotion */}
              <motion.div 
                variants={fadeInUp}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-200 p-5 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2.5 rounded-xl bg-emerald-100 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap size={18} className="text-emerald-600" />
                  </div>
                  <h4 className="font-bold text-emerald-900 text-sm">Final Promotion</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Year-long performance evaluation conducted by Principal and Teachers for final promotion decision.
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-100/50 px-3 py-1 rounded-full w-fit">
                  <Shield size={12} />
                  <span>Final & binding decision</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Important Information Cards */}
          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
          >
            {/* Parent Responsibilities */}
            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200 p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-amber-100">
                  <Users size={16} className="text-amber-600" />
                </div>
                <h5 className="font-semibold text-amber-900 text-sm">Parent/Guardian Responsibilities</h5>
              </div>
              <ul className="space-y-2 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Sign report cards regularly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Monitor child's academic progress</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle size={14} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Unsigned reports = No class admission</span>
                </li>
              </ul>
            </motion.div>

            {/* Important Restrictions */}
            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl border border-rose-200 p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-rose-100">
                  <AlertCircle size={16} className="text-rose-600" />
                </div>
                <h5 className="font-semibold text-rose-900 text-sm">Important Restrictions</h5>
              </div>
              <ul className="space-y-2 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <XCircle size={14} className="text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>No re-evaluation of results</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle size={14} className="text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>Answer scripts not shown</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle size={14} className="text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>No third attempt in same class</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Final Quote */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="p-5 bg-gradient-to-r from-maroon-900 to-maroon-700 rounded-xl shadow-lg"
          >
            <div className="flex items-center justify-center gap-3">
              <div className="p-2 rounded-xl bg-gold-500/20">
                <Award size={20} className="text-gold-300" />
              </div>
              <p className="text-sm text-white font-serif text-center leading-relaxed">
                "Promotion is a comprehensive evaluation of the student's entire year's performance, 
                not just the final examination marks."
              </p>
            </div>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="mt-4 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-gray-50 to-gold-50/30 rounded-full px-5 py-2 border border-gray-200">
              <p className="text-xs text-gray-500 flex items-center gap-2">
                <Info size={14} className="text-gold-500" />
                <span>Results are final after the meeting of Principal and Teachers concerned</span>
              </p>
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

export default Examination