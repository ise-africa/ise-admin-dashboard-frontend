import { useState } from "react";
import Button from "../../../Components/Button/Button";
import Input from "../../../Components/Input/Input";
import { inputChangeHandler } from "../../../HelperFunctions/inputChangeHandler";
import classes from "./TutorProfileAccountManagePassword.module.css";

type ChangePasswordModalprops = {
  onClick: () => void;
  onClick2: () => void;
};

const ChangePasswordModal = ({
  onClick,
  onClick2,
}: ChangePasswordModalprops) => {
  // States
  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });
  return (
    <div className={classes.modalContainer}>
      <Input
        type="password"
        label="New Password"
        tip="Must be at least 8 characters"
        placeholder="Enter new password"
        name="newPassword"
        value={passwords.newPassword}
        onChange={(e) => inputChangeHandler(e, setPasswords)}
      />

      <Input
        type="password"
        label="Confirm new password"
        tip="Must match the new password"
        placeholder="Enter new password"
        name="confirmNewPassword"
        value={passwords.confirmNewPassword}
        onChange={(e) => inputChangeHandler(e, setPasswords)}
      />

      <div className={classes.buttonSection}>
        <Button type="secondary" onClick={onClick}>
          Cancel
        </Button>
        <Button
          onClick={onClick2}
          disabled={
            !passwords?.confirmNewPassword ||
            !passwords?.newPassword ||
            passwords?.newPassword !== passwords?.confirmNewPassword
          }
        >
          Save new password
        </Button>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
