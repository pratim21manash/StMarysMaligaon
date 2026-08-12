import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { 
  Info, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  Award, 
  Building, 
  Users, 
  BookOpen, 
  Bus, 
  Clock, 
  Home,
  Sparkles,
  Shield,
  GraduationCap,
  Library,
  Heart
} from 'lucide-react'

const SchoolInfo = () => {
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

  const schoolData = {
    name: "St. Mary's Senior Secondary School Maligaon",
    address: "Maligaon, Guwahati - 781011",
    district: "Kamrup (M), Assam",
    email: "st.marysschool66@yahoo.com",
    phone: "0361 2670489",
    mobile: "87520 16092",
    establishment: "1966",
    noc: "GIS/NOC/11/2009/155",
    nocDate: "29/06/2010",
    affiliation: "CBSE",
    status: "Provisional",
    affiliationNo: "230105",
    affiliationSince: "2011",
    affiliationUpto: "2026",
    trust: "The Salesian Sisters of St. Mary's Maligaon",
    trustAddress: "Maligaon, Guwahati - 781011",
    manager: "SR. GRACE OTTALANKAL",
    area: "4.5 Acres",
    areaSqm: "4395.5 Sq. Meter",
    builtUp: "1300.6 Sq. Meter",
    playground: "5574.2 Sq. Meter",
    indoorGames: "Yes",
    danceRooms: "Yes",
    musicRooms: "Yes",
    hostels: "No",
    swimmingPool: "No",
    gymnasium: "No",
    healthCheckup: "No",
    transport: "Buses hired on contract basis",
    principal: "1",
    vicePrincipal: "1",
    primaryIncharge: "1",
    pgt: "19",
    tgt: "14",
    prt: "19",
    healthWellnessTeacher: "1",
    librarian: "1",
    specialEducator: "1",
    others: "14",
    bank: "HDFC",
    librarySize: "45X21 Sq. Feet",
    periodicals: "14",
    dailies: "3",
    referenceBooks: "3965",
    magazines: "8",
    otherBooks: "6493",
    grievanceOfficer: "VALLIYIL ELIZABETH",
    grievanceEmail: "srelizabeth@gmail.com",
    grievancePhone: "6001128485",
    sexualHarassmentHead: "Mrs. Liza Paul",
    sexualHarassmentContact: "9435707179",
    sexualHarassmentEmail: "paulliza77@gmail.com",
    academicSession: "April to March",
    vacationPeriod: "July 1st to July 31st",
    admissionPeriod: "March to April"
  }

  const quickFacts = [
    { label: 'Board', value: schoolData.affiliation, icon: Award },
    { label: 'Affiliation Status', value: `${schoolData.status} (up to ${schoolData.affiliationUpto})`, icon: Clock },
    { label: 'Establishment', value: schoolData.establishment, icon: Calendar },
    { label: 'Campus Area', value: schoolData.area, icon: Building },
    { label: 'Academic Session', value: schoolData.academicSession, icon: Calendar },
    { label: 'Admission Period', value: schoolData.admissionPeriod, icon: Clock }
  ]

  const contactInfo = [
    { label: 'Address', value: `${schoolData.address}, ${schoolData.district}`, icon: MapPin },
    { label: 'Phone', value: schoolData.phone, icon: Phone },
    { label: 'Mobile', value: schoolData.mobile, icon: Phone },
    { label: 'Email', value: schoolData.email, icon: Mail }
  ]

  const staffStrength = [
    { label: 'Principal', value: schoolData.principal },
    { label: 'Vice Principal', value: schoolData.vicePrincipal },
    { label: 'Primary Incharge', value: schoolData.primaryIncharge },
    { label: 'PGT', value: schoolData.pgt },
    { label: 'TGT', value: schoolData.tgt },
    { label: 'PRT', value: schoolData.prt },
    { label: 'Health Wellness Teacher', value: schoolData.healthWellnessTeacher },
    { label: 'Librarian', value: schoolData.librarian },
    { label: 'Special Educator', value: schoolData.specialEducator },
    { label: 'Others', value: schoolData.others }
  ]

  const facilities = [
    { label: 'Indoor Games', value: schoolData.indoorGames },
    { label: 'Dance Rooms', value: schoolData.danceRooms },
    { label: 'Music Rooms', value: schoolData.musicRooms },
    { label: 'Swimming Pool', value: schoolData.swimmingPool },
    { label: 'Gymnasium', value: schoolData.gymnasium },
    { label: 'Hostels', value: schoolData.hostels },
    { label: 'Health Checkup', value: schoolData.healthCheckup },
    { label: 'Transport', value: schoolData.transport }
  ]

  const libraryDetails = [
    { label: 'Library Size', value: schoolData.librarySize },
    { label: 'Periodicals', value: schoolData.periodicals },
    { label: 'Dailies', value: schoolData.dailies },
    { label: 'Reference Books', value: schoolData.referenceBooks },
    { label: 'Magazines', value: schoolData.magazines },
    { label: 'Other Books', value: schoolData.otherBooks }
  ]

  const SectionTitle = ({ icon: Icon, title }) => (
    <motion.div 
      variants={fadeInUp}
      className="flex items-center gap-3 mb-4"
    >
      <div className="p-2 bg-gold-100 rounded-lg">
        <Icon size={18} className="text-maroon-700" />
      </div>
      <h3 className="text-lg font-serif font-bold text-maroon-900">{title}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-gold-300/50 to-transparent" />
    </motion.div>
  )

  const InfoCard = ({ icon: Icon, label, value, className = '' }) => (
    <motion.div 
      variants={fadeInUp}
      className={`bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-all duration-300 hover:border-gold-300 ${className}`}
    >
      <div className="flex items-center gap-2 text-gold-600 mb-1">
        <Icon size={16} />
        <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-500">{label}</p>
      </div>
      <p className="text-maroon-900 font-medium text-sm">{value}</p>
    </motion.div>
  )

  const StatCard = ({ label, value }) => (
    <motion.div 
      variants={fadeInUp}
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 text-center hover:shadow-md transition-all duration-300 hover:border-gold-300"
    >
      <p className="text-[10px] text-gold-600 font-semibold uppercase tracking-wide">{label}</p>
      <p className="text-maroon-900 font-bold text-lg">{value}</p>
    </motion.div>
  )

  const FacilityBadge = ({ label, value }) => (
    <div className={`flex items-center justify-between px-3 py-2 rounded-lg border ${value === 'Yes' ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
      <span className="text-xs text-gray-600">{label}</span>
      <span className={`text-xs font-semibold ${value === 'Yes' ? 'text-green-600' : 'text-red-500'}`}>
        {value}
      </span>
    </div>
  )

  return (
    <div className="bg-gradient-to-b from-white to-[#FBF6EC] min-h-screen">
      
      {/* ========================================================== */}
      {/* COMPACT HERO HEADER - Same style as Co-Founders */}
      {/* ========================================================== */}
      <div className="bg-maroon-900 text-white py-8 px-4">
        <div className="container-custom mx-auto">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gold-500/20 rounded-lg">
              <Info size={20} className="text-gold-300" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-serif font-bold">School Information</h1>
              <p className="text-gold-300 text-sm mt-0.5">Complete institutional profile as per CBSE records</p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================== */}
      {/* MAIN CONTENT */}
      {/* ========================================================== */}
      <section ref={ref} className="py-8 md:py-10">
        <div className="container-custom max-w-5xl mx-auto">
          
          {/* School Name Header */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="bg-gradient-to-r from-maroon-900 to-maroon-700 text-white rounded-xl p-5 mb-6 shadow-lg"
          >
            <h2 className="text-lg md:text-xl font-bold text-center">{schoolData.name}</h2>
            <p className="text-center text-gold-300 text-sm mt-1">{schoolData.address}</p>
          </motion.div>

          {/* Quick Facts Grid */}
          <SectionTitle icon={Sparkles} title="Quick Facts" />
          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6"
          >
            {quickFacts.map((item) => (
              <InfoCard 
                key={item.label} 
                icon={item.icon} 
                label={item.label} 
                value={item.value} 
              />
            ))}
          </motion.div>

          {/* Contact Information */}
          <SectionTitle icon={Phone} title="Contact Information" />
          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6"
          >
            {contactInfo.map((item) => (
              <InfoCard 
                key={item.label} 
                icon={item.icon} 
                label={item.label} 
                value={item.value} 
              />
            ))}
          </motion.div>

          {/* Affiliation Details */}
          <SectionTitle icon={Award} title="Affiliation Details" />
          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6"
          >
            <InfoCard 
              icon={Shield} 
              label="NOC No." 
              value={schoolData.noc}
              className="sm:col-span-1"
            >
              <p className="text-[10px] text-gray-400">Date: {schoolData.nocDate}</p>
            </InfoCard>
            <InfoCard 
              icon={Award} 
              label="Affiliation No." 
              value={schoolData.affiliationNo}
            >
              <p className="text-[10px] text-gray-400">Since: {schoolData.affiliationSince}</p>
            </InfoCard>
            <InfoCard 
              icon={Clock} 
              label="Status" 
              value={schoolData.status}
            >
              <p className="text-[10px] text-gray-400">Valid up to: {schoolData.affiliationUpto}</p>
            </InfoCard>
          </motion.div>

          {/* Trust & Management */}
          <SectionTitle icon={Building} title="Trust & Management" />
          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6"
          >
            <InfoCard 
              icon={Building} 
              label="Trust/Society" 
              value={schoolData.trust}
            >
              <p className="text-[10px] text-gray-400">{schoolData.trustAddress}</p>
            </InfoCard>
            <InfoCard 
              icon={Users} 
              label="Manager/Correspondent" 
              value={schoolData.manager}
            />
          </motion.div>

          {/* Campus & Facilities */}
          <SectionTitle icon={Building} title="Campus & Facilities" />
          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6"
          >
            <InfoCard icon={Building} label="Total Area" value={schoolData.area}>
              <p className="text-[10px] text-gray-400">{schoolData.areaSqm}</p>
            </InfoCard>
            <InfoCard icon={Building} label="Built-up Area" value={schoolData.builtUp} />
            <InfoCard icon={Home} label="Playground" value={schoolData.playground} />
            <InfoCard icon={Bus} label="Transport" value={schoolData.transport} />
          </motion.div>

          {/* Facilities Grid */}
          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6"
          >
            {facilities.map((item) => (
              <motion.div key={item.label} variants={fadeInUp}>
                <FacilityBadge label={item.label} value={item.value} />
              </motion.div>
            ))}
          </motion.div>

          {/* Teaching Staff */}
          <SectionTitle icon={Users} title="Teaching Staff" />
          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6"
          >
            {staffStrength.map((item) => (
              <StatCard key={item.label} label={item.label} value={item.value} />
            ))}
          </motion.div>

          {/* Library Resources */}
          <SectionTitle icon={Library} title="Library Resources" />
          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6"
          >
            {libraryDetails.map((item) => (
              <StatCard key={item.label} label={item.label} value={item.value} />
            ))}
          </motion.div>

          {/* Grievance & Sexual Harassment */}
          <SectionTitle icon={Shield} title="Grievance & Committees" />
          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6"
          >
            <InfoCard 
              icon={Users} 
              label="Grievance Redressal Officer" 
              value={schoolData.grievanceOfficer}
            >
              <p className="text-[10px] text-gray-400">{schoolData.grievanceEmail}</p>
              <p className="text-[10px] text-gray-400">Phone: {schoolData.grievancePhone}</p>
            </InfoCard>
            <InfoCard 
              icon={Heart} 
              label="Sexual Harassment Committee" 
              value={schoolData.sexualHarassmentHead}
            >
              <p className="text-[10px] text-gray-400">{schoolData.sexualHarassmentEmail}</p>
              <p className="text-[10px] text-gray-400">Contact: {schoolData.sexualHarassmentContact}</p>
            </InfoCard>
          </motion.div>

          {/* Academic Calendar */}
          <SectionTitle icon={Calendar} title="Academic Calendar" />
          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6"
          >
            <InfoCard icon={Calendar} label="Academic Session" value={schoolData.academicSession} />
            <InfoCard icon={Clock} label="Vacation Period" value={schoolData.vacationPeriod} />
            <InfoCard icon={Calendar} label="Admission Period" value={schoolData.admissionPeriod} />
          </motion.div>

          {/* Bank Details */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="p-4 bg-gradient-to-r from-gray-50 to-gold-50/30 rounded-xl border border-gray-200"
          >
            <p className="text-[10px] text-gold-600 font-semibold uppercase tracking-wide text-center">Salary Processing</p>
            <p className="text-center text-maroon-900 font-medium text-sm">
              Bank: <span className="font-bold">{schoolData.bank}</span> • Single Cheque Transfer: <span className="text-green-600 font-semibold">Yes</span>
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

export default SchoolInfo