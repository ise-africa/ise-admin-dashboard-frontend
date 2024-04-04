import React, { useContext } from 'react'
import { AppContext } from '../../../Context/AppContext';
import { useParams } from 'react-router-dom';
import CreateCourseFourthStep from '../SchoolCourseModules/CreateCourseFourthStep/CreateCourseFourthStep';

type SchoolCourseViewDetailsContainerProp = {
    editCohort?: boolean
    editInformation?: boolean
}

const SchoolCourseViewDetailsContainer = ({ editCohort, editInformation }: SchoolCourseViewDetailsContainerProp) => {
    // Context 
    const { schools } = useContext(AppContext);

    // Router
    const { SchoolId, CourseId } = useParams();

    const activeSchool = schools.find(data => data.schoolId === SchoolId)
    const activeCourse = activeSchool?.courses.find(data => data.courseId === CourseId)

    return (
        <div>

            <CreateCourseFourthStep
                showIndicator={false}
                editCohort={editCohort}
                editInformation={editInformation}
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