import { useContext } from "react";
import classes from "./TutorProfileContainer.module.css";
import Breadcrumbs from "../../../Components/Breadcrumbs/Breadcrumbs";
import breadcrumbsBack from "../../../Assets/Images/breadcrumbsBack.svg";
import { useParams } from "react-router-dom";
import TutorProfileAccountDeactivation from "../TutorProfileAccountDeactivation/TutorProfileAccountDeactivation";
import TutorProfileAccountManagePassword from "../TutorProfileAccountManagePassword/TutorProfileAccountManagePassword";
import TutorProfileCourseAssigned from "../TutorProfileCourseAssigned/TutorProfileCourseAssigned";
import { useTutorsById } from "../../../Hooks/useTutors";
import Loader from "../../../Components/Loader/Loader";
import { capitalize } from "../../../HelperFunctions/capitalize";

const TutorProfileContainer = () => {
  // Router
  const { TutorId } = useParams();

  // Request
  const { isLoading, data } = useTutorsById(TutorId as string);

  const tutor = data?.data;

  // Utils
  const breadCrumbs = {
    image: breadcrumbsBack,
    array: [
      {
        title: "Tutor",
        route: "/users/tutors",
      },
      {
        title: `${capitalize(tutor?.first_name)} ${capitalize(
          tutor?.last_name
        )}`,
        route: `/users/tutors/${tutor?.id}`,
      },
    ],
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className={classes.container}>
      <Breadcrumbs {...breadCrumbs} />
      <section className={classes.subContainer}>
        <TutorProfileAccountManagePassword tutor={tutor} />
        <TutorProfileCourseAssigned />
        <TutorProfileAccountDeactivation />
      </section>
    </section>
  );
};

export default TutorProfileContainer;
