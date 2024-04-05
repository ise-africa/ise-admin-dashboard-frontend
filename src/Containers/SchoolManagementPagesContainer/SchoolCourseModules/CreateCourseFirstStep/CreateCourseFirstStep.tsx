import SchoolCreatingLayout from "../../../../Components/SchoolCreatingLayout/SchoolCreatingLayout";
import classes from "./CreateCourseFirstStep.module.css";
import Button from "../../../../Components/Button/Button";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Input from "../../../../Components/Input/Input";
import DropdownWithSearch from "../../../../Components/DropdownWithSearch/DropdownWithSearch";
import TextArea from "../../../../Components/TextArea/TextArea";

type CreateCourseFirstStepProps = {
  title?: string;
  name?: string;
  level?: string;
  objectives?: string[];
}

const CreateCourseFirstStep = ({
  title,
  name,
  level,
  objectives = []
}: CreateCourseFirstStepProps) => {

  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();

  // Router
  const navigate = useNavigate();
  const { SchoolId } = useParams();

  return (
    <SchoolCreatingLayout steps={[1, 2, 3, 4]}>
      <section className={classes.container}>
        <h2>{title || "Create a new course"}</h2>

        <div>
          <Input
            isRequired
            value={name}
            label="Name of course"
            placeholder="E.g Talent Acquisition Course"
          />
          <DropdownWithSearch
            title="Select option"
            label="Course difficulty level *"
            selected={level}
            options={[
              "Beginner course",
              " Intermediate course",
              "Advanced course"
            ]}
          />
          <label className={classes.schoolImportanceLabel}>List the objectives of this course *</label>
          <TextArea
            value={objectives.join('\n')}
            placeholder="E. g Develop a deep understanding of Talent Acquisition strategies and practices"
          />
        </div>

        <div className={classes.buttonSection}>
          <Button
            type="secondary"
            onClick={() => {
              navigate(`/schools/${SchoolId}/courses`);
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

export default CreateCourseFirstStep;
