import Button from "../../../Components/Button/Button";
import TextArea from "../../../Components/TextArea/TextArea";
import classes from "../ProfileAccountDeactivation/ProfileAccountDeactivation.module.css";

type ClosingAdminAccountModalProps = {
    onClick: () => void;
};

const ClosingAdminAccountModal = ({
    onClick,
}: ClosingAdminAccountModalProps) => {
    return (
        <section className={classes.modalContainer}>
            <div className={classes.modalInnerContainer}>
                <h4>Closing administrator account?</h4>
                <p>Closing your administrator account will restrict your access to administrative features and data. We’ll keep your profile details saved for future collaborations.</p>
                <TextArea
                    label="Reason for request"
                    placeholder="Tell us why you want to close this account"
                />

                <div className={classes.modalButtonSection}>
                    <Button type="invalid" onClick={onClick}>
                        Cancel
                    </Button>
                    <Button type="delete" onClick={onClick}>
                        Close account
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ClosingAdminAccountModal;
