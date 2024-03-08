import classes from "./StudentProfileAccountDeactivation.module.css";
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
        <h4>Account status updated!</h4>
        <p>The student's account status has been successfully updated. The student's access has been disabled</p>
        <Button onClick={onClick}>Go to dashboard</Button>
      </div>
    </div>
  );
};

export default DeleteSuccessfulModalBody;
