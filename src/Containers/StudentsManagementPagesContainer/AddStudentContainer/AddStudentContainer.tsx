import { useContext, useEffect, useState } from "react";
import Button from "../../../Components/Button/Button";
import Input from "../../../Components/Input/Input";
import ProfileSectionContainer from "../../../Components/ProfileSectionContainer/ProfileSectionContainer";
import classes from "./AddStudentContainer.module.css";
import AcceptedModal from "../../../Components/Modals/AcceptedModal/AcceptedModal";
import { useNavigate } from "react-router-dom";
import ConfirmStudentDetailsModal from "./AddStudentContainerModals/ConfirmStudentDetailsModal";
import StudentAccountCreatedModal from "./AddStudentContainerModals/StudentAccountCreatedModal";
import { SchoolContext } from "../../../Context/SchoolContext";
import { UserContext } from "../../../Context/UserContext";
import { inputChangeHandler } from "../../../HelperFunctions/inputChangeHandler";

const AddStudentContainer = () => {
  const navigate = useNavigate();
  const [
    displayConfirmAdministratorDetailsModal,
    setDisplayConfirmStudentDetailsModal,
  ] = useState(false);
  const [displayTutorAccountCreatedModal, setDisplayTutorAccountCreatedModal] =
    useState(false);

  // COntext
  const { createStudentDetails, setCreateStudentDetails, isCreatingStudent } =
    useContext(UserContext);

  useEffect(() => {
    if (isCreatingStudent?.data) {
      setDisplayConfirmStudentDetailsModal(false);
    }
  }, [isCreatingStudent?.data]);

  return (
    <>
      {displayConfirmAdministratorDetailsModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayConfirmStudentDetailsModal(false);
          }}
          body={
            <ConfirmStudentDetailsModal
              onClick={() => {
                setDisplayConfirmStudentDetailsModal(false);
              }}
              onClick2={() => {
                setDisplayConfirmStudentDetailsModal(false);
                setDisplayTutorAccountCreatedModal(true);
              }}
            />
          }
        />
      )}
      {isCreatingStudent?.data && (
        <AcceptedModal
          onClick={() => {
            setDisplayTutorAccountCreatedModal(false);
          }}
          body={
            <StudentAccountCreatedModal
              onClick={() => {
                setDisplayTutorAccountCreatedModal(false);
                navigate("/users/students");
              }}
            />
          }
        />
      )}
      <section className={classes.container}>
        <div className={classes.header}>
          <h1>Add new student</h1>
          <p>
            {" "}
            Input student details and assign a username and password to them.
          </p>
        </div>

        <div className={classes.body}>
          <ProfileSectionContainer
            header="Student information"
            paragraph="Add personal details to create an account."
          >
            <Input
              isRequired
              type="text"
              label="First name"
              placeholder="E.g John"
              name="full_name"
              value={createStudentDetails.full_name}
              onChange={(e) => {
                return inputChangeHandler(e, setCreateStudentDetails);
              }}
            />
            <Input
              isRequired
              type="email"
              label="Email address"
              placeholder="E.g name@gmail.com"
              name="email"
              value={createStudentDetails.email}
              onChange={(e) => {
                return inputChangeHandler(e, setCreateStudentDetails);
              }}
            />
          </ProfileSectionContainer>

          <div className={classes.buttonContainer}>
            <Button
              type="secondary"
              onClick={() => {
                navigate("/users/students");
              }}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              onClick={() => {
                setDisplayConfirmStudentDetailsModal(true);
              }}
            >
              Continue
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddStudentContainer;
