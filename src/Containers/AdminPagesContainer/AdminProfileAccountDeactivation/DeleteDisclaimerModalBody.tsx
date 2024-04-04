import { useContext } from "react";
import Button from "../../../Components/Button/Button";
import TextArea from "../../../Components/TextArea/TextArea";
import classes from "./AdminProfileAccountDeactivation.module.css";
import { AppContext } from "../../../Context/AppContext";
import { useParams } from "react-router-dom";

type DeleteDisclaimerModalBodyProps = {
  onClick: () => void;
  onClick2: () => void;
};

const DeleteDisclaimerModalBody = ({
  onClick,
  onClick2,
}: DeleteDisclaimerModalBodyProps) => {

  // Context
  const { adminData } = useContext(AppContext)

  // Router
  const { AdminId } = useParams()

  const activeAdmin = adminData.find((data) => {
    return data.adminFullName.replace(' ', '-').toLowerCase() === AdminId
  })

  return (
    <section className={classes.modalContainer}>
      <div className={classes.modalInnerContainer}>
        <h4>Deactivate {activeAdmin?.adminFullName} account?</h4>
        <p>This action will disable <strong>{activeAdmin?.adminFullName}'s</strong> access to the iṣẹ́ School administrator dashboard and revoke their administrative permissions. </p>
        <TextArea
          label="Reason for deactivation"
          placeholder="Tell us why you want to deactivate this account"
        />

        <div className={classes.modalButtonSection}>
          <Button type="invalid" onClick={onClick}>
            Cancel
          </Button>
          <Button type="delete" onClick={onClick2}>
            Deactivate account
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DeleteDisclaimerModalBody;
