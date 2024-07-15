import React, { useState } from "react";
import classes from "./StudentDataTable.module.css";
import greenBar from "../../../Assets/Images/greenBar.svg";
import yellowBar from "../../../Assets/Images/yellowBar.svg";
import StudentsManagementModulesEmptyTab from "./StudentsManagementModulesEmptyTab";
import StudentDataTableContent from "./StudentDataTableContent";
import useStudents from "../../../Hooks/useStudents";

const StudentDataTable = () => {
  // States
  const [navItems] = useState<any[]>([
    {
      isActive: true,
      activeComponent: <StudentDataTableContent />,
      activeNullStateComponent: <StudentsManagementModulesEmptyTab />,
    },
  ]);
  const activeCOmponent = navItems.find((data) => {
    return data.isActive;
  });

  const engagement = [
    {
      status: "Up",
      statusFigure: 2.1,
      totalNumber: 854,
      image: greenBar,
      title: "All students",
    },
    {
      status: "Dn",
      statusFigure: 5.1,
      totalNumber: 342,
      image: yellowBar,
      title: "Active students",
    },
    {
      status: "Up",
      statusFigure: 2.1,
      totalNumber: 5,
      image: greenBar,
      title: "New students",
    },
  ];

  // Requests
  const { isLoading, data } = useStudents();
  const students = data?.data;

  console.log(data, "Students");

  return (
    <section className={classes.container}>
      <div className={classes.filterButton}>
        <span>Filter by:</span>
        <div>
          <button type="button">School</button>
          <button type="button">Cohort</button>
          <button type="button">Course</button>
        </div>
      </div>

      <div className={classes.engagement}>
        <div>
          {engagement.map((data, i) => {
            return (
              <div key={i} className={classes.engagementCard}>
                <div>
                  <h3 className={classes.title}>{data.title}</h3>
                  <h1 className={classes.number}>
                    {data.totalNumber.toString()}
                  </h1>
                </div>
                <div>
                  <img src={data.image} alt={data.title} />
                  <span>
                    {data.status} {data.statusFigure}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {activeCOmponent.activeComponent
        ? activeCOmponent.activeComponent
        : activeCOmponent.activeNullStateComponent}
    </section>
  );
};

export default StudentDataTable;
