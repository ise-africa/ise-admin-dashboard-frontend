import SchoolCreatingLayout from "../../../../Components/SchoolCreatingLayout/SchoolCreatingLayout";
import classes from "./CreateCourseFirstStep.module.css";
import Button from "../../../../Components/Button/Button";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Input from "../../../../Components/Input/Input";
import DropdownWithSearch from "../../../../Components/DropdownWithSearch/DropdownWithSearch";
import { useContext, useEffect, useState } from "react";
import {
  createCourseType,
  SchoolContext,
} from "../../../../Context/SchoolContext";
import { inputChangeHandler } from "../../../../HelperFunctions/inputChangeHandler";

type CreateCourseFirstStepProps = {
  title?: string;
  name?: string;
  level?: string;
  objectives?: string[];
};

const CreateCourseFirstStep = ({ title }: CreateCourseFirstStepProps) => {
  // eslint-disable-next-line
  const [_, setSearchParams] = useSearchParams();

  // Context
  const {
    createCourse,
    setCreateCourse,
    createSchoolRequest,
    createCourseRequest,
  } = useContext(SchoolContext);

  // States
  const [difficulty, setDifficulty] = useState("");
  const [objectives, setObjectives] = useState("");

  // Router
  const navigate = useNavigate();
  const { SchoolId } = useParams();

  // Effects
  useEffect(() => {
    if (difficulty) {
      setCreateCourse((prevState) => {
        return { ...prevState, difficulty_level: difficulty };
      });
    }
  }, [difficulty]);

  console.log(createCourse);

  return (
    <SchoolCreatingLayout steps={[1, 2, 3, 4]}>
      <section className={classes.container}>
        <h2>{title || "Create a new course"}</h2>

        <div>
          <Input
            isRequired
            label="Name of course"
            placeholder="E.g Talent Acquisition Course"
            value={createCourse?.name}
            name="name"
            onChange={(e) => {
              inputChangeHandler(e, setCreateCourse);
            }}
          />
          <DropdownWithSearch
            title="Select option"
            label="Course difficulty level *"
            selected={difficulty}
            setSelected={setDifficulty}
            options={[
              "Beginner course",
              " Intermediate course",
              "Advanced course",
            ]}
          />
          <label className={classes.schoolImportanceLabel}>
            List the objectives of this course *
          </label>
          <Input
            value={objectives}
            placeholder="E. g Develop a deep understanding of Talent Acquisition strategies and practices"
            name="course_objectives"
            onChange={(e) => {
              setObjectives(e.target.value);
            }}
            onKeyup={(e) => {
              if (e.key === "Enter") {
                const lastObjectiveIndex =
                  (createCourse.course_objective?.indexOf(
                    createCourse.course_objective[
                      createCourse.course_objective?.length - 1
                    ]
                  ) as number) + 1;

                setCreateCourse((prevState: createCourseType) => {
                  if (prevState?.course_objective?.length !== 0) {
                    return {
                      ...prevState,
                      course_objective: [
                        ...(prevState.course_objective as any[]),
                        {
                          id: lastObjectiveIndex + 1,
                          value: objectives,
                        },
                      ],
                    };
                  } else {
                    return {
                      ...prevState,
                      course_objective: [{ id: 1, value: objectives }],
                    };
                  }
                });

                setObjectives("");
              }
            }}
          />
        </div>

        <div className={classes.objectives}>
          <ul>
            {createCourse.course_objective?.map((data) => {
              return <li key={data?.id}>{data?.value}</li>;
            })}
          </ul>
        </div>

        <div className={classes.buttonSection}>
          <Button
            type="secondary"
            onClick={() => {
              navigate(`/schools/courses`);
            }}
          >
            <span>Cancel</span>
          </Button>
          <Button
            onClick={() => {
              createCourseRequest(SchoolId as string, 1);
            }}
            loading={createSchoolRequest.isLoading}
            disabled={
              !createCourse?.name ||
              !createCourse?.difficulty_level ||
              createCourse?.course_objective?.length === 0
            }
          >
            <span>Next</span>
          </Button>
        </div>
      </section>
    </SchoolCreatingLayout>
  );
};

export default CreateCourseFirstStep;
