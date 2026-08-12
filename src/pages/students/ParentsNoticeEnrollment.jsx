import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { 
  ClipboardCheck, 
  Users, 
  FileText, 
  Phone, 
  Home,
  BookOpen,
  Calendar,
  AlertCircle,
  CheckCircle,
  CircleDot,
  Mail,
  Clock,
  Sparkles,
  ArrowRight,
  Shield,
  Info,
  GraduationCap
} from 'lucide-react'

const ParentsNoticeEnrollment = () => {
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

  const notices = [
    {
      text: "Parents and guardians are earnestly requested to co-operate with the school authorities regarding rules, lessons, home-work, co-curricular activities and character training of their children.",
      icon: Users,
      color: 'blue'
    },
    {
      text: "Any communication (request or complaint) made by the parents should be addressed to the Principal and not to the class teacher.",
      icon: Mail,
      color: 'purple'
    },
    {
      text: "Parents are requested to interview the Head Mistress to discuss the progress of their children with previous appointment.",
      icon: Calendar,
      color: 'emerald'
    },
    {
      text: "No school business will be transacted during holidays. Look through the regularity record, report book and answer script of the student periodically.",
      icon: Clock,
      color: 'amber'
    },
    {
      text: "A record of address of parents or guardians is maintained in the school office. Any change of address should be communicated without delay to the school office.",
      icon: Home,
      color: 'rose'
    }
  ]

  const enrolmentData = [
    { class: 'I-V', sections: 10, students: 606, color: 'blue' },
    { class: 'VI-VIII', sections: 6, students: 358, color: 'green' },
    { class: 'IX-X', sections: 6, students: 225, color: 'amber' },
    { class: 'XI-XII', sections: 6, students: 168, color: 'purple' }
  ]

  const totalSections = enrolmentData.reduce((sum, row) => sum + row.sections, 0)
  const totalStudents = enrolmentData.reduce((sum, row) => sum + row.students, 0)

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        iconBg: 'bg-blue-100',
        iconText: 'text-blue-600',
        tag: 'bg-blue-100 text-blue-700',
        hover: 'hover:border-blue-300',
        dot: 'bg-blue-500'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        iconBg: 'bg-purple-100',
        iconText: 'text-purple-600',
        tag: 'bg-purple-100 text-purple-700',
        hover: 'hover:border-purple-300',
        dot: 'bg-purple-500'
      },
      emerald: {
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        iconBg: 'bg-emerald-100',
        iconText: 'text-emerald-600',
        tag: 'bg-emerald-100 text-emerald-700',
        hover: 'hover:border-emerald-300',
        dot: 'bg-emerald-500'
      },
      amber: {
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        iconBg: 'bg-amber-100',
        iconText: 'text-amber-600',
        tag: 'bg-amber-100 text-amber-700',
        hover: 'hover:border-amber-300',
        dot: 'bg-amber-500'
      },
      rose: {
        bg: 'bg-rose-50',
        border: 'border-rose-200',
        iconBg: 'bg-rose-100',
        iconText: 'text-rose-600',
        tag: 'bg-rose-100 text-rose-700',
        hover: 'hover:border-rose-300',
        dot: 'bg-rose-500'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        iconBg: 'bg-green-100',
        iconText: 'text-green-600',
        tag: 'bg-green-100 text-green-700',
        hover: 'hover:border-green-300',
        dot: 'bg-green-500'
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
              <ClipboardCheck size={20} className="text-gold-300" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-serif font-bold">Notice For Parents</h1>
              <p className="text-gold-300 text-sm mt-0.5">Important information & enrolment details</p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================== */}
      {/* MAIN CONTENT */}
      {/* ========================================================== */}
      <section ref={ref} className="py-8 md:py-10">
        <div className="container-custom max-w-4xl mx-auto">

          {/* Notice Items */}
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={controls}
            className="space-y-3 mb-6"
          >
            {notices.map((notice, index) => {
              const colors = getColorClasses(notice.color)
              const Icon = notice.icon
              return (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  className={`${colors.bg} rounded-xl border ${colors.border} p-4 hover:shadow-md transition-all duration-300 group ${colors.hover}`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`flex-shrink-0 mt-0.5 ${colors.iconBg} rounded-full p-1.5 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={16} className={colors.iconText} />
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed flex-1">
                      {notice.text}
                    </p>
                    <span className="flex-shrink-0 text-[10px] font-medium text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Enrolment Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="mb-6"
          >
            <SectionTitle 
              icon={Users} 
              title="Section-wise Enrolment of Students" 
              subtitle="2025-26" 
            />

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-maroon-900 to-maroon-700 text-white">
                      <th className="px-5 py-3.5 text-left font-semibold">Class</th>
                      <th className="px-5 py-3.5 text-center font-semibold">No. of Sections</th>
                      <th className="px-5 py-3.5 text-center font-semibold">No. of Students</th>
                    </tr>
                  </thead>
                  <tbody>
                    {enrolmentData.map((row, index) => {
                      const colors = getColorClasses(row.color)
                      return (
                        <tr 
                          key={row.class} 
                          className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'} hover:bg-maroon-50/30 transition-colors duration-150`}
                        >
                          <td className="px-5 py-3 font-medium text-maroon-900 border-b border-gray-100">
                            <span className="flex items-center gap-2">
                              <span className={`w-2 h-2 rounded-full ${colors.dot}`}></span>
                              {row.class}
                            </span>
                          </td>
                          <td className="px-5 py-3 text-center text-gray-600 border-b border-gray-100">
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
                              {row.sections}
                            </span>
                          </td>
                          <td className="px-5 py-3 text-center text-gray-700 border-b border-gray-100 font-medium">
                            {row.students}
                          </td>
                        </tr>
                      )
                    })}
                    {/* Total Row */}
                    <tr className="bg-gradient-to-r from-gold-50 to-amber-50">
                      <td className="px-5 py-3.5 font-bold text-maroon-900">Total</td>
                      <td className="px-5 py-3.5 text-center font-bold text-maroon-900">
                        {totalSections}
                      </td>
                      <td className="px-5 py-3.5 text-center font-bold text-maroon-900">
                        {totalStudents}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              {/* Footer */}
              <div className="bg-gray-50/80 px-5 py-2.5 border-t border-gray-100 flex items-center justify-between">
                <p className="text-[10px] text-gray-400 flex items-center gap-1.5">
                  <GraduationCap size={12} className="text-gold-500" />
                  Total Enrolment for Academic Year 2025-26
                </p>
                <p className="text-[10px] text-gray-400">Updated: 2025</p>
              </div>
            </div>
          </motion.div>

          {/* Summary Cards */}
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6"
          >
            {enrolmentData.map((row) => {
              const colors = getColorClasses(row.color)
              return (
                <motion.div 
                  key={row.class} 
                  variants={fadeInUp}
                  className={`bg-white rounded-xl shadow-sm border border-gray-100 p-3 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:${colors.border}`}
                >
                  <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">{row.class}</p>
                  <p className="text-xl font-bold text-maroon-900">{row.students}</p>
                  <p className="text-[10px] text-gray-400">{row.sections} Sections</p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Quick Contact / Footer Note */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="text-center p-4 bg-gradient-to-r from-gray-50 to-gold-50/30 rounded-xl border border-gray-200"
          >
            <div className="flex items-center justify-center gap-2">
              <AlertCircle size={16} className="text-gold-600" />
              <p className="text-xs text-gray-600">
                <span className="font-medium text-maroon-700">For any queries,</span> please contact the school office during working hours.
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
            <div className="inline-block bg-gradient-to-r from-maroon-50 to-gold-50/30 rounded-full px-5 py-2 border border-maroon-100/60">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Sparkles size={14} className="text-gold-500" />
                <span className="font-medium text-maroon-700">"Partnership between parents and school is key to student success"</span>
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

export default ParentsNoticeEnrollment