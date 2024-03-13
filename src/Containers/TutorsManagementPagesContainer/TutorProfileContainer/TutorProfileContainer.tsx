import { useContext } from "react";
import classes from "./TutorProfileContainer.module.css";
import Breadcrumbs from "../../../Components/Breadcrumbs/Breadcrumbs";
import breadcrumbsBack from "../../../Assets/Images/breadcrumbsBack.svg";
import { AppContext } from "../../../Context/AppContext";
import { useParams } from "react-router-dom";
import TutorProfileAccountDeactivation from "../TutorProfileAccountDeactivation/TutorProfileAccountDeactivation";
import TutorProfileAccountManagePassword from "../TutorProfileAccountManagePassword/TutorProfileAccountManagePassword";
import TutorProfileCourseAssigned from "../TutorProfileCourseAssigned/TutorProfileCourseAssigned";

const TutorProfileContainer = () => {
  // Context
  const { tutors } = useContext(AppContext)

  // Router
  const { TutorId } = useParams()

  const activeTutor = tutors.find((data) => {
    return data.tutorFullName.replace(' ', '-').toLowerCase() === TutorId
  })

  // Utils
  const breadCrumbs = {
    image: breadcrumbsBack,
    array: [
      {
        title: "Tutor",
        route: "/users/tutors",
      },
      {
        title: `${activeTutor?.tutorFullName}`,
        route: `/users/tutors/${activeTutor?.tutorFullName.toLowerCase().replace(' ', '-')}`,
      },
    ],
  };

  return (
    <section className={classes.container}>
      <div className={classes.breadCrumbs}>
        <Breadcrumbs {...breadCrumbs} />
      </div>
      <section className={classes.subContainer}>
        <TutorProfileAccountManagePassword />
        <TutorProfileCourseAssigned />
        <TutorProfileAccountDeactivation />
      </section>
    </section>
  );
};

export default TutorProfileContainer;
