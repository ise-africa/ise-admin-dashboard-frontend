import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import classes from "../CreateSchoolAddDetails/CreateSchoolAddDetails.module.css";
import SchoolCreatingLayout from "../../../Components/SchoolCreatingLayout/SchoolCreatingLayout";
import schoolImage from '../../../Assets/Images/schoolImage.svg'
import { useState } from "react";
import AcceptedModal from "../../../Components/Modals/AcceptedModal/AcceptedModal";
import CancelSchoolCreationModal from "./PreviewModals/CancelSchoolCreationModal";
import CancelSchoolSuccessfulModal from "./PreviewModals/CancelSchoolSuccessfulModal";
import SchoolCreatedSuccessfulModal from "./PreviewModals/SchoolCreatedSuccessfulModal";
import cancelSvg from '../../../Assets/Images/CancelSchoolCreationImage.svg'

type CreateSchoolPreviewProp = {
  showIndicator?: boolean
  editInformation?: boolean;
  updateInformation?: boolean;
  createSchool?: boolean;
  title?: string;
  name?: string;
  tagline?: string;
  description?: string;
  school?: string;
  image?: string;
  importanceItems?: string[];
}

const CreateSchoolPreview = ({
  showIndicator,
  editInformation,
  updateInformation,
  createSchool,
  title,
  name,
  tagline,
  description,
  school,
  image,
  importanceItems = []
}: CreateSchoolPreviewProp) => {

  // Router
  const navigate = useNavigate();
  const { SchoolId } = useParams()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const [displayCancelSchoolCreationModal, setDisplayCancelSchoolCreationModal] = useState(false)
  const [displayCancelSchoolSuccessfulModal, setDisplayCancelSchoolSuccessfulModal] = useState(false)
  const [displaySchoolUpdateSuccessfulModal, setDisplaySchoolUpdateSuccessfulModal] = useState(false)
  const [displaySchoolCreatedSuccessfulModal, setDisplaySchoolCreatedSuccessfulModal] = useState(false)

  return (
    <>
      {displayCancelSchoolCreationModal && (
        <AcceptedModal
          onClick={() => { setDisplayCancelSchoolCreationModal(false) }}
          body={
            <CancelSchoolCreationModal
              imgSrc={cancelSvg}
              header="Cancel school creation?"
              paragraph="You'll lose all information and start over if you cancel."
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
              buttonText="Cancel school"
              header="School creation canceled."
              paragraph="Click ‘Create School' to start again."
              onClick={() => {
                setDisplayCancelSchoolSuccessfulModal(false)
                navigate('/schools/add-school?step=1')
              }}
            />
          }
        />
      )}
      {displaySchoolUpdateSuccessfulModal && (
        <AcceptedModal
          onClick={() => { setDisplaySchoolUpdateSuccessfulModal(false) }}
          body={
            <CancelSchoolSuccessfulModal
              buttonText="Done"
              header="School information updated!"
              paragraph="Your edits to the school information have been saved. The changes will reflect on the platform."
              onClick={() => {
                setDisplaySchoolUpdateSuccessfulModal(false)
                navigate('/schools')
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
              buttonText="Add course"
              header="School created"
              paragraph="You've created [School name] on iṣẹ́ School. You can now proceed to add courses and customise the learning environment." onClick={() => {
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
            {editInformation && (
              <Button
                type="secondary"
                onClick={() => { navigate(`/schools/${SchoolId}/edit-school?step=1`) }}
              >
                <span>Edit Information</span>
              </Button>
            )}
            {updateInformation && (
              <>
                <Button
                  type="secondary"
                  onClick={() => { setSearchParams({ step: "2" }); }}
                >
                  <span>Back</span>
                </Button>
                <Button
                  type="primary"
                  onClick={() => { setDisplaySchoolUpdateSuccessfulModal(true) }}
                >
                  <span>Update school information</span>
                </Button>
              </>
            )}
            {createSchool && (
              <>
                <Button
                  type="secondary"
                  onClick={() => { setSearchParams({ step: "2" }); }}
                >
                  <span>Edit Information</span>
                </Button>

                <Button
                  type="primary"
                  onClick={() => { setDisplaySchoolCreatedSuccessfulModal(true) }}
                >
                  <span>Create School</span>
                </Button>
              </>
            )}
          </div>
        </section>
      </SchoolCreatingLayout>
    </>
  );
};

export default CreateSchoolPreview;
