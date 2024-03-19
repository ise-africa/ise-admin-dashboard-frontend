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
import AddStudentPage from './Pages/AddStudentPage'
import SchoolManagementPage from './Pages/SchoolManagementPage'
import AddSchoolsPage from './Pages/AddSchoolsPage'
import SchoolCreatedPage from './Pages/SchoolCreatedPage'
import SchoolViewDetailsPage from './Pages/SchoolViewDetailsPage'


function App() {
   return (
      <Routes>
         <Route path="*" element={<ErrorPage />} />

         <Route path="/users/admins" element={<AdminsManagementPage />} />
         <Route path="/users/admins/:AdminId" element={<AdminProfilePage />} />
         <Route path="/users/admins/#:AdminInfo" element={<AdminProfilePage />} />
         <Route path="/users/admins/add-admin" element={<AddAdminPage />} />

         <Route path="/users/tutors" element={<TutorsManagementPage />} />
         <Route path="/users/tutors/:TutorId" element={<TutorProfilePage />} />
         <Route path="/users/tutors/add-tutor" element={<AddTutorPage />} />

         <Route path="/users/students" element={<StudentsManagementPage />} />
         <Route path="/users/students/:StudentId" element={<StudentProfilePage />} />
         <Route path="/users/students/add-student" element={<AddStudentPage />} />

         <Route path="/schools" element={<SchoolManagementPage />} />
         <Route path="/schools/add-school" element={<AddSchoolsPage />} />
         <Route path="/schools/:SchoolId" element={<SchoolViewDetailsPage />} />
         <Route path="/schools/school-created" element={<SchoolCreatedPage />} />

         <Route path="/support" element={<Support />} />
         <Route path="/support/:SupportTrackingId" element={<SupportTrackingChatDetailPage />} />

      </Routes>
   )
}
export default App
