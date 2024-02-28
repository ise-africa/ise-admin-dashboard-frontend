import classes from "./SendInviteModal.module.css";
import sendInvite from "../../../../Assets/Images/resendAdminInvite.svg";
import Button from "../../../../Components/Button/Button";

type SendInviteModalProps = {
  onClick: () => void;
  onClick2: () => void;
};

const SendInviteModal = ({
  onClick,
  onClick2,
}: SendInviteModalProps) => {


  return (
    <div className={classes.modalContainer}>
      <img className={classes.modalImageHide} src={sendInvite} alt="Resend Invite" />
      <h4>Resend administrator invite</h4>
      <p>You are re-inviting <strong>Content Admin Name</strong> (<strong>Content Admin Email Address</strong>) to join the Administrator dashboard.
        Ensure the email address is correct.</p>
      <div className={classes.buttonContainer}>
        <Button type="secondary" onClick={onClick}>Cancel</Button>
        <Button onClick={onClick2}>Resend invite</Button>
      </div>
    </div>
  );
};

export default SendInviteModal;
