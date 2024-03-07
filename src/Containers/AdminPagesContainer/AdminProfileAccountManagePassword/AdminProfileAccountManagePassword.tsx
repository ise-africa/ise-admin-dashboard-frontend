import { useContext, useState } from "react";
import classes from "./AdminProfileAccountManagePassword.module.css";
import ChangeEmailComformedModalBody from "./ChangeEmailComformedModalBody";
import AcceptedModal from "../../../Components/Modals/AcceptedModal/AcceptedModal";
import ProfileSectionContainer from "../../../Components/ProfileSectionContainer/ProfileSectionContainer";
import Input from "../../../Components/Input/Input";
import Button from "../../../Components/Button/Button";
import ChangePasswordModal from "./ChangeEmailModalWarning";
import { AppContext } from "../../../Context/AppContext";
import { useParams } from "react-router-dom";

const AdminProfileAccountManagePassword = () => {
  // States
  const [displayChangePasswordModal, setDisplayChangePasswordModal] = useState(false);
  const [displayEmailChangeConfirmModal, setDisplayEmailChangeConfirmModal] =
    useState(false);

  // Context
  const { adminData } = useContext(AppContext)

  // Router
  const { AdminId } = useParams()

  const activeAdmin = adminData.find((data) => {
    return data.adminFullName.replace(' ', '-').toLowerCase() === AdminId
  })

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
          placeholder={activeAdmin?.adminFirstName}
        />
        <Input
          type="text"
          label="Last name *"
          placeholder={activeAdmin?.adminLastName}
        />
        <Input
          type="email"
          label="Email address *"
          placeholder={activeAdmin?.emailAddress}
        />
        <Input
          type="password"
          label="Password *"
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

export default AdminProfileAccountManagePassword;
