import Button from '../../../../Components/Button/Button';
import classes from './ConfirmStudentDetailsModal.module.css'

type ConfirmStudentDetailsModalProps = {
    onClick: () => void;
    onClick2: () => void;
};

const ConfirmStudentDetailsModal = ({ onClick, onClick2 }: ConfirmStudentDetailsModalProps) => {
    return (
        <div className={classes.container}>
            <h3>Review student information</h3>
            <p>Ensure student information is correct and complete before creating account</p>
            <ul>
                <li>
                    First Name:
                    <span>John</span>
                </li>
                <li>
                    Last Name:
                    <span>Doe</span>
                </li>
                <li>
                    Email:
                    <span> johndoe@gmail.com</span>
                </li>
            </ul>
            <div className={classes.buttonContainer}>
                <Button type="secondary" onClick={onClick}>Cancel</Button>
                <Button onClick={onClick2}>Create account</Button>
            </div>
        </div>
    )
}

export default ConfirmStudentDetailsModal
