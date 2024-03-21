import React, { useContext } from 'react'
import Breadcrumbs from '../../../Components/Breadcrumbs/Breadcrumbs'
import breadcrumbsBack from "../../../Assets/Images/breadcrumbsBack.svg";
import { AppContext } from '../../../Context/AppContext';
import { useParams } from 'react-router-dom';
import CreateCourseFourthStep from '../SchoolCourseModules/CreateCourseFourthStep/CreateCourseFourthStep';

const SchoolCourseViewDetailsContainer = () => {
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
        <div>

            <Breadcrumbs {...breadCrumbs} />
            <CreateCourseFourthStep
                showIndicator={false}
                editInformation={true}
                title='View course cohort information '
                name={activeCourse?.courseName}
                tagline={activeCourse?.difficultyLevel}
                description={activeCourse?.courseDescription}
                image={activeCourse?.courseImage}
                objectives={activeCourse?.objectives.map(objective => objective.list)}
                cohortName={activeCourse?.cohortName}
                cohortDeadline={activeCourse?.applicationDeadLine}
                cohortStart={activeCourse?.startDate}
                cohortDuration={activeCourse?.cohortDuration}
                cohortTutor={activeCourse?.cohortTutor}
                cohortPrice={activeCourse?.cohortPrice}
            />
        </div>
    )
}

export default SchoolCourseViewDetailsContainer