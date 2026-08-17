// import React from 'react'
// import { Routes, Route, Navigate } from 'react-router-dom'
// import { Toaster } from 'react-hot-toast'

// // PUBLIC IMPORTS
// import TopBar from './components/layout/TopBar.jsx'
// import Navbar from './components/layout/Navbar.jsx'
// import Footer from './components/layout/Footer.jsx'
// import AppRoutes from './routes/AppRoutes.jsx'

// // ADMIN IMPORTS
// import ProtectedAdminRoute from './admin/components/ProtectedAdminRoute.jsx'
// import AdminLogin from './admin/pages/AdminLogin.jsx'
// import AdminDashboard from './admin/pages/AdminDashboard.jsx'
// import ManagementPage from './admin/pages/ManagementPage.jsx'
// import CommitteePage from './admin/pages/CommitteePage.jsx'
// import StaffPage from './admin/pages/StaffPage.jsx'
// import TeachingStaffPage from './admin/pages/TeachingStaffPage.jsx'
// import CircularsPage from './admin/pages/CircularsPage.jsx'
// import GalleryPage from './admin/pages/GalleryPage.jsx'
// import DownloadsPage from './admin/pages/DownloadsPage.jsx'

// function App() {
//   return (
//     <>
//       <Toaster position="top-right" />

//       <Routes>
      
//         <Route path="/admin/login" element={<AdminLogin />} />
        
//         <Route path="/admin" element={
//           <ProtectedAdminRoute>
//             <Navigate to="/admin/dashboard" replace />
//           </ProtectedAdminRoute>
//         } />
        
//         <Route path="/admin/dashboard" element={
//           <ProtectedAdminRoute>
//             <AdminDashboard />
//           </ProtectedAdminRoute>
//         } />
        
//         <Route path="/admin/management" element={
//           <ProtectedAdminRoute>
//             <ManagementPage />
//           </ProtectedAdminRoute>
//         } />
        
//         <Route path="/admin/committee" element={
//           <ProtectedAdminRoute>
//             <CommitteePage />
//           </ProtectedAdminRoute>
//         } />
        
//         <Route path="/admin/staff" element={
//           <ProtectedAdminRoute>
//             <StaffPage />
//           </ProtectedAdminRoute>
//         } />
        
//         <Route path="/admin/teaching-staff" element={
//           <ProtectedAdminRoute>
//             <TeachingStaffPage />
//           </ProtectedAdminRoute>
//         } />
        
//         <Route path="/admin/circulars" element={
//           <ProtectedAdminRoute>
//             <CircularsPage />
//           </ProtectedAdminRoute>
//         } />
        
//         <Route path="/admin/gallery" element={
//           <ProtectedAdminRoute>
//             <GalleryPage />
//           </ProtectedAdminRoute>
//         } />
        
//         <Route path="/admin/downloads" element={
//           <ProtectedAdminRoute>
//             <DownloadsPage />
//           </ProtectedAdminRoute>
//         } />

//         <Route path="/*" element={
//           <div className="flex flex-col min-h-screen">
//             <TopBar />
//             <Navbar />
//             <main className="flex-1">
//               <AppRoutes />
//             </main>
//             <Footer />
//           </div>
//         } />
//       </Routes>
//     </>
//   )
// }

// export default App




// import React from 'react'
// import { Routes, Route, Navigate } from 'react-router-dom'
// import { Toaster } from 'react-hot-toast'

// // PUBLIC IMPORTS
// import TopBar from './components/layout/TopBar.jsx'
// import Navbar from './components/layout/Navbar.jsx'
// import Footer from './components/layout/Footer.jsx'
// import AppRoutes from './routes/AppRoutes.jsx'

// // ADMIN IMPORTS
// import ProtectedAdminRoute from './admin/components/ProtectedAdminRoute.jsx'
// import AdminLogin from './admin/pages/AdminLogin.jsx'
// import AdminDashboard from './admin/pages/AdminDashboard.jsx'
// import ManagementPage from './admin/pages/ManagementPage.jsx'
// import CommitteePage from './admin/pages/CommitteePage.jsx'
// import StaffPage from './admin/pages/StaffPage.jsx'
// import TeachingStaffPage from './admin/pages/TeachingStaffPage.jsx'
// import CircularsPage from './admin/pages/CircularsPage.jsx'
// import GalleryPage from './admin/pages/GalleryPage.jsx'
// import DownloadsPage from './admin/pages/DownloadsPage.jsx'

// function App() {
//   return (
//     <>
//       <Toaster position="top-right" />

//       <Routes>
//         {/* ========================================================== */}
//         {/* ADMIN ROUTES - No Layout (No TopBar, Navbar, Footer) */}
//         {/* ========================================================== */}
//         <Route path="/admin/login" element={<AdminLogin />} />
        
//         <Route path="/admin" element={
//           <ProtectedAdminRoute>
//             <Navigate to="/admin/dashboard" replace />
//           </ProtectedAdminRoute>
//         } />
        
//         <Route path="/admin/dashboard" element={
//           <ProtectedAdminRoute>
//             <AdminDashboard />
//           </ProtectedAdminRoute>
//         } />
        
