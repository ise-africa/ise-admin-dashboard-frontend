import React, { useContext } from 'react'
import classes from './StudentCoursePayment.module.css'
import { AppContext } from '../../../Context/AppContext'

const StudentCoursePayment = () => {
    const { students } = useContext(AppContext)
    return (
        <div className={classes.container}>
            <ol>

                <li>
                    <img src="" alt="" />
                </li>
            </ol>
        </div>
    )
}

export default StudentCoursePayment