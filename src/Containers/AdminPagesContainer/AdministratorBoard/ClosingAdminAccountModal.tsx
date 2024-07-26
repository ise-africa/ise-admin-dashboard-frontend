import { useContext, useState } from "react";
import Button from "../../../Components/Button/Button";
import TextArea from "../../../Components/TextArea/TextArea";
import { UserContext } from "../../../Context/UserContext";
import { inputChangeHandler } from "../../../HelperFunctions/inputChangeHandler";
import classes from "../AdminProfileAccountDeactivation/AdminProfileAccountDeactivation.module.css";

type ClosingAdminAccountModalProps = {
  onClick: () => void;
  activeAdminId: number | string;
};

const ClosingAdminAccountModal = ({
  onClick,
  activeAdminId,
}: ClosingAdminAccountModalProps) => {
  // States
  const [reason, setReason] = useState("");

  console.log(activeAdminId, reason);

  // Context
  const { closeAdminAccount, isCreatingStudent } = useContext(UserContext);

  return (
    <section className={classes.modalContainer}>
      <div className={classes.modalInnerContainer}>
        <h4>Closing administrator account?</h4>
        <p>
          Closing your administrator account will restrict your access to
          administrative features and data. We’ll keep your profile details
          saved for future collaborations.
        </p>
        <TextArea
          label="Reason for request"
          placeholder="Tell us why you want to close this account"
          name="reason"
          value={reason}
          onChange={(e) => {
            inputChangeHandler(e, setReason, true);
          }}
        />

        <div className={classes.modalButtonSection}>
          <Button type="invalid" onClick={onClick}>
            Cancel
          </Button>
          <Button
            type="delete"
            onClick={() => {
              closeAdminAccount(String(activeAdminId), reason);
            }}
            loading={isCreatingStudent.isLoading}
          >
            Close account
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClosingAdminAccountModal;
