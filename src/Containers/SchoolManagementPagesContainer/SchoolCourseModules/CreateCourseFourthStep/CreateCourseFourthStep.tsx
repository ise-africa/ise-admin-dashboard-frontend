import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Button from "../../../../Components/Button/Button";
import classes from "../CreateCourseFirstStep/CreateCourseFirstStep.module.css";
import SchoolCreatingLayout from "../../../../Components/SchoolCreatingLayout/SchoolCreatingLayout";
import schoolImage from "../../../../Assets/Images/courseImage.svg";
import { useEffect, useState } from "react";
import AcceptedModal from "../../../../Components/Modals/AcceptedModal/AcceptedModal";
import CancelSchoolCreationModal from "../../CreateSchoolPreview/PreviewModals/CancelSchoolCreationModal";
import CancelSchoolSuccessfulModal from "../../CreateSchoolPreview/PreviewModals/CancelSchoolSuccessfulModal";
import SchoolCreatedSuccessfulModal from "../../CreateSchoolPreview/PreviewModals/SchoolCreatedSuccessfulModal";
import cancelSvg from "../../../../Assets/Images/CancelSchoolCreationImage.svg";
import { useCourseById } from "../../../../Hooks/useCourse";
import Loader from "../../../../Components/Loader/Loader";
import moment from "moment";
import { formatAmountWithCommas2dp } from "../../../../HelperFunctions/amountToString";
import { requestHandler2 } from "../../../../HelperFunctions/requestHandler";
import { backend_url } from "../../../../Utilities/global";
import { requestType } from "../../../../Context/AuthUserContext";

type CreateCourseFourthStepProp = {
  editCohort?: boolean;
  createCourse?: boolean;
  showIndicator?: boolean;
  editInformation?: boolean;
  updateInformation?: boolean;
  title?: string;
  name?: string;
  tagline?: string;
  description?: string;
  image?: string;
  objectives?: string[];
  cohortName?: string;
  cohortDeadline?: string;
  cohortStart?: string;
  cohortDuration?: string;
  cohortTutor?: string;
  cohortPrice?: string;
};

