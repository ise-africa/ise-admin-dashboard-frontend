import React, { useContext } from 'react'
import Layout from '../Components/Layout/Layout'
import SchoolCourseViewDetailsContainer from '../Containers/SchoolManagementPagesContainer/SchoolCourseViewDetailsContainer/SchoolCourseViewDetailsContainer'
import { AppContext } from '../Context/AppContext';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import breadcrumbsBack from "../Assets/Images/breadcrumbsBack.svg";


const SchoolCourseViewDetailsPage = () => {
    // Context 
    const { schools } = useContext(AppContext);

    // Router
    const { SchoolId, CourseId } = useParams();

    const activeSchool = schools.find(data => data.schoolId === SchoolId)
    const activeCourse = activeSchool?.courses.find(data => data.courseId === CourseId)

    // Utils
    const breadCrumbs = {
        image: breadcrumbsBack,
        array: [
            {
                title: `${activeSchool?.schoolName}`,
                route: "/schools",
            },
            {
                title: 'Course',
                route: `/schools/${activeSchool?.schoolId}/courses`,
            },
            {
                title: `${activeCourse?.courseName}`,
                route: `/schools/${SchoolId}/courses/${activeCourse?.courseId}`,
            },
        ],
    };
    return (
        <Layout>
            <Breadcrumbs {...breadCrumbs} />
            <SchoolCourseViewDetailsContainer editInformation={true} />
        </Layout>
    )
}

export default SchoolCourseViewDetailsPage