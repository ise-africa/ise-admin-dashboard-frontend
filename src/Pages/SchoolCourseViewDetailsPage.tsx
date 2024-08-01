import React, { useContext } from "react";
import Layout from "../Components/Layout/Layout";
import SchoolCourseViewDetailsContainer from "../Containers/SchoolManagementPagesContainer/SchoolCourseViewDetailsContainer/SchoolCourseViewDetailsContainer";
import { AppContext } from "../Context/AppContext";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
import breadcrumbsBack from "../Assets/Images/breadcrumbsBack.svg";
import { useCourseById } from "../Hooks/useCourse";
import { useSchoolsById } from "../Hooks/useSchools";
import Loader from "../Components/Loader/Loader";

const SchoolCourseViewDetailsPage = () => {
  // Context
  const { schools } = useContext(AppContext);

  // Router
  const { SchoolId, CourseId } = useParams();

  const activeSchool = schools.find((data) => data.schoolId === SchoolId);
  const activeCourse = activeSchool?.courses.find(
    (data) => data.courseId === CourseId
  );

  // Requests
  const { data: course, isLoading: courseIsLoading } = useCourseById(
    CourseId as string
  );
  const { data: school, isLoading: schoolIsIsLoading } = useSchoolsById(
    SchoolId as string
  );
  const courseData = course?.data;
  const schoolData = school?.data;

  console.log(courseData, "Hmm");

  // Utils
  const breadCrumbs = {
    image: breadcrumbsBack,
    array: [
      {
        title: `${schoolData?.name}`,
        route: "/schools",
      },
      {
        title: "Courses",
        route: `/schools/${schoolData?.id}/courses`,
      },
      {
        title: `${courseData?.name}`,
        route: `/schools/${schoolData?.id}/courses/${courseData?.id}`,
      },
    ],
  };
  return (
    <Layout>
      <Breadcrumbs {...breadCrumbs} />
      {courseIsLoading || schoolIsIsLoading ? (
        <Loader />
      ) : (
        <SchoolCourseViewDetailsContainer
          editInformation={true}
          data={courseData}
        />
      )}
    </Layout>
  );
};

export default SchoolCourseViewDetailsPage;
