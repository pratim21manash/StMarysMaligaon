import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home.jsx'
import Login from '../pages/Login.jsx'
import NotFound from '../pages/NotFound.jsx'
import Gallery from '../pages/Gallery.jsx'
import Downloads from '../pages/Downloads.jsx'
import ContactUs from '../pages/ContactUs.jsx'

import Founder from '../pages/about/Founder.jsx'
import CoFounders from '../pages/about/CoFounders.jsx'
import History from '../pages/about/History.jsx'
import MissionVision from '../pages/about/MissionVision.jsx'
import EducationalApproach from '../pages/about/EducationalApproach.jsx'

import Management from '../pages/administration/Management.jsx'
import ManagingCommittee from '../pages/administration/ManagingCommittee.jsx'
import Staff from '../pages/administration/Staff.jsx'
import TeachingStaff from '../pages/administration/TeachingStaff.jsx'

import MandatoryPublicDisclosure from '../pages/cbse/MandatoryPublicDisclosure.jsx'
import SchoolInfo from '../pages/cbse/SchoolInfo.jsx'

import Fees from '../pages/students/Fees.jsx'
import Rules from '../pages/students/Rules.jsx'
import Leave from '../pages/students/Leave.jsx'
import Examination from '../pages/students/Examination.jsx'
import Discipline from '../pages/students/Discipline.jsx'
import Uniform from '../pages/students/Uniform.jsx'
import ParentsNoticeEnrollment from '../pages/students/ParentsNoticeEnrollment.jsx'

import Transport from '../pages/infrastructure/Transport.jsx'

import CoCurricular from '../pages/activities/CoCurricular.jsx'
import Sports from '../pages/activities/Sports.jsx'
import Excursions from '../pages/activities/Excursions.jsx'
import Clubs from '../pages/activities/Clubs.jsx'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/downloads" element={<Downloads />} />
      <Route path="/contact-us" element={<ContactUs />} />

      <Route path="/about/founder" element={<Founder />} />
      <Route path="/about/co-founders" element={<CoFounders />} />
      <Route path="/about/history" element={<History />} />
      <Route path="/about/mission-vision" element={<MissionVision />} />
      <Route path="/about/educational-approach" element={<EducationalApproach />} />

      <Route path="/administration/management" element={<Management />} />
      <Route path="/administration/managing-committee" element={<ManagingCommittee />} />
      <Route path="/administration/staff" element={<Staff />} />
      <Route path="/administration/teaching-staff" element={<TeachingStaff />} />

      <Route path="/cbse/mandatory-public-disclosure" element={<MandatoryPublicDisclosure />} />
      <Route path="/cbse/school-info" element={<SchoolInfo />} />

      <Route path="/students/fees" element={<Fees />} />
      <Route path="/students/rules" element={<Rules />} />
      <Route path="/students/leave" element={<Leave />} />
      <Route path="/students/examination" element={<Examination />} />
      <Route path="/students/discipline" element={<Discipline />} />
      <Route path="/students/uniform" element={<Uniform />} />
      <Route path="/students/parents-notice-enrollment" element={<ParentsNoticeEnrollment />} />

      <Route path="/infrastructure/transport" element={<Transport />} />

      <Route path="/activities/co-curricular" element={<CoCurricular />} />
      <Route path="/activities/sports" element={<Sports />} />
      <Route path="/activities/excursions" element={<Excursions />} />
      <Route path="/activities/clubs" element={<Clubs />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
