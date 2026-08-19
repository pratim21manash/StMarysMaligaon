import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { 
  ClipboardList, 
  FileText, 
  ExternalLink, 
  Download, 
  Eye,
  X,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Building2,
  Users,
  GraduationCap,
  BookOpen,
  Shield,
  Award,
  CheckCircle,
  FileCheck,
  ArrowRight,
  Sparkles,
  Wallet,
  Calendar,
  Clock,
  Info
} from 'lucide-react'

const MandatoryPublicDisclosure = () => {
  const [selectedPdf, setSelectedPdf] = useState(null)
  const [showFeeStructure, setShowFeeStructure] = useState(false)
  const [expandedSections, setExpandedSections] = useState({
    general: true,
    documents: true,
    result: false,
    staff: false,
    infrastructure: false
  })

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

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  // Fee Structure Data - Exact match from image
  const feeData = [
    { 
      class: 'KG', 
      annualPerInstallment: '₹ 9,150', 
      tuitionPerInstallment: '—',
      installmentPeriod: '3 Months'
    },
    { 
      class: 'I – III', 
      annualPerInstallment: '₹ 3,630', 
      tuitionPerInstallment: '₹ 6,300',
      installmentPeriod: '3 Months'
    },
    { 
      class: 'IV – V', 
      annualPerInstallment: '₹ 3,640', 
      tuitionPerInstallment: '₹ 6,300',
      installmentPeriod: '3 Months'
    },
    { 
      class: 'VI – VIII', 
      annualPerInstallment: '₹ 3,680', 
      tuitionPerInstallment: '₹ 6,300',
      installmentPeriod: '3 Months'
    },
    { 
      class: 'IX – X', 
      annualPerInstallment: '₹ 3,775', 
      tuitionPerInstallment: '₹ 6,300',
      installmentPeriod: '3 Months'
    },
    { 
      class: 'XI – XII (Hum/Com)', 
      annualPerInstallment: '₹ 5,930', 
      tuitionPerInstallment: '₹ 8,800',
      installmentPeriod: '4 Months'
    },
    { 
      class: 'XI – XII (Science)', 
      annualPerInstallment: '₹ 8,480', 
      tuitionPerInstallment: '₹ 8,800',
      installmentPeriod: '4 Months'
    }
  ]

  // PDF data with actual file paths
  const pdfData = {
    affiliation: {
      name: 'Affiliation/Upgradation Letter',
      url: '/wp-content/uploads/2026/05/Affiliation_Certificate.pdf',
      description: 'CBSE Affiliation Letter and Recent Extension'
    },
    society: {
      name: 'Society/Trust Registration',
      url: '/wp-content/uploads/2026/05/Society_Certificate.pdf',
      description: 'Society/Trust/Company Registration Certificate'
    },
    noc: {
      name: 'NOC Certificate',
      url: '/wp-content/uploads/2026/05/NOC.pdf',
      description: 'No Objection Certificate from State Govt./UT'
    },
    rte: {
      name: 'RTE Recognition Certificate',
      url: '/wp-content/uploads/2026/05/Recognition_Certificate_10.pdf',
      description: 'Recognition Certificate under RTE Act, 2009'
    },
    building: {
      name: 'Building Safety Certificate',
      url: '/wp-content/uploads/2026/05/Building_Safety_Certificate.pdf',
      description: 'Valid Building Safety Certificate as per National Building Code'
    },
    fire: {
      name: 'Fire Safety Certificate',
      url: '/wp-content/uploads/2026/05/Fire_Safety_Certificate.pdf',
      description: 'Valid Fire Safety Certificate from Competent Authority'
    },
    deo: {
      name: 'DEO Certificate',
      url: '/wp-content/uploads/2026/05/Self_Certification.pdf',
      description: 'DEO Certificate submitted for Affiliation/Upgradation/Extension'
    },
    water: {
      name: 'Water, Health & Sanitation Certificate',
      url: '/wp-content/uploads/2026/05/Health_Hygiene_Certificate.pdf',
      description: 'Valid Water, Health and Sanitation Certificates'
    },
    academic: {
      name: 'Annual Academic Calendar',
      url: '/wp-content/uploads/2026/05/Academic_Calendar_2025-26.pdf',
      description: 'Academic Calendar 2025-26'
    },
    smc: {
      name: 'List of School Management Committee',
      url: '/wp-content/uploads/2026/05/Managing-Committee.pdf',
      description: 'School Management Committee Members'
    },
    pta: {
      name: 'List of Parents Teachers Association',
      url: '/wp-content/uploads/2026/05/Parent-Teacher-Association.pdf',
      description: 'PTA Members List'
    },
    results: {
      name: 'Last Three-Year Board Results',
      url: '/wp-content/uploads/2026/05/Board_Result.pdf',
      description: 'Board Examination Results'
    }
  }

  const generalInfo = [
    { label: 'Name of the School', value: 'ST. MARYS SR. SEC. SCHOOL MALIGAON GUWAHATI' },
    { label: 'Affiliation No.', value: '230105' },
    { label: 'School Code', value: '35189' },
    { label: 'Complete Address with Pin Code', value: 'ST. MARYS SR. SEC. SCHOOL, MALIGAON, GUWAHATI-11, KAMRUP(M), ASSAM.' },
    { label: 'Principal Name', value: 'SR. YAMCHINGNAO RIYAO GRACE PEMMILA' },
    { label: 'Principal Qualification', value: 'MA, BEd.' },
    { label: 'School Email ID', value: 'st.marysschool66@yahoo.com' },
    { label: 'Contact Details (Landline/Mobile)', value: '9435199806' }
  ]

  const documentsInfo = [
    { label: 'Copies of Affiliation/Upgradation Letter and Recent Extension of Affiliation', key: 'affiliation', icon: Shield },
    { label: 'Copies of Societies/Trust/Company Registration/Renewal Certificate', key: 'society', icon: Building2 },
    { label: 'Copy of No Objection Certificate (NOC) issued by State Govt./UT', key: 'noc', icon: CheckCircle },
    { label: 'Copies of Recognition Certificate under RTE Act, 2009 and its Renewal', key: 'rte', icon: Award },
    { label: 'Copy of Valid Building Safety Certificate as per National Building Code', key: 'building', icon: Building2 },
    { label: 'Copy of Valid Fire Safety Certificate issued by Competent Authority', key: 'fire', icon: Shield },
    { label: 'Copy of DEO Certificate submitted for Affiliation/Upgradation/Extension', key: 'deo', icon: FileCheck },
    { label: 'Copies of Valid Water, Health and Sanitation Certificates', key: 'water', icon: CheckCircle }
  ]

  const resultInfo = [
    { label: 'Fee Structure of the School', key: 'fee', icon: Wallet },
    { label: 'Annual Academic Calendar', key: 'academic', icon: BookOpen },
    { label: 'List of School Management Committee (SMC)', key: 'smc', icon: Users },
    { label: 'List of Parents Teachers Association (PTA) Members', key: 'pta', icon: Users },
    { label: 'Last Three-Year Result of the Board Examination', key: 'results', icon: Award }
  ]

  const staffInfo = [
    { label: 'Principal', value: 'SR. YAMCHINGNAO RIYAO GRACE PEMMILA' },
    { label: 'Total No. of Teachers', value: '53' },
    { label: 'PGT', value: '19' },
    { label: 'TGT', value: '14' },
    { label: 'PRT', value: '20' },
    { label: 'Teachers Section Ratio', value: '1:28' },
    { label: 'Special Educator', value: 'SR. THEKUVELU RHAKHO - MA, Human Rights (Child Rights and Development)' },
    { label: 'Counsellor and Wellness Teacher', value: 'MS. BIPANCHI CHOUDHURY - MSc Psychology (Specialisation in Counseling)' }
  ]

  const infrastructureInfo = [
    { label: 'Total Campus Area of the School (in Sq Mtr)', value: '8510' },
    { label: 'No. and Size of the Class Rooms (in Sq Mtr)', value: '40 & 144' },
    { label: 'No. and Size of Laboratories including Computer Labs (in Sq Mtr)', value: '8 & 145' },
    { label: 'Internet Facility', value: 'YES' },
    { label: 'No. of Girls Toilets', value: '80' },
    { label: 'No. of Boys Toilets', value: '30' },
    { label: 'YouTube Video of School Inspection', value: 'https://youtu.be/LF/beqWQy8Q' }
  ]

  const classXResult = [
    { year: '2025', registered: '113', passed: '113', percentage: '100', remarks: 'Satisfactory Performance' }
  ]

  const classXIIResult = [
    { year: '2025', registered: '79', passed: '79', percentage: '100', remarks: 'Satisfactory Performance' }
  ]

  const teacherDetails = [
    { name: 'SR. PINKY TOPNO', designation: 'VICE-PRINCIPAL', qualification: 'MA.' },
    { name: 'SR. MARTHA SOIGI', designation: 'TGT', qualification: 'BA.' },
    { name: 'MRIGAKHEE PANDIT', designation: 'TGT', qualification: 'MA.' },
    { name: 'SR. BISHANTIS MYRTHONG', designation: 'TGT', qualification: 'BA.' },
    { name: 'MRS. LIZA PAUL', designation: 'TGT', qualification: 'GRADUATE' },
    { name: 'MRS. MOUSUMI DAS', designation: 'TGT', qualification: 'GRADUATE' },
    { name: 'MISS SHYAMALI CHANDA', designation: 'TGT', qualification: 'POST GRADUATE' },
    { name: 'TRUPTI DAS', designation: 'TGT', qualification: 'POST GRADUATE' },
    { name: 'MRS. HEMA TIWARI', designation: 'TGT', qualification: 'POST GRADUATE' },
    { name: 'MR. INDRAJIT KALITA', designation: 'TGT', qualification: 'GRADUATE' },
    { name: 'MRS. DIPTI DEKA', designation: 'TGT', qualification: 'POSTGRADUATE' },
    { name: 'MRS. ANJANA MITRA', designation: 'PRT', qualification: 'GRADUATE' },
    { name: 'MRS. MINU MARTHA PANNA', designation: 'PRT', qualification: 'GRADUATE' },
    { name: 'MRS. ZEENAT ZAMAN', designation: 'PRT', qualification: 'GRADUATE' },
    { name: 'MRS. BINFFA MAJUMDAR', designation: 'PRT', qualification: 'POST GRADUATE' },
    { name: 'MRS. ANURADHA KALITA', designation: 'PRT', qualification: 'GRADUATE' },
    { name: 'MRS. SUVARTHA VANI DEKA', designation: 'PRT', qualification: 'GRADUATE' },
    { name: 'MRS. AJANTA B. CHOWDHURY', designation: 'PRT', qualification: 'GRADUATE' },
    { name: 'BARSHA BUJAR BARUAH', designation: 'PRT', qualification: 'GRADUATE' },
    { name: 'MS. ROSELINE ANTHONY', designation: 'PRT', qualification: 'GRADUATE' },
    { name: 'MRS. RAJLAXMI ROY', designation: 'PRT', qualification: 'GRADUATE' },
    { name: 'MRS. SHYAMOBI R. NARZARY', designation: 'PRT', qualification: 'GRADUATE' },
    { name: 'MRS. MADHUMITA DAS', designation: 'PRT', qualification: 'GRADUATE' },
    { name: 'MRS. SHONALI ROY', designation: 'PRT', qualification: 'GRADUATE' },
    { name: 'MRS. NILANJANA SAMANTA', designation: 'PRT', qualification: 'GRADUATE' },
    { name: 'MRS. PAYEL DAS', designation: 'PRT', qualification: 'GRADUATE' },
    { name: 'MRS. ANAMIKA DAS', designation: 'PRT', qualification: 'GRADUATE' },
    { name: 'MRS. JAHNABI BAISHYA', designation: 'PRT', qualification: 'POST GRAOUATE' },
    { name: 'MISS. JULI DEVI', designation: 'PRT', qualification: 'POST GRAOUATE' },
    { name: 'MR. THOMAS NARZARY', designation: 'PGT', qualification: 'POST GRAOUATE' },
    { name: 'MRS. BORNALI SAIKIA', designation: 'PGT', qualification: 'POST GRAOUATE' },
    { name: 'MISS ALAKANANDA PATHAK', designation: 'PGT', qualification: 'POST GRAOUATE' },
    { name: 'MRS. NANDITA SENGUPTA', designation: 'PGT', qualification: 'POST GRAOUATE' },
    { name: 'MRS. DEEPANWITA BOSE SAHA', designation: 'PGT', qualification: 'POST GRAOUATE' },
    { name: 'MISS BASABI CHANDA', designation: 'PGT', qualification: 'POST GRAOUATE' },
    { name: 'MISS KAKOLI PATWARI', designation: 'PGT', qualification: 'POST GRAOUATE' },
    { name: 'MISS TANAYA BARUAH', designation: 'PGT', qualification: 'POST GRAOUATE' },
    { name: 'MRS. NIZARA KALITA', designation: 'PGT', qualification: 'M.Phil' },
    { name: 'MRS. NABAMITA BORAL', designation: 'PGT', qualification: 'POST GRADUATE' },
    { name: 'MRS. NILOTPALA SARMA', designation: 'OTHER', qualification: 'MLI. Sôenœ' },
    { name: 'MR. BHOGIRAM KUJUR', designation: 'OTHER', qualification: 'HIGHER SECONDARY' },
    { name: 'MRS. SUNITA CHETTRI', designation: 'OTHER', qualification: 'GRADUATE' },
    { name: 'MR. STEPHEN BAGLARY', designation: 'OTHER', qualification: 'SECONDARY' },
    { name: 'MRS. FLORA MARAK', designation: 'OTHER', qualification: 'BELOW SECONDARY' },
    { name: 'JABA KUMARI DAS', designation: 'PGT', qualification: 'MA.' },
    { name: 'VALSAMMA JOSEPH', designation: 'TGT', qualification: 'BSc.' },
    { name: 'CHAYANIKA SARMA', designation: 'PGT', qualification: 'M.Sc. Computer Science' },
    { name: 'DHRITI DAS', designation: 'PGT', qualification: 'M.Sc.' },
    { name: 'PANCHALI DAS', designation: 'PGT', qualification: 'MA.' },
    { name: 'SR. KUNNEL ELIZABETH', designation: 'TGT', qualification: 'BA.' },
    { name: 'DUITHOILIU PONGNINGMEI', designation: 'TGT', qualification: 'BA.' },
    { name: 'SR. CAROLINE CHONGLOI', designation: 'TGT', qualification: 'BA.' },
    { name: 'JAYEETA KAR', designation: 'TGT', qualification: 'M.Sc.' },
    { name: 'PRANJITA KALITA', designation: 'PRT', qualification: 'MBA' },
    { name: 'BIPANCHI CHOUDHURY', designation: 'WELLNESS TEACHER', qualification: 'MA. Psychology' },
    { name: 'SR. YAMCHINGNAO RIYAO GRACE PEMMILA', designation: 'PRINCIPAL', qualification: 'MA.' },
    { name: 'RIMPI SARKAR', designation: 'PRT', qualification: '12 Science' },
    { name: 'KAMAL JYOTI NATH', designation: 'PET', qualification: '12 Science' },
    { name: 'RAJA BISWAS', designation: 'PGT', qualification: 'MSc(Maths)' },
    { name: 'SHAHNAZ RAHMAN', designation: 'PGT', qualification: 'M.A.' },
    { name: 'BAISHALI PHOOKUN', designation: 'PGT', qualification: 'M.A.' },
    { name: 'SR. LISSY MATHEW', designation: 'OTHER', qualification: 'M.A.' },
    { name: 'SANJANA RAAJ', designation: 'PGT', qualification: 'M.Sc.' },
    { name: 'SR. THEKUVELU RHAKHO', designation: 'SPECIAL EDUCATOR', qualification: 'BA.' }
  ]

  const handleViewPdf = (key) => {
    if (key === 'fee') {
      // Open Fee Structure modal
      setShowFeeStructure(true)
      return
    }
    
    const pdf = pdfData[key]
    if (pdf && pdf.url) {
      setSelectedPdf(pdf)
    }
  }

  const handleClosePdf = () => {
    setSelectedPdf(null)
  }

  const handleCloseFeeStructure = () => {
    setShowFeeStructure(false)
  }

  const SectionHeader = ({ title, icon: Icon, section, children }) => {
    const isExpanded = expandedSections[section]
    return (
      <div className="mb-5">
        <div 
          className="bg-gradient-to-r from-maroon-800 to-maroon-700 px-5 py-3 rounded-t-xl flex items-center justify-between cursor-pointer hover:from-maroon-700 hover:to-maroon-600 transition-all duration-300 group"
          onClick={() => toggleSection(section)}
        >
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-gold-500/20 rounded-lg group-hover:bg-gold-500/30 transition-colors">
              <Icon size={16} className="text-gold-300" />
            </div>
            <h2 className="text-white font-bold text-sm tracking-wide">
              {title}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-gold-300/50 font-medium hidden sm:inline">
              {isExpanded ? 'Collapse' : 'Expand'}
            </span>
            {isExpanded ? (
              <ChevronUp size={18} className="text-gold-300 group-hover:text-gold-200 transition-colors" />
            ) : (
              <ChevronDown size={18} className="text-gold-300 group-hover:text-gold-200 transition-colors" />
            )}
          </div>
        </div>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-b-2xl shadow-lg border border-gray-100 border-t-0 overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-b from-white to-[#FBF6EC] min-h-screen">
      
      {/* ========================================================== */}
      {/* COMPACT HERO HEADER */}
      {/* ========================================================== */}
      <div className="bg-maroon-900 text-white py-8 px-4">
        <div className="container-custom mx-auto">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gold-500/20 rounded-lg">
              <ClipboardList size={20} className="text-gold-300" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-serif font-bold">Mandatory Public Disclosure</h1>
              <p className="text-gold-300 text-sm mt-0.5">Appendix – IX - As required by CBSE affiliation bye-laws</p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================== */}
      {/* MAIN CONTENT */}
      {/* ========================================================== */}
      <section ref={ref} className="py-8 md:py-10">
        <div className="container-custom max-w-5xl mx-auto">
          
          {/* Important Note */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500 rounded-xl p-4 mb-6 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <AlertCircle size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-amber-800">
                <span className="font-semibold">Note:</span> The school needs to upload the self-attested copies of 
                documents by Chairman/Manager/Secretary and Principal. In case, it is noticed at later stage that 
                uploaded documents are not genuine then school shall be liable for action as per norms.
              </p>
            </div>
          </motion.div>

          {/* A: GENERAL INFORMATION */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
          >
            <SectionHeader title="A: GENERAL INFORMATION" icon={ClipboardList} section="general">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gradient-to-r from-gold-50 to-gold-100/50">
                    <tr>
                      <th className="px-4 py-2.5 text-left font-semibold text-maroon-800 w-[8%] text-xs tracking-wider">SL</th>
                      <th className="px-4 py-2.5 text-left font-semibold text-maroon-800 w-[42%] text-xs tracking-wider">INFORMATION</th>
                      <th className="px-4 py-2.5 text-left font-semibold text-maroon-800 w-[50%] text-xs tracking-wider">DETAILS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {generalInfo.map((item, index) => (
                      <tr key={item.label} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50 hover:bg-gray-100/50 transition-colors'}>
                        <td className="px-4 py-2.5 text-gray-500 text-xs border-b border-gray-100">{index + 1}</td>
                        <td className="px-4 py-2.5 font-medium text-maroon-900 border-b border-gray-100 text-xs">{item.label}</td>
                        <td className="px-4 py-2.5 text-gray-700 border-b border-gray-100 text-xs">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SectionHeader>
          </motion.div>

          {/* B: DOCUMENTS AND INFORMATION */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
          >
            <SectionHeader title="B: DOCUMENTS AND INFORMATION" icon={FileText} section="documents">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gradient-to-r from-gold-50 to-gold-100/50">
                    <tr>
                      <th className="px-4 py-2.5 text-left font-semibold text-maroon-800 w-[8%] text-xs tracking-wider">SL</th>
                      <th className="px-4 py-2.5 text-left font-semibold text-maroon-800 w-[62%] text-xs tracking-wider">DOCUMENTS/INFORMATION</th>
                      <th className="px-4 py-2.5 text-left font-semibold text-maroon-800 w-[30%] text-xs tracking-wider">LINKS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {documentsInfo.map((item, index) => {
                      const pdf = pdfData[item.key]
                      const Icon = item.icon
                      return (
                        <tr key={item.label} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50 hover:bg-gray-100/50 transition-colors'}>
                          <td className="px-4 py-2.5 text-gray-500 text-xs border-b border-gray-100">{index + 1}</td>
                          <td className="px-4 py-2.5 text-gray-700 border-b border-gray-100 text-xs flex items-center gap-2">
                            <Icon size={14} className="text-maroon-600 flex-shrink-0" />
                            {item.label}
                          </td>
                          <td className="px-4 py-2.5 border-b border-gray-100">
                            {pdf ? (
                              <button
                                onClick={() => handleViewPdf(item.key)}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gold-50 hover:bg-gold-100 text-gold-700 text-xs font-medium rounded-lg transition-all duration-300 hover:shadow-md group"
                              >
                                <Eye size={13} className="group-hover:scale-110 transition-transform" />
                                View More
                              </button>
                            ) : (
                              <span className="text-gray-400 text-xs">Not Available</span>
                            )}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </SectionHeader>
          </motion.div>

          {/* C: RESULT AND ACADEMICS */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
          >
            <SectionHeader title="C: RESULT AND ACADEMICS" icon={BookOpen} section="result">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gradient-to-r from-gold-50 to-gold-100/50">
                    <tr>
                      <th className="px-4 py-2.5 text-left font-semibold text-maroon-800 w-[8%] text-xs tracking-wider">SL</th>
                      <th className="px-4 py-2.5 text-left font-semibold text-maroon-800 w-[62%] text-xs tracking-wider">DOCUMENTS/INFORMATION</th>
                      <th className="px-4 py-2.5 text-left font-semibold text-maroon-800 w-[30%] text-xs tracking-wider">LINKS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resultInfo.map((item, index) => {
                      const Icon = item.icon
                      return (
                        <tr key={item.label} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50 hover:bg-gray-100/50 transition-colors'}>
                          <td className="px-4 py-2.5 text-gray-500 text-xs border-b border-gray-100">{index + 1}</td>
                          <td className="px-4 py-2.5 text-gray-700 border-b border-gray-100 text-xs flex items-center gap-2">
                            <Icon size={14} className="text-maroon-600 flex-shrink-0" />
                            {item.label}
                          </td>
                          <td className="px-4 py-2.5 border-b border-gray-100">
                            <button
                              onClick={() => handleViewPdf(item.key)}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gold-50 hover:bg-gold-100 text-gold-700 text-xs font-medium rounded-lg transition-all duration-300 hover:shadow-md group"
                            >
                              <Eye size={13} className="group-hover:scale-110 transition-transform" />
                              View More
                            </button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </SectionHeader>
          </motion.div>

          {/* D: STAFF (TEACHING) */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
          >
            <SectionHeader title="D: STAFF (TEACHING)" icon={Users} section="staff">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gradient-to-r from-gold-50 to-gold-100/50">
                    <tr>
                      <th className="px-4 py-2.5 text-left font-semibold text-maroon-800 w-[8%] text-xs tracking-wider">SL</th>
                      <th className="px-4 py-2.5 text-left font-semibold text-maroon-800 w-[37%] text-xs tracking-wider">INFORMATION</th>
                      <th className="px-4 py-2.5 text-left font-semibold text-maroon-800 w-[55%] text-xs tracking-wider">DETAILS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {staffInfo.map((item, index) => (
                      <tr key={item.label} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50 hover:bg-gray-100/50 transition-colors'}>
                        <td className="px-4 py-2.5 text-gray-500 text-xs border-b border-gray-100">{index + 1}</td>
                        <td className="px-4 py-2.5 font-medium text-maroon-900 border-b border-gray-100 text-xs">{item.label}</td>
                        <td className="px-4 py-2.5 text-gray-700 border-b border-gray-100 text-xs">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SectionHeader>
          </motion.div>

          {/* E: SCHOOL INFRASTRUCTURE */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
          >
            <SectionHeader title="E: SCHOOL INFRASTRUCTURE" icon={Building2} section="infrastructure">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gradient-to-r from-gold-50 to-gold-100/50">
                    <tr>
                      <th className="px-4 py-2.5 text-left font-semibold text-maroon-800 w-[8%] text-xs tracking-wider">SL</th>
                      <th className="px-4 py-2.5 text-left font-semibold text-maroon-800 w-[47%] text-xs tracking-wider">INFORMATION</th>
                      <th className="px-4 py-2.5 text-left font-semibold text-maroon-800 w-[45%] text-xs tracking-wider">DETAILS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {infrastructureInfo.map((item, index) => (
                      <tr key={item.label} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50 hover:bg-gray-100/50 transition-colors'}>
                        <td className="px-4 py-2.5 text-gray-500 text-xs border-b border-gray-100">{index + 1}</td>
                        <td className="px-4 py-2.5 font-medium text-maroon-900 border-b border-gray-100 text-xs">{item.label}</td>
                        <td className="px-4 py-2.5 text-gray-700 border-b border-gray-100 text-xs">
                          {item.label === 'YouTube Video of School Inspection' ? (
                            <a href={item.value} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium text-xs hover:underline transition-colors">
                              View Video <ExternalLink size={12} />
                            </a>
                          ) : (
                            item.value
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SectionHeader>
          </motion.div>

          {/* F: TEACHER DETAILS */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="mb-5"
          >
            <div className="bg-gradient-to-r from-maroon-800 to-maroon-700 px-5 py-3 rounded-t-xl">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-gold-500/20 rounded-lg">
                  <GraduationCap size={16} className="text-gold-300" />
                </div>
                <h2 className="text-white font-bold text-sm tracking-wide">
                  F: TEACHER DETAILS
                </h2>
              </div>
            </div>
            <div className="bg-white rounded-b-2xl shadow-lg border border-gray-100 border-t-0 overflow-hidden">
              <div className="overflow-x-auto max-h-[450px] overflow-y-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gradient-to-r from-gold-50 to-gold-100/50 sticky top-0 z-10">
                    <tr>
                      <th className="px-4 py-2.5 text-left font-semibold text-maroon-800 w-[8%] text-xs tracking-wider">No.</th>
                      <th className="px-4 py-2.5 text-left font-semibold text-maroon-800 w-[32%] text-xs tracking-wider">Name</th>
                      <th className="px-4 py-2.5 text-left font-semibold text-maroon-800 w-[30%] text-xs tracking-wider">Designation</th>
                      <th className="px-4 py-2.5 text-left font-semibold text-maroon-800 w-[30%] text-xs tracking-wider">Qualification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teacherDetails.map((teacher, index) => (
                      <tr key={teacher.name} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50 hover:bg-gray-100/50 transition-colors'}>
                        <td className="px-4 py-2 text-gray-500 text-xs border-b border-gray-100">{index + 1}</td>
                        <td className="px-4 py-2 text-gray-700 border-b border-gray-100 text-xs font-medium">{teacher.name}</td>
                        <td className="px-4 py-2 text-gray-700 border-b border-gray-100 text-xs">
                          <span className={`px-2 py-0.5 rounded-full text-[9px] font-medium ${
                            teacher.designation === 'PRINCIPAL' ? 'bg-maroon-100 text-maroon-800' :
                            teacher.designation === 'VICE-PRINCIPAL' ? 'bg-purple-100 text-purple-800' :
                            teacher.designation === 'PGT' ? 'bg-blue-100 text-blue-800' :
                            teacher.designation === 'TGT' ? 'bg-green-100 text-green-800' :
                            teacher.designation === 'PRT' ? 'bg-amber-100 text-amber-800' :
                            teacher.designation === 'SPECIAL EDUCATOR' ? 'bg-rose-100 text-rose-800' :
                            teacher.designation === 'WELLNESS TEACHER' ? 'bg-teal-100 text-teal-800' :
                            'bg-gray-100 text-gray-600'
                          }`}>
                            {teacher.designation}
                          </span>
                        </td>
                        <td className="px-4 py-2 text-gray-700 border-b border-gray-100 text-xs">{teacher.qualification}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-2.5 bg-gray-50/80 border-t border-gray-100 flex items-center justify-between">
                <p className="text-xs text-gray-500">Total Teachers: <span className="font-semibold text-maroon-800">{teacherDetails.length}</span></p>
                <p className="text-[9px] text-gray-400">Last updated: 2025</p>
              </div>
            </div>
          </motion.div>

          {/* RESULTS SECTION - Class X & XII */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
          >
            <div className="bg-gradient-to-r from-maroon-800 to-maroon-700 px-5 py-3 rounded-t-xl">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-gold-500/20 rounded-lg">
                  <Award size={16} className="text-gold-300" />
                </div>
                <h2 className="text-white font-bold text-sm tracking-wide">
                  BOARD EXAMINATION RESULTS
                </h2>
              </div>
            </div>
            <div className="bg-white rounded-b-2xl shadow-lg border border-gray-100 border-t-0 overflow-hidden p-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Class X Result */}
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">X</div>
                    <h3 className="text-sm font-bold text-maroon-900">Class X Result</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead className="bg-maroon-800 text-white">
                        <tr>
                          <th className="px-2.5 py-1.5 text-left font-semibold">SL</th>
                          <th className="px-2.5 py-1.5 text-left font-semibold">YEAR</th>
                          <th className="px-2.5 py-1.5 text-left font-semibold">REG</th>
                          <th className="px-2.5 py-1.5 text-left font-semibold">PASS</th>
                          <th className="px-2.5 py-1.5 text-left font-semibold">%</th>
                          <th className="px-2.5 py-1.5 text-left font-semibold">REMARKS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {classXResult.map((row, index) => (
                          <tr key={row.year} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                            <td className="px-2.5 py-1.5 text-gray-500 border-b">{index + 1}</td>
                            <td className="px-2.5 py-1.5 text-gray-700 border-b font-medium">{row.year}</td>
                            <td className="px-2.5 py-1.5 text-gray-700 border-b">{row.registered}</td>
                            <td className="px-2.5 py-1.5 text-gray-700 border-b">{row.passed}</td>
                            <td className="px-2.5 py-1.5 text-gray-700 border-b font-bold text-green-600">{row.percentage}%</td>
                            <td className="px-2.5 py-1.5 text-gray-700 border-b text-xs">{row.remarks}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Class XII Result */}
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-xs font-bold">XII</div>
                    <h3 className="text-sm font-bold text-maroon-900">Class XII Result</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead className="bg-maroon-800 text-white">
                        <tr>
                          <th className="px-2.5 py-1.5 text-left font-semibold">SL</th>
                          <th className="px-2.5 py-1.5 text-left font-semibold">YEAR</th>
                          <th className="px-2.5 py-1.5 text-left font-semibold">REG</th>
                          <th className="px-2.5 py-1.5 text-left font-semibold">PASS</th>
                          <th className="px-2.5 py-1.5 text-left font-semibold">%</th>
                          <th className="px-2.5 py-1.5 text-left font-semibold">REMARKS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {classXIIResult.map((row, index) => (
                          <tr key={row.year} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                            <td className="px-2.5 py-1.5 text-gray-500 border-b">{index + 1}</td>
                            <td className="px-2.5 py-1.5 text-gray-700 border-b font-medium">{row.year}</td>
                            <td className="px-2.5 py-1.5 text-gray-700 border-b">{row.registered}</td>
                            <td className="px-2.5 py-1.5 text-gray-700 border-b">{row.passed}</td>
                            <td className="px-2.5 py-1.5 text-gray-700 border-b font-bold text-green-600">{row.percentage}%</td>
                            <td className="px-2.5 py-1.5 text-gray-700 border-b text-xs">{row.remarks}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Counsellor Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="mt-5"
          >
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200 p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-purple-100 rounded-lg">
                  <Sparkles size={16} className="text-purple-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-purple-800">Students of Counsellor and Wellness Teacher:</span>
                  </p>
                  <p className="text-sm text-purple-700 font-medium mt-0.5">
                    MS. BIPANCHI CHOUDHURY
                    <span className="text-gray-600 font-normal"> - MSc Psychology (Specialisation in Counseling)</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* PDF Viewer Modal */}
      {selectedPdf && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-maroon-50 to-gold-50 rounded-t-2xl">
              <div>
                <h3 className="font-bold text-maroon-900 text-base">{selectedPdf.name}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{selectedPdf.description}</p>
              </div>
              <button
                onClick={handleClosePdf}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <X size={20} className="text-gray-600" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 p-4 overflow-hidden bg-gray-50">
              <iframe
                src={selectedPdf.url}
                className="w-full h-full rounded-lg border border-gray-200 shadow-inner"
                title={selectedPdf.name}
              />
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between p-4 border-t bg-gray-50 rounded-b-2xl">
              <span className="text-xs text-gray-500 flex items-center gap-1.5">
                <FileCheck size={14} className="text-green-600" />
                PDF Document
              </span>
              <div className="flex gap-3">
                <a
                  href={selectedPdf.url}
                  download
                  className="px-4 py-2 bg-maroon-800 text-white rounded-lg text-sm font-medium hover:bg-maroon-700 transition-all duration-300 flex items-center gap-2 hover:shadow-lg"
                >
                  <Download size={15} />
                  Download
                </a>
                <a
                  href={selectedPdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gold-600 text-white rounded-lg text-sm font-medium hover:bg-gold-700 transition-all duration-300 flex items-center gap-2 hover:shadow-lg"
                >
                  <ExternalLink size={15} />
                  Open in New Tab
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* ========================================================== */}
      {/* FEE STRUCTURE MODAL - Popup exactly matching the image */}
      {/* ========================================================== */}
      {showFeeStructure && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-maroon-800 to-maroon-700 rounded-t-2xl">
              <div>
                <h3 className="font-bold text-white text-lg flex items-center gap-2">
                  <Wallet size={20} className="text-gold-400" />
                  Fee Structure 2025-26
                </h3>
                <p className="text-xs text-gold-300/80 mt-0.5">St. Mary's Sr. Secondary School, Maligaon</p>
              </div>
              <button
                onClick={handleCloseFeeStructure}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/70 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                {/* Fee Table - Exact match from image */}
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
                      {feeData.map((row, index) => (
                        <tr key={row.class} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50 hover:bg-maroon-50/30 transition-colors'}>
                          <td className="px-4 py-3.5 font-semibold text-maroon-900 border-b border-gray-100 text-sm">{row.class}</td>
                          <td className="px-4 py-3.5 text-center text-gray-700 border-b border-gray-100 text-sm font-medium">{row.annualPerInstallment}</td>
                          <td className="px-4 py-3.5 text-center text-gray-700 border-b border-gray-100 text-sm font-medium">{row.tuitionPerInstallment}</td>
                          <td className="px-4 py-3.5 text-center border-b border-gray-100 text-sm">
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold-100 text-gold-800 text-xs font-medium">
                              <Clock size={12} />
                              {row.installmentPeriod}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Important Notice */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-t border-amber-200 p-3 m-4 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Info size={16} className="text-orange-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-800">
                      <span className="font-semibold">Note:</span> Fees are received by HDFC Bank Ltd., Maligaon Branch on behalf of the Institution. 
                      No bills are issued. Parents/guardians should ensure timely payment.
                    </p>
                  </div>
                </div>

                {/* Installment Schedules */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border-t border-gray-100">
                  <div>
                    <h4 className="text-xs font-bold text-maroon-900 mb-2 flex items-center gap-2">
                      <Calendar size={14} className="text-blue-600" />
                      Installment Schedule (KG - X)
                    </h4>
                    <div className="space-y-1.5">
                      {['April', 'July', 'October', 'January'].map((month) => (
                        <div key={month} className="flex items-center justify-between p-2 rounded-lg bg-gray-50 border border-gray-100 text-xs">
                          <span className="font-semibold text-maroon-800">{month}</span>
                          <span className="text-gray-600">10th - 20th</span>
                          <span className="text-[10px] bg-gold-100 text-gold-800 px-2 py-0.5 rounded-full">KG - X</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 text-xs text-gray-500 bg-amber-50 p-2 rounded-lg border border-amber-200 flex items-center gap-2">
                      <AlertCircle size={14} className="text-amber-600 flex-shrink-0" />
                      <span><span className="font-medium text-amber-800">Late Fee:</span> ₹100 on all late payments</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-maroon-900 mb-2 flex items-center gap-2">
                      <Calendar size={14} className="text-purple-600" />
                      Installment Schedule (XI - XII)
                    </h4>
                    <div className="space-y-1.5">
                      {['June', 'September', 'December'].map((month) => (
                        <div key={month} className="flex items-center justify-between p-2 rounded-lg bg-gray-50 border border-gray-100 text-xs">
                          <span className="font-semibold text-maroon-800">{month}</span>
                          <span className="text-[10px] bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">XI - XII</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 p-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                      <p className="text-[10px] text-gray-700 flex items-start gap-1.5">
                        <Sparkles size={12} className="text-purple-600 flex-shrink-0 mt-0.5" />
                        <span><span className="font-semibold text-purple-800">Note:</span> Science stream annual fees are higher due to additional laboratory resources</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-4 py-2.5 bg-gray-50/80 border-t border-gray-100 flex items-center justify-between">
                  <p className="text-[10px] text-gray-400 flex items-center gap-1.5">
                    <Info size={12} className="text-gold-500" />
                    Fees cover twelve calendar months
                  </p>
                  <p className="text-[10px] text-gray-400">Updated: 2025-26</p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end p-4 border-t bg-gray-50 rounded-b-2xl">
              <button
                onClick={handleCloseFeeStructure}
                className="px-5 py-2 bg-maroon-800 text-white rounded-lg text-sm font-medium hover:bg-maroon-700 transition-all duration-300 hover:shadow-lg"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

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

export default MandatoryPublicDisclosure