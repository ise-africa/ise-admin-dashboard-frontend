import { useState } from "react";
import classes from "./StudentDetailsModules.module.css";
import StudentDetailGradeDataTable from "../StudentDetailGradeDataTable/StudentDetailGradeDataTable";
import StudentDetailFeedBackDataTable from "../StudentDetailFeedBackDataTable/StudentDetailFeedBackDataTable";
import SectionsNav4 from "../../../Components/SectionsNav4/SectionsNav4";
import StudentDetailPageProfile from "../StudentDetailPageProfile/StudentDetailPageProfile";
import StudentCoursePayment from "../StudentCoursePayment/StudentCoursePayment";
import StudentCourseEnrolled from "../StudentCourseEnrolled/StudentCourseEnrolled";

type StudentDetailsModulesTypes = {
  student: any;
  referrals: any;
};

const StudentDetailsModules = ({
  student,
  referrals,
}: StudentDetailsModulesTypes) => {
  // States
  const [navItems, setNavItems] = useState<any[]>([
    {
      title: "Profile",
      isActive: true,
      activeComponent: (
        <StudentDetailPageProfile student={student} referrals={referrals} />
      ),
    },
    {
      title: "Payment",
      isActive: false,
      activeComponent: <StudentCoursePayment />,
    },
    {
      title: "Courses",
      isActive: false,
      activeComponent: <StudentCourseEnrolled />,
    },
    {
      title: "Grade",
      isActive: false,
      activeComponent: <StudentDetailGradeDataTable />,
    },
    {
      title: "Feedback",
      isActive: false,
      activeComponent: <StudentDetailFeedBackDataTable />,
    },
  ]);

  //   Utils
  const activeComponent = navItems.find((data) => data.isActive);
  return (
    <section className={classes.container}>
      <div className={classes.sectionsNavSection}>
        <SectionsNav4 navItems={navItems} setNavItems={setNavItems} />
      </div>
      <div className={classes.body}>{activeComponent.activeComponent}</div>
    </section>
  );
};

export default StudentDetailsModules;
