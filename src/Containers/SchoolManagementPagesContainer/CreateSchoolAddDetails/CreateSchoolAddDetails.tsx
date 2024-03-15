import SchoolCreatingLayout from "../../../Components/SchoolCreatingLayout/SchoolCreatingLayout";
import classes from "./CreateSchoolAddDetails.module.css";
import Button from "../../../Components/Button/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import TextArea from "../../../Components/TextArea/TextArea";
import Input from "../../../Components/Input/Input";

const CreateSchoolAddDetails = () => {
  // Navigate
  const navigate = useNavigate();

  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <SchoolCreatingLayout notShowHeader>
      <section className={classes.container}>
        <p className={classes.header}>Create a new school</p>

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
            <span className={classes.buttonInner}>
              <span>Cancel</span>
            </span>
          </Button>
          <Button
            onClick={() => {
              setSearchParams({ step: "2" });
            }}
          >
            <span className={classes.buttonInner}>
              <span>Next</span>
            </span>
          </Button>
        </div>
      </section>
    </SchoolCreatingLayout>
  );
};

export default CreateSchoolAddDetails;
