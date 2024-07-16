import React from "react";
import classes from "./ContentBoardContainer.module.css";
import { Course } from "./ContentBoardContainer"; // Import Course interface from the same file
import Loader from "../../../Components/Loader/Loader";

type SchooCoursesModalProps = {
  title: string;
  courses: Course[];
  onClick?: () => void;
  onClick2?: (schoolId: string, courseId: string) => void; // Update onClick2 to accept schoolId and courseId
  isLoading: boolean;
  data: any;
};

const SchooCoursesModal = ({
  title,
  courses,
  onClick,
  onClick2,
  isLoading,
  data,
}: SchooCoursesModalProps) => {
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={classes.modalContainer}>
      <div className={classes.modalHeader}>
        <h3>{title}</h3>
        <svg
          onClick={onClick}
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 13.5L13 1.5M1 1.5L13 13.5"
            stroke="#2E2E2E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className={classes.modalContent}>
        {courses.map((data, index) => (
          <div
            key={index}
            onClick={() => onClick2?.(data.schoolId, data.courseId)}
          >
            <img src={data.courseImg} alt={data.courseTitle} />
            <h4>{data.courseTitle}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchooCoursesModal;
