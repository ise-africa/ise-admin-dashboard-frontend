import { useState } from "react";
import Button from "../../../Components/Button/Button";
import TextArea from "../../../Components/TextArea/TextArea";
import { inputChangeHandler } from "../../../HelperFunctions/inputChangeHandler";
import classes from "./StudentProfileAccountDeactivation.module.css";

type DeleteDisclaimerModalBodyProps = {
  onClick: () => void;
  onClick2: () => void;
  loading: boolean;
};

const DeleteDisclaimerModalBody = ({
  onClick,
  onClick2,
  loading,
}: DeleteDisclaimerModalBodyProps) => {
  // States
  const [reason, setReason] = useState("");
  return (
    <section className={classes.modalContainer}>
      <div className={classes.modalInnerContainer}>
        <h4>Disable student account</h4>
        <p>Please provide reasons for requesting to disable this account.</p>
        <TextArea
          isRequired
          label="Feedback"
          placeholder="Enter message here"
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
            onClick={onClick2}
            loading={loading}
            disabled={!reason}
          >
            Disable account
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DeleteDisclaimerModalBody;
