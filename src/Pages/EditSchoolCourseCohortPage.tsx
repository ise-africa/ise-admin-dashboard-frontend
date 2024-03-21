import React, { useContext } from 'react'
import Layout from '../Components/Layout/Layout'
import { useParams } from "react-router-dom";
import CreateCourseThirdStep from '../Containers/SchoolManagementPagesContainer/SchoolCourseModules/CreateCourseThirdStep/CreateCourseThirdStep';
import { AppContext } from '../Context/AppContext';



const EditSchoolCourseCohortPage = () => {
    // Context 
    const { schools } = useContext(AppContext);

    // Router
    const { SchoolId, CourseId, CohortId } = useParams();

    const activeSchool = schools.find(data => data.schoolId === SchoolId)
    const activeCourse = activeSchool?.courses.find(data => data.courseId === CourseId)
    const activeCohort = activeCourse?.cohorts.find(data => data.cohortId === CohortId)


    return (
        <Layout>
            <CreateCourseThirdStep
                showIndicator={false}
                title='Edit Course Cohort'
                name={activeCourse?.cohortName}
                dealine={activeCourse?.applicationDeadLine}
                startDate={activeCourse?.startDate}
                duration={activeCourse?.cohortDuration}
                tutor={activeCourse?.cohortTutor}
                price={activeCourse?.cohortPrice}
                capacity={activeCourse?.cohortCapacity}
                courseName={activeCourse?.courseName}
                editCohort={true}
            />
        </Layout>
    )
}

export default EditSchoolCourseCohortPage