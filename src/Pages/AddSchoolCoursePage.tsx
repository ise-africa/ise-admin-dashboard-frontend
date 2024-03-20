import React from 'react'
import Layout from '../Components/Layout/Layout'
import { useLocation } from "react-router-dom";
import CreateCourseFirstStep from '../Containers/SchoolManagementPagesContainer/SchoolCourseModules/CreateCourseFirstStep/CreateCourseFirstStep';
import CreateCourseSecondStep from '../Containers/SchoolManagementPagesContainer/SchoolCourseModules/CreateCourseSecondStep/CreateCourseSecondStep';
import CreateCourseThirdStep from '../Containers/SchoolManagementPagesContainer/SchoolCourseModules/CreateCourseThirdStep/CreateCourseThirdStep';
import CreateCourseFourthStep from '../Containers/SchoolManagementPagesContainer/SchoolCourseModules/CreateCourseFourthStep/CreateCourseFourthStep';
import SchoolCreatedPage from './SchoolCreatedPage';


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

    return (
        <Layout>
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