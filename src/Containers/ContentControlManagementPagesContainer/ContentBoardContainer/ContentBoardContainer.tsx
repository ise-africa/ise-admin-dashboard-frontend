import React, { useContext, useState } from "react";
import classes from "./ContentBoardContainer.module.css";
import HelloUser from "../../../Components/HelloUser/HelloUser";
import SchoolCard from "../../../Components/SchoolCard/SchoolCard";
import { AppContext } from "../../../Context/AppContext";
import AcceptedModal from "../../../Components/Modals/AcceptedModal/AcceptedModal";
import SchooCoursesModal from "./SchooCoursesModal";
import SchoolCourseModulesEmptyTab from "../../SchoolManagementPagesContainer/SchoolCourseModules/SchoolCourseModulesEmptyTab";
import { useNavigate } from "react-router-dom";
import useSchools from "../../../Hooks/useSchools";
import Loader from "../../../Components/Loader/Loader";

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

  const [activeSchoolId, setActiveSchoolId] = useState("");
  const [displaySchoolCoursesModal, setDisplaySchoolCoursesModal] =
    useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalCourses, setModalCourses] = useState<Course[]>([]);

  const handleSchoolClick = (
    schoolId: string,
    schoolName: string,
    courses: any[]
  ) => {
    setActiveSchoolId(schoolId);
    setModalTitle(schoolName);
    const transformedCourses: Course[] = courses.map(
      (course: any, index: number) => ({
        schoolId: schoolId,
        courseId: `${index + 1}`,
        courseTitle: course.courseName,
        courseImg: course.courseImage,
      })
    );
    setModalCourses(transformedCourses);
    setDisplaySchoolCoursesModal(true);
  };

  // Filter schools with status "Active"

  const { data, isLoading } = useSchools();

  const activeSchools = data?.data;

  return (
    <div className={classes.Container}>
      <HelloUser
        header="Course management "
        paragraph="Manage, edit and assign content for all iṣẹ́ Schools."
      />

      {displaySchoolCoursesModal && modalCourses.length === 0 && (
        <AcceptedModal
          onClick={() => {
            setDisplaySchoolCoursesModal(false);
          }}
          body={
            <>
              <SchooCoursesModal title={modalTitle} courses={modalCourses} />
              <SchoolCourseModulesEmptyTab />
            </>
          }
        />
      )}

      {displaySchoolCoursesModal && modalCourses.length > 0 && (
        <AcceptedModal
          onClick={() => {
            setDisplaySchoolCoursesModal(false);
          }}
          body={
            <SchooCoursesModal
              title={modalTitle}
              courses={modalCourses}
              onClick={() => {
                setDisplaySchoolCoursesModal(false);
              }}
              onClick2={(schoolId: string, courseId: string) => {
                navigate(`/courses/${schoolId}/courses/${courseId}/analytics`);
              }}
            />
          }
        />
      )}

      <div className={classes.schoolList}>
        {isLoading ? (
          <Loader />
        ) : (
          activeSchools?.map((data: any, i: number) => (
            <SchoolCard
              key={i}
              id={data.id}
              status={"active"}
              title={data.name}
              showActionButton={false}
              image={data?.image}
              courseNumber={3}
              description={data?.description}

              // Add the course preview here
              // onClick={() => handleSchoolClick(data?.id, data.name, )}
              // isActive={activeSchoolId === data.schoolId}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ContentBoardContainer;
