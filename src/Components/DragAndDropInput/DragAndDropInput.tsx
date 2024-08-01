import React, { ChangeEvent, useState } from "react";
import {
  validateFile,
  FileValidationResult,
} from "../../Utilities/fileSizeValidation";
import classes from "./DragAndDropInput.module.css";

type DragAndDropInputProps = {
  errorMessage?: string;
  acceptedFileTypes?: string;
  labelText?: string;
  performFIleValidation?: boolean;
  onFileValid?: (file: File) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: File | null;
};

const DragAndDropInput = ({
  errorMessage,
  acceptedFileTypes,
  labelText = "Attach file",
  performFIleValidation = false,
  onFileValid,
  onChange,
  value,
}: DragAndDropInputProps) => {
  const [invalid, setInvalid] = useState(false);
  const [file, setFile] = useState<File | null>(value as File);

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
        className={`${classes.dropContainer} ${invalid ? classes.invalid : ""}`}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {!file ? (
          <>
            <span>Drag and drop file to attach it</span>
            <span>or</span>
            <label htmlFor="browseFile">
              <span>Browse for a file...</span>
              <input
                type="file"
                name="browse-file"
                id="browseFile"
                accept={acceptedFileTypes}
                onChange={(e) => {
                  setFile((e.target.files as FileList)[0] as File);
                  if (onChange) {
                    onChange(e);
                  }
                }}
              />
            </label>
          </>
        ) : (
          <>
            <span>{file?.name}</span>
            <span>or</span>

            <label htmlFor="browseFile">
              <span>Change this file...</span>
              <input
                type="file"
                name="browse-file"
                id="browseFile"
                accept={acceptedFileTypes}
                onChange={(e) => {
                  setFile((e.target.files as FileList)[0] as File);
                  if (onChange) {
                    onChange(e);
                  }
                }}
              />
            </label>
          </>
        )}
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
