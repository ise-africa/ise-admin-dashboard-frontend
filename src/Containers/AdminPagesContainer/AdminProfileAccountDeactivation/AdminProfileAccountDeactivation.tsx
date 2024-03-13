import { useState } from "react";
import DeleteDisclaimerModalBody from "./DeleteDisclaimerModalBody";
import DeleteSuccessfulModalBody from "./DeleteSuccessfulModalBody";
import classes from "./AdminProfileAccountDeactivation.module.css";
import ProfileSectionContainer from "../../../Components/ProfileSectionContainer/ProfileSectionContainer";
import AcceptedModal from "../../../Components/Modals/AcceptedModal/AcceptedModal";
import Button from "../../../Components/Button/Button";
import { useNavigate } from "react-router-dom";

const AdminProfileAccountDeactivation = () => {
  const navigate = useNavigate();
  // States
  const [displayDeleteDisclaimerModal, setDisplauDeleteDisclaimeeModal] =
    useState(false);
  const [displayDeletedModal, setDisplayDeletedModal] = useState(false);

  // Utils
  const closeDisclaimers = [
    "This disables administrator's access to the platform.",
    "Prevents them from logging in and performing any actions.",
    "Revokes all assigned roles and permissions."
  ];

  return (
    <ProfileSectionContainer
      header="Deactivate administrator"
      paragraph="Restrict access to an administrator's account."
    >
      {displayDeleteDisclaimerModal && (
        <AcceptedModal
          onClick={() => {
            setDisplauDeleteDisclaimeeModal(false);
          }}
          body={
            <DeleteDisclaimerModalBody
              onClick={() => {
                setDisplauDeleteDisclaimeeModal(false);
              }}
              onClick2={() => {
                setDisplauDeleteDisclaimeeModal(false);
                setDisplayDeletedModal(true);
              }}
            />
          }
        />
      )}
      {displayDeletedModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayDeletedModal(false);
          }}
          body={
            <DeleteSuccessfulModalBody
              onClick={() => {
                navigate('/users/admins')
                setDisplayDeletedModal(false);
              }}
            />
          }
        />
      )}
      <div className={classes.container}>
        <h4>Warning</h4>
        <ul>
          {closeDisclaimers.map((data, i) => {
            return <li key={i}>{data}</li>;
          })}
        </ul>

        <Button
          type="delete"
          onClick={() => {
            setDisplauDeleteDisclaimeeModal(true);
          }}
        >
          Deactivate account
        </Button>
      </div>
    </ProfileSectionContainer>
  );
};

export default AdminProfileAccountDeactivation;
