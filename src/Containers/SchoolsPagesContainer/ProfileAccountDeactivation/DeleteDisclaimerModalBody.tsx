import Button from "../../../Components/Button/Button";
import TextArea from "../../../Components/TextArea/TextArea";
import classes from "./ProfileAccountDeactivation.module.css";

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
        <h4>Deactivate [user admin] account?</h4>
        <p>This action will disable John Doe's access to the iṣẹ́ School administrator dashboard and revoke their administrative permissions. </p>
        <TextArea
          label="Reason for deactivation"
          placeholder="Tell us why you want to deactivate this account"
        />

        <div className={classes.modalButtonSection}>
          <Button type="invalid" onClick={onClick}>
            Cancel
          </Button>
          <Button type="delete" onClick={onClick2}>
            Deactivate account
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DeleteDisclaimerModalBody;
