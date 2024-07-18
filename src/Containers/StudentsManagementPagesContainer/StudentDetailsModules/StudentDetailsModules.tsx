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
    },
    {
      title: "Payment",
      isActive: false,
    },
    {
      title: "Courses",
      isActive: false,
    },
    {
      title: "Grade",
      isActive: false,
    },
    {
      title: "Feedback",
      isActive: false,
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
      {navItems[0]?.isActive && (
        <StudentDetailPageProfile student={student} referrals={referrals} />
      )}
      {navItems[1]?.isActive && <StudentCourseEnrolled />}
      {navItems[2]?.isActive && <StudentDetailGradeDataTable />}
      {navItems[3]?.isActive && <StudentDetailFeedBackDataTable />}
    </section>
  );
};

export default StudentDetailsModules;
