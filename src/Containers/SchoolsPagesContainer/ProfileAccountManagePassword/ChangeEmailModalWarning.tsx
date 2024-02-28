import Button from "../../../Components/Button/Button";
import Input from "../../../Components/Input/Input";
import classes from "./ProfileAccountManagePassword.module.css";

type ChangePasswordModalprops = {
  onClick: () => void;
  onClick2: () => void;
};

const ChangePasswordModal = ({
  onClick,
  onClick2,
}: ChangePasswordModalprops) => {
  return (
    <div className={classes.modalContainer}>

      <Input
        type="password"
        label="New Password"
        tip="Must be at least 8 characters"
        placeholder="Enter new password"
      />

      <Input
        type="password"
        label="Confirm new password"
        tip="Must match the new password"
        placeholder="Enter new password"
      />

      <div className={classes.buttonSection}>
        <Button type="secondary" onClick={onClick}>
          Cancel
        </Button>
        <Button onClick={onClick2}>Save new password</Button>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
