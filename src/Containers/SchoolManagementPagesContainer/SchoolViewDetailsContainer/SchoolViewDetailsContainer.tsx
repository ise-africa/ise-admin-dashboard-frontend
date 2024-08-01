import { useContext } from "react";
import CreateSchoolPreview from "../CreateSchoolPreview/CreateSchoolPreview";
import Breadcrumbs from "../../../Components/Breadcrumbs/Breadcrumbs";
import breadcrumbsBack from "../../../Assets/Images/breadcrumbsBack.svg";
import { AppContext } from "../../../Context/AppContext";
import { useParams } from "react-router-dom";
import { useSchoolsById } from "../../../Hooks/useSchools";
import { schoolDetailType } from "../../../Types/schoolType";
import Loader from "../../../Components/Loader/Loader";

const SchoolViewDetailsContainer = () => {
  // Context
  const { schools } = useContext(AppContext);

  // Router
  const { SchoolId } = useParams();

  const { data: schoolDetails, isLoading } = useSchoolsById(SchoolId as string);

  const schoolDetail: schoolDetailType = schoolDetails?.data;

  // Utils
  const breadCrumbs = {
    image: breadcrumbsBack,
    array: [
      {
        title: "Schools",
        route: "/schools",
      },
      {
        title: `${schoolDetail?.name}`,
        route: `/schools/${schoolDetail?.id}`,
      },
    ],
  };

  console.log(schoolDetail, "School detail");

  return (
    <div>
      <Breadcrumbs {...breadCrumbs} />
      {isLoading ? (
        <Loader />
      ) : (
        <CreateSchoolPreview
          showIndicator={false}
          editInformation={true}
          title="View school information"
          name={schoolDetail?.name}
          tagline={schoolDetail?.tagline}
          description={schoolDetail?.description}
          school={schoolDetail?.name}
          image={schoolDetail?.image}
          importanceItems={
            schoolDetail?.importance &&
            JSON.parse(schoolDetail?.importance)?.map(
              (importance: schoolDetailType) => importance
            )
          }
        />
      )}
    </div>
  );
};

export default SchoolViewDetailsContainer;
