import SchoolCreatingLayout from "../../../Components/SchoolCreatingLayout/SchoolCreatingLayout";
import classes from "../CreateSchoolAddDetails/CreateSchoolAddDetails.module.css";
import Button from "../../../Components/Button/Button";
import { useSearchParams } from "react-router-dom";

const CreateSchoolUploadFile = () => {
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <SchoolCreatingLayout notShowHeader>
      <section className={classes.container}>
        <h2>Technical readiness and enthusiasm</h2>



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
