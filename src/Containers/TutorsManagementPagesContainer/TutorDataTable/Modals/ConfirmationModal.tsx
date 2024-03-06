import Button from "../../../../Components/Button/Button";
import success from "../../../../Assets/Gifs/success.gif";
import classes from "./SendMessageModal.module.css"

type ConfirmationModalProps = {
  onClick: () => void;
};

const ConfirmationModal = ({ onClick }: ConfirmationModalProps) => {
  return (
    <div className={classes.modalContainer}>
      <img src={success} alt="Email sent" />
      <h4>Message sent successfully!</h4>
      <p>
        Your message has been successfully sent to the selected tutors(s).
      </p>
      <Button onClick={onClick}>Close</Button>
    </div>
  );
};

export default ConfirmationModal;
