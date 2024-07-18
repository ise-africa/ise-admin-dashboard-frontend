import React from "react";
import Button from "../../../Components/Button/Button";
import classes from "./StudentProfileAccountDeactivation.module.css";

type EnableAccountModalBodyProps = {
  onClick: () => void;
  onClick2: () => void;
  loading: boolean;
};

const EnableAccountModalBody = ({
  onClick,
  onClick2,
  loading,
}: EnableAccountModalBodyProps) => {
  return (
    <section className={classes.modalContainer}>
      <div className={classes.modalInnerContainer}>
        <h4>Enable student account</h4>
        <p>Are you sure you want to enable this student's account?</p>
        <div className={classes.description}>
          <p>
            Enabling this account will restore the student's access to the
            platform. All data and settings will remain intact. Proceed with
            enabling?
          </p>
        </div>
        <div className={classes.modalButtonSection}>
          <Button type="secondary" onClick={onClick}>
            Cancel
          </Button>
          <Button type="primary" onClick={onClick2} loading={loading}>
            Yes, enable
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EnableAccountModalBody;
