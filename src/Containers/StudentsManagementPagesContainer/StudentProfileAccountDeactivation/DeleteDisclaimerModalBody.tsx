import Button from "../../../Components/Button/Button";
import TextArea from "../../../Components/TextArea/TextArea";
import classes from "./StudentProfileAccountDeactivation.module.css";

type DeleteDisclaimerModalBodyProps = {
  onClick: () => void;
  onClick2: () => void;
};

const DeleteDisclaimerModalBody = ({
  onClick,
  onClick2,
}: DeleteDisclaimerModalBodyProps) => {

  return (
    <section className={classes.modalContainer}>
      <div className={classes.modalInnerContainer}>
        <h4>Disable student account</h4>
        <p>Please provide reasons for requesting to disable this account.</p>
        <TextArea
          isRequired
          label="Feedback"
          placeholder="Enter message here"
        />

        <div className={classes.modalButtonSection}>
          <Button type="invalid" onClick={onClick}>
            Cancel
          </Button>
          <Button type="delete" onClick={onClick2}>
            Disable account
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DeleteDisclaimerModalBody;
