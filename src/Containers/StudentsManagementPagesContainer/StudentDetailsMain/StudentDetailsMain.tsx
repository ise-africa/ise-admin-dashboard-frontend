import React from 'react'
import StudentDetailsModules from '../StudentDetailsModules/StudentDetailsModules'
import StudentDetailBreadcrumbs from '../StudentDetailBreadcrumbs/StudentDetailBreadcrumbs'

const StudentDetailsMain = () => {
    return (
        <>
            <StudentDetailBreadcrumbs />
            <StudentDetailsModules />
        </>
    )
}

export default StudentDetailsMain
