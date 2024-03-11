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

  const handleEnableAccount = () => {
    setDisplayEnableAccountModal(true);
  };

  const handleDisableAccount = () => {
    setDisplayDeleteDisclaimerModal(true);
  };

  const handleConfirmDisableAccount = () => {
    setDisplayDeleteDisclaimerModal(false);
    setDisplayDeletedModal(true);
    setDisableSuccess(true);
  };

  const handleConfirmEnableAccount = () => {
    setDisplayEnableAccountModal(false);
    setDisplayDeletedModal(true);
    setEnableSuccess(true);
  };

  return (
    <>
      {/* Delete Disclaimer Modal */}
      {displayDeleteDisclaimerModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayDeleteDisclaimerModal(false);
          }}
          body={
            <DeleteDisclaimerModalBody
              onClick={() => setDisplayDeleteDisclaimerModal(false)}
              onClick2={handleConfirmDisableAccount}
            />
          }
        />
      )}

      {/* Enable Account Modal */}
      {displayEnableAccountModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayEnableAccountModal(false);
          }}
          body={
            <EnableAccountModalBody
              onClick={() => setDisplayEnableAccountModal(false)}
              onClick2={handleConfirmEnableAccount}
            />
          }
        />
      )}

      {/* Delete Successful Modal */}
      {displayDeletedModal && (disableSuccess || enableSuccess) && (
        <AcceptedModal
          onClick={() => {
            setDisplayDeletedModal(false);
            setDisableSuccess(false);
            setEnableSuccess(false);
          }}
          body={
            <DeleteSuccessfulModalBody
              paragraph={
                disableSuccess
                  ? "The student's account status has been successfully updated. The student's access has been disabled."
                  : "The student's account status has been successfully updated. The student's access has been enabled."
              }
              onClick={() => {
                setDisplayDeletedModal(false);
                navigate('/students')
              }}
            />
          }
        />
      )}

      <ProfileSectionContainer
        header={disableSuccess ? "Enable account" : "Disable account"}
        paragraph={disableSuccess ? "Allow access to a student’s account." : "Restrict access to a student’s account."}
      >
        <div className={`${classes.container} ${disableSuccess ? classes.enable : classes.disable}`}>
          <h4>Warning</h4>
          <ul>{disableSuccess ? enableDisclaimers.map((data, i) => <li key={i}>{data}</li>) : closeDisclaimers.map((data, i) => <li key={i}>{data}</li>)}</ul>

          <Button
            type={disableSuccess ? "secondary" : "deleteSecondary"}
            className={disableSuccess ? classes.delete : undefined}
            onClick={disableSuccess ? handleEnableAccount : handleDisableAccount}
          >
            {disableSuccess ? "Enable account" : "Disable account"}
          </Button>
        </div>
      </ProfileSectionContainer>
    </>
  );
};

export default StudentProfileAccountDeactivation;
