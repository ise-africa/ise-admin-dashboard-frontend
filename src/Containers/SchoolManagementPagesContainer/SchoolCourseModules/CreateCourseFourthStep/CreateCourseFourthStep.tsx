import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Button from "../../../../Components/Button/Button";
import classes from "../CreateCourseFirstStep/CreateCourseFirstStep.module.css";
import SchoolCreatingLayout from "../../../../Components/SchoolCreatingLayout/SchoolCreatingLayout";
import schoolImage from '../../../../Assets/Images/courseImage.svg'
import { useState } from "react";
import AcceptedModal from "../../../../Components/Modals/AcceptedModal/AcceptedModal";
import CancelSchoolCreationModal from "./PreviewModals/CancelSchoolCreationModal";
import CancelSchoolSuccessfulModal from "./PreviewModals/CancelSchoolSuccessfulModal";
import SchoolCreatedSuccessfulModal from "./PreviewModals/SchoolCreatedSuccessfulModal";

type CreateCourseFourthStepProp = {
  showIndicator?: boolean
  title?: string;
  name?: string;
  tagline?: string;
  description?: string;
  image?: string;
  objectives?: string[];
}

const CreateCourseFourthStep = ({
  showIndicator,
  title,
  name,
  tagline,
  description,
  image,
  objectives = [],
}: CreateCourseFourthStepProp) => {

  // Router
  const navigate = useNavigate();
  const { SchoolId } = useParams()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const [displayCancelSchoolCreationModal, setDisplayCancelSchoolCreationModal] = useState(false)
  const [displayCancelSchoolSuccessfulModal, setDisplayCancelSchoolSuccessfulModal] = useState(false)
  const [displaySchoolCreatedSuccessfulModal, setDisplaySchoolCreatedSuccessfulModal] = useState(false)

  return (
    <>
      {displayCancelSchoolCreationModal && (
        <AcceptedModal
          onClick={() => { setDisplayCancelSchoolCreationModal(false) }}
          body={
            <CancelSchoolCreationModal
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
              onClick={() => {
                setDisplayCancelSchoolSuccessfulModal(false)
                navigate('/schools/add-school?step=1')
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
              onClick={() => {
                setDisplaySchoolCreatedSuccessfulModal(false)
                navigate('/schools/school-created')
              }}
              onClick2={() => {
                setDisplaySchoolCreatedSuccessfulModal(false)
                navigate(`/schools/${SchoolId}/add-course?step=1`)
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
                  <p>{name || "Talent Acquisition May Cohort"}</p>
                </div>
                <div>
                  <span>Application deadline</span>
                  <p>{name || "12 Feb, 2024"}</p>
                </div>
                <div>
                  <span>Start date</span>
                  <p>{name || "12 May, 2024"}</p>
                </div>
                <div>
                  <span>Cohort duration</span>
                  <p>{name || "4 months"}</p>
                </div>
                <div>
                  <span>Cohort tutor</span>
                  <p>{name || "Olawuyi Justus"}</p>
                </div>
                <div>
                  <span>Course price </span>
                  <p>{name || "₦110,000"}</p>
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
            <Button
              type="secondary"
              onClick={() => { setSearchParams({ step: "3" }); }}
            >
              <span>Edit Information</span>
            </Button>
            {showIndicator && (
              <Button
                onClick={() => { setDisplaySchoolCreatedSuccessfulModal(true) }}
              >
                <span>Create Course</span>
              </Button>
            )}
          </div>
        </section>
      </SchoolCreatingLayout>
    </>
  );
};

export default CreateCourseFourthStep;
