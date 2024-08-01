import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import Button from "../../../Components/Button/Button";
import classes from "../CreateSchoolAddDetails/CreateSchoolAddDetails.module.css";
import SchoolCreatingLayout from "../../../Components/SchoolCreatingLayout/SchoolCreatingLayout";
import { useContext, useEffect, useState } from "react";
import AcceptedModal from "../../../Components/Modals/AcceptedModal/AcceptedModal";
import CancelSchoolCreationModal from "./PreviewModals/CancelSchoolCreationModal";
import CancelSchoolSuccessfulModal from "./PreviewModals/CancelSchoolSuccessfulModal";
import SchoolCreatedSuccessfulModal from "./PreviewModals/SchoolCreatedSuccessfulModal";
import cancelSvg from "../../../Assets/Images/CancelSchoolCreationImage.svg";
import { SchoolContext } from "../../../Context/SchoolContext";
import { useSchoolsById } from "../../../Hooks/useSchools";
import { schoolDetailType } from "../../../Types/schoolType";
import Loader from "../../../Components/Loader/Loader";
import { mutate } from "swr";

type CreateSchoolPreviewProp = {
  showIndicator?: boolean;
  editInformation?: boolean;
  updateInformation?: boolean;
  creatingSchool?: boolean;
  title?: string;
  name?: string;
  tagline?: string;
  description?: string;
  school?: string;
  image?: string;
  importanceItems?: string[];
};

const CreateSchoolPreview = ({
  showIndicator,
  editInformation,
  updateInformation,
  creatingSchool,
  title,
  name,
  tagline,
  description,
  school,
  image,
  importanceItems = [],
}: CreateSchoolPreviewProp) => {
  // Context
  const {
    createSchool,
    createSchoolRequest,
    setCreateSchoolData,
    updateSchool,
  } = useContext(SchoolContext);

  // Router
  const navigate = useNavigate();
  const { SchoolId } = useParams();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();

  console.log(name, importanceItems);

  // State
  const [
    displayCancelSchoolCreationModal,
    setDisplayCancelSchoolCreationModal,
  ] = useState(false);
  const [
    displayCancelSchoolSuccessfulModal,
    setDisplayCancelSchoolSuccessfulModal,
  ] = useState(false);
  const [
    displaySchoolUpdateSuccessfulModal,
    setDisplaySchoolUpdateSuccessfulModal,
  ] = useState(false);
  const [
    displaySchoolCreatedSuccessfulModal,
    setDisplaySchoolCreatedSuccessfulModal,
  ] = useState(false);

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
              header="Cancel school creation?"
              paragraph="You'll lose all information and start over if you cancel."
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
              buttonText="Cancel school"
              header="School creation canceled."
              paragraph="Click ‘Create School' to start again."
              onClick={() => {
                setDisplayCancelSchoolSuccessfulModal(false);
                navigate("/schools/add-school?step=1");
                setCreateSchoolData({
                  name: "",
                  image: { frontendFile: "", file: null },
                  description: "",
                  tagline: "",
                  benefits: [""],
                });
              }}
            />
          }
        />
      )}
      {createSchoolRequest.data && (
        <AcceptedModal
          onClick={() => {
            setDisplaySchoolUpdateSuccessfulModal(false);
          }}
          body={
            <CancelSchoolSuccessfulModal
              buttonText="Done"
              header="School information updated!"
              paragraph="Your edits to the school information have been saved. The changes will reflect on the platform."
              onClick={() => {
                setDisplaySchoolUpdateSuccessfulModal(false);
                navigate("/schools");
              }}
            />
          }
        />
      )}
      {createSchoolRequest.data && (
        <AcceptedModal
          onClick={() => {
            setDisplaySchoolCreatedSuccessfulModal(false);
          }}
          body={
            <SchoolCreatedSuccessfulModal
              buttonText="Add course"
              header="School created"
              paragraph="You've created [School name] on iṣẹ́ School. You can now proceed to add courses and customise the learning environment."
              onClick={() => {
                setDisplaySchoolCreatedSuccessfulModal(false);
                navigate("/schools/school-created");
              }}
              onClick2={() => {
                setDisplaySchoolCreatedSuccessfulModal(false);
                navigate(`/schools/${SchoolId}/add-course?step=1`);
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
              <p>{name}</p>
            </div>
            <div>
              <span>School tagline</span>
              <p>{tagline}</p>
            </div>
            <div>
              <span>School description</span>
              <p>{description}</p>
            </div>
            <div>
              <span>School name</span>
              <p>{name}</p>
            </div>
            <div>
              <span>School image</span>
              <img src={image} alt="School cover" />
            </div>
            <div>
              <span>Importance of joining the school</span>
              <ul>
                {importanceItems &&
                  importanceItems?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
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
                  navigate(`/schools/${SchoolId}/edit-school?step=1`);
                }}
              >
                <span>Edit Information</span>
              </Button>
            )}
            {updateInformation && (
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
                  type="primary"
                  onClick={() => {
                    // setDisplaySchoolUpdateSuccessfulModal(true);
                    updateSchool(SchoolId as string);
                  }}
                  loading={createSchoolRequest.isLoading}
                >
                  <span>Update school information</span>
                </Button>
              </>
            )}
            {creatingSchool && (
              <>
                <Button
                  type="secondary"
                  onClick={() => {
                    setSearchParams({ step: "2" });
                  }}
                >
                  <span>Edit Information</span>
                </Button>

                <Button
                  type="primary"
                  onClick={() => {
                    // setDisplaySchoolCreatedSuccessfulModal(true);
                    createSchool();
                  }}
                  loading={createSchoolRequest.isLoading}
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
