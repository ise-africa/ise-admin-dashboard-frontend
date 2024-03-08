import { useState } from "react";
import DeleteDisclaimerModalBody from "./DeleteDisclaimerModalBody";
import DeleteSuccessfulModalBody from "./DeleteSuccessfulModalBody";
import classes from "./StudentProfileAccountDeactivation.module.css";
import ProfileSectionContainer from "../../../Components/ProfileSectionContainer/ProfileSectionContainer";
import AcceptedModal from "../../../Components/Modals/AcceptedModal/AcceptedModal";
import Button from "../../../Components/Button/Button";
import { useNavigate } from "react-router-dom";

const StudentProfileAccountDeactivation = () => {
  const navigate = useNavigate();
  // States
  const [displayDeleteDisclaimerModal, setDisplauDeleteDisclaimeeModal] =
    useState(false);
  const [displayDeletedModal, setDisplayDeletedModal] = useState(false);

  // Utils
  const closeDisclaimers = [
    "This disables student’s access to their dashboard.",
    "Prevents them from logging in and performing any actions."
  ];

  return (
    <ProfileSectionContainer
      header="Disable account"
      paragraph="Restrict access to a student’s account."
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
                setDisplayDeletedModal(false);
                navigate('/students')
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
          Disable account
        </Button>
      </div>
    </ProfileSectionContainer>
  );
};

export default StudentProfileAccountDeactivation;
