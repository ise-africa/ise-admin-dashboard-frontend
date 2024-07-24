import { useContext, useEffect, useState } from "react";
import classes from "./AdminProfileAccountManagePassword.module.css";
import ChangeEmailComformedModalBody from "./ChangeEmailComformedModalBody";
import AcceptedModal from "../../../Components/Modals/AcceptedModal/AcceptedModal";
import ProfileSectionContainer from "../../../Components/ProfileSectionContainer/ProfileSectionContainer";
import Input from "../../../Components/Input/Input";
import Button from "../../../Components/Button/Button";
import ChangePasswordModal from "./ChangeEmailModalWarning";
import { UserContext } from "../../../Context/UserContext";
import { useParams } from "react-router-dom";

type AdminProfileAccountManagePasswordType = {
  data: any;
};

const AdminProfileAccountManagePassword = ({
  data,
}: AdminProfileAccountManagePasswordType) => {
  // States
  const [displayChangePasswordModal, setDisplayChangePasswordModal] =
    useState(false);
  const [displayEmailChangeConfirmModal, setDisplayEmailChangeConfirmModal] =
    useState(false);

  // Router
  const { Adminid } = useParams();

  // Context
  const { changeAdminPassword, isCreatingStudent } = useContext(UserContext);

  // Effects
  useEffect(() => {
    if (isCreatingStudent?.data === "Password changed successfully") {
      setDisplayChangePasswordModal(false);
      setDisplayEmailChangeConfirmModal(true);
    }
  }, [isCreatingStudent?.data]);

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
                  changeAdminPassword(Adminid as string);
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
          placeholder={data?.first_name}
          value={data?.first_name}
          readOnly
        />
        <Input
          isRequired
          type="text"
          label="Last name"
          readOnly
          placeholder={data?.last_name}
          value={data?.last_name}
        />
        <Input
          isRequired
          type="email"
          label="Email address"
          placeholder={data?.email}
          value={data?.email}
          readOnly
        />
        <Input
          isRequired
          type="password"
          label="Password"
          placeholder={data?.password}
          value={data?.password}
          readOnly
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

export default AdminProfileAccountManagePassword;
