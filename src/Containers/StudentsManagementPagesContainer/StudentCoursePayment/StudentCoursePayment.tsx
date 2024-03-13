import React, { useContext } from 'react'
import classes from './StudentCoursePayment.module.css'
import { AppContext } from '../../../Context/AppContext'
import { useParams } from 'react-router-dom'

const StudentCoursePayment = () => {
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

    const getPaymentIndicator = (paymentStatus: string) => {
        switch (paymentStatus) {
            case 'Paid in full':
                return <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4.22266" cy="4" r="4" fill="#63AD0E" />
                </svg>;
            case '1st installment paid 2nd upcoming':
            case '2nd installment paid':
                return <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4" fill="#F2B414" />
                </svg>;
            case '1st installment due':
            case '2nd installment due':
                return <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4" fill="#DC362E" />
                </svg>;
            default:
                return null;
        }
    }

    return (
        <section className={classes.container}>
            <div className={classes.body}>
                <div className={classes.tableHeader}>
                    <span>Course name</span>
                    <span>Total amount</span>
                    <span>Payment date</span>
                    <span>Payment status</span>
                </div>

                <div className={classes.bodyContent}>
                    {activeStudent?.enrolledCourseDetails.map((data, i) => {
                        const statusClassName = getStatusClass(data.status)
                        const paymentIndicator = getPaymentIndicator(data.paymentStatus)
                        return (
                            <div key={Math.random()} className={classes.tableBody}>
                                <div>
                                    <span>{data.courseTitle}</span>
                                    <span className={`${statusClassName} ${classes.status}`}>{data.status}</span>
                                </div>
                                <span>${data.totalAmount}</span>
                                <span>{data.paymentData}</span>
                                <div>
                                    <div>{paymentIndicator}</div>
                                    <span>{data.paymentStatus}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}


export default StudentCoursePayment