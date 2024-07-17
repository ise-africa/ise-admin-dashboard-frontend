import React from "react";
import classes from "./ContentBoardContainer.module.css";
import { Course } from "./ContentBoardContainer"; // Import Course interface from the same file
import Loader from "../../../Components/Loader/Loader";
import courseImage from "../../../Assets/Images/courseImage1.png";
import Button from "../../../Components/Button/Button";
import { useNavigate } from "react-router-dom";
import SchoolCourseModulesEmptyTab from "../../SchoolManagementPagesContainer/SchoolCourseModules/SchoolCourseModulesEmptyTab";

type SchooCoursesModalProps = {
  title: string;
  courses: any;
  onClick?: () => void;
  onClick2?: (schoolId: string, courseId: string) => void; // Update onClick2 to accept schoolId and courseId
  isLoading: boolean;
  data: any;
  school: any;
};

const SchooCoursesModal = ({
  title,
  courses,
  onClick,
  onClick2,
  isLoading,
  data,
  school,
}: SchooCoursesModalProps) => {
  // navigate
  const navigate = useNavigate();

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

      {courses?.length < 1 ? (
        <SchoolCourseModulesEmptyTab />
      ) : (
        <>
          <div className={classes.modalContent}>
            {courses?.length &&
              courses?.map((data: any) => (
                <div
                  key={data?.id}
                  onClick={() => onClick2?.(data.schoolId, data.courseId)}
                >
                  <img
                    src={data?.cover_image || courseImage}
                    alt={data?.name}
                  />
                  <h4>{data?.name}</h4>
                </div>
              ))}
          </div>

          <div className={classes.buttonContainer}>
            <Button
              onClick={() => {
                navigate(`/schools/${school?.id}/add-course?step=1`);
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 1V17M17 9L1 9"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Create course</span>
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default SchooCoursesModal;
