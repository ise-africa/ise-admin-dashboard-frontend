import React from "react";
import classes from "./PreviewModals.module.css";
import Button from "../../../../Components/Button/Button";

type CancelSchoolCreationModalProps = {
  onClick: () => void;
  onClick2: () => void;
  imgSrc: string;
  header: string;
  button1?: string;
  button2?: string;
  paragraph: string;
  isLoading?: boolean;
};

const CancelSchoolCreationModal = ({
  onClick,
  onClick2,
  imgSrc,
  header,
  paragraph,
  button1,
  button2,
  isLoading,
}: CancelSchoolCreationModalProps) => {
  return (
    <div className={classes.container}>
      <img src={imgSrc} alt="Cancel School" />
      <h4>{header}</h4>
      <p>{paragraph}</p>
      <div className={classes.buttonContainer}>
        <Button type="invalid" onClick={onClick}>
          {button1 || "No, don't cancel"}
        </Button>
        <Button type="delete" onClick={onClick2} loading={isLoading}>
          {button2 || "Yes, discard"}
        </Button>
      </div>
    </div>
  );
};

export default CancelSchoolCreationModal;
