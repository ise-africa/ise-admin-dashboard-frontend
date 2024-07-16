import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../../Context/AppContext";
import breadcrumbsBack from "../../../Assets/Images/breadcrumbsBack.svg";
import Breadcrumbs from "../../../Components/Breadcrumbs/Breadcrumbs";
import StudentDetailsModules from "../StudentDetailsModules/StudentDetailsModules";
import {
  useStudentsById,
  useStudentsReferralById,
} from "../../../Hooks/useStudents";
import { capitalize } from "../../../HelperFunctions/capitalize";
import Loader from "../../../Components/Loader/Loader";

const StudentDetailsMain = () => {
  const { students } = useContext(AppContext);
  // Router
  const { StudentId } = useParams();

  const activeStudent = students.find((data) => {
    return data.studentName.replace(" ", "-").toLowerCase() === StudentId;
  });

  // Requests
  const { isLoading, data } = useStudentsById(StudentId as string);
  const { isLoading: referralLoading, data: referralData } =
    useStudentsReferralById(StudentId as string);

  const student = data?.data;
  const referralDataMain = referralData?.data;

  // Utils
  const breadCrumbs = {
    image: breadcrumbsBack,
    array: [
      {
        title: "Back to students",
        route: "/users/students",
      },
      {
        title: `${
          student?.full_name ? capitalize(student?.full_name) : "No username"
        }`,
        route: `/users/students/${student?.id}`,
      },
    ],
  };
  return (
    <>
      <Breadcrumbs {...breadCrumbs} />
      {isLoading || referralLoading ? (
        <Loader />
      ) : (
        <StudentDetailsModules student={student} referrals={referralDataMain} />
      )}
    </>
  );
};

export default StudentDetailsMain;
