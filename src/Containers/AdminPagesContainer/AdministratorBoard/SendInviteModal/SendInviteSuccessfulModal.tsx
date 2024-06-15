import Button from "../../../../Components/Button/Button";
import success from "../../../../Assets/Gifs/success.gif";
import classes from "./SendInviteModal.module.css";

type SendInviteSuccessfulModalProps = {
    onClick: () => void;
};

const SendInviteSuccessfulModal = ({ onClick }: SendInviteSuccessfulModalProps) => {
    return (
        <div className={classes.modalContainer}>
            <img src={success} alt="Email sent" />
            <h4>Invite resent successfully!</h4>
            <p>Inform [Content Admin Name] to check their email (including spam folder) for the invitation link.</p>
            <Button onClick={onClick}>Done</Button>
        </div>
    );
};

export default SendInviteSuccessfulModal;
