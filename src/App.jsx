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




import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

// PUBLIC IMPORTS
import TopBar from './components/layout/TopBar.jsx'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import AppRoutes from './routes/AppRoutes.jsx'

// ADMIN IMPORTS
import ProtectedAdminRoute from './admin/components/ProtectedAdminRoute.jsx'
import AdminLogin from './admin/pages/AdminLogin.jsx'
import AdminDashboard from './admin/pages/AdminDashboard.jsx'
import ManagementPage from './admin/pages/ManagementPage.jsx'
import CommitteePage from './admin/pages/CommitteePage.jsx'
import StaffPage from './admin/pages/StaffPage.jsx'
import TeachingStaffPage from './admin/pages/TeachingStaffPage.jsx'
import CircularsPage from './admin/pages/CircularsPage.jsx'
import GalleryPage from './admin/pages/GalleryPage.jsx'
import DownloadsPage from './admin/pages/DownloadsPage.jsx'

function App() {
  return (
    <>
      <Toaster position="top-right" />

      <Routes>
        {/* ========================================================== */}
        {/* ADMIN ROUTES - No Layout (No TopBar, Navbar, Footer) */}
        {/* ========================================================== */}
        <Route path="/admin/login" element={<AdminLogin />} />
        
        <Route path="/admin" element={
          <ProtectedAdminRoute>
            <Navigate to="/admin/dashboard" replace />
          </ProtectedAdminRoute>
        } />
        
        <Route path="/admin/dashboard" element={
          <ProtectedAdminRoute>
            <AdminDashboard />
          </ProtectedAdminRoute>
        } />
        
        <Route path="/admin/management" element={
          <ProtectedAdminRoute>
            <ManagementPage />
          </ProtectedAdminRoute>
        } />
        
        <Route path="/admin/committee" element={
          <ProtectedAdminRoute>
            <CommitteePage />
          </ProtectedAdminRoute>
        } />
        
        <Route path="/admin/staff" element={
          <ProtectedAdminRoute>
            <StaffPage />
          </ProtectedAdminRoute>
        } />
        
        <Route path="/admin/teaching-staff" element={
          <ProtectedAdminRoute>
            <TeachingStaffPage />
          </ProtectedAdminRoute>
        } />
        
        <Route path="/admin/circulars" element={
          <ProtectedAdminRoute>
            <CircularsPage />
          </ProtectedAdminRoute>
        } />
        
        <Route path="/admin/gallery" element={
          <ProtectedAdminRoute>
            <GalleryPage />
          </ProtectedAdminRoute>
        } />
        
        <Route path="/admin/downloads" element={
          <ProtectedAdminRoute>
            <DownloadsPage />
          </ProtectedAdminRoute>
        } />

        {/* ========================================================== */}
        {/* PUBLIC ROUTES - With Layout (TopBar, Navbar, Footer) */}
        {/* ========================================================== */}
        <Route path="/*" element={
          <div className="flex flex-col min-h-screen">
            <TopBar />
            <Navbar />
            <main className="flex-1">
              <AppRoutes />
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </>
  )
}

export default App