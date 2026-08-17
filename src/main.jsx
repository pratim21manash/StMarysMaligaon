// // import React from 'react'
// // import ReactDOM from 'react-dom/client'
// // import { BrowserRouter } from 'react-router-dom'
// // import App from './App.jsx'
// // import { AdminAuthProvider } from './admin/context/AdminAuthContext.jsx'
// // import './index.css'

// // ReactDOM.createRoot(document.getElementById('root')).render(
// //   <React.StrictMode>
// //     <BrowserRouter>
// //       {/* Only Admin Auth needed - public site is static */}
// //       <AdminAuthProvider>
// //         <App />
// //       </AdminAuthProvider>
// //     </BrowserRouter>
// //   </React.StrictMode>
// // )


// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
// import App from './App.jsx'
// import { AuthProvider } from './context/AuthContext.jsx'
// import { AdminAuthProvider } from './admin/context/AdminAuthContext.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <AuthProvider>
//         <AdminAuthProvider>
//           <App />
//         </AdminAuthProvider>
//       </AuthProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// )


import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)