import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classes from './SchoolCourseCreatedContainer.module.css';
import addButton from '../../../Assets/Images/addButtonWithPurpleBackgroundAndRoundedCorners.svg';
import SchoolCourseCard from '../../../Components/SchoolCourseCard/SchoolCourseCard';
import { AppContext } from '../../../Context/AppContext';
import SchoolCourseModulesEmptyTab from '../SchoolCourseModules/SchoolCourseModulesEmptyTab';

const SchoolCourseCreatedContainer = () => {
    // Router
    const navigate = useNavigate();
    const { SchoolId } = useParams();

    // Context
    const { schools } = useContext(AppContext);

    const activeSchool = schools.find(data => data.schoolId === SchoolId);

    const isEmpty = activeSchool?.courses.length === 0;

    return (
        <>
            {isEmpty ? (
                <SchoolCourseModulesEmptyTab />
            ) : (
                <div className={classes.container}>
                    <div className={classes.emptyTab}>
                        <img onClick={() => navigate(`/schools/${SchoolId}/add-course?step=1`)} src={addButton} alt="add course" />
                        <div>
                            <h2>Add a new course</h2>
                            <p>Create a new course connected to this school.</p>
                        </div>
                    </div>

                    {activeSchool?.courses.map((data, i) => (
                        <SchoolCourseCard
                            key={i}
                            id={data.courseId}
                            image={data.courseImage}
                            title={data.courseName}
                            cohortNumber={data.cohorts.length}
                            description={data.courseDescription}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

export default SchoolCourseCreatedContainer;
