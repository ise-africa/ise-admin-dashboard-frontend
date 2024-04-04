import { useContext, useState } from "react";
import classes from "./TutorProfileAccountManagePassword.module.css";
import ChangeEmailComformedModalBody from "./ChangeEmailComformedModalBody";
import AcceptedModal from "../../../Components/Modals/AcceptedModal/AcceptedModal";
import ProfileSectionContainer from "../../../Components/ProfileSectionContainer/ProfileSectionContainer";
import Input from "../../../Components/Input/Input";
import Button from "../../../Components/Button/Button";
import ChangePasswordModal from "./ChangeEmailModalWarning";
import { AppContext } from "../../../Context/AppContext";
import { useParams } from "react-router-dom";

const TutorProfileAccountManagePassword = () => {
  // States
  const [displayChangePasswordModal, setDisplayChangePasswordModal] = useState(false);
  const [displayEmailChangeConfirmModal, setDisplayEmailChangeConfirmModal] =
    useState(false);

  // Context
  const { tutors } = useContext(AppContext)

  // Router
  const { TutorId } = useParams()

  const activeAdmin = tutors.find((data) => {
    return data.tutorFullName.replace(' ', '-').toLowerCase() === TutorId
  })

  return (
    <ProfileSectionContainer
      header="Profile"
      paragraph="Edit tutor’s basic profile"
    >
      <div className={classes.container}>
        {displayChangePasswordModal && (
          <AcceptedModal
            onClick={() => {
              setDisplayChangePasswordModal(false);
            }}
            body={
              <ChangePasswordModal
                onClick={() => {
                  setDisplayChangePasswordModal(false);
                }}
                onClick2={() => {
                  setDisplayChangePasswordModal(false);
                  setDisplayEmailChangeConfirmModal(true);
                }}
              />
            }
          />
        )}
        {displayEmailChangeConfirmModal && (
          <AcceptedModal
            onClick={() => {
              setDisplayEmailChangeConfirmModal(false);
            }}
            body={
              <ChangeEmailComformedModalBody
                onClick={() => {
                  setDisplayEmailChangeConfirmModal(false);
                }}
              />
            }
          />
        )}
        <Input
          isRequired
          type="text"
          label="First name"
          placeholder={activeAdmin?.tutorFirstName}
        />
        <Input
          isRequired
          type="text"
          label="Last name"
          placeholder={activeAdmin?.tutorLastName}
        />
        <Input
          isRequired
          type="email"
          label="Email address"
          placeholder={activeAdmin?.emailAddress}
        />
        <Input
          isRequired
          type="password"
          label="Password"
          placeholder={activeAdmin?.password}
        />

        <Button
          type="null"
          className={classes.buttonLeft}
          onClick={() => {
            setDisplayChangePasswordModal(true);
          }}
        >
          Change Password
        </Button>
      </div>
    </ProfileSectionContainer>
  );
};

export default TutorProfileAccountManagePassword;
