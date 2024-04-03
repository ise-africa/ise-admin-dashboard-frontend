import React, { useState } from "react";
import SchoolCreatingLayout from "../../../Components/SchoolCreatingLayout/SchoolCreatingLayout";
import classes from "../CreateBlogAddDetails/CreateBlogAddDetails.module.css";
import Button from "../../../Components/Button/Button";
import { useSearchParams } from "react-router-dom";
import Input from "../../../Components/Input/Input";
import DragAndDropInput from "../../../Components/DragAndDropInput/DragAndDropInput";
import DropdownWithSearch from "../../../Components/DropdownWithSearch/DropdownWithSearch";

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <SchoolCreatingLayout steps={[1, 2, 3]}>
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
            <Button type="null" onClick={() => { }}>
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

          <DropdownWithSearch
            options={[]}
            title="Select option"
            label="Select blogpost reading minutes *"
            tip="This is the average number of minutes it would take for audience to read this blogpost"
          />
        </div>

        <div className={classes.buttonSection}>
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
