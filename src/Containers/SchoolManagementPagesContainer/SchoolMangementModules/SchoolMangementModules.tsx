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
            activeNullStateComponent: <SchoolMangementModulesEmptyTab />,
        },
        {
            title: "Active schools",
            isActive: false,
            activeComponent: null,
            activeNullStateComponent: <SchoolMangementModulesEmptyTab />,
        },
        {
            title: "Inactive schools",
            isActive: false,
            activeComponent: null,
            activeNullStateComponent: <SchoolMangementModulesEmptyTab />,
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
