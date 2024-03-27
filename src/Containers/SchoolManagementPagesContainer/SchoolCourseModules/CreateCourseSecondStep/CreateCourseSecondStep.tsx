import React from "react";
import SchoolCreatingLayout from "../../../../Components/SchoolCreatingLayout/SchoolCreatingLayout";
import classes from "../CreateCourseFirstStep/CreateCourseFirstStep.module.css";
import Button from "../../../../Components/Button/Button";
import { useSearchParams } from "react-router-dom";
import TextArea from "../../../../Components/TextArea/TextArea";
import DragAndDropInput from "../../../../Components/DragAndDropInput/DragAndDropInput";

type CreateCourseSecondStepProps = {
  title?: string;
  description?: string;
}

const CreateCourseSecondStep = ({
  title,
  description,
}: CreateCourseSecondStepProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <SchoolCreatingLayout steps={[1, 2, 3, 4]}>
      <section className={classes.container}>
        <h2>{title || "Create a new course"}</h2>

        <DragAndDropInput
          labelText="Upload course image *"
          acceptedFileTypes=".svg,.png"
          performFIleValidation={true}
        />
        <ul className={classes.fileUploadInfo}>
          <li>You can upload: <strong>.svg or .png</strong> files </li>
          <li> File size: <strong>1MB</strong> with maximum width and height of 750 X 600px</li>
        </ul>

        <div>
          <TextArea
            value={description}
            label="Course description *"
            placeholder="Start typing..."
          />
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
            <span>Next</span>
          </Button>
        </div>
      </section>
    </SchoolCreatingLayout>

  );
};

export default CreateCourseSecondStep;
