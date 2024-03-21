import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Button from "../../../../Components/Button/Button";
import classes from "../CreateCourseFirstStep/CreateCourseFirstStep.module.css";
import SchoolCreatingLayout from "../../../../Components/SchoolCreatingLayout/SchoolCreatingLayout";
import schoolImage from '../../../../Assets/Images/courseImage.svg'
import { useState } from "react";
import AcceptedModal from "../../../../Components/Modals/AcceptedModal/AcceptedModal";
import CancelSchoolCreationModal from "../../CreateSchoolPreview/PreviewModals/CancelSchoolCreationModal";
import CancelSchoolSuccessfulModal from "../../CreateSchoolPreview/PreviewModals/CancelSchoolSuccessfulModal";
import SchoolCreatedSuccessfulModal from "../../CreateSchoolPreview/PreviewModals/SchoolCreatedSuccessfulModal";

type CreateCourseFourthStepProp = {
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
}

const CreateCourseFourthStep = ({
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
  const { SchoolId, CourseId } = useParams()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const [displayCancelSchoolCreationModal, setDisplayCancelSchoolCreationModal] = useState(false)
  const [displayCancelSchoolSuccessfulModal, setDisplayCancelSchoolSuccessfulModal] = useState(false)
  const [displaySchoolCourseUpdateSuccessfulModal, setDisplaySchoolCourseUpdateSuccessfulModal] = useState(false)
  const [displaySchoolCreatedSuccessfulModal, setDisplaySchoolCreatedSuccessfulModal] = useState(false)

  return (
    <>
      {displayCancelSchoolCreationModal && (
        <AcceptedModal
          onClick={() => { setDisplayCancelSchoolCreationModal(false) }}
          body={
            <CancelSchoolCreationModal
              header="Cancel adding course?"
              paragraph="Are you sure you want to discard the course  information? Canceling will discard all entered information and you'll need to start over. Confirm?"
              onClick={() => { setDisplayCancelSchoolCreationModal(false) }}
              onClick2={() => {
                setDisplayCancelSchoolCreationModal(false)
                setDisplayCancelSchoolSuccessfulModal(true)
              }}
            />
          }
        />
      )}
      {displayCancelSchoolSuccessfulModal && (
        <AcceptedModal
          onClick={() => { setDisplayCancelSchoolSuccessfulModal(false) }}
          body={
            <CancelSchoolSuccessfulModal
              buttonText="Cancel course"
              header="Course creation canceled. "
              paragraph="Click “Create course” to start again."
              onClick={() => {
                setDisplayCancelSchoolSuccessfulModal(false)
                navigate(`/schools/${SchoolId}/add-course?step=1`)
              }}
            />
          }
        />
      )}
      {displaySchoolCourseUpdateSuccessfulModal && (
        <AcceptedModal
          onClick={() => { setDisplaySchoolCourseUpdateSuccessfulModal(false) }}
          body={
            <CancelSchoolSuccessfulModal
              buttonText="Done"
              header="Course information updated!"
              paragraph="Your edits to the course information have been saved. The changes will reflect on the platform."
              onClick={() => {
                setDisplaySchoolCourseUpdateSuccessfulModal(false)
                navigate(`/schools/${SchoolId}/courses`)
              }}
            />
          }
        />
      )}
      {displaySchoolCreatedSuccessfulModal && (
        <AcceptedModal
          onClick={() => { setDisplaySchoolCreatedSuccessfulModal(false) }}
          body={
            <SchoolCreatedSuccessfulModal
              buttonText="Done"
              header="Course cohort created "
              paragraph="You've successfully created the [Cohort Name] cohort for [Course Name]. The cohort is live and ready to help learners begin their journeys."
              onClick2={() => {
                setDisplaySchoolCreatedSuccessfulModal(false)
                navigate(`/schools/${SchoolId}/courses`)
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
              <p>{name || "Talent Acquisition Course"}</p>
            </div>
            <div>
              <span>Course objectives</span>
              <ul className={classes.listUl}>
                {objectives.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <span>Course difficulty level</span>
              <p>{tagline || "Beginner level course"}</p>
            </div>
            <div>
              <span>Course description</span>
              <p>{description || "Our Introduction to Talent Acquisition course is designed for beginners. This course covers fundamental principles, strategies, and best practices in recruiting top talent. Learn how to create effective job postings, conduct interviews, and make informed hiring decisions. Acquire the essential knowledge and tools to excel in your talent acquisition journey."}</p>
            </div>
            <div>
              <span>School image</span>
              <img src={image || schoolImage} alt="School cover" />
            </div>
            <div className={classes.cohort}>
              <h4>Cohort infomation</h4>
              <div className={classes.textSection}>
                <div>
                  <span>Cohort name</span>
                  <p>{cohortName || "Talent Acquisition May Cohort"}</p>
                </div>
                <div>
                  <span>Application deadline</span>
                  <p>{cohortDeadline || "12 Feb, 2024"}</p>
                </div>
                <div>
                  <span>Start date</span>
                  <p>{cohortStart || "12 May, 2024"}</p>
                </div>
                <div>
                  <span>Cohort duration</span>
                  <p>{cohortDuration || "4 months"}</p>
                </div>
                <div>
                  <span>Cohort tutor</span>
                  <p>{cohortTutor || "Olawuyi Justus"}</p>
                </div>
                <div>
                  <span>Course price </span>
                  <p>{cohortPrice || "₦110,000"}</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${classes.buttonSection} ${classes.buttonSectionThree}`}>
            {showIndicator && (
              <Button
                type="null"
                className={classes.canelButton}
                onClick={() => { setDisplayCancelSchoolCreationModal(true) }}
              >
                <span>Cancel</span>
              </Button>
            )}
            {editInformation && (
              <Button
                type="secondary"
                onClick={() => { navigate(`/schools/${SchoolId}/courses/${CourseId}/edit-course?step=1`) }}
              >
                <span>Edit Information</span>
              </Button>
            )}
            {updateInformation && (
              <>
                <Button
                  type="secondary"
                  onClick={() => { setSearchParams({ step: "3" }); }}
                >
                  <span>Back</span>
                </Button>
                <Button
                  type="primary"
                  onClick={() => { setDisplaySchoolCourseUpdateSuccessfulModal(true) }}
                >
                  <span>Update course information</span>
                </Button>
              </>
            )}
            {createCourse && (
              <>
                <Button
                  type="secondary"
                  onClick={() => { setSearchParams({ step: "3" }); }}
                >
                  <span>Edit Information</span>
                </Button>

                <Button
                  type="primary"
                  onClick={() => { setDisplaySchoolCreatedSuccessfulModal(true) }}
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
