import { useState } from "react";
import DeleteDisclaimerModalBody from "./DeleteDisclaimerModalBody";
import DeleteSuccessfulModalBody from "./DeleteSuccessfulModalBody";
import classes from "./StudentProfileAccountDeactivation.module.css";
import ProfileSectionContainer from "../../../Components/ProfileSectionContainer/ProfileSectionContainer";
import AcceptedModal from "../../../Components/Modals/AcceptedModal/AcceptedModal";
import Button from "../../../Components/Button/Button";
import { useNavigate } from "react-router-dom";
import EnableAccountModalBody from "./EnableAccountModalBody";

const StudentProfileAccountDeactivation = () => {
  const navigate = useNavigate();
  // States
  const [displayDeleteDisclaimerModal, setDisplayDeleteDisclaimerModal] = useState(false);
  const [displayEnableAccountModal, setDisplayEnableAccountModal] = useState(false);
  const [displayDeletedModal, setDisplayDeletedModal] = useState(false);
  const [disableSuccess, setDisableSuccess] = useState(false);
  const [enableSuccess, setEnableSuccess] = useState(false);

  // Utils
  const closeDisclaimers = [
    "This disables student’s access to their dashboard.",
    "Prevents them from logging in and performing any actions."
  ];
  const enableDisclaimers = [
    "This enables student’s access to their dashboard.",
    "It allows them login and performing any actions."
  ];

  return (
    <>
      {/* Delete Account Modals */}
      {displayDeleteDisclaimerModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayDeleteDisclaimerModal(false);
          }}
          body={
            <DeleteDisclaimerModalBody
              onClick={() => {
                setDisplayDeleteDisclaimerModal(false);
              }}
              onClick2={() => {
                setDisplayDeleteDisclaimerModal(false);
                setDisplayDeletedModal(true);
                setDisableSuccess(true);
              }}
            />
          }
        />
      )}
      {displayDeletedModal && disableSuccess && (
        <AcceptedModal
          onClick={() => {
            setDisplayDeletedModal(false);
            setDisableSuccess(false);
          }}
          body={
            <DeleteSuccessfulModalBody
              paragraph="The student's account status has been successfully updated. The student's access has been disabled"
              onClick={() => {
                setDisplayDeletedModal(false);
                navigate('/students')
              }}
            />
          }
        />
      )}

      {/* Enable Account Modals */}
      {displayEnableAccountModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayEnableAccountModal(false);
          }}
          body={
            <EnableAccountModalBody
              onClick={() => {
                setDisplayEnableAccountModal(false);
              }}
              onClick2={() => {
                setDisplayEnableAccountModal(false);
                setDisplayDeletedModal(true);
                setEnableSuccess(true);
              }}
            />
          }
        />
      )}
      {displayDeletedModal && enableSuccess && (
        <AcceptedModal
          onClick={() => {
            setDisplayDeletedModal(false);
            setEnableSuccess(false);
          }}
          body={
            <DeleteSuccessfulModalBody
              paragraph="The student's account status has been successfully updated. The student's access has been enabled."
              onClick={() => {
                setDisplayDeletedModal(false);
                navigate('/students')
              }}
            />
          }
        />
      )}

      <ProfileSectionContainer
        header="Disable account"
        paragraph="Restrict access to a student’s account."
      >
        <div className={`${classes.container} ${classes.disable}`}>
          <h4>Warning</h4>
          <ul>
            {closeDisclaimers.map((data, i) => {
              return <li key={i}>{data}</li>;
            })}
          </ul>

          <Button
            type="delete"
            className={classes.delete}
            onClick={() => {
              setDisplayDeleteDisclaimerModal(true);
            }}
          >
            Disable account
          </Button>
        </div>

        <div className={`${classes.container} ${classes.enable}`}>
          <h4>Warning</h4>
          <ul>
            {enableDisclaimers.map((data, i) => {
              return <li key={i}>{data}</li>;
            })}
          </ul>

          <Button
            type="secondary"
            onClick={() => {
              setDisplayEnableAccountModal(true);
            }}
          >
            Enable account
          </Button>
        </div>
      </ProfileSectionContainer>
    </>
  );
};

export default StudentProfileAccountDeactivation;
