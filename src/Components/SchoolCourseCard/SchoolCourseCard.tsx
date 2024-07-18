import React, { useRef, useState, useEffect } from "react";
import classes from "./SchoolCourseCard.module.css";
import ellipse from "../../Assets/Images/ellipses.svg";
import ActionsModal from "./ActionsModal/ActionsModal";
import { useNavigate, useParams } from "react-router-dom";

type SchoolCourseCardProps = {
  id: string;
  image: string;
  title: string;
  description: string;
  cohortNumber?: number | string;
};

const SchoolCourseCard = ({
  id,
  image,
  title,
  description,
  cohortNumber,
}: SchoolCourseCardProps) => {
  const navigate = useNavigate();
  const { SchoolId } = useParams();

  // State
  const [showOptions, setShowOptions] = useState(false);

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const closeOptions = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node) &&
      optionsRef.current &&
      !optionsRef.current.contains(event.target as Node)
    ) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeOptions);
    return () => {
      document.removeEventListener("mousedown", closeOptions);
    };
  }, []);

  return (
    <>
      <div className={classes.school}>
        <img src={image} alt={title} />
        <div>
          <h4>{title}</h4>
          <div className={classes.schoolInfo}>
            <div>
              <span>Total cohort: </span> <span>{cohortNumber}</span>
            </div>
            <p>{description}</p>
          </div>
        </div>
        <div
          ref={containerRef}
          className={classes.ellipse}
          onClick={toggleOptions}
        >
          <img src={ellipse} alt="more options" />
        </div>
        <div>
          {showOptions && (
            <div className={classes.popover} ref={optionsRef}>
              <ActionsModal
                onClick={() => {
                  navigate(`/schools/${SchoolId}/courses/${id}`);
                }}
                onClick2={() => {
                  navigate(
                    `/schools/${SchoolId}/courses/${id}/edit-course?step=1`
                  );
                }}
                onClick3={() => {
                  navigate(`/schools/${SchoolId}/courses/${id}/add-cohort`);
                }}
                onClick4={() => {
                  navigate(`/schools/${SchoolId}/courses/${id}/cohorts`);
                }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SchoolCourseCard;
