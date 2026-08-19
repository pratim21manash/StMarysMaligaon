import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { 
  Wallet, 
  Calendar, 
  Clock, 
  AlertCircle, 
  Banknote, 
  Info,
  Sparkles,
  Shield,
  Phone,
  Building,
  CreditCard
} from 'lucide-react'

const Fees = () => {
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

  // Updated fee data from the image
  const feeData = [
    { 
      class: 'KG', 
      annualPerInstallment: '₹ 9,150', 
      tuitionPerInstallment: '—',
      installmentPeriod: '3 Months',
      colour: 'purple'
    },
    { 
      class: 'I - III', 
      annualPerInstallment: '₹ 3,630', 
      tuitionPerInstallment: '₹ 6,300',
      installmentPeriod: '3 Months',
      colour: 'blue'
    },
    { 
      class: 'IV - V', 
      annualPerInstallment: '₹ 3,640', 
      tuitionPerInstallment: '₹ 6,300',
      installmentPeriod: '3 Months',
      colour: 'teal'
    },
    { 
      class: 'VI - VIII', 
      annualPerInstallment: '₹ 3,680', 
      tuitionPerInstallment: '₹ 6,300',
      installmentPeriod: '3 Months',
      colour: 'green'
    },
    { 
      class: 'IX - X', 
      annualPerInstallment: '₹ 3,775', 
      tuitionPerInstallment: '₹ 6,300',
      installmentPeriod: '3 Months',
      colour: 'amber'
    },
    { 
      class: 'XI - XII (Hum/Com)', 
      annualPerInstallment: '₹ 5,930', 
      tuitionPerInstallment: '₹ 8,800',
      installmentPeriod: '4 Months',
      colour: 'orange'
    },
    { 
      class: 'XI - XII (Science)', 
      annualPerInstallment: '₹ 8,480', 
      tuitionPerInstallment: '₹ 8,800',
      installmentPeriod: '4 Months',
      colour: 'rose'
    }
  ]

  const installmentSchedule = [
    { month: 'April', period: '10th - 20th', classes: 'KG to X' },
    { month: 'July', period: '10th - 20th', classes: 'KG to X' },
    { month: 'October', period: '10th - 20th', classes: 'KG to X' },
    { month: 'January', period: '10th - 20th', classes: 'KG to X' },
  ]

  const seniorInstallmentSchedule = [
    { month: 'June', classes: 'XI & XII' },
    { month: 'September', classes: 'XI & XII' },
    { month: 'December', classes: 'XI & XII' },
  ]

  const importantRules = [
    'Fees cover twelve calendar months - no reduction for holidays or broken periods',
    'Students are liable to pay fees as long as their names are officially on rolls',
    'Late payment fine of Rs. 100/- will be levied on all late payments',
    'Students leaving/joining during any term must pay tuition, annual and other fees for whole year',
    'Absence from examination does not mean exemption from examination fees',
    'Results will be withheld for students with outstanding dues',
    'School fees and other dues are liable to be revised at any time'
  ]

  const getColorClasses = (color) => {
    const colors = {
      purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', dot: 'bg-purple-500' },
      blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', dot: 'bg-blue-500' },
      teal: { bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-700', dot: 'bg-teal-500' },
      green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', dot: 'bg-green-500' },
      amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700', dot: 'bg-amber-500' },
      orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', dot: 'bg-orange-500' },
      rose: { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-700', dot: 'bg-rose-500' }
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
              <Wallet size={20} className="text-gold-300" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-serif font-bold">Fee Structure</h1>
              <p className="text-gold-300 text-sm mt-0.5">Academic Year 2025-26</p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================== */}
      {/* MAIN CONTENT */}
      {/* ========================================================== */}
      <section ref={ref} className="py-8 md:py-10">
        <div className="container-custom max-w-5xl mx-auto">
          
          {/* Important Notice */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-orange-500 rounded-xl p-4 mb-6 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <AlertCircle size={18} className="text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-700 font-medium">Fees are received by HDFC Bank Ltd., Maligaon Branch on behalf of the Institution</p>
                <p className="text-xs text-gray-600 mt-0.5">No bills are issued. Parents/guardians should ensure timely payment</p>
              </div>
            </div>
          </motion.div>

          {/* Fee Table */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-6"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-maroon-900 to-maroon-700 text-white">
                    <th className="px-4 py-3.5 text-left font-semibold text-sm">CLASS</th>
                    <th className="px-4 py-3.5 text-center font-semibold text-sm">ANNUAL FEES<br/><span className="text-xs font-normal text-gold-300">(Per Installment)</span></th>
                    <th className="px-4 py-3.5 text-center font-semibold text-sm">TUITION FEES<br/><span className="text-xs font-normal text-gold-300">(Per Installment)</span></th>
                    <th className="px-4 py-3.5 text-center font-semibold text-sm">INSTALLMENT<br/><span className="text-xs font-normal text-gold-300">Period</span></th>
                  </tr>
                </thead>
                <tbody>
                  {feeData.map((row, index) => {
                    const colors = getColorClasses(row.colour)
                    return (
                      <tr 
                        key={row.class} 
                        className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'} hover:bg-maroon-50/30 transition-colors duration-150`}
                      >
                        <td className="px-4 py-3 font-semibold text-maroon-900 border-b border-gray-100 text-sm">
                          <span className="flex items-center gap-2">
                            <span className={`w-2.5 h-2.5 rounded-full ${colors.dot}`}></span>
                            {row.class}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-center text-gray-700 border-b border-gray-100 text-sm font-medium">
                          {row.annualPerInstallment}
                        </td>
                        <td className="px-4 py-3 text-center text-gray-700 border-b border-gray-100 text-sm font-medium">
                          {row.tuitionPerInstallment}
                        </td>
                        <td className="px-4 py-3 text-center border-b border-gray-100 text-sm">
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold-100 text-gold-800 text-xs font-medium">
                            <Clock size={12} />
                            {row.installmentPeriod}
                          </span>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            
            {/* Table Footer */}
            <div className="bg-gray-50/80 px-4 py-2.5 border-t border-gray-100 flex items-center justify-between">
              <p className="text-[10px] text-gray-400 flex items-center gap-1.5">
                <Info size={12} className="text-gold-500" />
                Fees cover twelve calendar months
              </p>
              <p className="text-[10px] text-gray-400">Updated: 2025-26</p>
            </div>
          </motion.div>

          {/* Installment Schedule */}
          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6"
          >
            {/* KG - X Schedule */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-5 hover:shadow-lg transition-all duration-300 hover:border-gold-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-blue-100">
                  <Calendar size={16} className="text-blue-600" />
                </div>
                <h3 className="text-sm font-bold text-maroon-900">Installment Schedule <span className="text-xs font-normal text-gray-500">(KG - X)</span></h3>
              </div>
              <div className="space-y-2">
                {installmentSchedule.map((item) => (
                  <div key={item.month} className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100 hover:bg-blue-50/50 transition-colors">
                    <span className="font-semibold text-maroon-800 text-sm">{item.month}</span>
                    <span className="text-xs text-gray-600">{item.period}</span>
                    <span className="text-[10px] bg-gold-100 text-gold-800 px-2 py-0.5 rounded-full font-medium">{item.classes}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 text-xs text-gray-500 bg-amber-50 p-2.5 rounded-lg border border-amber-200 flex items-center gap-2">
                <AlertCircle size={14} className="text-amber-600 flex-shrink-0" />
                <span><span className="font-medium text-amber-800">Late Fee:</span> ₹100 on all late payments</span>
              </div>
            </motion.div>

            {/* XI - XII Schedule */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-5 hover:shadow-lg transition-all duration-300 hover:border-gold-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-purple-100">
                  <Calendar size={16} className="text-purple-600" />
                </div>
                <h3 className="text-sm font-bold text-maroon-900">Installment Schedule <span className="text-xs font-normal text-gray-500">(XI - XII)</span></h3>
              </div>
              <div className="space-y-2">
                {seniorInstallmentSchedule.map((item) => (
                  <div key={item.month} className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100 hover:bg-purple-50/50 transition-colors">
                    <span className="font-semibold text-maroon-800 text-sm">{item.month}</span>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full font-medium">{item.classes}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                <p className="text-xs text-gray-700 flex items-start gap-2">
                  <Sparkles size={14} className="text-purple-600 flex-shrink-0 mt-0.5" />
                  <span><span className="font-semibold text-purple-800">Note:</span> Science stream annual fees are higher due to additional laboratory and practical resources</span>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Important Rules */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="bg-white rounded-xl shadow-md border border-gray-100 p-5 mb-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 rounded-lg bg-gold-100">
                <Shield size={16} className="text-gold-600" />
              </div>
              <h3 className="text-sm font-bold text-maroon-900">Important Fee Rules & Guidelines</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {importantRules.map((rule, index) => (
                <div key={index} className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-gray-50 transition-colors group">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <p className="text-xs text-gray-700 leading-relaxed">{rule}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Payment Information Cards */}
          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 group"
            >
              <div className="flex justify-center mb-2">
                <div className="p-2.5 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                  <Building size={20} className="text-blue-600" />
                </div>
              </div>
              <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Bank</h4>
              <p className="text-sm font-medium text-gray-700 mt-1">HDFC Bank Ltd.</p>
              <p className="text-xs text-gray-500">Maligaon Branch, Guwahati</p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-green-300 group"
            >
              <div className="flex justify-center mb-2">
                <div className="p-2.5 rounded-full bg-green-100 group-hover:bg-green-200 transition-colors">
                  <CreditCard size={20} className="text-green-600" />
                </div>
              </div>
              <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Payment Mode</h4>
              <p className="text-sm font-medium text-gray-700 mt-1">Bank Deposit</p>
              <p className="text-xs text-gray-500">On behalf of the Institution</p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-red-300 group"
            >
              <div className="flex justify-center mb-2">
                <div className="p-2.5 rounded-full bg-red-100 group-hover:bg-red-200 transition-colors">
                  <AlertCircle size={20} className="text-red-600" />
                </div>
              </div>
              <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Late Fee</h4>
              <p className="text-sm font-medium text-gray-700 mt-1">₹ 100</p>
              <p className="text-xs text-gray-500">Levied on all late payments</p>
            </motion.div>
          </motion.div>

          {/* Footer Notes */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="mt-6 text-center space-y-2"
          >
            <div className="inline-block bg-gradient-to-r from-gray-50 to-gold-50/30 rounded-full px-5 py-2 border border-gray-200">
              <p className="text-xs text-gray-500 flex items-center gap-2">
                <Info size={14} className="text-gold-500" />
                <span>* Fees are subject to revision at any time as per school policies</span>
              </p>
            </div>
            <p className="text-xs text-gray-400 flex items-center justify-center gap-2">
              <Phone size={12} />
              <span>For any fee-related queries, please contact the school office</span>
            </p>
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

export default Fees