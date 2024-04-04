import React, { useState } from "react";
import SchoolCreatingLayout from "../../../Components/SchoolCreatingLayout/SchoolCreatingLayout";
import classes from "../CreateBlogAddDetails/CreateBlogAddDetails.module.css";
import Input from "../../../Components/Input/Input";
import Button from "../../../Components/Button/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import CreateBlogCategoryModal from "./CreateBlogCategoryModal";
import DragAndDropInput from "../../../Components/DragAndDropInput/DragAndDropInput";
import DropdownWithSearch from "../../../Components/DropdownWithSearch/DropdownWithSearch";
import AcceptedModal from "../../../Components/Modals/AcceptedModal/AcceptedModal";
import cancelSvg from '../../../Assets/Images/CancelSchoolCreationImage.svg'
import CancelSchoolCreationModal from "../../SchoolManagementPagesContainer/CreateSchoolPreview/PreviewModals/CancelSchoolCreationModal";
import CancelSchoolSuccessfulModal from "../../SchoolManagementPagesContainer/CreateSchoolPreview/PreviewModals/CancelSchoolSuccessfulModal";
import close from "../../../Assets/Images/x-sign.svg"

type CreateBlogUploadFileProp = {
  title?: string;
  name?: string;
  importanceItems?: string[];
}

const CreateBlogUploadFile = ({
  title,
  name,
  importanceItems = []
}: CreateBlogUploadFileProp) => {
  // Router
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const [displayCancelSchoolCreationModal, setDisplayCancelSchoolCreationModal] = useState(false)
  const [displayCancelSchoolSuccessfulModal, setDisplayCancelSchoolSuccessfulModal] = useState(false)
  const [displayCreateBlogCategoryModal, setDisplayCreateBlogCategoryModal] = useState(false)
  const [displayCreateBlogCategorySuccessfulModal, setDisplayCreateBlogCategorySuccessfulModal] = useState(false)

  return (
    <SchoolCreatingLayout steps={[1, 2, 3]}>
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
      {displayCreateBlogCategoryModal && (
        <AcceptedModal
          onClick={() => { setDisplayCreateBlogCategoryModal(false) }}
          body={
            <CreateBlogCategoryModal
              onClick={() => {
                setDisplayCreateBlogCategoryModal(false)
              }}
              onClick2={() => {
                setDisplayCreateBlogCategoryModal(false)
                setDisplayCreateBlogCategorySuccessfulModal(true)
              }}
            />
          }
        />
      )}
      {displayCreateBlogCategorySuccessfulModal && (
        <AcceptedModal
          onClick={() => { setDisplayCreateBlogCategorySuccessfulModal(false) }}
          body={
            <CancelSchoolSuccessfulModal
              buttonText="Done"
              header="Category created"
              paragraph=""
              onClick={() => {
                setDisplayCreateBlogCategorySuccessfulModal(false)
              }}
            />
          }
        />
      )}
      <section className={classes.container}>
        <h2>{title || "Add blogpost details"}</h2>
        <p>Organise blogpost content with visuals, tags and categories</p>

        <DragAndDropInput
          labelText="Upload cover image * (Clear, useful cover images grab users attention)"
          acceptedFileTypes=".png"
          performFIleValidation={true}
        />
        <ul className={classes.fileUploadInfo}>
          <li>You can upload: <strong> .png</strong> files </li>
          <li> File size: <strong>1MB</strong> with maximum width and height of 750 X 600px</li>
        </ul>

        <div>
          <DropdownWithSearch
            options={[]}
            title="Select option"
            label="Select blogpost category *"
            tip="Categories help readers filter and find  blogpost easily "
          />

          <div className={classes.flexButtonSection}>
            <Button type="null" onClick={() => { setDisplayCreateBlogCategoryModal(true) }}>
              <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1.5V13.5M13 7.5L1 7.5" stroke="#664EFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span>Add category</span>
            </Button>
          </div>

          <Input
            tip="You can only add 3 tags"
            label="Add Tags (Use a comma to separate tags) *"
            placeholder="E.g Technology, Edtech, Carrer tips"
          />

          <div className={`${classes.tag} ${classes.addTag}`}>
            <p>
              <span>Technology</span>
              <img src={close} alt="close" />
            </p>
            <p>
              <span>Career tips</span>
              <img src={close} alt="close" />
            </p>
            <p>
              <span>Edtech</span>
              <img src={close} alt="close" />
            </p>
          </div>

          <DropdownWithSearch
            options={[]}
            title="Select option"
            label="Select blogpost reading minutes *"
            tip="This is the average number of minutes it would take for audience to read this blogpost"
          />
        </div>

        <div className={`${classes.buttonSection} ${classes.buttonSectionThree}`}>
          <Button
            type="null"
            className={classes.canelButton}
            onClick={() => { setDisplayCancelSchoolCreationModal(true) }}
          >
            <span>Cancel</span>
          </Button>
          <Button
            type="secondary"
            onClick={() => {
              setSearchParams({ step: "1" });
            }}
          >
            <span>Back</span>
          </Button>
          <Button
            onClick={() => {
              setSearchParams({ step: "3" });
            }}
          >
            <span>Preview blogpost</span>
          </Button>
        </div>
      </section>
    </SchoolCreatingLayout>
  );
};

export default CreateBlogUploadFile;
