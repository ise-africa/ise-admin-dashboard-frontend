import React from "react";
import classes from "./StudentDetailPageProfile.module.css";
import StudentProfile from "../StudentProfile/StudentProfile";
import StudentBadges from "../StudentBadges/StudentBadges";
import StudentProfileAccountDeactivation from "../StudentProfileAccountDeactivation/StudentProfileAccountDeactivation";
import StudentReferralLevel from "../StudentReferralLevel/StudentReferralLevel";

type StudentDetailPageProfileTypes = {
  student: any;
  referrals: any;
};

const StudentDetailPageProfile = ({
  student,
  referrals,
}: StudentDetailPageProfileTypes) => {
  return (
    <div className={classes.body}>
      <StudentProfile student={student} referrals={referrals} />
      <StudentReferralLevel referral={referrals} />
      <StudentBadges />
      <StudentProfileAccountDeactivation student={student} />
    </div>
  );
};

export default StudentDetailPageProfile;
