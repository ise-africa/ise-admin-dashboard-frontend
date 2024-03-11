import classes from "./StudentProfileAccountDeactivation.module.css";
import success from "../../../Assets/Gifs/success.gif";
import Button from "../../../Components/Button/Button";

type DeleteDisclaimerModalBodyProps = {
  onClick: () => void;
  paragraph: string
};

const DeleteSuccessfulModalBody = ({
  onClick,
  paragraph,
}: DeleteDisclaimerModalBodyProps) => {
  return (
    <div className={classes.modalContainer}>
      <div className={classes.modalInnerContainer2}>
        <img src={success} alt="Success" />
        <h4>Account status updated!</h4>
        <p>{paragraph}</p>
        <Button onClick={onClick}>Go to dashboard</Button>
      </div>
    </div>
  );
};

export default DeleteSuccessfulModalBody;
