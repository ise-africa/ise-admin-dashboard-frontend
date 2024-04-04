import Button from "../../../../Components/Button/Button";
import success from "../../../../Assets/Gifs/success.gif";
import classes from "../../StudentDataTable/Modals/SendMessageModal.module.css";

type StudentAccountCreatedModalProps = {
    onClick: () => void;
};

const StudentAccountCreatedModal = ({ onClick }: StudentAccountCreatedModalProps) => {
    return (
        <div className={classes.modalContainer}>
            <img src={success} alt="Tutor Added" />
            <h4>Student account created</h4>
            <p>You've successfully created a new student account. The student has been notified via email to join the platform.</p>
            <div className={classes.buttonContainer}>
                <Button onClick={onClick}>Done</Button>
            </div>
        </div>
    );
};

export default StudentAccountCreatedModal;
