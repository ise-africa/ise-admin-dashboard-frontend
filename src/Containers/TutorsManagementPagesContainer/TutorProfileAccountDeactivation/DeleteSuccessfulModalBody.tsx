import classes from "./TutorProfileAccountDeactivation.module.css";
import success from "../../../Assets/Gifs/success.gif";
import Button from "../../../Components/Button/Button";

type DeleteDisclaimerModalBodyProps = {
  onClick: () => void;
};

const DeleteSuccessfulModalBody = ({
  onClick,
}: DeleteDisclaimerModalBodyProps) => {
  return (
    <div className={classes.modalContainer}>
      <div className={classes.modalInnerContainer2}>
        <img src={success} alt="Success" />
        <h4>Account deactivated!</h4>
        <p>The tutor's account has been successfully deactivated. The tutor will no longer have access to the platform.</p>
        <Button onClick={onClick}>Go to dashboard</Button>
      </div>
    </div>
  );
};

export default DeleteSuccessfulModalBody;
