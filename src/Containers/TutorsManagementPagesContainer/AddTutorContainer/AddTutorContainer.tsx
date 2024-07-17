import { useContext, useEffect, useState } from "react";
import Button from "../../../Components/Button/Button";
import Input from "../../../Components/Input/Input";
import ProfileSectionContainer from "../../../Components/ProfileSectionContainer/ProfileSectionContainer";
import classes from "./AddTutorContainer.module.css";
import AcceptedModal from "../../../Components/Modals/AcceptedModal/AcceptedModal";
import ConfirmAdministratorDetailsModal from "./AddTutorContainerModals/ConfirmTutorDetailsModal";
import { useNavigate } from "react-router-dom";
import TutorAccountCreatedModal from "./AddTutorContainerModals/TutorAccountCreatedModal";
import { UserContext } from "../../../Context/UserContext";
import { inputChangeHandler } from "../../../HelperFunctions/inputChangeHandler";

const AddTutorContainer = () => {
  const navigate = useNavigate();
  const [displayConfirmAdministratorDetailsModal, ConfirmTutorDetailsModal] =
    useState(false);
  const [displayTutorAccountCreatedModal, setDisplayTutorAccountCreatedModal] =
    useState(false);

  // Context
  const {
    createStudentDetails,
    setCreateStudentDetails,
    createTutor,
    isCreatingStudent,
  } = useContext(UserContext);

  // Effects
  useEffect(() => {
    return () => {
      setCreateStudentDetails((prevState) => {
        return { ...prevState, full_name: "", email: "" };
      });
    };
  }, []);

  useEffect(() => {
    if (isCreatingStudent?.data) {
      ConfirmTutorDetailsModal(false);
      setDisplayTutorAccountCreatedModal(true);
    }
  }, [isCreatingStudent?.data]);

  return (
    <>
      {displayConfirmAdministratorDetailsModal && (
        <AcceptedModal
          onClick={() => {
            ConfirmTutorDetailsModal(false);
          }}
          body={
            <ConfirmAdministratorDetailsModal
              onClick={() => {
                ConfirmTutorDetailsModal(false);
              }}
              onClick2={() => {
                createTutor();
              }}
              state={createStudentDetails}
              isLoading={isCreatingStudent?.isLoading}
            />
          }
        />
      )}
      {displayTutorAccountCreatedModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayTutorAccountCreatedModal(false);
          }}
          body={
            <TutorAccountCreatedModal
              onClick={() => {
                setDisplayTutorAccountCreatedModal(false);
                navigate("/users/tutors");
              }}
            />
          }
        />
      )}
      <section className={classes.container}>
        <div className={classes.header}>
          <h1>Add new tutor</h1>
          <p>
            Add new tutor to the platform. Input their details and assign roles
            for specific permissions.
          </p>
        </div>

        <div className={classes.body}>
          <ProfileSectionContainer
            header="Tutor information"
            paragraph="Add personal details to create an account."
          >
            <Input
              isRequired
              type="text"
              label="First name"
              placeholder="E.g John"
              name="full_name"
              value={createStudentDetails?.full_name}
              onChange={(e) => inputChangeHandler(e, setCreateStudentDetails)}
            />

            <Input
              isRequired
              type="email"
              label="Email address"
              placeholder="E.g name@gmail.com"
              name="email"
              value={createStudentDetails?.email}
              onChange={(e) => inputChangeHandler(e, setCreateStudentDetails)}
            />
          </ProfileSectionContainer>

          <div className={classes.buttonContainer}>
            <Button
              type="secondary"
              onClick={() => {
                navigate("/users/tutors");
              }}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              onClick={() => {
                ConfirmTutorDetailsModal(true);
              }}
              disabled={
                !createStudentDetails?.full_name || !createStudentDetails?.email
              }
            >
              Continue
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddTutorContainer;
