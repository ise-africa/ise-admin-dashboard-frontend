import classes from "./ProfileAccountDeactivation.module.css";
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
        <h4>[User administrator] account deactivated successfully</h4>
        <p>[User administrator] will be logged out and their administrator access revoked. They will receive an email with more details.</p>
        <Button onClick={onClick}>Done</Button>
      </div>
    </div>
  );
};

export default DeleteSuccessfulModalBody;
