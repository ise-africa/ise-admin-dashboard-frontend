import Button from "../../../Components/Button/Button";
import classes from "./TutorProfileAccountManagePassword.module.css";
import success from '../../../Assets/Gifs/success.gif'
type ChangeEmailComformedModalBodyProps = {
  onClick: () => void;
};

const ChangeEmailComformedModalBody = ({
  onClick,
}: ChangeEmailComformedModalBodyProps) => {
  return (
    <div className={classes.modalContainer}>
      <div className={classes.modalInnerContainer}>
        <img src={success} alt="Successful" />
        <h4>Password updated </h4>
        <p>The tutor password has been successfully changed.</p>
        <Button onClick={onClick}>Close</Button>
      </div>
    </div>
  );
};

export default ChangeEmailComformedModalBody;
