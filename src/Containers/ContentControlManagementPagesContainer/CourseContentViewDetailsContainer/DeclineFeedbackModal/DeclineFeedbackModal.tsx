import Button from "../../../../Components/Button/Button";
import DragAndDropInput from "../../../../Components/DragAndDropInput/DragAndDropInput";
import TextArea from "../../../../Components/TextArea/TextArea";
import classes from "./DeclineFeedbackModal.module.css";

type DeclineFeedbackModalProps = {
    onClick: () => void;
    onClick2: () => void;
};

const DeclineFeedbackModal = ({ onClick, onClick2 }: DeclineFeedbackModalProps) => {

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <h4>Declined submission</h4>
                <div>
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
            </div>

            <div className={classes.note}>
                <p>Provide reasons why the content was declined. Give tutors feedback to improve their work before resubmitting.</p>
            </div>

            <div className={classes.textareaSection}>
                <TextArea
                    label="Leave  feedback * "
                    placeholder="E.g Content was too bulky consider breaking into bitsize"
                />
                <DragAndDropInput />
            </div>

            <div className={classes.footer}>
                <Button onClick={onClick} type="secondary">
                    <span>Cancel</span>
                </Button>
                <Button onClick={onClick2} type="primary">
                    <span>Send Feedback</span>
                </Button>
            </div>
        </div>
    );
};

export default DeclineFeedbackModal;
