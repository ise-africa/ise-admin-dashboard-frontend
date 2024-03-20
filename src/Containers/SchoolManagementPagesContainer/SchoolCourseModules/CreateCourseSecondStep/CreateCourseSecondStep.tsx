import React from "react";
import SchoolCreatingLayout from "../../../../Components/SchoolCreatingLayout/SchoolCreatingLayout";
import classes from "../CreateCourseFirstStep/CreateCourseFirstStep.module.css";
import Button from "../../../../Components/Button/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import Input from "../../../../Components/Input/Input";
import TextArea from "../../../../Components/TextArea/TextArea";
import DragAndDropInput from "../../../../Components/DragAndDropInput/DragAndDropInput";

const CreateCourseSecondStep = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  // Navigate
  const navigate = useNavigate();

  return (
    <SchoolCreatingLayout steps={[1, 2, 3, 4]}>
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
            label="Name of school"
            placeholder="E.g iṣẹ́ School of Business"
          />
          <Input
            label="School motto"
            placeholder="E.g Help businesses grow"
          />
          <TextArea
            label="School description"
            placeholder="Start typing..."
          />
        </div>

        <div className={classes.buttonSection}>
          <Button
            type="secondary"
            onClick={() => {
              navigate("/schools");
            }}
          >
            <span>Cancel</span>
          </Button>
          <Button
            onClick={() => {
              setSearchParams({ step: "2" });
            }}
          >
            <span>Next</span>
          </Button>
        </div>
      </section>
    </SchoolCreatingLayout>

  );
};

export default CreateCourseSecondStep;