const CreateCourseFourthStep = ({
  editCohort,
  createCourse,
  showIndicator,
  editInformation,
  updateInformation,
  title,
  name,
  tagline,
  description,
  image,
  objectives = [],
  cohortName,
  cohortDeadline,
  cohortStart,
  cohortDuration,
  cohortTutor,
  cohortPrice,
}: CreateCourseFourthStepProp) => {
  // Router
  const navigate = useNavigate();
  const { SchoolId, CourseId, CohortId } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const courseId = searchParams?.get("courseId");

  const [
    displayCancelSchoolCreationModal,
    setDisplayCancelSchoolCreationModal,
  ] = useState(false);
  const [
    displayCancelSchoolSuccessfulModal,
    setDisplayCancelSchoolSuccessfulModal,
  ] = useState(false);
  const [
    displaySchoolCourseUpdateSuccessfulModal,
    setDisplaySchoolCourseUpdateSuccessfulModal,
  ] = useState(false);
  const [
    displaySchoolCreatedSuccessfulModal,
    setDisplaySchoolCreatedSuccessfulModal,
  ] = useState(false);
  const [isGettingCourse, setIsGettingCourse] = useState<requestType>({
    isLoading: false,
    data: null,
    error: null,
  });

  const getCourseById = () => {
    requestHandler2({
      method: "GET",
      url: `${backend_url}/api/ise/v1/admin/course/${courseId}`,
      state: isGettingCourse,
      setState: setIsGettingCourse,
    });
  };

  const courseData: any = isGettingCourse?.data;
  const cohort = (courseData as any)?.cohorts[0] || {};

  // Effects
  useEffect(() => {
    if (createCourse) {
      getCourseById();
    }
  }, [createCourse]);

  console.log(isGettingCourse, courseData);

  if (isGettingCourse?.isLoading) {
    return <Loader />;
  }

  console.log(objectives, "Objectives");

  return (
    <>
      {displayCancelSchoolCreationModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayCancelSchoolCreationModal(false);
          }}
          body={
            <CancelSchoolCreationModal
              imgSrc={cancelSvg}
              header="Cancel adding course?"
              paragraph="Are you sure you want to discard the course  information? Canceling will discard all entered information and you'll need to start over. Confirm?"
              onClick={() => {
                setDisplayCancelSchoolCreationModal(false);
              }}
              onClick2={() => {
                setDisplayCancelSchoolCreationModal(false);
                setDisplayCancelSchoolSuccessfulModal(true);
              }}
            />
          }
        />
      )}
      {displayCancelSchoolSuccessfulModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayCancelSchoolSuccessfulModal(false);
          }}
          body={
            <CancelSchoolSuccessfulModal
              buttonText="Cancel course"
              header="Course creation canceled. "
              paragraph="Click “Create course” to start again."
              onClick={() => {
                setDisplayCancelSchoolSuccessfulModal(false);
                navigate(`/schools/${SchoolId}/add-course?step=1`);
              }}
            />
          }
        />
      )}
      {displaySchoolCourseUpdateSuccessfulModal && (
        <AcceptedModal
          onClick={() => {
            setDisplaySchoolCourseUpdateSuccessfulModal(false);
          }}
          body={
            <CancelSchoolSuccessfulModal
              buttonText="Done"
              header="Course information updated!"
              paragraph="Your edits to the course information have been saved. The changes will reflect on the platform."
              onClick={() => {
                setDisplaySchoolCourseUpdateSuccessfulModal(false);
                navigate(`/schools/${SchoolId}/courses`);
              }}
            />
          }
        />
      )}
      {displaySchoolCreatedSuccessfulModal && (
        <AcceptedModal
          onClick={() => {
            setDisplaySchoolCreatedSuccessfulModal(false);
          }}
          body={
            <SchoolCreatedSuccessfulModal
              buttonText="Done"
              header="Course cohort created "
              paragraph={`You've successfully created the ${cohort?.name}  cohort for ${courseData?.name}. The cohort is live and ready to help learners begin their journeys.`}
              onClick2={() => {
                setDisplaySchoolCreatedSuccessfulModal(false);
                navigate(`/schools/${SchoolId}/courses`);
              }}
            />
          }
        />
      )}

      <SchoolCreatingLayout steps={[1, 2, 3, 4]} showProgress={showIndicator}>
        <section className={classes.container}>
          <h2>{title || "Review course cohort information"}</h2>

          <div className={classes.textSection}>
            <div>
              <span>Name of Course</span>
              <p>{name || courseData?.name}</p>
            </div>
            <div>
              <span>Course objectives</span>
              <ul className={classes.listUl}>
                {objectives
                  ? objectives?.map((item: any, index) => {
                      return <li key={index}>{item}</li>;
                    })
                  : JSON.parse(courseData?.course_objective)?.map(
                      (item: any, index: number) => {
                        return <li key={index}>{item?.value}</li>;
                      }
                    )}
              </ul>
            </div>
            <div>
              <span>Course difficulty level</span>
              <p>{tagline || courseData?.difficulty_level}</p>
            </div>
            <div>
              <span>Course description</span>
              <p>{description || courseData?.description}</p>
            </div>
            <div>
              <span>Course image</span>
              <img src={image || courseData?.cover_image} alt="School cover" />
            </div>
            <div className={classes.cohort}>
              <h4>Cohort infomation</h4>
              <div className={classes.textSection}>
                <div>
                  <span>Cohort name</span>
                  <p>{cohortName || cohort?.name}</p>
                </div>
                <div>
                  <span>Application deadline</span>
                  <p>
                    {cohortDeadline ||
                      moment(cohort?.application_deadline || "")?.format(
                        "Do Mo, YYYY"
                      )}
                  </p>
                </div>
                <div>
                  <span>Start date</span>
                  <p>
                    {cohortStart ||
                      moment(cohort?.start_date || "")?.format("Do Mo, YYYY")}
                  </p>
                </div>
                <div>
                  <span>Cohort duration</span>
                  <p>{cohortDuration || cohort?.duration}</p>
                </div>
                <div>
                  <span>Cohort tutor</span>
                  <p>{cohortTutor || cohort?.cohortTutor}</p>
                </div>
                <div>
                  <span>Course price </span>
                  <p>
                    {cohortPrice || formatAmountWithCommas2dp(cohort?.price)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${classes.buttonSection} ${classes.buttonSectionThree}`}
          >
            {showIndicator && (
              <Button
                type="null"
                className={classes.canelButton}
                onClick={() => {
                  setDisplayCancelSchoolCreationModal(true);
                }}
              >
                <span>Cancel</span>
              </Button>
            )}
            {editInformation && (
              <Button
                type="secondary"
                onClick={() => {
                  navigate(
                    `/schools/${SchoolId}/courses/${CourseId}/edit-course?step=1`
                  );
                }}
                disabled={true}
              >
                <span>Edit Information</span>
              </Button>
            )}
            {editCohort && (
              <Button
                type="secondary"
                onClick={() => {
                  navigate(
                    `/schools/${SchoolId}/courses/${CourseId}/cohorts/${CohortId}/edit-cohort`
                  );
                }}
              >
                <span>Edit Cohort</span>
              </Button>
            )}
            {updateInformation && (
              <>
                <Button
                  type="secondary"
                  onClick={() => {
                    setSearchParams({ step: "3" });
                  }}
                >
                  <span>Back</span>
                </Button>
                <Button
                  type="primary"
                  onClick={() => {
                    setDisplaySchoolCourseUpdateSuccessfulModal(true);
                  }}
                >
                  <span>Update course information</span>
                </Button>
              </>
            )}
            {createCourse && (
              <>
                <Button
                  type="secondary"
                  onClick={() => {
                    setSearchParams({ step: "3" });
                  }}
                  disabled={true}
                >
                  <span>Edit Information</span>
                </Button>

                <Button
                  type="primary"
                  onClick={() => {
                    setDisplaySchoolCreatedSuccessfulModal(true);
                  }}
                >
                  <span>Create course</span>
                </Button>
              </>
            )}
          </div>
        </section>
      </SchoolCreatingLayout>
    </>
  );
};

export default CreateCourseFourthStep;
