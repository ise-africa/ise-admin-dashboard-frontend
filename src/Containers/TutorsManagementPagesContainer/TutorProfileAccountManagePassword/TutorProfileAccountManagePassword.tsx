import { useContext, useEffect, useState } from "react";
import classes from "./TutorProfileAccountManagePassword.module.css";
import ChangeEmailComformedModalBody from "./ChangeEmailComformedModalBody";
import AcceptedModal from "../../../Components/Modals/AcceptedModal/AcceptedModal";
import ProfileSectionContainer from "../../../Components/ProfileSectionContainer/ProfileSectionContainer";
import Input from "../../../Components/Input/Input";
import Button from "../../../Components/Button/Button";
import ChangePasswordModal from "./ChangeEmailModalWarning";
import { AppContext } from "../../../Context/AppContext";
import { useParams } from "react-router-dom";
import { inputChangeHandler } from "../../../HelperFunctions/inputChangeHandler";

type TutorProfileAccountManagePasswordType = {
  tutor: any;
};

const TutorProfileAccountManagePassword = ({
  tutor,
}: TutorProfileAccountManagePasswordType) => {
  // States
  const [displayChangePasswordModal, setDisplayChangePasswordModal] =
    useState(false);
  const [displayEmailChangeConfirmModal, setDisplayEmailChangeConfirmModal] =
    useState(false);
  const [tutorDetails, setTutorDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  // Context
  const { tutors } = useContext(AppContext);

  // Router
  const { TutorId } = useParams();

  const activeAdmin = tutors.find((data) => {
    return data.tutorFullName.replace(" ", "-").toLowerCase() === TutorId;
  });

  // Effects
  useEffect(() => {
    if (tutor) {
      setTutorDetails({
        email: tutor?.email,
        first_name: tutor?.first_name,
        last_name: tutor?.last_name,
        password: tutor?.password,
      });
    }
  }, [tutor]);

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
          placeholder={tutorDetails?.first_name}
          name="first_name"
          value={tutorDetails?.first_name}
          onChange={(e) => inputChangeHandler(e, setTutorDetails)}
        />
        <Input
          isRequired
          type="text"
          label="Last name"
          placeholder={tutorDetails?.last_name}
          name="last_name"
          value={tutorDetails?.last_name}
          onChange={(e) => inputChangeHandler(e, setTutorDetails)}
        />
        <Input
          isRequired
          type="email"
          label="Email address"
          placeholder={tutorDetails?.email}
          name="email"
          value={tutorDetails?.email}
          onChange={(e) => inputChangeHandler(e, setTutorDetails)}
        />
        <Input
          isRequired
          type="password"
          label="Password"
          placeholder={tutorDetails?.password}
          name="password"
          value={tutorDetails?.password}
          onChange={(e) => inputChangeHandler(e, setTutorDetails)}
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
