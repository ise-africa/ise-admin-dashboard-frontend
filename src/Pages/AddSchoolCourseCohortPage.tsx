import React, { useContext } from 'react'
import Layout from '../Components/Layout/Layout'
import { useParams } from "react-router-dom";
import CreateCourseThirdStep from '../Containers/SchoolManagementPagesContainer/SchoolCourseModules/CreateCourseThirdStep/CreateCourseThirdStep';
import { AppContext } from '../Context/AppContext';



const AddSchoolCourseCohortPage = () => {

    // Context 
    const { schools } = useContext(AppContext);

    // Router
    const { SchoolId, CourseId } = useParams();

    const activeSchool = schools.find(data => data.schoolId === SchoolId)
    const activeCourse = activeSchool?.courses.find(data => data.courseId === CourseId)


    return (
        <Layout>
            <CreateCourseThirdStep
                courseName={activeCourse?.courseName}
                showIndicator={false}
                createCohort={true}
            />
        </Layout>
    )
}

export default AddSchoolCourseCohortPage