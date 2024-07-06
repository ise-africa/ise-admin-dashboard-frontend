import SchoolCreatingLayout from "../../../Components/SchoolCreatingLayout/SchoolCreatingLayout";
import classes from "./CreateSchoolAddDetails.module.css";
import Button from "../../../Components/Button/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import TextArea from "../../../Components/TextArea/TextArea";
import Input from "../../../Components/Input/Input";
import { useContext } from "react";
import { SchoolContext } from "../../../Context/SchoolContext";
import { inputChangeHandler } from "../../../HelperFunctions/inputChangeHandler";

type CreateSchoolAddDetailsProps = {
  title?: string;
  name?: string;
  motto?: string;
  description?: string;
};

const CreateSchoolAddDetails = ({
  title,
  name,
  motto,
  description,
}: CreateSchoolAddDetailsProps) => {
  // Context
  const { createSchoolData, setCreateSchoolData } = useContext(SchoolContext);

  // Navigate
  const navigate = useNavigate();

  // eslint-disable-next-line
  const [_, setSearchParams] = useSearchParams();

  return (
    <SchoolCreatingLayout steps={[1, 2, 3]}>
      <section className={classes.container}>
        <h2>{title || "Create a new school"}</h2>

        <div>
          <Input
            isRequired
            label="Name of school"
            placeholder="E.g iṣẹ́ School of Business"
            name="name"
            onChange={(e) => inputChangeHandler(e, setCreateSchoolData)}
            value={name || createSchoolData.name}
          />
          <Input
            isRequired
            label="School motto"
            placeholder="E.g Help businesses grow"
            name="tagline"
            onChange={(e) => inputChangeHandler(e, setCreateSchoolData)}
            value={motto || createSchoolData.tagline}
          />
          <TextArea
            isRequired
            label="School description"
            placeholder="Start typing..."
            name="description"
            onChange={(e) => inputChangeHandler(e, setCreateSchoolData)}
            value={description || createSchoolData.description}
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
