import React, { useState } from "react";
import SchoolCreatingLayout from "../../../Components/SchoolCreatingLayout/SchoolCreatingLayout";
import classes from "../CreateSchoolAddDetails/CreateSchoolAddDetails.module.css";
import Button from "../../../Components/Button/Button";
import { useSearchParams } from "react-router-dom";
import Input from "../../../Components/Input/Input";
import DragAndDropInput from "../../../Components/DragAndDropInput/DragAndDropInput";

const CreateSchoolUploadFile = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const [additionalInputs, setAdditionalInputs] = useState(1);

  const addInput = () => {
    setAdditionalInputs(prev => prev + 1);
  };

  const removeInput = () => {
    if (additionalInputs > 1) {
      setAdditionalInputs(prev => prev - 1);
    }
  };

  return (
    <SchoolCreatingLayout notShowHeader>
      <section className={classes.container}>
        <h2>Create a new school</h2>

        <DragAndDropInput
          labelText="Upload cover image"
          acceptedFileTypes=".svg,.png"
          performFIleValidation={true}
        />
        <ul className={classes.fileUploadInfo}>
          <li>You can upload: <strong>.svg or .png</strong> files </li>
          <li> File size: <strong>1MB</strong> with maximum width and height of 750 X 600px</li>
        </ul>

        <div>
          <Input
            label="School name"
            placeholder="E.g School of Business"
          />
          <label className={classes.schoolImportanceLabel}>List the importance of joining this school</label>
          {[...Array(additionalInputs)].map((_, index) => (
            <Input
              key={index}
              placeholder="E.g Master the art of talent acquisition for business success."
            />
          ))}
          <div className={classes.flexButtonSection}>
            <Button type="null" onClick={addInput}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1V17M17 9L1 9" stroke="#664EFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Add more</span>
            </Button>
            {additionalInputs > 1 && (
              <Button type="null" onClick={removeInput}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9L17 9" stroke="#664EFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Remove</span>
              </Button>
            )}
          </div>
        </div>

        <div className={classes.buttonSection}>
          <Button
            type="secondary"
            onClick={() => {
              setSearchParams({ step: "1" });
            }}
          >
            <span>Back</span>
          </Button>
          <Button
            onClick={() => {
              setSearchParams({ step: "3" });
            }}
          >
            <span>Preview</span>
          </Button>
        </div>
      </section>
    </SchoolCreatingLayout>
  );
};

export default CreateSchoolUploadFile;
