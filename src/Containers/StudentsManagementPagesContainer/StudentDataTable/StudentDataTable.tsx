import React, { useEffect, useState } from "react";
import classes from "./StudentDataTable.module.css";
import greenBar from "../../../Assets/Images/greenBar.svg";
import yellowBar from "../../../Assets/Images/yellowBar.svg";
import StudentsManagementModulesEmptyTab from "./StudentsManagementModulesEmptyTab";
import StudentDataTableContent from "./StudentDataTableContent";
import useStudents from "../../../Hooks/useStudents";
import Loader from "../../../Components/Loader/Loader";

const StudentDataTable = () => {
  // States
  const [students, setStudent] = useState([]);

  // Requests
  const { isLoading, data } = useStudents();

  // Effects
  useEffect(() => {
    if (data?.data?.data) {
      setStudent(
        data?.data?.data?.map((data: any) => {
          return { ...data, isActive: false };
        })
      );
    }
  }, [data?.data?.data]);

  const engagement = [
    {
      status: "Up",
      statusFigure: 2.1,
      totalNumber: students?.length || 0,
      image: greenBar,
      title: "All students",
    },
    {
      status: "Dn",
      statusFigure: 5.1,
      totalNumber:
        students?.filter((data: any) => data?.status === "active").length || 0,
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

  if (isLoading) {
    return <Loader />;
  }

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

      {students?.length > 0 ? (
        <StudentDataTableContent students={students} setStudents={setStudent} />
      ) : (
        <StudentsManagementModulesEmptyTab />
      )}
    </section>
  );
};

export default StudentDataTable;
