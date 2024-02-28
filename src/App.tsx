import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ErrorPage from './Containers/404Page/404Page'
import Support from './Pages/Support'
import SupportTrackingChatDetailPage from './Pages/SupportTrackingChatDetailPage'
import Schools from './Pages/Schools'
import AdminProfilePage from './Utilities/AdminProfilePage'


function App() {
   return (
      <Routes>
         <Route path="*" element={<ErrorPage />} />
         {/* <Route path="/" element={<Navigate to="/dashboard"></Navigate>} />
         <Route path="/dashboard" element={<Dashboard />} /> */}

         <Route path="/schools" element={<Schools />} />
         <Route path="/schools/admins/:AdminName" element={<AdminProfilePage />} />

         <Route path="/support" element={<Support />} />
         <Route path="/support/:SupportTrackingId" element={<SupportTrackingChatDetailPage />} />

      </Routes>
   )
}
export default App
