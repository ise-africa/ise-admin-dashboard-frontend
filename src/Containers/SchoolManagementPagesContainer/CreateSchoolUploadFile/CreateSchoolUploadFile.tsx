import React from "react";
import SchoolCreatingLayout from "../../../Components/SchoolCreatingLayout/SchoolCreatingLayout";
import classes from "../CreateSchoolAddDetails/CreateSchoolAddDetails.module.css";
import Button from "../../../Components/Button/Button";
import { useSearchParams } from "react-router-dom";
import Input from "../../../Components/Input/Input";
import DragAndDropInput from "../../../Components/DragAndDropInput/DragAndDropInput";
import TextArea from "../../../Components/TextArea/TextArea";

type CreateSchoolUploadFileProp = {
  title?: string;
  name?: string;
  importanceItems?: string[];
}

const CreateSchoolUploadFile = ({
  title,
  name,
  importanceItems = []
}: CreateSchoolUploadFileProp) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <SchoolCreatingLayout steps={[1, 2, 3]}>
      <section className={classes.container}>
        <h2>{title || "Create a new school"}</h2>

        <DragAndDropInput
          labelText="Upload cover image *"
          acceptedFileTypes=".svg,.png"
          performFIleValidation={true}
        />
        <ul className={classes.fileUploadInfo}>
          <li>You can upload: <strong>.svg or .png</strong> files </li>
          <li> File size: <strong>1MB</strong> with maximum width and height of 750 X 600px</li>
        </ul>

        <div>
          <Input
            isRequired
            value={name}
            label="School name"
            placeholder="E.g School of Business"
          />
          <label className={classes.schoolImportanceLabel}>List the importance of joining this school *</label>
          <TextArea
            value={importanceItems.join('\n')}
            placeholder="E.g Master the art of talent acquisition for business success."
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
            <span>Preview</span>
          </Button>
        </div>
      </section>
    </SchoolCreatingLayout>
  );
};

export default CreateSchoolUploadFile;
