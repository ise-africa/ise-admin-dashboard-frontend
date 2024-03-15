import { useState } from "react";
import classes from "./SchoolMangementModules.module.css"
import SectionsNav4 from "../../../Components/SectionsNav4/SectionsNav4";
import SchoolMangementModulesEmptyTab from "./SchoolMangementModulesEmptyTab";

const SchoolMangementModules = () => {
    // States
    const [navItems, setNavItems] = useState<any[]>([
        {
            title: "All schools",
            isActive: true,
            activeComponent: null,
            activeNullStateComponent: <SchoolMangementModulesEmptyTab
                header="No school created"
                paragraph=" Schools are the foundation where courses come to life. Click the button below to create a new school and kickstart your administrative journey."
            />,
        },
        {
            title: "Active schools",
            isActive: false,
            activeComponent: null,
            activeNullStateComponent: <SchoolMangementModulesEmptyTab
                header="No active school yet"
                paragraph="Active schools will appear here once they are live for students to enrol in."
            />,
        },
        {
            title: "Inactive schools",
            isActive: false,
            activeComponent: null,
            activeNullStateComponent: <SchoolMangementModulesEmptyTab
                header="No inactive school yet"
                paragraph="Once a school is deactivated school it will appear here and students won't have access to enrol in a course."
            />,
        },
    ]);

    //   Utils
    const activeComponent = navItems.find((data) => data.isActive);
    return (
        <section className={classes.container}>
            <div className={classes.sectionsNavSection}>
                <SectionsNav4 navItems={navItems} setNavItems={setNavItems} />
            </div>
            <div className={classes.body}>
                {activeComponent.activeComponent
                    ? activeComponent.activeComponent
                    : activeComponent.activeNullStateComponent}
            </div>
        </section>
    );
};

export default SchoolMangementModules;
