import { useContext } from "react";
import { useParams } from "react-router-dom";
import Button from "../../../../Components/Button/Button";
import { UserContext } from "../../../../Context/UserContext";
import { capitalize } from "../../../../HelperFunctions/capitalize";
import classes from "./ModifyRoleModals.module.css";

type ModifyRoleSecondModalProps = {
  onClick: () => void;
  onClick2: () => void;
  selectedRole: string;
  data: any;
};

const ModifyRoleSecondModal = ({
  onClick,
  onClick2,
  selectedRole,
  data,
}: ModifyRoleSecondModalProps) => {
  // COntext
  const { changeAdminRole, isCreatingStudent } = useContext(UserContext);

  // Router
  const { AdminId } = useParams();
  return (
    <div className={classes.container}>
      <h3>Modify Role</h3>
      <p>
        You're about to change {data?.first_name || "this user"}'s role from "
        {data?.role || "No admin role"}" to "{selectedRole}." This will adjust
        their permissions within the system. Are you sure you want to proceed?
      </p>
      <div className={classes.role}>
        <p>Your Current Role:</p>
        <button>Super admin</button>
      </div>
      <div className={`${classes.role} ${classes.newRole}`}>
        <p>New role assigned:</p>
        <button>{capitalize(selectedRole)}</button>
      </div>
      <div className={classes.buttonContainer}>
        <Button type="secondary" onClick={onClick}>
          Cancel
        </Button>
        <Button
          onClick={() => {
            changeAdminRole(AdminId as string, selectedRole);
          }}
          loading={isCreatingStudent?.isLoading}
        >
          Confirm change
        </Button>
      </div>
    </div>
  );
};

export default ModifyRoleSecondModal;
