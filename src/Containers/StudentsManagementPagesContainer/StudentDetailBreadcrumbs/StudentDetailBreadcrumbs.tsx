import React, { useContext } from "react";
import breadcrumbsBack from "../../../Assets/Images/breadcrumbsBack.svg";
import classes from "./StudentDetailBreadcrumbs.module.css";
import Breadcrumbs from "../../../Components/Breadcrumbs/Breadcrumbs";
import { AppContext } from "../../../Context/AppContext";
import { useParams } from "react-router-dom";

const StudentDetailBreadcrumbs = () => {
  const { students } = useContext(AppContext);
  // Router
  const { StudentId } = useParams()

  const activeStudent = students.find((data) => {
    return data.studentName.replace(' ', '-').toLowerCase() === StudentId
  })

  // Utils
  const breadCrumbs = {
    image: breadcrumbsBack,
    array: [
      {
        title: "Back to students",
        route: "/students",
      },
      {
        title: `${activeStudent?.studentName}`,
        route: `/students/${activeStudent?.studentName.toLowerCase().replace(' ', '-')}`,
      },
    ],
  };

  return (
    <div className={classes.container}>
      <Breadcrumbs {...breadCrumbs} />
    </div>
  );
};

export default StudentDetailBreadcrumbs;
