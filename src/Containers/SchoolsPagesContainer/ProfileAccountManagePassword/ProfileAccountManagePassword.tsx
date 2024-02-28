import { useState } from "react";
import classes from "./ProfileAccountManagePassword.module.css";
import ChangeEmailComformedModalBody from "./ChangeEmailComformedModalBody";
import AcceptedModal from "../../../Components/Modals/AcceptedModal/AcceptedModal";
import ProfileSectionContainer from "../../../Components/ProfileSectionContainer/ProfileSectionContainer";
import Input from "../../../Components/Input/Input";
import Button from "../../../Components/Button/Button";
import ChangePasswordModal from "./ChangeEmailModalWarning";

const ProfileAccountManagePassword = () => {
  // States
  const [displayChangePasswordModal, setDisplayChangePasswordModal] = useState(false);
  const [displayEmailChangeConfirmModal, setDisplayEmailChangeConfirmModal] =
    useState(false);

  return (
    <ProfileSectionContainer
      header="Profile"
      paragraph="Edit administrator’s basic profile information"
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
          type="text"
          label="First name *"
          placeholder="John"
        />
        <Input
          type="text"
          label="Last name *"
          placeholder="Doe"
        />
        <Input
          type="email"
          label="Email address *"
          placeholder="johndoe@gmail.com"
        />
        <Input
          type="password"
          label="Password *"
          placeholder="xxxxxxxxxxxxxxxxx"
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

export default ProfileAccountManagePassword;
