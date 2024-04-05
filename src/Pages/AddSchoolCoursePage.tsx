import React, { useContext } from 'react'
import Layout from '../Components/Layout/Layout'
import { useLocation, useParams } from "react-router-dom";
import CreateCourseFirstStep from '../Containers/SchoolManagementPagesContainer/SchoolCourseModules/CreateCourseFirstStep/CreateCourseFirstStep';
import CreateCourseSecondStep from '../Containers/SchoolManagementPagesContainer/SchoolCourseModules/CreateCourseSecondStep/CreateCourseSecondStep';
import CreateCourseThirdStep from '../Containers/SchoolManagementPagesContainer/SchoolCourseModules/CreateCourseThirdStep/CreateCourseThirdStep';
import CreateCourseFourthStep from '../Containers/SchoolManagementPagesContainer/SchoolCourseModules/CreateCourseFourthStep/CreateCourseFourthStep';
import SchoolCreatedPage from './SchoolCreatedPage';
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import breadcrumbsBack from "../Assets/Images/breadcrumbsBack.svg";
import { AppContext } from '../Context/AppContext';



const AddSchoolCoursePage = () => {
    // Router
    const location = useLocation();
    const userStep = new URLSearchParams(location.search).get("step");

    const courseObjective = [
        "Develop a deep understanding of Talent Acquisition strategies and practices",
        "Beginner-friendly program- no experience needed",
        "Receive personalised one-on-one mentorship and guidance sessions",
        "Gain practical skills to source, assess, and hire top talent effectively",
        "Gain valuable skills for real-world projects",
        "Complete course in 4 months at 10hrs/week",
    ];
    // Context
    const { schools } = useContext(AppContext)

    // Router
    const { SchoolId } = useParams()

    const activeSchool = schools.find((data) => {
        return data.schoolId === SchoolId
    })

    // Utils
    const breadCrumbs = {
        image: breadcrumbsBack,
        array: [
            {
                title: `${activeSchool?.schoolName}`,
                route: `/schools/${SchoolId}/courses`,
            },
            {
                title: 'Courses',
                route: `/schools/${SchoolId}/add-course`,
            },
        ],
    };

    return (
        <Layout>
            <Breadcrumbs {...breadCrumbs} />
            {userStep === "1" ? (
                <CreateCourseFirstStep />
            ) : userStep === "2" ? (
                <CreateCourseSecondStep />
            ) : userStep === "3" ? (
                <CreateCourseThirdStep showIndicator={true} createCohort={true} />
            ) : userStep === "4" ? (
                <CreateCourseFourthStep showIndicator={true} createCourse={true} objectives={courseObjective.map(importance => importance)} />
            ) : (
                <SchoolCreatedPage />
            )}
        </Layout>
    )
}

export default AddSchoolCoursePage