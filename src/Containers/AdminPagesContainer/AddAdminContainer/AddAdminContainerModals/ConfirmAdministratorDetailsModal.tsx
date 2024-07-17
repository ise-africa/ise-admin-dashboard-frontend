import Button from "../../../../Components/Button/Button";
import { requestType } from "../../../../Context/AuthUserContext";
import { createStudentDetailsType } from "../../../../Context/UserContext";
import { roles } from "../AddAdminContainer";
import classes from "./ConfirmAdministratorDetailsModal.module.css";

type ConfirmAdministratorDetailsModalProps = {
  onClick: () => void;
  onClick2: () => void;
  onClick3: () => void;
  details: createStudentDetailsType;
  state: requestType;
};

const ConfirmAdministratorDetailsModal = ({
  onClick,
  onClick2,
  onClick3,
  details,
  state,
}: ConfirmAdministratorDetailsModalProps) => {
  return (
    <div className={classes.container}>
      <h3>Confirm administrator details </h3>
      <p>
        Please ensure all information is correct before creating the user
        account.
      </p>
      <ul>
        <li>
          First Name:
          <span>
            {details?.full_name?.split(" ")[0]
              ? details?.full_name?.split(" ")[0]
              : "No first name"}
          </span>
        </li>
        <li>
          Last Name:
          <span>
            {details?.full_name?.split(" ")[1]
              ? details?.full_name?.split(" ")[1]
              : "No last name"}
          </span>
        </li>
        <li>
          Email:
          <span>{details?.email}</span>
        </li>
      </ul>
      <div className={classes.role}>
        <p>Your Current Role:</p>
        <button>Super admin</button>
      </div>
      <div className={classes.listContainer}>
        <p>This user will be assigned the following permissions:</p>
        <ol className={classes.numberList}>
          {roles
            ?.find((data) => data?.slug === details?.role)
            ?.duties.map((permission, index) => (
              <li key={index}>
                {permission.title}
                <ul className={classes.discList}>
                  {permission.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </li>
            ))}
        </ol>
      </div>
      <div className={classes.buttonContainer}>
        <Button type="null" onClick={onClick3}>
          Cancel
        </Button>
        <Button type="secondary" onClick={onClick}>
          Back to edit
        </Button>
        <Button onClick={onClick2} loading={state?.isLoading}>
          Create account
        </Button>
      </div>
    </div>
  );
};

export default ConfirmAdministratorDetailsModal;
