import React, { useState } from "react";
import { validateFile, FileValidationResult } from "../../Utilities/fileSizeValidation";
import classes from "./DragAndDropInput.module.css";

type DragAndDropInputProps = {
  errorMessage?: string;
  acceptedFileTypes?: string;
  labelText?: string;
  performFIleValidation?: boolean;
  onFileValid?: (file: File) => void;
};

const DragAndDropInput = ({
  errorMessage,
  acceptedFileTypes,
  labelText = "Attach file",
  performFIleValidation = false,
  onFileValid,
}: DragAndDropInputProps) => {
  const [invalid, setInvalid] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length === 0) {
      setInvalid(true);
    } else {
      setInvalid(false);
      const file = files[0];
      if (performFIleValidation) {
        const validation: FileValidationResult = await validateFile(file);
        if (validation.isValid && onFileValid) {
          onFileValid(file);
        } else {
          setInvalid(true);
        }
      } else {
        if (onFileValid) {
          onFileValid(file);
        }
      }
    }
  };

  return (
    <div className={classes.container}>
      <label>{labelText}</label>
      <div
        className={`${classes.dropContainer} ${invalid ? classes.invalid : ""
          }`}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <span>Drag and drop file to attach it</span>
        <span>or</span>
        <label htmlFor="browseFile">
          <span>Browse for a file...</span>
          <input
            type="file"
            name="browse-file"
            id="browseFile"
            accept={acceptedFileTypes}
          />
        </label>
      </div>
      {invalid && (
        <span className={classes.errorMessage}>
          {errorMessage || "Invalid file"}
        </span>
      )}
    </div>
  );
};

export default DragAndDropInput;
