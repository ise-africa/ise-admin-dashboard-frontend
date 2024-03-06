import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ErrorPage from './Containers/404Page/404Page'
import Support from './Pages/Support'
import SupportTrackingChatDetailPage from './Pages/SupportTrackingChatDetailPage'
import Schools from './Pages/Schools'
import AdminProfilePage from './Pages/AdminProfilePage'
import AddAdminPage from './Pages/AddAdminPage'
import TutorsManagementPage from './Pages/TutorsManagementPage'


function App() {
   return (
      <Routes>
         <Route path="*" element={<ErrorPage />} />
         {/* <Route path="/" element={<Navigate to="/dashboard"></Navigate>} />
         <Route path="/dashboard" element={<Dashboard />} /> */}

         <Route path="/schools" element={<Schools />} />
         <Route path="/schools/admins/:AdminId" element={<AdminProfilePage />} />
         <Route path="/schools/#:AdminInfo" element={<AdminProfilePage />} />
         <Route path="/schools/add-admin" element={<AddAdminPage />} />

         <Route path="/profile" element={<TutorsManagementPage />} />

         <Route path="/support" element={<Support />} />
         <Route path="/support/:SupportTrackingId" element={<SupportTrackingChatDetailPage />} />

      </Routes>
   )
}
export default App
