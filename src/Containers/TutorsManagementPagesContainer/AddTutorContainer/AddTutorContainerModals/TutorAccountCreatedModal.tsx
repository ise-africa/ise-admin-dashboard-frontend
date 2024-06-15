import Button from "../../../../Components/Button/Button";
import success from "../../../../Assets/Gifs/success.gif";
import classes from "../../TutorDataTable/Modals/SendMessageModal.module.css";

type TutorAccountCreatedModalProps = {
    onClick: () => void;
};

const TutorAccountCreatedModal = ({ onClick }: TutorAccountCreatedModalProps) => {
    return (
        <div className={classes.modalContainer}>
            <img src={success} alt="Tutor Added" />
            <h4>Tutor account created</h4>
            <p>You've successfully created a Tutor account. The tutor has been notified via email to join the platform.</p>
            <div className={classes.buttonContainer}>
                <Button onClick={onClick}>Done</Button>
            </div>
        </div>
    );
};

export default TutorAccountCreatedModal;
