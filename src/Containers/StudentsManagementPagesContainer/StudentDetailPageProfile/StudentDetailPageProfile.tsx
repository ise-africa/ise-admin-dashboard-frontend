import React from 'react'
import classes from './StudentDetailPageProfile.module.css'
import StudentProfile from '../StudentProfile/StudentProfile'
import StudentBadges from '../StudentBadges/StudentBadges'
import StudentProfileAccountDeactivation from '../StudentProfileAccountDeactivation/StudentProfileAccountDeactivation'

const StudentDetailPageProfile = () => {

   return (
      <div className={classes.body}>
         <StudentProfile />
         <StudentBadges />
         <StudentProfileAccountDeactivation />
      </div>
   )
}

export default StudentDetailPageProfile
