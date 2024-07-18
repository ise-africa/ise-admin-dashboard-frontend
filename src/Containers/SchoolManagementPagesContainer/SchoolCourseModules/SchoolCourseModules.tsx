import React from "react";
import classes from "./SchoolCourseModules.module.css";
import { useContext } from "react";
import Breadcrumbs from "../../../Components/Breadcrumbs/Breadcrumbs";
import breadcrumbsBack from "../../../Assets/Images/breadcrumbsBack.svg";
import { AppContext } from "../../../Context/AppContext";
import { useParams } from "react-router-dom";
import SchoolCourseCreatedContainer from "../SchoolCourseCreatedContainer/SchoolCourseCreatedContainer";
import useCourseFromSchool from "../../../Hooks/useCourse";
import Loader from "../../../Components/Loader/Loader";
import { useSchoolsById } from "../../../Hooks/useSchools";

const SchoolCourseModules = () => {
  // Context
  const { schools } = useContext(AppContext);

  // Router
  const { SchoolId } = useParams();

  const sctiveSchool = schools.find((data) => {
    return data.schoolId === SchoolId;
  });

  // Requests
  const { isLoading, data } = useCourseFromSchool(SchoolId as string);
  const { isLoading: schoolIsLoading, data: schoolData } = useSchoolsById(
    SchoolId as string
  );

  const coursesFromSchool = data?.data;
  const school = schoolData?.data;

  // Utils
  const breadCrumbs = {
    image: breadcrumbsBack,
    array: [
      {
        title: `${school?.name}`,
        route: "/schools",
      },
      {
        title: "Courses",
        route: `/schools/${school?.id}/courses`,
      },
    ],
  };

  if (isLoading || schoolIsLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className={classes.breadCrumbs}>
        <Breadcrumbs {...breadCrumbs} />
      </div>
      <div className={classes.container}>
        <SchoolCourseCreatedContainer courses={coursesFromSchool} />
      </div>
    </>
  );
};

export default SchoolCourseModules;
