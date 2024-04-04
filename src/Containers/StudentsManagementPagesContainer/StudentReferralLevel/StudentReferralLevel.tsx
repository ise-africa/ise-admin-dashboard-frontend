import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import classes from './StudentReferralLevel.module.css'
import { AppContext } from '../../../Context/AppContext'
import ProfileSectionContainer from '../../../Components/ProfileSectionContainer/ProfileSectionContainer'

const StudentReferralLevel = () => {
    // Context
    const { students } = useContext(AppContext)

    // Router
    const { StudentId } = useParams()

    const activeStudent = students.find((data) => {
        return data.studentName.replace(' ', '-').toLowerCase() === StudentId
    })
    return (
        <ProfileSectionContainer
            header="Referral level"
            paragraph="View the levels of the student's referral influence in promoting our institution."
        >
            <div className={classes.container}>
                <h4>{activeStudent?.referralLevel}</h4>
                <div>
                    <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.95625 15.7195L17.0347 21.6267L17.299 1.50384L1.04212 13.3661L9.95625 15.7195ZM9.95625 15.7195L13.6276 8.61165" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p>{activeStudent?.referralInvite} invites</p>
                </div>
                <div>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.3379 2.85418C11.0708 2.02375 12.1432 1.5 13.3379 1.5C15.547 1.5 17.3379 3.29086 17.3379 5.5C17.3379 7.70914 15.547 9.5 13.3379 9.5C12.1432 9.5 11.0708 8.97624 10.3379 8.14582M13.3379 19.5H1.33789V18.5C1.33789 15.1863 4.02418 12.5 7.33789 12.5C10.6516 12.5 13.3379 15.1863 13.3379 18.5V19.5ZM13.3379 19.5H19.3379V18.5C19.3379 15.1863 16.6516 12.5 13.3379 12.5C12.245 12.5 11.2204 12.7922 10.3379 13.3027M11.3379 5.5C11.3379 7.70914 9.54703 9.5 7.33789 9.5C5.12875 9.5 3.33789 7.70914 3.33789 5.5C3.33789 3.29086 5.12875 1.5 7.33789 1.5C9.54703 1.5 11.3379 3.29086 11.3379 5.5Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p>{activeStudent?.referralInviteSuccessful} invites successful</p>
                </div>
            </div>
        </ProfileSectionContainer>
    )
}

export default StudentReferralLevel