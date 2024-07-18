import { Dispatch, SetStateAction } from "react";
import Button from "../../../Components/Button/Button";
import TextArea from "../../../Components/TextArea/TextArea";
import { requestType } from "../../../Context/AuthUserContext";
import { inputChangeHandler } from "../../../HelperFunctions/inputChangeHandler";
import classes from "./TutorProfileAccountDeactivation.module.css";

type DeleteDisclaimerModalBodyProps = {
  onClick: () => void;
  onClick2: () => void;
  state: requestType;
  reason: string;
  setReason: Dispatch<SetStateAction<string>>;
};

const DeleteDisclaimerModalBody = ({
  onClick,
  onClick2,
  state,
  reason,
  setReason,
}: DeleteDisclaimerModalBodyProps) => {
  return (
    <section className={classes.modalContainer}>
      <div className={classes.modalInnerContainer}>
        <h4>Deactivate account?</h4>
        <p>
          Please provide reasons for requesting to deactivate this tutor’s
          account.
        </p>
        <TextArea
          isRequired
          label="Feedback"
          placeholder="Enter message here"
          value={reason}
          onChange={(e) => inputChangeHandler(e, setReason, true)}
        />

        <div className={classes.modalButtonSection}>
          <Button type="invalid" onClick={onClick}>
            Cancel
          </Button>
          <Button type="delete" onClick={onClick2} loading={state?.isLoading}>
            Deactivate account
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DeleteDisclaimerModalBody;
