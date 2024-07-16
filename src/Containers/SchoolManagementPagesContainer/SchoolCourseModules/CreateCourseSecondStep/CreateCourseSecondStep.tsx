import React, { useContext } from "react";
import SchoolCreatingLayout from "../../../../Components/SchoolCreatingLayout/SchoolCreatingLayout";
import classes from "../CreateCourseFirstStep/CreateCourseFirstStep.module.css";
import Button from "../../../../Components/Button/Button";
import { useParams, useSearchParams } from "react-router-dom";
import TextArea from "../../../../Components/TextArea/TextArea";
import DragAndDropInput from "../../../../Components/DragAndDropInput/DragAndDropInput";
import {
  createCourseType,
  SchoolContext,
} from "../../../../Context/SchoolContext";
import { inputChangeHandler } from "../../../../HelperFunctions/inputChangeHandler";

type CreateCourseSecondStepProps = {
  title?: string;
  description?: string;
};

const CreateCourseSecondStep = ({
  title,
  description,
}: CreateCourseSecondStepProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const { SchoolId } = useParams();
  const courseId = searchParams.get("courseId");

  // Context
  const {
    setCreateCourse,
    createCourse,
    createCourseRequest,
    createSchoolRequest,
  } = useContext(SchoolContext);

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result as string;
        setCreateCourse((prevState: any) => {
          return {
            ...prevState,
            image: {
              frontendFile: reader.result,
              file: (event?.target?.files as FileList)[0],
            },
          };
        });
      };
      reader.readAsDataURL(file);
    }
  };

  console.log(createCourse);

  return (
    <SchoolCreatingLayout steps={[1, 2, 3, 4]}>
      <section className={classes.container}>
        <h2>{title || "Create a new course"}</h2>

        <DragAndDropInput
          labelText="Upload course image *"
          acceptedFileTypes=".svg,.png"
          performFIleValidation={true}
          onChange={handleFileInputChange}
        />
        <ul className={classes.fileUploadInfo}>
          <li>
            You can upload: <strong>.svg or .png</strong> files{" "}
          </li>
          <li>
            {" "}
            File size: <strong>1MB</strong> with maximum width and height of 750
            X 600px
          </li>
        </ul>

        <div>
          <TextArea
            isRequired
            label="Course description"
            placeholder="Start typing..."
            name="description"
            onChange={(e) => inputChangeHandler(e, setCreateCourse)}
            value={createCourse?.description}
          />
        </div>

        <div className={classes.buttonSection}>
          <Button
            type="secondary"
            onClick={() => {
              setSearchParams({ step: "1" });
            }}
            disabled={!createCourse?.description || !createCourse?.image?.file}
          >
            <span>Back</span>
          </Button>
          <Button
            onClick={() => {
              createCourseRequest(SchoolId as string, 2, courseId as string);
            }}
            loading={createSchoolRequest?.isLoading}
          >
            <span>Next</span>
          </Button>
        </div>
      </section>
    </SchoolCreatingLayout>
  );
};

export default CreateCourseSecondStep;
