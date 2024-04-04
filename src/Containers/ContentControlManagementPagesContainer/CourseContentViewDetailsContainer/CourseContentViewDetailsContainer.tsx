import { useState } from 'react';
import Button from '../../../Components/Button/Button'
import classes from './CourseContentViewDetailsContainer.module.css'
import ProgressBar from '../../../Components/ProgressBar/ProgressBar';
import breadcrumbsBack from '../../../Assets/Images/breadcrumbsBack.svg'
import Breadcrumbs from '../../../Components/Breadcrumbs/Breadcrumbs';
import TextArea from '../../../Components/TextArea/TextArea';
import CancelSchoolSuccessfulModal from '../../SchoolManagementPagesContainer/CreateSchoolPreview/PreviewModals/CancelSchoolSuccessfulModal';
import AcceptedModal from '../../../Components/Modals/AcceptedModal/AcceptedModal';
import { useNavigate } from 'react-router-dom';
import DeclineFeedbackModal from './DeclineFeedbackModal/DeclineFeedbackModal';

const CourseContentViewDetailsContainer = () => {
    // Router
    const navigate = useNavigate();

    // Utils
    const breadCrumbs = {
        image: breadcrumbsBack,
        array: [
            {
                title: "Back to dashboard",
                route: "/courses",
            },
            {
                title: "Module 1",
                route: `/courses/:SchoolId/courses/:CourseId/analytics/`,
            },
            {
                title: "Week 1",
                route: `/courses/:SchoolId/courses/:CourseId/analytics/details`,
            },
        ],
    };

    // States 
    const [writeFeedbackStep, setWriteFeedbackStep] = useState(1);
    const [displayPublishFeedbackSuccessfulModal, setDisplayPublishFeedbackSuccessfulModal] = useState(false)
    const [displayDeclineFeedbackSuccessfulModal, setDisplayDeclineFeedbackSuccessfulModal] = useState(false)
    const [displayDeclineFeedbackModal, setDisplayDeclineFeedbackModal] = useState(false)

    return (
        <>
            {displayPublishFeedbackSuccessfulModal && (
                <AcceptedModal
                    onClick={() => { setDisplayPublishFeedbackSuccessfulModal(false) }}
                    body={
                        <CancelSchoolSuccessfulModal
                            buttonText="Go to dashboard"
                            header="Module published successfully"
                            paragraph="Module 1 is now live on the curriculum"
                            onClick={() => {
                                setDisplayPublishFeedbackSuccessfulModal(false)
                                navigate('/courses/:SchoolId/courses/:CourseId/analytics/')
                            }}
                        />
                    }
                />
            )}
            {displayDeclineFeedbackModal && (
                <AcceptedModal
                    onClick={() => { setDisplayDeclineFeedbackModal(false) }}
                    body={
                        <DeclineFeedbackModal
                            onClick={() => {
                                setDisplayDeclineFeedbackModal(false)
                            }}
                            onClick2={() => {
                                setDisplayDeclineFeedbackModal(false)
                                setDisplayDeclineFeedbackSuccessfulModal(true)
                            }}
                        />
                    }
                />
            )}
            {displayDeclineFeedbackSuccessfulModal && (
                <AcceptedModal
                    onClick={() => { setDisplayDeclineFeedbackSuccessfulModal(false) }}
                    body={
                        <CancelSchoolSuccessfulModal
                            buttonText="Go to dashboard"
                            header="Feedback sent successfully"
                            paragraph="Your feedback has been sent to the tutor."
                            onClick={() => {
                                setDisplayDeclineFeedbackSuccessfulModal(false)
                                navigate('/courses/:SchoolId/courses/:CourseId/analytics/')
                            }}
                        />
                    }
                />
            )}
            <div className={classes.container}>
                <div className={classes.breadCrumbs}>
                    <Breadcrumbs {...breadCrumbs} />
                </div>
                <div className={classes.body}>
                    <div className={classes.leftSide}>
                        <div className={classes.top}>
                            <h4>Frontend Development Course</h4>
                            <ProgressBar
                                percentage={15} color="#fff"
                                secondaryColor='#FDC500'
                                primaryColor='#FFFAEB'
                            />
                        </div>
                        <div className={classes.bottom}>
                            <div className={classes.moduleTitle}>
                                <h4>Introduction to Data Analysis</h4>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 9L12 16L5 9" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className={classes.week}>
                                <div className={classes.courseFile}>
                                    <p>First Reading</p>
                                    <p>
                                        <span>Reading</span> .
                                        <span>5min</span>
                                    </p>
                                </div>
                                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 10H5M7 14H5M13 6H5M17 5.8V16.2C17 17.8802 17 18.7202 16.673 19.362C16.3854 19.9265 15.9265 20.3854 15.362 20.673C14.7202 21 13.8802 21 12.2 21H5.8C4.11984 21 3.27976 21 2.63803 20.673C2.07354 20.3854 1.6146 19.9265 1.32698 19.362C1 18.7202 1 17.8802 1 16.2V5.8C1 4.11984 1 3.27976 1.32698 2.63803C1.6146 2.07354 2.07354 1.6146 2.63803 1.32698C3.27976 1 4.11984 1 5.8 1H12.2C13.8802 1 14.7202 1 15.362 1.32698C15.9265 1.6146 16.3854 2.07354 16.673 2.63803C17 3.27976 17 4.11984 17 5.8Z" stroke="#FDC500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className={classes.rightSide}>
                        <div className={classes.top}>
                            <h3>Introduction to Data Analysis</h3>
                            <p>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 6.5V10.5L13 13.5M19 10.5C19 15.4706 14.9706 19.5 10 19.5C5.02944 19.5 1 15.4706 1 10.5C1 5.52944 5.02944 1.5 10 1.5C14.9706 1.5 19 5.52944 19 10.5Z" stroke="#454545" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>5mins</span>
                            </p>
                        </div>
                        <div className={classes.bottom}>
                            <p>Data analysis is a fundamental skill in the modern world, as data has become a ubiquitous part of our daily lives. Whether you are working in business, science, healthcare, or any other field, the ability to extract meaningful insights from data is invaluable. In this reading note, we will explore the key concepts and principles of data analysis.</p>
                            <div className={classes.info}>
                                <div>
                                    <h4>Understanding Data:</h4>
                                    <p>Data analysis begins with a clear understanding of what data is. Data can be any collection of facts, figures, or information, often in numerical form. It can be structured, like tables in a database, or unstructured, like text documents or images. Understanding the nature and context of your data is crucial, as it determines the methods and techniques you will use for analysis.</p>
                                </div>
                                <div>
                                    <h4>Data Analysis Process</h4>
                                    <p>Data analysis typically follows a structured process, which includes data collection, data cleaning, data exploration, data modeling, and data visualization. Each of these steps is essential for uncovering insights and patterns within the data. Data cleaning, in particular, involves identifying and addressing errors, missing values, and outliers that can skew the analysis.</p>
                                </div>
                                <div>
                                    <h4>Tools and Techniques</h4>
                                    <p>Various tools and techniques are available for data analysis, ranging from spreadsheet software like Excel to programming languages like Python and specialized data analysis platforms such as R. The choice of tools depends on the complexity of the analysis and your familiarity with them. It's important to learn how to use these tools effectively and to choose the right techniques for different types of data and questions.</p>
                                </div>
                                <div>
                                    <h4>Tools and Techniques</h4>
                                    <p>Various tools and techniques are available for data analysis, ranging from spreadsheet software like Excel to programming languages like Python and specialized data analysis platforms such as R. The choice of tools depends on the complexity of the analysis and your familiarity with them. It's important to learn how to use these tools effectively and to choose the right techniques for different types of data and questions.</p>
                                </div>
                                <div>
                                    <h4>Conclusion</h4>
                                    <p>Data analysis is a crucial skill for making informed decisions and solving complex problems. Whether you are a business analyst, a scientist, or simply someone interested in understanding the world better, the principles of data analysis will empower you to extract meaningful insights from the vast sea of data that surrounds us. In the following lessons, we will delve deeper into the various aspects of data analysis, equipping you with the knowledge and skills needed to harness the power of data.</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.footer}>
                            <Button type='secondary'>
                                <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 1.5L19 8.5M19 8.5L12 15.5M19 8.5L1 8.5" stroke="#664EFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>Mark as completed</span>
                            </Button>
                            <hr />
                            {writeFeedbackStep === 1 && (
                                <Button type='null' onClick={() => { setWriteFeedbackStep(writeFeedbackStep + 1) }}>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 14L5.92474 17.1137C5.49579 17.548 5.28131 17.7652 5.09695 17.7805C4.93701 17.7938 4.78042 17.7295 4.67596 17.6076C4.55556 17.4672 4.55556 17.162 4.55556 16.5515V14.9916C4.55556 14.444 4.10707 14.0477 3.5652 13.9683V13.9683C2.25374 13.7762 1.22378 12.7463 1.03168 11.4348C1 11.2186 1 10.9605 1 10.4444V5.8C1 4.11984 1 3.27976 1.32698 2.63803C1.6146 2.07354 2.07354 1.6146 2.63803 1.32698C3.27976 1 4.11984 1 5.8 1H13.2C14.8802 1 15.7202 1 16.362 1.32698C16.9265 1.6146 17.3854 2.07354 17.673 2.63803C18 3.27976 18 4.11984 18 5.8V10M18 21L15.8236 19.4869C15.5177 19.2742 15.3647 19.1678 15.1982 19.0924C15.0504 19.0255 14.8951 18.9768 14.7356 18.9474C14.5558 18.9143 14.3695 18.9143 13.9969 18.9143H12.2C11.0799 18.9143 10.5198 18.9143 10.092 18.6963C9.71569 18.5046 9.40973 18.1986 9.21799 17.8223C9 17.3944 9 16.8344 9 15.7143V13.2C9 12.0799 9 11.5198 9.21799 11.092C9.40973 10.7157 9.71569 10.4097 10.092 10.218C10.5198 10 11.0799 10 12.2 10H17.8C18.9201 10 19.4802 10 19.908 10.218C20.2843 10.4097 20.5903 10.7157 20.782 11.092C21 11.5198 21 12.0799 21 13.2V15.9143C21 16.8462 21 17.3121 20.8478 17.6797C20.6448 18.1697 20.2554 18.5591 19.7654 18.762C19.3978 18.9143 18.9319 18.9143 18 18.9143V21Z" stroke="#664EFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>Leave lesson feedback</span>
                                </Button>
                            )}
                        </div>
                        {writeFeedbackStep === 2 && (
                            <div className={classes.feedback}>
                                <TextArea
                                    label='Feeback'
                                    placeholder='Type feedback message here'
                                />
                                <div className={classes.buttonContainer}>
                                    <Button type='secondary' onClick={() => { setWriteFeedbackStep(writeFeedbackStep - 1) }}>Cancel feedback</Button>
                                    <Button type='primary'>Post feedback</Button>
                                </div>
                            </div>
                        )}

                        <div className={classes.actionButton}>
                            <Button type='secondary' onClick={() => { setDisplayDeclineFeedbackModal(true) }}>Decline module</Button>
                            <Button type='primary' onClick={() => { setDisplayPublishFeedbackSuccessfulModal(true) }}>Publish module</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseContentViewDetailsContainer