import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import classes from "../CreateBlogAddDetails/CreateBlogAddDetails.module.css";
import SchoolCreatingLayout from "../../../Components/SchoolCreatingLayout/SchoolCreatingLayout";
import blogImage from '../../../Assets/Images/blogImage.svg'
import { useState } from "react";
import draftImg from "../../../Assets/Images/draftImg.svg"
import publishImg from "../../../Assets/Images/activateSchool.svg"
import AcceptedModal from "../../../Components/Modals/AcceptedModal/AcceptedModal";
import cancelSvg from '../../../Assets/Images/CancelSchoolCreationImage.svg'
import CancelSchoolCreationModal from "../../SchoolManagementPagesContainer/CreateSchoolPreview/PreviewModals/CancelSchoolCreationModal";
import CancelSchoolSuccessfulModal from "../../SchoolManagementPagesContainer/CreateSchoolPreview/PreviewModals/CancelSchoolSuccessfulModal";
import SchoolCreatedSuccessfulModal from "../../SchoolManagementPagesContainer/CreateSchoolPreview/PreviewModals/SchoolCreatedSuccessfulModal";

type CreateBlogPreviewProp = {
  showIndicator?: boolean
  updateInformation?: string;
  title?: string;
  content?: string;
  category?: string;
  readTime?: string;
  image?: string;
  addTag?: string[];
}

const CreateBlogPreview = ({
  showIndicator,
  updateInformation,
  title,
  content,
  category,
  readTime,
  image,
  addTag = [
    "EdTech",
    "Free",
    "Technology"
  ],
}: CreateBlogPreviewProp) => {

  // Router
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const [displayCancelSchoolCreationModal, setDisplayCancelSchoolCreationModal] = useState(false)
  const [displayCancelSchoolSuccessfulModal, setDisplayCancelSchoolSuccessfulModal] = useState(false)
  const [displaySaveAsDraftModal, setDisplaySaveAsDraftModal] = useState(false)
  const [displayPublishBlogPostSuccessfulModal, setDisplayPublishBlogPostSuccessfulModal] = useState(false)
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
              button1="Save as draft"
              button2="Cancel blogpost"
              header="Cancel blogpost creation?"
              paragraph="This is a permanent action you will lose the details you’ve added. You might want to save as draft instead"
              onClick={() => {
                setDisplayCancelSchoolCreationModal(false)
                navigate('/blogs')
              }}
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
              buttonText="Create blogpost"
              header="Blogpost creation canceled"
              paragraph="Select ‘Create blogpost’ to start all over."
              onClick={() => {
                setDisplayCancelSchoolSuccessfulModal(false)
                navigate('/blogs/add-post?step=1')
              }}
            />
          }
        />
      )}
      {displaySaveAsDraftModal && (
        <AcceptedModal
          onClick={() => { setDisplaySaveAsDraftModal(false) }}
          body={
            <CancelSchoolSuccessfulModal
              buttonText="Close"
              imgSrc={draftImg}
              header="Blogpost added to draft"
              paragraph="To edit and publish this blogpost, go to “Drafts” on your dashboard. ."
              onClick={() => {
                setDisplaySaveAsDraftModal(false)
                navigate('/blogs')
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
                navigate('')
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
              imgSrc={publishImg}
              buttonText2="Cancel"
              header="Publish blogpost?"
              buttonText="Publish blogpost"
              paragraph="Once you publish, the blogpost will be live on iṣẹ́ blog"
              onClick={() => {
                setDisplaySchoolCreatedSuccessfulModal(false)
                navigate('')
              }}
              onClick2={() => {
                setDisplaySchoolCreatedSuccessfulModal(false)
                setDisplayPublishBlogPostSuccessfulModal(true)
              }}
            />
          }
        />
      )}
      {displayPublishBlogPostSuccessfulModal && (
        <AcceptedModal
          onClick={() => { setDisplayPublishBlogPostSuccessfulModal(false) }}
          body={
            <CancelSchoolSuccessfulModal
              buttonText="Close"
              header="Blogpost published successfully!"
              paragraph="Track blogpost performance on your dashboard."
              onClick={() => {
                setDisplayPublishBlogPostSuccessfulModal(false)
                navigate('')
              }}
            />
          }
        />
      )}

      <SchoolCreatingLayout steps={[1, 2, 3]} showProgress={showIndicator}>

        <section className={classes.container}>
          <h2>Review blogpost details</h2>
          <p>Create a clear title so recipients understand your message.</p>

          <div className={classes.textSection}>
            <div>
              <span>Featured image</span>
              <img src={image || blogImage} alt="School cover" />
            </div>
            <div>
              <span>Blogpost title</span>
              <p>{title || "From novice to pro: Your guide to succeeding in the tech industry "}</p>
            </div>
            <div>
              <span>Blogpost content</span>
              <p>{content || "Are you an aspiring techie eager to make your mark in the tech industry? Whether you're a recent graduate, career changer, or self-taught enthusiast, the path to success may seem daunting. Fear not; we've compiled a concise guide to help you navigate the tech landscape and thrive in....."}</p>
            </div>
            <div>
              <span>Blogpost category</span>
              <p>{category || "Tech updates"}</p>
            </div>
            <div>
              <span>Blogpost tags</span>
              <div className={classes.tag}>
                {addTag.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
            <div>
              <span>Reading minutes</span>
              <p>{readTime || "3 minutes"}</p>
            </div>
          </div>

          <div className={`${classes.buttonSection} ${classes.buttonSectionThree}`}>
            <Button
              type="null"
              className={classes.canelButton}
              onClick={() => { setSearchParams({ step: "2" }) }}
            >
              <span>Previous step</span>
            </Button>
            <Button
              type="secondary"
              onClick={() => { setDisplaySaveAsDraftModal(true) }}
            >
              <span>Save as draft</span>
            </Button>

            <Button
              type="primary"
              onClick={() => { setDisplaySchoolCreatedSuccessfulModal(true) }}
            >
              <span>{updateInformation || "Publish blogpost"}</span>
            </Button>
          </div>
        </section>
      </SchoolCreatingLayout>
    </>
  );
};

export default CreateBlogPreview;
