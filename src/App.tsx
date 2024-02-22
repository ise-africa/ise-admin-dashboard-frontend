import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ErrorPage from './Containers/404Page/404Page'
import School from './Pages/School'


function App() {
   return (
      <Routes>
         <Route path="*" element={<ErrorPage />} />
          {/* <Route path="/" element={<Navigate to="/dashboard"></Navigate>} />
         <Route path="/dashboard" element={<Dashboard />} /> */}

         <Route path="/schools" element={<School />} />

      </Routes>
   )
}
export default App