//         <Route path="/admin/management" element={
//           <ProtectedAdminRoute>
//             <ManagementPage />
//           </ProtectedAdminRoute>
//         } />
        
//         <Route path="/admin/committee" element={
//           <ProtectedAdminRoute>
//             <CommitteePage />
//           </ProtectedAdminRoute>
//         } />
        
//         <Route path="/admin/staff" element={
//           <ProtectedAdminRoute>
//             <StaffPage />
//           </ProtectedAdminRoute>
//         } />
        
//         <Route path="/admin/teaching-staff" element={
//           <ProtectedAdminRoute>
//             <TeachingStaffPage />
//           </ProtectedAdminRoute>
//         } />
        
//         <Route path="/admin/circulars" element={
//           <ProtectedAdminRoute>
//             <CircularsPage />
//           </ProtectedAdminRoute>
//         } />
        
//         <Route path="/admin/gallery" element={
//           <ProtectedAdminRoute>
//             <GalleryPage />
//           </ProtectedAdminRoute>
//         } />
        
//         <Route path="/admin/downloads" element={
//           <ProtectedAdminRoute>
//             <DownloadsPage />
//           </ProtectedAdminRoute>
//         } />

//         {/* ========================================================== */}
//         {/* PUBLIC ROUTES - With Layout (TopBar, Navbar, Footer) */}
//         {/* ========================================================== */}
//         <Route path="/*" element={
//           <div className="flex flex-col min-h-screen">
//             <TopBar />
//             <Navbar />
//             <main className="flex-1">
//               <AppRoutes />
//             </main>
//             <Footer />
//           </div>
//         } />
//       </Routes>
//     </>
//   )
// }

// export default App






import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Layout Components
import TopBar from './components/layout/TopBar.jsx'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'

// Page Components
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import NotFound from './pages/NotFound.jsx'
import Gallery from './pages/Gallery.jsx'
import Downloads from './pages/Downloads.jsx'
import ContactUs from './pages/ContactUs.jsx'

// About Pages
import Founder from './pages/about/Founder.jsx'
import CoFounders from './pages/about/CoFounders.jsx'
import History from './pages/about/History.jsx'
import MissionVision from './pages/about/MissionVision.jsx'
import EducationalApproach from './pages/about/EducationalApproach.jsx'

// Administration Pages
import Management from './pages/administration/Management.jsx'
import ManagingCommittee from './pages/administration/ManagingCommittee.jsx'
import Staff from './pages/administration/Staff.jsx'
import TeachingStaff from './pages/administration/TeachingStaff.jsx'

// CBSE Pages
import MandatoryPublicDisclosure from './pages/cbse/MandatoryPublicDisclosure.jsx'
import SchoolInfo from './pages/cbse/SchoolInfo.jsx'

// Students Pages
import Fees from './pages/students/Fees.jsx'
import Rules from './pages/students/Rules.jsx'
import Leave from './pages/students/Leave.jsx'
import Examination from './pages/students/Examination.jsx'
import Discipline from './pages/students/Discipline.jsx'
import Uniform from './pages/students/Uniform.jsx'
import ParentsNoticeEnrollment from './pages/students/ParentsNoticeEnrollment.jsx'

// Infrastructure Pages
import Transport from './pages/infrastructure/Transport.jsx'

// Activities Pages
import CoCurricular from './pages/activities/CoCurricular.jsx'
import Sports from './pages/activities/Sports.jsx'
import Excursions from './pages/activities/Excursions.jsx'
import Clubs from './pages/activities/Clubs.jsx'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />
          
          {/* Auth */}
          <Route path="/login" element={<Login />} />
          
          {/* Main Pages */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {/* About */}
          <Route path="/about/founder" element={<Founder />} />
          <Route path="/about/co-founders" element={<CoFounders />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/about/mission-vision" element={<MissionVision />} />
          <Route path="/about/educational-approach" element={<EducationalApproach />} />

          {/* Administration */}
          <Route path="/administration/management" element={<Management />} />
          <Route path="/administration/managing-committee" element={<ManagingCommittee />} />
          <Route path="/administration/staff" element={<Staff />} />
          <Route path="/administration/teaching-staff" element={<TeachingStaff />} />

          {/* CBSE */}
          <Route path="/cbse/mandatory-public-disclosure" element={<MandatoryPublicDisclosure />} />
          <Route path="/cbse/school-info" element={<SchoolInfo />} />

          {/* Students */}
          <Route path="/students/fees" element={<Fees />} />
          <Route path="/students/rules" element={<Rules />} />
          <Route path="/students/leave" element={<Leave />} />
          <Route path="/students/examination" element={<Examination />} />
          <Route path="/students/discipline" element={<Discipline />} />
          <Route path="/students/uniform" element={<Uniform />} />
          <Route path="/students/parents-notice-enrollment" element={<ParentsNoticeEnrollment />} />

          {/* Infrastructure */}
          <Route path="/infrastructure/transport" element={<Transport />} />

          {/* Activities */}
          <Route path="/activities/co-curricular" element={<CoCurricular />} />
          <Route path="/activities/sports" element={<Sports />} />
          <Route path="/activities/excursions" element={<Excursions />} />
          <Route path="/activities/clubs" element={<Clubs />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App