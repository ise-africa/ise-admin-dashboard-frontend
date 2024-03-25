import React, { useContext, useState } from 'react';
import classes from './ContentBoardContainer.module.css';
import HelloUser from '../../../Components/HelloUser/HelloUser';
import SchoolCard from '../../../Components/SchoolCard/SchoolCard';
import { AppContext } from '../../../Context/AppContext';
import AcceptedModal from '../../../Components/Modals/AcceptedModal/AcceptedModal';
import SchooCoursesModal from './SchooCoursesModal';
import SchoolCourseModulesEmptyTab from '../../SchoolManagementPagesContainer/SchoolCourseModules/SchoolCourseModulesEmptyTab';
import { useNavigate } from 'react-router-dom';

export type Course = {
    courseTitle: string;
    courseImg: string;
    schoolId: string;
    courseId: string;
};


const ContentBoardContainer = () => {
    const { schools } = useContext(AppContext);

    // Router
    const navigate = useNavigate();

    const [activeSchoolId, setActiveSchoolId] = useState('');
    const [displaySchoolCoursesModal, setDisplaySchoolCoursesModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalCourses, setModalCourses] = useState<Course[]>([]);

    const handleSchoolClick = (schoolId: string, schoolName: string, courses: any[]) => {
        setActiveSchoolId(schoolId);
        setModalTitle(schoolName);
        const transformedCourses: Course[] = courses.map((course: any, index: number) => ({
            schoolId: schoolId,
            courseId: `${index + 1}`,
            courseTitle: course.courseName,
            courseImg: course.courseImage,
        }));
        setModalCourses(transformedCourses);
        setDisplaySchoolCoursesModal(true);
    }

    return (
        <div className={classes.Container}>
            <HelloUser
                header="Content management"
                paragraph="Manage, edit and assign content for all iṣẹ́ Schools."
            />

            {displaySchoolCoursesModal && modalCourses.length === 0 && (
                <AcceptedModal
                    onClick={() => { setDisplaySchoolCoursesModal(false) }}
                    body={
                        <>
                            <SchooCoursesModal
                                title={modalTitle}
                                courses={modalCourses}
                            />
                            <SchoolCourseModulesEmptyTab />
                        </>
                    }
                />
            )}

            {displaySchoolCoursesModal && modalCourses.length > 0 && (
                <AcceptedModal
                    onClick={() => { setDisplaySchoolCoursesModal(false) }}
                    body={
                        <SchooCoursesModal
                            title={modalTitle}
                            courses={modalCourses}
                            onClick={() => { setDisplaySchoolCoursesModal(false) }}
                            onClick2={(schoolId: string, courseId: string) => {
                                navigate(`/contents/${schoolId}/courses/${courseId}/analytics`);
                            }}
                        />
                    }
                />
            )}

            <div className={classes.schoolList}>
                {schools.map((data, i) => {
                    return (
                        <SchoolCard
                            key={i}
                            id={data.schoolId}
                            status={data.status}
                            title={data.schoolName}
                            showActionButton={false}
                            image={data.schoolImage}
                            courseNumber={data.courses.length}
                            description={data.schoolDescription}
                            onClick={() => handleSchoolClick(data.schoolId, data.schoolName, data.courses)}
                            isActive={activeSchoolId === data.schoolId}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default ContentBoardContainer;
