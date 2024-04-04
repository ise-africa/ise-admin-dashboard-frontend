import React, { useContext } from 'react'
import classes from './StudentCourseEnrolled.module.css'
import { AppContext } from '../../../Context/AppContext'
import { useParams } from 'react-router-dom'
import ProgressBar from '../../../Components/ProgressBar/ProgressBar'

const StudentCourseEnrolled = () => {
    // Context
    const { students } = useContext(AppContext)

    // Router
    const { StudentId } = useParams()

    const activeStudent = students.find((data) => {
        return data.studentName.replace(' ', '-').toLowerCase() === StudentId
    })

    const getStatusClass = (status: string) => {
        switch (status) {
            case 'Paid':
                return classes.paid
            case 'Free':
                return classes.free
        }
    }

    return (
        <div className={classes.container}>
            <ol>
                {activeStudent?.enrolledCourseDetails.map((course, i) => {
                    const statusClassName = getStatusClass(course.status)
                    return (
                        <div key={i} className={classes.body}>
                            <span>{i + 1}</span>
                            <li className={classes.listItem}>
                                <img src={course.courseImage} alt={course.courseTitle} />
                                <div className={classes.content}>
                                    <div>
                                        <div className={classes.title}>
                                            <h4>{course.courseTitle}</h4>
                                            <span className={`${statusClassName} ${classes.status}`}>{course.status}</span>
                                        </div>
                                        <p className={classes.enrolledStatus}>
                                            <span>{course.enrollProgressStatus}</span>, <span>{course.courseProgressStatus}</span>
                                        </p>
                                    </div>
                                    <ProgressBar height='16px' primaryColor='#FFEDAD' secondaryColor='#FDC500' percentage={course.enrollProgressPercent} />
                                </div>
                            </li>
                        </div>
                    )
                })}
            </ol>
        </div>
    )
}

export default StudentCourseEnrolled