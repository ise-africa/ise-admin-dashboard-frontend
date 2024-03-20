import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Button from "../../../../Components/Button/Button";
import classes from "../CreateSchoolAddDetails/CreateSchoolAddDetails.module.css";
import SchoolCreatingLayout from "../../../../Components/SchoolCreatingLayout/SchoolCreatingLayout";
import schoolImage from '../../../../Assets/Images/schoolImage.svg'
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
  school?: string;
  image?: string;
  importanceItems?: string[];
}

const CreateCourseFourthStep = ({
  showIndicator,
  title,
  name,
  tagline,
  description,
  school,
  image,
  importanceItems = []
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

      <SchoolCreatingLayout steps={[1, 2, 3]} showProgress={showIndicator}>

        <section className={classes.container}>
          <h2>{title || "Review school information"}</h2>

          <div className={classes.textSection}>
            <div>
              <span>Name of school</span>
              <p>{name || "iṣẹ́ School of Business"}</p>
            </div>
            <div>
              <span>School tagline</span>
              <p>{tagline || "Help business grow"}</p>
            </div>
            <div>
              <span>School description</span>
              <p>{description || "Ignite your business potential with our resources at iṣẹ́ School of Business. Gain the knowledge and skills to thrive in the dynamic world of commerce. Lead and achieve greatness with essential business skills."}</p>
            </div>
            <div>
              <span>School name</span>
              <p>{school || "School of Business"}</p>
            </div>
            <div>
              <span>School image</span>
              <img src={image || schoolImage} alt="School cover" />
            </div>
            <div>
              <span>Importance of joining the school</span>
              <ul>
                {importanceItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
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
              onClick={() => { setSearchParams({ step: "2" }); }}
            >
              <span>Edit Information</span>
            </Button>
            {showIndicator && (
              <Button
                onClick={() => { setDisplaySchoolCreatedSuccessfulModal(true) }}
              >
                <span>Create School</span>
              </Button>
            )}
          </div>
        </section>
      </SchoolCreatingLayout>
    </>
  );
};

export default CreateCourseFourthStep;
