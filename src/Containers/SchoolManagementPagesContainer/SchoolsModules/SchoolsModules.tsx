import { useState } from "react";
import classes from "./SchoolsModules.module.css"
import SectionsNav4 from "../../../Components/SectionsNav4/SectionsNav4";

const SchoolsModules = () => {
    // States
    const [navItems, setNavItems] = useState<any[]>([
        {
            title: "All schools",
            isActive: true,
            activeComponent: null,
            activeNullStateComponent: null,
        },
        {
            title: "Active schools",
            isActive: false,
            activeComponent: null,
            activeNullStateComponent: null,
        },
        {
            title: "Inactive schools",
            isActive: false,
            activeComponent: null,
            activeNullStateComponent: null,
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

export default SchoolsModules;
