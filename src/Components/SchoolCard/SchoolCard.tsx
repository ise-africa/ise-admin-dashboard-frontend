import React, { useRef, useState, useEffect, useContext } from "react";
import classes from "./SchoolCard.module.css";
import ellipse from "../../Assets/Images/ellipses.svg";
import ActionsModal from "./ActionsModal/ActionsModal";
import { useNavigate } from "react-router-dom";
import AcceptedModal from "../Modals/AcceptedModal/AcceptedModal";
import ActivateSchoolModal from "./Modals/ActivateSchoolModal";
import DeactivateSchoolModal from "./Modals/DeactivateSchoolModal";
import ActivateSchoolSuccessfulModal from "./Modals/ActivateSchoolSuccessfulModal";
import DeactivateSchoolSuccessfulModal from "./Modals/DeactivateSchoolSuccessfulModal";
import { capitalize } from "../../HelperFunctions/capitalize";
import { SchoolContext } from "../../Context/SchoolContext";

type SchoolCardProps = {
  id: string;
  image: string;
  title: string;
  status: "active" | "inactive";
  courses?: string;
  notification?: string;
  onClick?: () => void;
  description: string;
  courseNumber: number;
  showActionButton?: boolean;
  isActive?: boolean;
  className?: string | undefined;
};

const SchoolCard = ({
  id,
  image,
  title,
  onClick,
  description,
  notification,
  status,
  className,
  courseNumber,
  showActionButton,
}: SchoolCardProps) => {
  // Router
  const navigate = useNavigate();

  // COntext
  const { toggleActivate } = useContext(SchoolContext);

  // State
  const [showOptions, setShowOptions] = useState(false);
  const [displayActivateSchoolModal, setDisplayActivateSchoolModal] =
    useState(false);
  const [
    displayActivateSchoolSuccessfulModal,
    setDisplayActivateSchoolSuccessfulModal,
  ] = useState(false);
  const [displayDeactivateSchoolModal, setDisplayDeactivateSchoolModal] =
    useState(false);
  const [
    displayDeactivateSchoolSuccessfulModal,
    setDisplayDeactivateSchoolSuccessfulModal,
  ] = useState(false);

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
      {displayActivateSchoolModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayActivateSchoolModal(false);
          }}
          body={
            <ActivateSchoolModal
              onClick={() => {
                setDisplayActivateSchoolModal(false);
              }}
              onClick2={() => {
                // setDisplayActivateSchoolModal(false);
                // setDisplayActivateSchoolSuccessfulModal(true);

                toggleActivate(id);
              }}
            />
          }
        />
      )}
      {displayActivateSchoolSuccessfulModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayActivateSchoolSuccessfulModal(false);
          }}
          body={
            <ActivateSchoolSuccessfulModal
              onClick={() => {
                setDisplayActivateSchoolSuccessfulModal(false);
              }}
            />
          }
        />
      )}
      {displayDeactivateSchoolModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayDeactivateSchoolModal(false);
          }}
          body={
            <DeactivateSchoolModal
              onClick={() => {
                setDisplayDeactivateSchoolModal(false);
              }}
              onClick2={() => {
                // setDisplayDeactivateSchoolModal(false);
                // setDisplayDeactivateSchoolSuccessfulModal(true);
                toggleActivate(id);
              }}
              id={id}
            />
          }
        />
      )}
      {displayDeactivateSchoolSuccessfulModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayDeactivateSchoolSuccessfulModal(false);
            navigate("/schools");
          }}
          body={
            <DeactivateSchoolSuccessfulModal
              onClick={() => {
                setDisplayDeactivateSchoolSuccessfulModal(false);
                navigate("/schools");
              }}
            />
          }
        />
      )}
      <div className={classes.school} onClick={onClick}>
        <img src={image} alt={title} />
        <div>
          <h4>{capitalize(title)}</h4>
          <div className={classes.schoolInfo}>
            {!showActionButton && (
              <>
                <div>
                  <p>
                    Active Courses: <span>{courseNumber}</span>
                  </p>
                </div>
                <div>
                  <span>Notification:</span>
                  <div className={classes.notification}>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 15H17L15.5951 13.5951C15.2141 13.2141 15 12.6973 15 12.1585V9C15 6.38757 13.3304 4.16509 11 3.34142V3C11 1.89543 10.1046 1 9 1C7.89543 1 7 1.89543 7 3V3.34142C4.66962 4.16509 3 6.38757 3 9V12.1585C3 12.6973 2.78595 13.2141 2.40493 13.5951L1 15H6M12 15V16C12 17.6569 10.6569 19 9 19C7.34315 19 6 17.6569 6 16V15M12 15H6"
                        stroke="#2E2E2E"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>{notification}</span>
                  </div>
                </div>
              </>
            )}
            {showActionButton && (
              <>
                <div>
                  <span>Courses:</span> <span>{courseNumber}</span>
                </div>
                <div>
                  <span>Status:</span>{" "}
                  <span className={className}>{capitalize(status)}</span>
                </div>
              </>
            )}
            <p>{capitalize(description)}</p>
          </div>
        </div>
        {showActionButton && (
          <>
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
                      navigate(`/schools/${id}`);
                    }}
                    onClick2={() => {
                      navigate(`/schools/${id}/edit-school?step=1`);
                    }}
                    onClick3={() => {
                      navigate(`/schools/${id}/add-course?step=1`);
                    }}
                    onClick4={() => {
                      navigate(`/schools/${id}/courses`);
                    }}
                    onClick5={() => {
                      setDisplayActivateSchoolModal(true);
                    }}
                    onClick6={() => {
                      setDisplayDeactivateSchoolModal(true);
                    }}
                    schoolIsActive={status === "active" ? true : false}
                  />
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SchoolCard;
