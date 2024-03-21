import SchoolCreatingLayout from "../../../Components/SchoolCreatingLayout/SchoolCreatingLayout";
import classes from "./CreateSchoolAddDetails.module.css";
import Button from "../../../Components/Button/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import TextArea from "../../../Components/TextArea/TextArea";
import Input from "../../../Components/Input/Input";

type CreateSchoolAddDetailsProps = {
  title?: string;
  name?: string;
  motto?: string;
  description?: string;
}

const CreateSchoolAddDetails = ({
  title,
  name,
  motto,
  description,
}: CreateSchoolAddDetailsProps) => {
  // Navigate
  const navigate = useNavigate();

  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <SchoolCreatingLayout steps={[1, 2, 3]}>
      <section className={classes.container}>
        <h2>{title || "Create a new school"}</h2>

        <div>
          <Input
            value={name}
            label="Name of school"
            placeholder="E.g iṣẹ́ School of Business"
          />
          <Input
            value={motto}
            label="School motto"
            placeholder="E.g Help businesses grow"
          />
          <TextArea
            value={description}
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

export default CreateSchoolAddDetails;
