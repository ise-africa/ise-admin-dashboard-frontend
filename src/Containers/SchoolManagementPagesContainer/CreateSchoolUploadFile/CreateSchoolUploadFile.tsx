import SchoolCreatingLayout from "../../../Components/SchoolCreatingLayout/SchoolCreatingLayout";
import classes from "../CreateSchoolAddDetails/CreateSchoolAddDetails.module.css";
import Button from "../../../Components/Button/Button";
import { useSearchParams } from "react-router-dom";
import Input from "../../../Components/Input/Input";
import DragAndDropInput from "../../../Components/DragAndDropInput/DragAndDropInput";

const CreateSchoolUploadFile = () => {
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();
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
          <Input
            label="List the importance of joining this school"
            placeholder="E. g Master the art of talent acquisition for business success."
          />

          <Button type="null">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 1V17M17 9L1 9" stroke="#664EFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span>Add more</span>
          </Button>
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
