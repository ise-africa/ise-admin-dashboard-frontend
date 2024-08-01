import Button from "../../../../Components/Button/Button";
import success from "../../../../Assets/Gifs/success.gif";
import classes from "./ModifyRoleModals.module.css";
import { capitalize } from "../../../../HelperFunctions/capitalize";

type ModifyRoleThirdModalProps = {
  onClick: () => void;
  selectedRole: string;
  data: any;
};

const ModifyRoleThirdModal = ({
  onClick,
  selectedRole,
  data,
}: ModifyRoleThirdModalProps) => {
  return (
    <div className={`${classes.container} ${classes.updatedRole}`}>
      <div>
        <img src={success} alt="Email sent" />
      </div>
      <h3>Role updated successfully</h3>
      <p>
        {data?.first_name || "User"}'s role has been successfully changed to{" "}
        {capitalize(selectedRole)}.
      </p>
      <div className={classes.buttonContainer}>
        <Button onClick={onClick}>Close</Button>
      </div>
    </div>
  );
};

export default ModifyRoleThirdModal;
