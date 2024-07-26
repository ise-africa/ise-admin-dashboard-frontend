import classes from "./SendInviteModal.module.css";
import sendInvite from "../../../../Assets/Images/resendAdminInvite.svg";
import Button from "../../../../Components/Button/Button";
import { useContext } from "react";
import { UserContext } from "../../../../Context/UserContext";

type SendInviteModalProps = {
  onClick: () => void;
  activeAdmin: any;
};

const SendInviteModal = ({
  onClick,

  activeAdmin,
}: SendInviteModalProps) => {
  // COntext
  const { resendAdminInvite, isCreatingStudent } = useContext(UserContext);
  return (
    <div className={classes.modalContainer}>
      <img
        className={classes.modalImageHide}
        src={sendInvite}
        alt="Resend Invite"
      />
      <h4>Resend administrator invite</h4>
      <p>
        You are re-inviting <strong>{activeAdmin?.first_name}</strong> (
        <strong>{activeAdmin?.email}</strong>) to join the Administrator
        dashboard. Ensure the email address is correct.
      </p>
      <div className={classes.buttonContainer}>
        <Button type="secondary" onClick={onClick}>
          Cancel
        </Button>
        <Button
          onClick={() => {
            resendAdminInvite(activeAdmin?.email);
          }}
          loading={isCreatingStudent?.isLoading}
        >
          Resend invite
        </Button>
      </div>
    </div>
  );
};

export default SendInviteModal;
