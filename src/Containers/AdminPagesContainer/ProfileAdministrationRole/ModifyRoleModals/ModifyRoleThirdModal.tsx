import Button from "../../../../Components/Button/Button";
import success from "../../../../Assets/Gifs/success.gif";
import classes from "./ModifyRoleModals.module.css";

type ModifyRoleThirdModalProps = {
    onClick: () => void;
};

const ModifyRoleThirdModal = ({ onClick }: ModifyRoleThirdModalProps) => {
    return (
        <div className={`${classes.container} ${classes.updatedRole}`}>
            <div>
                <img src={success} alt="Email sent" />
            </div>
            <h3>Role updated successfully</h3>
            <p>[username]'s role has been successfully changed to Support administrator.</p>
            <div className={classes.buttonContainer}>
                <Button onClick={onClick}>Close</Button>
            </div>
        </div>
    );
};

export default ModifyRoleThirdModal;
