import classes from "./ProfileAccountDeactivation.module.css";
import success from "../../../Assets/Gifs/success.gif";
import Button from "../../../Components/Button/Button";
import { useContext } from "react";
import { AppContext } from "../../../Context/AppContext";
import { useParams } from "react-router-dom";

type DeleteDisclaimerModalBodyProps = {
  onClick: () => void;
};

const DeleteSuccessfulModalBody = ({
  onClick,
}: DeleteDisclaimerModalBodyProps) => {
  // Context
  const { adminData } = useContext(AppContext)

  // Router
  const { AdminId } = useParams()

  const activeAdmin = adminData.find((data) => {
    return data.adminFullName.replace(' ', '-').toLowerCase() === AdminId
  })
  return (
    <div className={classes.modalContainer}>
      <div className={classes.modalInnerContainer2}>
        <img src={success} alt="Success" />
        <h4>{activeAdmin?.adminFullName} account deactivated successfully</h4>
        <p>{activeAdmin?.adminFullName} will be logged out and their administrator access revoked. They will receive an email with more details.</p>
        <Button onClick={onClick}>Done</Button>
      </div>
    </div>
  );
};

export default DeleteSuccessfulModalBody;
