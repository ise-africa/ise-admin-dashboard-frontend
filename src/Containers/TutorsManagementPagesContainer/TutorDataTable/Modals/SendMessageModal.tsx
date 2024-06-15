import { useContext } from "react";
import classes from "./SendMessageModal.module.css";
import { AppContext } from "../../../../Context/AppContext";
import Button from "../../../../Components/Button/Button";
import TextArea from "../../../../Components/TextArea/TextArea";
import Input from "../../../../Components/Input/Input";

type SendMessageModalProps = {
    onClick: () => void;
    onClick2: () => void;
};

const SendMessageModal = ({ onClick, onClick2 }: SendMessageModalProps) => {
    const { tutors } = useContext(AppContext);
    const activeTutor = tutors.filter((tutors) => tutors.isActive);

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <h4>Send a message </h4>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    onClick={onClick}
                >
                    <path
                        d="M12 36L36 12M12 12L36 36"
                        stroke="#2E2E2E"
                        strokeWidth="2"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            <div className={classes.recipient}>
                <h4>Recipient(s)</h4>
                <div>
                    {activeTutor.length === 0 ? (
                        <p>Please select a tutor</p>
                    ) : (
                        activeTutor.map((student, i) => (
                            <span key={i}>{student.tutorFullName}</span>
                        ))
                    )}
                </div>
            </div>

            <div className={classes.textareaSection}>
                <Input
                    label="Subject"
                    isRequired
                    placeholder="What is the subject of your message" />
                <TextArea
                    isRequired
                    label="Leave  feedback"
                    placeholder="Type your message here..."
                />
            </div>

            <div className={classes.footer}>
                <Button type="secondary" onClick={onClick}>
                    <span>Cancel</span>
                </Button>
                <Button type="primary" onClick={onClick2}>
                    <span>Send Message</span>
                </Button>
            </div>
        </div>
    );
};

export default SendMessageModal;
