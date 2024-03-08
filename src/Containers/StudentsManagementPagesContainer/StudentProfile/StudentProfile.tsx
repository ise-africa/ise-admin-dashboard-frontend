import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../../Context/AppContext'
import Button from '../../../Components/Button/Button'
import classes from './StudentProfile.module.css'
import ProfileSectionContainer from '../../../Components/ProfileSectionContainer/ProfileSectionContainer'
import emailIconImage from '../../../Assets/Images/emailIconImage.png'
import linkedInIcon from '../../../Assets/Images/linkedInIconImage.png'

const StudentProfile = () => {
    // Context
    const { students } = useContext(AppContext)

    // Router
    const { StudentId } = useParams()

    const activeStudent = students.find((data) => {
        return data.studentName.replace(' ', '-').toLowerCase() === StudentId
    })
    return (
        <ProfileSectionContainer
            header="Student profile"
            paragraph="View detailed profile information about a student"
        >
            <div className={classes.userDetails}>
                <div>
                    <div className={classes.userInfo}>
                        <img src={activeStudent?.studentImage} alt="User" />
                        <div>
                            <h3>{activeStudent?.studentName}</h3>
                            <div className={classes.iconTextContainer}>
                                <div>
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M14.714 13.8807C13.9864 14.6083 12.5188 16.0758 11.4134 17.1813C10.6323 17.9624 9.36751 17.9623 8.58646 17.1813C7.50084 16.0957 6.06038 14.6552 5.28587 13.8807C2.68238 11.2772 2.68238 7.05612 5.28587 4.45262C7.88937 1.84913 12.1105 1.84913 14.714 4.45262C17.3175 7.05612 17.3175 11.2772 14.714 13.8807Z"
                                            stroke="#737373"
                                            strokeWidth="2"
                                            stroke-linecap="round"
                                        />
                                        <path
                                            d="M12.4999 9.16667C12.4999 10.5474 11.3806 11.6667 9.99992 11.6667C8.61921 11.6667 7.49992 10.5474 7.49992 9.16667C7.49992 7.78596 8.61921 6.66667 9.99992 6.66667C11.3806 6.66667 12.4999 7.78596 12.4999 9.16667Z"
                                            stroke="#737373"
                                            strokeWidth="2"
                                            stroke-linecap="round"
                                        />
                                    </svg>
                                    <span>{activeStudent?.country}</span>
                                </div>
                                <div>
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 11.6673L17.5 7.50065L10 3.33398L2.5 7.50065L10 11.6673ZM10 11.6673L15.1326 8.81587C15.5848 9.95614 15.8333 11.1993 15.8333 12.5006C15.8333 13.085 15.7832 13.6578 15.687 14.2147C13.5119 14.4262 11.5409 15.3345 10 16.7136C8.45914 15.3345 6.48809 14.4262 4.31301 14.2147C4.2168 13.6577 4.16667 13.085 4.16667 12.5005C4.16667 11.1993 4.4152 9.95612 4.8674 8.81586L10 11.6673ZM6.66667 16.6673V10.4173L10 8.56547"
                                            stroke="#737373"
                                            strokeWidth="2"
                                            stroke-linecap="round"
                                        />
                                    </svg>
                                    <span>{activeStudent?.schoolLevel}</span>
                                </div>
                                <div>
                                    <svg
                                        width="17"
                                        height="18"
                                        viewBox="0 0 17 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.99921 8.99994L7.66587 10.6666L10.9992 7.33327M5.02816 2.91414C5.6261 2.86643 6.19375 2.6313 6.6503 2.24223C7.71571 1.3343 9.2827 1.3343 10.3481 2.24223C10.8047 2.6313 11.3723 2.86643 11.9703 2.91414C13.3656 3.0255 14.4737 4.13353 14.585 5.52889C14.6327 6.12683 14.8678 6.69449 15.2569 7.15104C16.1648 8.21644 16.1648 9.78343 15.2569 10.8488C14.8678 11.3054 14.6327 11.873 14.585 12.471C14.4737 13.8664 13.3656 14.9744 11.9703 15.0857C11.3723 15.1334 10.8047 15.3686 10.3481 15.7576C9.2827 16.6656 7.71571 16.6656 6.6503 15.7576C6.19375 15.3686 5.6261 15.1334 5.02816 15.0857C3.63279 14.9744 2.52476 13.8664 2.41341 12.471C2.3657 11.873 2.13057 11.3054 1.7415 10.8488C0.833564 9.78343 0.833564 8.21644 1.7415 7.15104C2.13057 6.69449 2.3657 6.12683 2.41341 5.52889C2.52476 4.13353 3.63279 3.0255 5.02816 2.91414Z"
                                            stroke="#737373"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                    <span>Referral level: {activeStudent?.referralLevel}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.about}>
                        <h4>About</h4>
                        <p>{activeStudent?.about}</p>
                    </div>
                    <div className={classes.links}>
                        <h4>Links</h4>
                        <div>
                            <a href={`mailto:${activeStudent?.emailAddress}`} target="_blank" rel="noopener noreferrer">
                                <img src={emailIconImage} alt="Send Student An Email" />
                            </a>
                            <a href={activeStudent?.linkedinProfile} target="_blank" rel="noopener noreferrer">
                                <img src={linkedInIcon} alt="Open Student LinkedIn" />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <Button type='secondary'>Edit student profile</Button>
                </div>
            </div>
        </ProfileSectionContainer>
    )
}

export default StudentProfile