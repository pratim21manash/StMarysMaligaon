import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { 
  CalendarDays, 
  AlertCircle, 
  Clock, 
  FileText, 
  User, 
  Phone, 
  Shield, 
  ChevronRight,
  Info,
  XCircle,
  CheckCircle,
  Home,
  Stethoscope,
  Calendar,
  Sparkles,
  Award,
  ArrowRight
} from 'lucide-react'

const Leave = () => {
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

  const leaveRules = [
    {
      text: "No student should absent herself without obtaining leave previously, unless it is a sick leave.",
      icon: FileText,
      color: 'blue'
    },
    {
      text: "Students must return after the holidays on the appointed date. In case of sickness the school authority must be notified and Doctor's certificate must be provided. Without the prior information late comers are liable to lose their seats.",
      icon: Calendar,
      color: 'purple'
    },
    {
      text: "The names of those who are absent without leave for one month or more may be struck off the rolls.",
      icon: XCircle,
      color: 'red'
    },
    {
      text: "Leave must be obtained by writing application from parents or guardians in the prescribed 'leave record'. Late comers must produce a similar justification.",
      icon: FileText,
      color: 'emerald'
    },
    {
      text: "To be admitted to the class room, those who have been absent and late comers, must show their teachers their regularity record duly counter signed by the Sister – in – charge. The school disclaims all responsibilities on failure to produce it a student is obliged to return home during school hours.",
      icon: Shield,
      color: 'amber'
    },
    {
      text: "No student is allowed to leave the school premises except on the strength of a letter of authorization from the parents/ guardians, as well accompanied by them and too for a weighty reason.",
      icon: Home,
      color: 'indigo'
    },
    {
      text: "Students who have been absent from the class must state the reason for their absence briefly in their regularity record. Reason for a private nature may be intimated by a letter to the Headmistress/ Sister – In – Charge. Birthday, excursion, urgent business are not considered sufficient reasons. Absence from school in order to study is never allowed.",
      icon: Info,
      color: 'rose'
    }
  ]

  const importantNotes = [
    { label: 'Prior Leave Required', value: 'Yes, except for sick leave', icon: CheckCircle },
    { label: 'Absence Period', value: '1 month - may be struck off', icon: AlertCircle },
    { label: 'Late Arrival', value: 'Requires justification', icon: Clock },
    { label: 'Premises Exit', value: 'Parent authorization required', icon: User },
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        iconBg: 'bg-blue-100',
        iconText: 'text-blue-600',
        tag: 'bg-blue-100 text-blue-700',
        hover: 'hover:border-blue-300 hover:shadow-blue-100'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        iconBg: 'bg-purple-100',
        iconText: 'text-purple-600',
        tag: 'bg-purple-100 text-purple-700',
        hover: 'hover:border-purple-300 hover:shadow-purple-100'
      },
      red: {
        bg: 'bg-red-50',
        border: 'border-red-200',
        iconBg: 'bg-red-100',
        iconText: 'text-red-600',
        tag: 'bg-red-100 text-red-700',
        hover: 'hover:border-red-300 hover:shadow-red-100'
      },
      emerald: {
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        iconBg: 'bg-emerald-100',
        iconText: 'text-emerald-600',
        tag: 'bg-emerald-100 text-emerald-700',
        hover: 'hover:border-emerald-300 hover:shadow-emerald-100'
      },
      amber: {
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        iconBg: 'bg-amber-100',
        iconText: 'text-amber-600',
        tag: 'bg-amber-100 text-amber-700',
        hover: 'hover:border-amber-300 hover:shadow-amber-100'
      },
      indigo: {
        bg: 'bg-indigo-50',
        border: 'border-indigo-200',
        iconBg: 'bg-indigo-100',
        iconText: 'text-indigo-600',
        tag: 'bg-indigo-100 text-indigo-700',
        hover: 'hover:border-indigo-300 hover:shadow-indigo-100'
      },
      rose: {
        bg: 'bg-rose-50',
        border: 'border-rose-200',
        iconBg: 'bg-rose-100',
        iconText: 'text-rose-600',
        tag: 'bg-rose-100 text-rose-700',
        hover: 'hover:border-rose-300 hover:shadow-rose-100'
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
              <CalendarDays size={20} className="text-gold-300" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-serif font-bold">Leave & Absence</h1>
              <p className="text-gold-300 text-sm mt-0.5">Policies and procedures for student attendance</p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================== */}
      {/* MAIN CONTENT */}
      {/* ========================================================== */}
      <section ref={ref} className="py-8 md:py-10">
        <div className="container-custom max-w-5xl mx-auto">

          {/* Quick Reference Cards */}
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6"
          >
            {importantNotes.map((item) => {
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

          {/* Leave Rules */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="mb-6"
          >
            <SectionTitle 
              icon={Shield} 
              title="Leave & Absence Regulations" 
              subtitle="7 Rules" 
            />
            
            <motion.div 
              variants={staggerChildren}
              initial="hidden"
              animate={controls}
              className="space-y-3"
            >
              {leaveRules.map((rule, index) => {
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

          {/* Procedure Flow */}
          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
          >
            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-5 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded-xl bg-blue-100 group-hover:scale-110 transition-transform duration-300">
                  <FileText size={18} className="text-blue-600" />
                </div>
                <h4 className="font-bold text-blue-900 text-sm">Step 1: Application</h4>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Write leave application in prescribed 'leave record' format signed by parents/guardians
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-blue-700 bg-blue-100/50 px-3 py-1 rounded-full w-fit">
                <Clock size={12} />
                <span>Prior leave required</span>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-orange-200 p-5 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded-xl bg-orange-100 group-hover:scale-110 transition-transform duration-300">
                  <Shield size={18} className="text-orange-600" />
                </div>
                <h4 className="font-bold text-orange-900 text-sm">Step 2: Approval</h4>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Regularity record must be countersigned by Sister-in-charge for re-entry
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-orange-700 bg-orange-100/50 px-3 py-1 rounded-full w-fit">
                <CheckCircle size={12} />
                <span>Required for admission</span>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl border border-rose-200 p-5 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded-xl bg-rose-100 group-hover:scale-110 transition-transform duration-300">
                  <AlertCircle size={18} className="text-rose-600" />
                </div>
                <h4 className="font-bold text-rose-900 text-sm">Step 3: Consequences</h4>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                1 month absence without leave may result in name being struck off rolls
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-rose-700 bg-rose-100/50 px-3 py-1 rounded-full w-fit">
                <XCircle size={12} />
                <span>Strict action applicable</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Special Notes */}
          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
          >
            {/* Sick Leave Protocol */}
            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200 p-5 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-emerald-100">
                  <Stethoscope size={16} className="text-emerald-600" />
                </div>
                <h5 className="font-semibold text-emerald-900 text-sm">Sick Leave Protocol</h5>
              </div>
              <ul className="space-y-2 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <ArrowRight size={14} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Notify school authority immediately</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={14} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Doctor's certificate must be provided</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={14} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Prior information required for late comers</span>
                </li>
              </ul>
            </motion.div>

            {/* Important Exceptions */}
            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl border border-purple-200 p-5 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-purple-100">
                  <Info size={16} className="text-purple-600" />
                </div>
                <h5 className="font-semibold text-purple-900 text-sm">Important Exceptions</h5>
              </div>
              <ul className="space-y-2 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <XCircle size={14} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Birthday - Not a valid reason</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle size={14} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Excursion - Not considered sufficient</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle size={14} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Urgent business - Not acceptable</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle size={14} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Studying at home - Never allowed</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Footer Notice */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="p-4 bg-gradient-to-r from-maroon-50 to-rose-50 rounded-xl border border-maroon-200"
          >
            <div className="flex items-center justify-center gap-3">
              <div className="p-1.5 rounded-lg bg-maroon-100">
                <AlertCircle size={16} className="text-maroon-700" />
              </div>
              <p className="text-xs text-maroon-800 font-medium text-center">
                All leave applications must be submitted with proper justification. The school reserves the right to take disciplinary action for unauthorized absence.
              </p>
            </div>
          </motion.div>

          {/* Decorative Quote */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="mt-6 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-gray-50 to-gold-50/30 rounded-full px-5 py-2 border border-gray-200">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Sparkles size={14} className="text-gold-500" />
                <span>Regular attendance is key to academic success</span>
                <Sparkles size={14} className="text-gold-500" />
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

export default Leave