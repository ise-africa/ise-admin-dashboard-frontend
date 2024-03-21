import React from "react";
import SchoolCreatingLayout from "../../../../Components/SchoolCreatingLayout/SchoolCreatingLayout";
import classes from "../CreateCourseFirstStep/CreateCourseFirstStep.module.css";
import Button from "../../../../Components/Button/Button";
import { useSearchParams } from "react-router-dom";
import Input from "../../../../Components/Input/Input";
import DropdownWithSearch from "../../../../Components/DropdownWithSearch/DropdownWithSearch";
import calendarIcon from '../../../../Assets/Images/calendar.svg'

type CreateCourseThirdStepProp = {
  title?: string;
  showIndicator?: boolean
  courseName?: string;
  firstButtonText?: string;
  secondButtonText?: string;
  name?: string;
  dealine?: string;
  startDate?: string;
  duration?: string;
  tutor?: string;
  price?: string;
  capacity?: string;
}

const CreateCourseThirdStep = ({
  title,
  showIndicator,
  courseName,
  firstButtonText,
  secondButtonText,
  name,
  dealine,
  startDate,
  duration,
  tutor,
  price,
  capacity,
}: CreateCourseThirdStepProp) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <SchoolCreatingLayout steps={[1, 2, 3, 4]} showProgress={showIndicator}>
      <section className={classes.container}>
        <h2>{title || "Create a cohort for this course"}</h2>

        {courseName && <p>Course name: <strong>{courseName}</strong></p>}

        <div>
          <Input
            value={name}
            label="Enter cohort name *"
            placeholder="E.g Talent Acquisition May Cohort"
          />
          <div className={classes.date}>
            <label htmlFor="cohortApplication">Cohort application deadline * </label>
            <div className={classes.selectDate}>
              <input
                type="text"
                value={dealine}
                id="cohortApplication"
                placeholder="Select option"
                onFocus={(e) => (e.target.type = 'date')}
              />
              <img src={calendarIcon} alt="select a date" />
            </div>
          </div>
          <div className={classes.date}>
            <label htmlFor="cohortStartDate">Cohort start date *</label>
            <div className={classes.selectDate}>
              <input
                type="text"
                value={startDate}
                id="cohortStartDate"
                placeholder="Select option"
                onFocus={(e) => (e.target.type = 'date')}
              />
              <img src={calendarIcon} alt="select a date" />
            </div>
          </div>
          <DropdownWithSearch
            label="Cohort duration"
            title="Select option"
            selected={duration}
            options={[]}
          />
          <DropdownWithSearch
            label="Assign a tutor to this cohort *"
            title="Select option"
            selected={tutor}
            options={[]}
            tip="Ensure you select the right tutor for this cohort"
          />
          <DropdownWithSearch
            label="Enter course price *"
            title="E.g ₦90,0000"
            selected={price}
            options={[]}
            tip=" Price is in Naira specific to this cohort"
          />
          <Input
            value={capacity}
            label="Enter cohort capacity"
            placeholder="E.g 35"
            tip="Enter  the maximum of students that should be in this cohort"
          />
        </div>

        <div className={classes.buttonSection}>
          <Button
            type="secondary"
            onClick={() => {
              setSearchParams({ step: "2" });
            }}
          >
            <span>{firstButtonText || "Back"}</span>
          </Button>
          <Button
            onClick={() => {
              setSearchParams({ step: "4" });
            }}
          >
            <span>{secondButtonText || "Preview"}</span>
          </Button>
        </div>
      </section>
    </SchoolCreatingLayout>
  );
};

export default CreateCourseThirdStep;
