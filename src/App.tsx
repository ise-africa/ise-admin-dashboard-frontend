import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ErrorPage from './Containers/404Page/404Page'
import Schools from './Pages/Schools'
import SupportTrackingChatDetailPage from './Pages/SupportTrackingChatDetailPage'


function App() {
   return (
      <Routes>
         <Route path="*" element={<ErrorPage />} />
         {/* <Route path="/" element={<Navigate to="/dashboard"></Navigate>} />
         <Route path="/dashboard" element={<Dashboard />} /> */}

         <Route path="/support" element={<Schools />} />
         <Route path="/support/:SupportTrackingId" element={<SupportTrackingChatDetailPage />} />

      </Routes>
   )
}
export default App
