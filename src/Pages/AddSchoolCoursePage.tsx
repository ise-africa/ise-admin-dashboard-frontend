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
        { list: "Develop a deep understanding of Talent Acquisition strategies and practices" },
        { list: "Beginner-friendly program- no experience needed" },
        { list: "Receive personalised one-on-one mentorship and guidance sessions" },
        { list: "Gain practical skills to source, assess, and hire top talent effectively" },
        { list: "Gain valuable skills for real-world projects" },
        { list: "Complete course in 4 months at 10hrs/week" },
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
                route: "/schools",
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
                <CreateCourseThirdStep />
            ) : userStep === "4" ? (
                <CreateCourseFourthStep showIndicator={true} objectives={courseObjective.map(importance => importance.list)} />
            ) : (
                <SchoolCreatedPage />
            )}
        </Layout>
    )
}

export default AddSchoolCoursePage