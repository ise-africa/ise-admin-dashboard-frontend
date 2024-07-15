import { ChangeEvent, useContext, useEffect, useState } from "react";
import SchoolCreatingLayout from "../../../Components/SchoolCreatingLayout/SchoolCreatingLayout";
import classes from "../CreateSchoolAddDetails/CreateSchoolAddDetails.module.css";
import Button from "../../../Components/Button/Button";
import { useSearchParams } from "react-router-dom";
import Input from "../../../Components/Input/Input";
import DragAndDropInput from "../../../Components/DragAndDropInput/DragAndDropInput";
import {
  createSchoolType,
  SchoolContext,
} from "../../../Context/SchoolContext";
import { inputChangeHandler } from "../../../HelperFunctions/inputChangeHandler";
import { SchoolDataType } from "../../../Utilities/schools";

type CreateSchoolUploadFileProp = {
  title?: string;
  name?: string;
  importanceItems?: string[];
  isEditing?: boolean;
  image?: string;
};

const CreateSchoolUploadFile = ({
  title,
  name,
  importanceItems = [],
  isEditing,
  image,
}: CreateSchoolUploadFileProp) => {
  const [_, setSearchParams] = useSearchParams();

  // Context
  const { createSchoolData, setCreateSchoolData } = useContext(SchoolContext);

  // Functions
  const filterBenefits = (name: string) => {
    const benefitsCopy = createSchoolData.benefits.filter((data) => {
      return data !== name;
    });

    setCreateSchoolData((prevState) => {
      return { ...prevState, benefits: benefitsCopy as string[] };
    });
  };

  return (
    <SchoolCreatingLayout steps={[1, 2, 3]}>
      <section className={classes.container}>
        <h2>{title || "Create a new school"}</h2>

        {isEditing && (
          <div className={classes.textSection}>
            <p>School image</p>
            <img
              src={createSchoolData?.image?.frontendFile}
              alt="School cover"
            />
          </div>
        )}

        <DragAndDropInput
          labelText={
            isEditing ? "Upload a new cover image" : "Upload cover image *"
          }
          acceptedFileTypes=".svg,.png"
          performFIleValidation={true}
          onChange={(e) => {
            const reader = new FileReader();
            reader.onload = () => {
              if (reader.readyState === 2) {
                setCreateSchoolData((prevState: any) => {
                  return {
                    ...prevState,
                    image: {
                      frontendFile: reader.result,
                      file: (e?.target?.files as FileList)[0],
                    },
                  };
                });
              }
            };
            reader.readAsDataURL((e?.target?.files as FileList)[0]);
          }}
          value={createSchoolData.image.file}
        />
        <ul className={classes.fileUploadInfo}>
          <li>
            You can upload: <b>.svg or .png</b> files{" "}
          </li>
          <li>
            {" "}
            File size: <strong>1MB</strong> with maximum width and height of 750
            X 600px
          </li>
        </ul>

        <div>
          <Input
            isRequired
            value={createSchoolData.name}
            label="School name"
            placeholder="E.g School of Business"
            name="name"
            onChange={(e) => inputChangeHandler(e, setCreateSchoolData)}
          />
          <label className={classes.schoolImportanceLabel}>
            List the importance of joining this school *
          </label>

          <div className={classes.benefits}>
            {createSchoolData?.benefits &&
              createSchoolData?.benefits?.length !== 0 &&
              createSchoolData?.benefits?.map((data, i) => {
                return (
                  <div className={classes.benefit} key={i}>
                    <Input
                      value={data}
                      placeholder="E.g Master the art of talent acquisition for business success."
                      onChange={(e) => {
                        const benefitsCopy = createSchoolData.benefits.map(
                          (data, index) => {
                            if (i === index) {
                              return e.target.value;
                            } else return data;
                          }
                        );
                        setCreateSchoolData((prevState) => {
                          return { ...prevState, benefits: benefitsCopy };
                        });
                      }}
                      onKeyup={(e) => {
                        if (
                          e.key === "Enter" &&
                          createSchoolData.benefits[
                            createSchoolData.benefits.length - 1
                          ] !== ""
                        ) {
                          setCreateSchoolData((prevState) => {
                            return {
                              ...prevState,
                              benefits: [...prevState.benefits, ""],
                            };
                          });
                        }
                      }}
                    />
                    <svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => filterBenefits(data)}
                    >
                      <path
                        d="M1 13.5L13 1.5M1 1.5L13 13.5"
                        stroke="#664EFE"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                );
              })}
          </div>

          <Button
            type="white"
            onClick={() => {
              if (createSchoolData?.benefits) {
                if (
                  createSchoolData?.benefits[
                    createSchoolData?.benefits?.length - 1
                  ] !== ""
                ) {
                  setCreateSchoolData((prevState) => {
                    return {
                      ...prevState,
                      benefits: [...prevState.benefits, ""],
                    };
                  });
                }
              }
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 1V17M17 9L1 9"
                stroke="#664EFE"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Add more benefits</span>
          </Button>
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
            disabled={
              !isEditing &&
              (!createSchoolData.name ||
                !createSchoolData.tagline ||
                !createSchoolData.description ||
                !createSchoolData.image.file ||
                createSchoolData.benefits.length < 0)
            }
          >
            <span>Preview</span>
          </Button>
        </div>
      </section>
    </SchoolCreatingLayout>
  );
};

export default CreateSchoolUploadFile;
