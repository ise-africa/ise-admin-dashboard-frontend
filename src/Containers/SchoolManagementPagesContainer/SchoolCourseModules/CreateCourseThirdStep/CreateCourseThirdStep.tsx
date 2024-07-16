import React, { useContext, useEffect, useState } from "react";
import SchoolCreatingLayout from "../../../../Components/SchoolCreatingLayout/SchoolCreatingLayout";
import classes from "../CreateCourseFirstStep/CreateCourseFirstStep.module.css";
import Button from "../../../../Components/Button/Button";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Input from "../../../../Components/Input/Input";
import DropdownWithSearch from "../../../../Components/DropdownWithSearch/DropdownWithSearch";
import calendarIcon from "../../../../Assets/Images/calendar.svg";
import { SchoolContext } from "../../../../Context/SchoolContext";
import { inputChangeHandler } from "../../../../HelperFunctions/inputChangeHandler";
import useTutors from "../../../../Hooks/useTutors";
import { capitalize } from "@mui/material";

type CreateCourseThirdStepProp = {
  title?: string;
  showIndicator?: boolean;
  courseName?: string;
  createCohort?: boolean;
  editCohort?: boolean;
  addCohort?: boolean;
  name?: string;
  dealine?: string;
  startDate?: string;
  duration?: string;
  tutor?: string;
  price?: string;
  capacity?: string;
};

const CreateCourseThirdStep = ({
  title,
  showIndicator,
  courseName,
  createCohort,
  editCohort,
  addCohort,
  name,
  dealine,
  startDate,
  price,
  capacity,
}: CreateCourseThirdStepProp) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const courseId = searchParams.get("courseId");

  // Context
  const {
    createCourse,
    setCreateCourse,
    createCourseRequest,
    createSchoolRequest,
  } = useContext(SchoolContext);

  // States
  const [tutor, setTutor] = useState("");
  const [coursePrice, setCoursePrice] = useState("");
  const [duration, setDuration] = useState("");

  // Requests
  const { data, isLoading } = useTutors();

  const tutors = data?.data?.data;
  console.log(tutors);

  // Router
  const navigate = useNavigate();
  const { SchoolId, CourseId } = useParams();

  useEffect(() => {
    if (tutor) {
      const firstname = tutor?.split(" ")[0];
      const lastname = tutor?.split(" ")[1];

      const selectedTutor = tutors?.find(
        (data: any) =>
          data?.first_name?.toLowerCase() === firstname?.toLowerCase() &&
          data?.last_name?.toLowerCase() === lastname?.toLowerCase()
      );

      setCreateCourse((prevState) => {
        return { ...prevState, tutorId: selectedTutor?.id };
      });
    }

    if (coursePrice) {
      const coursePriceNumber = coursePrice
        .replaceAll(",", "")
        .replaceAll("₦", "");

      console.log(coursePriceNumber, "price");
      setCreateCourse((prevState: any) => {
        return { ...prevState, price: coursePriceNumber };
      });
    }

    if (duration) {
      setCreateCourse((prevState) => {
        return { ...prevState, duration };
      });
    }
  }, [tutor, coursePrice, duration]);

  console.log(createCourse);

  return (
    <SchoolCreatingLayout steps={[1, 2, 3, 4]} showProgress={showIndicator}>
      <section className={classes.container}>
        <h2>{title || "Create a cohort for this course"}</h2>

        {courseName && (
          <p>
            Course name: <strong>{courseName}</strong>
          </p>
        )}

        <div>
          <Input
            isRequired
            label="Enter cohort name"
            placeholder="E.g Talent Acquisition May Cohort"
            name="cohort_name"
            value={createCourse.cohort_name}
            onChange={(e) => inputChangeHandler(e, setCreateCourse)}
          />
          <Input
            label="Cohort application deadline"
            isRequired
            type="date"
            placeholder="Select option"
            name="application_deadline"
            value={createCourse.application_deadline}
            onChange={(e) => inputChangeHandler(e, setCreateCourse)}
          />
          <Input
            label="Cohort start date"
            isRequired
            type="date"
            placeholder="Select option"
            name="start_date"
            value={createCourse.start_date}
            onChange={(e) => inputChangeHandler(e, setCreateCourse)}
          />
          <DropdownWithSearch
            label="Cohort duration *"
            title="Select option"
            selected={duration}
            options={["1 week", "1 month", "3 months", "6 months"]}
            setSelected={setDuration}
          />
          <DropdownWithSearch
            label="Assign a tutor to this cohort *"
            title="Select option"
            selected={tutor}
            isLoading={isLoading}
            options={tutors?.map((data: any) => {
              return `${capitalize(data?.first_name)} ${capitalize(
                data?.last_name
              )}`;
            })}
            tip="Ensure you select the right tutor for this cohort"
            setSelected={setTutor}
          />
          <DropdownWithSearch
            label="Enter course price *"
            title="E.g ₦90,0000"
            selected={coursePrice}
            setSelected={setCoursePrice}
            options={["₦15,0000", "₦30,0000"]}
            tip=" Price is in Naira specific to this cohort"
          />
          <Input
            isRequired
            label="Enter cohort capacity"
            placeholder="E.g 35"
            tip="Enter  the maximum of students that should be in this cohort"
            name="total_capacity"
            value={createCourse.total_capacity}
            onChange={(e) => inputChangeHandler(e, setCreateCourse)}
          />
        </div>

        <div className={classes.buttonSection}>
          {editCohort && (
            <>
              <Button
                type="secondary"
                onClick={() => {
                  navigate(`/schools/${SchoolId}/courses/${CourseId}/cohorts`);
                }}
              >
                <span>Cancel</span>
              </Button>
              <Button
                onClick={() => {
                  navigate(`/schools/${SchoolId}/courses/${CourseId}/cohorts`);
                }}
              >
                <span>Save</span>
              </Button>
            </>
          )}
          {createCohort && (
            <>
              <Button
                type="secondary"
                onClick={() => {
                  setSearchParams({ step: "2" });
                }}
              >
                <span>Back</span>
              </Button>
              <Button
                onClick={() => {
                  // setSearchParams({ step: "4" });
                  createCourseRequest(
                    SchoolId as string,
                    3,
                    courseId as string
                  );
                }}
                loading={createSchoolRequest.isLoading}
                disabled={
                  !createCourse?.cohort_name ||
                  !createCourse?.application_deadline ||
                  !createCourse?.start_date ||
                  !createCourse?.duration ||
                  !createCourse?.tutorId ||
                  !createCourse?.total_capacity
                }
              >
                <span>Preview</span>
              </Button>
            </>
          )}
          {addCohort && (
            <>
              <Button
                type="secondary"
                onClick={() => {
                  navigate(`/schools/${SchoolId}/courses/${CourseId}/cohorts`);
                }}
              >
                <span>Cancel</span>
              </Button>
              <Button
                onClick={() => {
                  navigate(`/schools/${SchoolId}/courses/${CourseId}/cohorts`);
                }}
              >
                <span>Create Cohort</span>
              </Button>
            </>
          )}
        </div>
      </section>
    </SchoolCreatingLayout>
  );
};

export default CreateCourseThirdStep;
