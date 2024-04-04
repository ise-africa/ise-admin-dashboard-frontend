import Button from "../../../../Components/Button/Button";
import classes from "./ModifyRoleModals.module.css"

type ModifyRoleSecondModalProps = {
    onClick: () => void;
    onClick2: () => void;
};

const ModifyRoleSecondModal = ({
    onClick,
    onClick2,
}: ModifyRoleSecondModalProps) => {
    return (
        <div className={classes.container}>
            <h3>Modify Role</h3>
            <p>You're about to change [username]'s role from "User administrator" to "Support administrator." This will adjust their permissions within the system. Are you sure you want to proceed?</p>
            <div className={classes.role}>
                <p>Your Current Role:</p>
                <button>Super admin</button>
            </div>
            <div className={`${classes.role} ${classes.newRole}`}>
                <p>New role assigned:</p>
                <button>Content Administrator</button>
            </div>
            <div className={classes.buttonContainer}>
                <Button type="secondary" onClick={onClick}>Cancel</Button>
                <Button onClick={onClick2}>Confirm change</Button>
            </div>
        </div>
    )
}

export default ModifyRoleSecondModal