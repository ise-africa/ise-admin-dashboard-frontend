import { useContext } from "react";
import Button from "../../../../Components/Button/Button";
import { UserContext } from "../../../../Context/UserContext";
import classes from "./ConfirmStudentDetailsModal.module.css";

type ConfirmStudentDetailsModalProps = {
  onClick: () => void;
  onClick2: () => void;
};

const ConfirmStudentDetailsModal = ({
  onClick,
}: ConfirmStudentDetailsModalProps) => {
  // COntext
  const { createStudentDetails, isCreatingStudent, createStudent } =
    useContext(UserContext);
  return (
    <div className={classes.container}>
      <h3>Review student information</h3>
      <p>
        Ensure student information is correct and complete before creating
        account
      </p>
      <ul>
        <li>
          First Name:
          <span>{createStudentDetails?.full_name?.split(" ")[0]}</span>
        </li>
        <li>
          Last Name:
          <span>
            {createStudentDetails?.full_name?.split(" ")[1]
              ? createStudentDetails?.full_name?.split(" ")[1]
              : "No last name"}
          </span>
        </li>
        <li>
          Email:
          <span>{createStudentDetails.email}</span>
        </li>
      </ul>
      <div className={classes.buttonContainer}>
        <Button type="secondary" onClick={onClick}>
          Cancel
        </Button>
        <Button loading={isCreatingStudent.isLoading} onClick={createStudent}>
          Create account
        </Button>
      </div>
    </div>
  );
};

export default ConfirmStudentDetailsModal;
