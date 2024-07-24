import React, { useContext, useEffect, useState } from "react";
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
import useCourseFromSchool from "../../../Hooks/useCourse";
import { mutate } from "swr";
import { backend_url } from "../../../Utilities/global";

export type Course = {
  courseTitle: string;
  courseImg: string;
  schoolId: string;
  courseId: string;
};

const ContentBoardContainer = () => {
  // const { schools } = useContext(AppContext);

  // Router
  const navigate = useNavigate();

  const [activeSchool, setActiveSchool] = useState<any>();
  const [displaySchoolCoursesModal, setDisplaySchoolCoursesModal] =
    useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalCourses, setModalCourses] = useState<Course[]>([]);

  const handleSchoolClick = (school: string, schoolName: string) => {
    setDisplaySchoolCoursesModal(true);

    setActiveSchool(school);
    setModalTitle(schoolName);

    console.log(school, "SchoolId");
  };

  // Requests
  const { data, isLoading } = useSchools();
  const activeSchools = data?.data;

  const { data: courseFromSchoolData, isLoading: courseFromSchoolIsLoading } =
    useCourseFromSchool(activeSchool?.id, { revalidateOnMount: false });

  // Effects
  useEffect(() => {
    const getCourseFromSchool = async () => {
      await mutate(
        `${backend_url}/api/ise/v1/school/admin/${
          activeSchool?.id as string
        }/courses`
      );

      console.log("Mutate is run", activeSchool?.id);
    };

    if (activeSchool?.id as string) {
      getCourseFromSchool();
    }
  }, [activeSchool]);

  return (
    <div className={classes.Container}>
      <HelloUser
        header="Course management "
        paragraph="Manage, edit and assign content for all iṣẹ́ Schools."
      />

      {displaySchoolCoursesModal && (
        <AcceptedModal
          onClick={() => {
            setDisplaySchoolCoursesModal(false);
          }}
          body={
            <>
              <SchooCoursesModal
                title={modalTitle}
                courses={courseFromSchoolData?.data}
                onClick={() => {
                  setDisplaySchoolCoursesModal(false);
                }}
                onClick2={(schoolId: string, courseId: string) => {
                  navigate(
                    `/courses/${schoolId}/courses/${courseId}/analytics`
                  );
                }}
                isLoading={courseFromSchoolIsLoading}
                data={courseFromSchoolData}
                school={activeSchool}
              />
            </>
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
              onClick={() => handleSchoolClick(data, data.name)}
              isActive={activeSchool?.id === data.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ContentBoardContainer;
