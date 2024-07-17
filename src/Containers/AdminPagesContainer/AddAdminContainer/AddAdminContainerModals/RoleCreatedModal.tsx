import Button from "../../../../Components/Button/Button";
import success from "../../../../Assets/Gifs/success.gif";
import classes from "../../ProfileAdministrationRole/ModifyRoleModals/ModifyRoleModals.module.css";

type RoleCreatedModalProps = {
  onClick: () => void;
  role: any;
};

const RoleCreatedModal = ({ onClick, role }: RoleCreatedModalProps) => {
  return (
    <div className={`${classes.container} ${classes.updatedRole}`}>
      <div>
        <img src={success} alt="Admin Added" />
      </div>
      <h3>Role create</h3>
      <p>
        You've successfully created the <strong>{role?.title}</strong> role with
        specified permissions and descriptions. The administrator has been
        notified to join the dashboard.{" "}
      </p>
      <div className={classes.buttonContainer}>
        <Button onClick={onClick}>Done</Button>
      </div>
    </div>
  );
};

export default RoleCreatedModal;
