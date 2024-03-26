import { useState } from "react";
import classes from "./ContentAnalyticsDataTable.module.css"
import UploadedModules from "./UploadedModules/UploadedModules";
import PublishedModules from "./PublishedModules/PublishedModules";
import DeclinedModules from "./DeclinedModules/DeclinedModules";
import SectionsNav4 from "../../../Components/SectionsNav4/SectionsNav4";


const ContentAnalyticsDataTable = () => {
    // States
    const [navItems, setNavItems] = useState<any[]>([
        {
            title: "Uploaded module",
            isActive: true,
            activeComponent: <UploadedModules />,
        },
        {
            title: "Published module",
            isActive: false,
            activeComponent: <PublishedModules />,
        },
        {
            title: "Declined module",
            isActive: false,
            activeComponent: <DeclinedModules />,
        },
        {
            title: "Recent module upload",
            isActive: false,
            activeComponent: null,
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

export default ContentAnalyticsDataTable;
