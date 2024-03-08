import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ErrorPage from './Containers/404Page/404Page'
import Support from './Pages/Support'
import SupportTrackingChatDetailPage from './Pages/SupportTrackingChatDetailPage'
import AdminProfilePage from './Pages/AdminProfilePage'
import AddAdminPage from './Pages/AddAdminPage'
import TutorsManagementPage from './Pages/TutorsManagementPage'
import AddTutorPage from './Pages/AddTutorPage'
import TutorProfilePage from './Pages/TutorProfilePage'
import StudentsManagementPage from './Pages/StudentsManagementPage'
import AdminsManagementPage from './Pages/AdminsManagementPage'
import StudentProfilePage from './Pages/StudentProfilePage'


function App() {
   return (
      <Routes>
         <Route path="*" element={<ErrorPage />} />

         <Route path="/admins" element={<AdminsManagementPage />} />
         <Route path="/admins/:AdminId" element={<AdminProfilePage />} />
         <Route path="/admins/#:AdminInfo" element={<AdminProfilePage />} />
         <Route path="/admins/add-admin" element={<AddAdminPage />} />

         <Route path="/tutors" element={<TutorsManagementPage />} />
         <Route path="/tutors/:TutorId" element={<TutorProfilePage />} />
         <Route path="/tutors/add-tutor" element={<AddTutorPage />} />

         <Route path="/students" element={<StudentsManagementPage />} />
         <Route path="/students/:StudentId" element={<StudentProfilePage />} />

         <Route path="/support" element={<Support />} />
         <Route path="/support/:SupportTrackingId" element={<SupportTrackingChatDetailPage />} />

      </Routes>
   )
}
export default App
