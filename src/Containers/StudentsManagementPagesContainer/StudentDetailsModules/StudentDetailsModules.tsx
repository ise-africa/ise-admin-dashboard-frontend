import { useState } from "react";
import classes from "./StudentDetailsModules.module.css"
import StudentDetailPageDetail from "../StudentDetailPageDetail/StudentDetailPageDetail";
import StudentDetailQuizDataTable from "../StudentDetailQuizDataTable/StudentDetailQuizDataTable";
import StudentDetailGradeDataTable from "../StudentDetailGradeDataTable/StudentDetailGradeDataTable";
import StudentDetailFeedBackDataTable from "../StudentDetailFeedBackDataTable/StudentDetailFeedBackDataTable";
import SectionsNav4 from "../../../Components/SectionsNav4/SectionsNav4";

const StudentDetailsModules = () => {
    // States
    const [navItems, setNavItems] = useState<any[]>([
        {
            title: "Details",
            isActive: true,
            activeComponent: <StudentDetailPageDetail />,
        },
        {
            title: "Quizzes",
            isActive: false,
            activeComponent: <StudentDetailQuizDataTable />,
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
