import React, { useContext } from "react";
import { AppContext } from "../../../Context/AppContext";
import { useParams } from "react-router-dom";
import CreateCourseFourthStep from "../SchoolCourseModules/CreateCourseFourthStep/CreateCourseFourthStep";
import moment from "moment";

type SchoolCourseViewDetailsContainerProp = {
  editCohort?: boolean;
  editInformation?: boolean;
  data?: any;
};

const SchoolCourseViewDetailsContainer = ({
  editCohort,
  editInformation,
  data,
}: SchoolCourseViewDetailsContainerProp) => {
  const cohort = data?.cohorts[0] || {};

  return (
    <div>
      <CreateCourseFourthStep
        showIndicator={false}
        editCohort={editCohort}
        editInformation={editInformation}
        title="View course cohort information "
        name={data?.name}
        tagline={data?.difficulty_level}
        description={data?.description}
        image={data?.cover_image}
        objectives={
          JSON.parse(data?.course_objective || "")?.map(
            (data: any) => data?.value
          ) || []
        }
        cohortName={cohort?.name}
        cohortDeadline={moment(cohort?.application_deadline).format(
          "Do Mo, YYYY"
        )}
        cohortStart={moment(cohort?.start_date).format("Do Mo, YYYY")}
        cohortDuration={cohort?.duration}
        cohortTutor={cohort?.cohortTutor}
        cohortPrice={cohort?.price}
      />
    </div>
  );
};

export default SchoolCourseViewDetailsContainer;
