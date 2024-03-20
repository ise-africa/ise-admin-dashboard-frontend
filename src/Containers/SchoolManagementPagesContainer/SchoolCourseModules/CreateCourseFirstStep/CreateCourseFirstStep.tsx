import SchoolCreatingLayout from "../../../../Components/SchoolCreatingLayout/SchoolCreatingLayout";
import classes from "./CreateCourseFirstStep.module.css";
import Button from "../../../../Components/Button/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import Input from "../../../../Components/Input/Input";
import { useState } from "react";
import DropdownWithSearch from "../../../../Components/DropdownWithSearch/DropdownWithSearch";

const CreateCourseFirstStep = () => {

  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();

  // Navigate
  const navigate = useNavigate();

  const [additionalInputs, setAdditionalInputs] = useState(1);

  const addInput = () => {
    setAdditionalInputs(prev => prev + 1);
  };

  const removeInput = () => {
    if (additionalInputs > 1) {
      setAdditionalInputs(prev => prev - 1);
    }
  };

  return (
    <SchoolCreatingLayout steps={[1, 2, 3, 4]}>
      <section className={classes.container}>
        <h2>Create a new course</h2>

        <div>
          <Input
            label="Name of course"
            placeholder="E.g Talent Acquisition Course"
          />
          <DropdownWithSearch
            title="Select option"
            label="Course difficulty level"
            options={[]}
          />
          <label className={classes.schoolImportanceLabel}>List the objectives of this course </label>
          {[...Array(additionalInputs)].map((_, index) => (
            <Input
              key={index}
              placeholder="E. g Develop a deep understanding of Talent Acquisition strategies and practices "
            />
          ))}
          <div className={classes.flexButtonSection}>
            <Button type="null" onClick={addInput}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1V17M17 9L1 9" stroke="#664EFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Add more</span>
            </Button>
            {additionalInputs > 1 && (
              <Button type="null" onClick={removeInput}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9L17 9" stroke="#664EFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Remove</span>
              </Button>
            )}
          </div>
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

export default CreateCourseFirstStep;
