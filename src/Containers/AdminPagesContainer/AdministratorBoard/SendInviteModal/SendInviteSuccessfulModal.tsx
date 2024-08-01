import Button from "../../../../Components/Button/Button";
import success from "../../../../Assets/Gifs/success.gif";
import classes from "./SendInviteModal.module.css";
import { capitalize } from "../../../../HelperFunctions/capitalize";

type SendInviteSuccessfulModalProps = {
  onClick: () => void;
  activeAdmin: any;
};

const SendInviteSuccessfulModal = ({
  onClick,
  activeAdmin,
}: SendInviteSuccessfulModalProps) => {
  return (
    <div className={classes.modalContainer}>
      <img src={success} alt="Email sent" />
      <h4>Invite resent successfully!</h4>
      <p>
        Inform {capitalize(activeAdmin?.first_name)} to check their email
        (including spam folder) for the invitation link.
      </p>
      <Button onClick={onClick}>Done</Button>
    </div>
  );
};

export default SendInviteSuccessfulModal;
