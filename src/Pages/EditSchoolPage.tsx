import React, { useContext, useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import { AppContext } from "../Context/AppContext";
import { useLocation, useParams } from "react-router-dom";
import CreateSchoolAddDetails from "../Containers/SchoolManagementPagesContainer/CreateSchoolAddDetails/CreateSchoolAddDetails";
import CreateSchoolUploadFile from "../Containers/SchoolManagementPagesContainer/CreateSchoolUploadFile/CreateSchoolUploadFile";
import SchoolManagementBoard from "../Containers/SchoolManagementPagesContainer/SchoolManagementBoard/SchoolManagementBoard";
import CreateSchoolPreview from "../Containers/SchoolManagementPagesContainer/CreateSchoolPreview/CreateSchoolPreview";
import { useSchoolsById } from "../Hooks/useSchools";
import { schoolDetailType } from "../Types/schoolType";
import Loader from "../Components/Loader/Loader";
import { SchoolContext } from "../Context/SchoolContext";
import { schoolsData } from "../Utilities/schools";

const EditSchoolPage = () => {
  // Context
  const { createSchoolData, setCreateSchoolData } = useContext(SchoolContext);

  // Router
  const location = useLocation();
  const { SchoolId } = useParams();
  const userStep = new URLSearchParams(location.search).get("step");

  //   Hooks
  const { data, isLoading } = useSchoolsById(SchoolId as string, {
    revalidateOnFocus: false,
  });

  //   Utils
  const schoolData: schoolDetailType = data?.data;

  // To update school information onLoad
  useEffect(() => {
    if (schoolData) {
      console.log("schoolDaa changed");
      setCreateSchoolData((prevState: any) => {
        return {
          ...prevState,
          name: schoolData?.name,
          tagline: schoolData?.tagline,
          description: schoolData?.description,
          benefits: schoolData?.importance || [""],
          image: {
            frontendFile: schoolData?.image,
            file: (prevState.image.file as File) || schoolData?.image,
          },
        };
      });
    }
  }, [schoolData]);

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : userStep === "1" ? (
        <CreateSchoolAddDetails
          title="Edit School"
          name={schoolData?.name}
          motto={schoolData?.tagline}
          description={schoolData?.description}
          isEditing
        />
      ) : userStep === "2" ? (
        <CreateSchoolUploadFile
          title="Edit School"
          name={schoolData?.name}
          image={schoolData?.image}
          importanceItems={
            schoolData?.importance &&
            JSON.parse(schoolData?.importance)?.map(
              (importance: schoolDetailType) => importance
            )
          }
          isEditing
        />
      ) : userStep === "3" ? (
        <CreateSchoolPreview
          showIndicator={true}
          updateInformation={true}
          image={createSchoolData?.image?.frontendFile}
          name={createSchoolData?.name}
          tagline={createSchoolData?.tagline}
          description={createSchoolData?.description}
          importanceItems={
            createSchoolData?.benefits &&
            createSchoolData?.benefits?.map((importance: string) => importance)
          }
        />
      ) : (
        <SchoolManagementBoard />
      )}
    </Layout>
  );
};

export default EditSchoolPage;
