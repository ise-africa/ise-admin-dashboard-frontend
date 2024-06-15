import { useContext } from 'react';
import ProfileSectionContainer from '../../../Components/ProfileSectionContainer/ProfileSectionContainer';
import classes from './TutorProfileCourseAssigned.module.css';
import { AppContext } from '../../../Context/AppContext';
import { useParams } from 'react-router-dom';

const TutorProfileCourseAssigned = () => {
    // Context
    const { tutors } = useContext(AppContext);

    // Router
    const { TutorId } = useParams();

    const activeTutor = tutors.find((data) => {
        return data.tutorFullName.replace(' ', '-').toLowerCase() === TutorId;
    });

    return (
        <ProfileSectionContainer
            header="Course assigned"
            paragraph="This shows the course this tutor is taking"
        >
            <div className={classes.container}>
                {activeTutor && (
                    <>
                        {activeTutor.courseAssigned.map((data, index) => (
                            <div key={index}>
                                <div>
                                    <span>Course</span>
                                    <h4>{data.course}</h4>
                                </div>
                                <div>
                                    <span>School</span>
                                    <h4>{data.school}</h4>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </ProfileSectionContainer>
    );
};

export default TutorProfileCourseAssigned;
