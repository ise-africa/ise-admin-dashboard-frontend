import React, { useContext } from "react";
import breadcrumbsBack from "../../../Assets/Images/breadcrumbsBack.svg";
import classes from "./StudentDetailBreadcrumbs.module.css";
import Breadcrumbs from "../../../Components/Breadcrumbs/Breadcrumbs";
import { AppContext } from "../../../Context/AppContext";

const StudentDetailBreadcrumbs = () => {
  const { students } = useContext(AppContext);

  const activeStudents = students.filter((student) => student.isActive);

  const breadCrumbsArrayProps = {
    image: breadcrumbsBack,
    array: [
      {
        title: "Back to students",
        route: "/students",
      },
    ],
  };

  const studentBreadcrumbs = activeStudents.map((student) => ({
    title: student.studentName,
    route: `/student/details/${student.studentName
      .replaceAll(' ', '-')
      .toLowerCase()}`,
  }));

  breadCrumbsArrayProps.array = [...breadCrumbsArrayProps.array, ...studentBreadcrumbs];

  return (
    <div className={classes.container}>
      <Breadcrumbs {...breadCrumbsArrayProps} />
    </div>
  );
};

export default StudentDetailBreadcrumbs;
