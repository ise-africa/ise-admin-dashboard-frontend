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
    return (
        <Layout>
            {userStep === "1" ? (
                <CreateCourseFirstStep />
            ) : userStep === "2" ? (
                <CreateCourseSecondStep />
            ) : userStep === "3" ? (
                <CreateCourseThirdStep />
            ) : userStep === "4" ? (
                <CreateCourseFourthStep />
            ) : (
                <SchoolCreatedPage />
            )}
        </Layout>
    )
}

export default AddSchoolCoursePage