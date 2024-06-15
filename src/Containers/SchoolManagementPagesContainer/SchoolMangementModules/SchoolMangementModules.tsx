import { useContext, useState, useEffect } from "react";
import classes from "./SchoolMangementModules.module.css"
import SectionsNav4 from "../../../Components/SectionsNav4/SectionsNav4";
import SchoolMangementModulesEmptyTab from "./SchoolMangementModulesEmptyTab";
import SchoolCreatedContainer from "../SchoolCreatedContainer/SchoolCreatedContainer";
import { AppContext } from "../../../Context/AppContext";

const SchoolMangementModules = () => {
    const { schools } = useContext(AppContext)

    // States
    const [navItems, setNavItems] = useState<any[]>([
        {
            title: "All schools",
            isActive: true,
            statusFilter: "",
            emptyState: {
                header: "No schools available",
                paragraph: "Create a new school to begin managing courses and cohorts."
            }
        },
        {
            title: "Active schools",
            isActive: false,
            statusFilter: "Active",
            emptyState: {
                header: "No active schools available",
                paragraph: "Active schools will appear here once they are live for students to enroll in."
            }
        },
        {
            title: "Inactive schools",
            isActive: false,
            statusFilter: "Inactive",
            emptyState: {
                header: "No inactive schools available",
                paragraph: "Once a school is deactivated, it will appear here and students won't have access to enroll in a course."
            }
        },
    ]);

    const [filteredSchools, setFilteredSchools] = useState<any[]>(schools);

    useEffect(() => {
        const activeTab = navItems.find(item => item.isActive);
        if (activeTab) {
            if (activeTab.statusFilter) {
                const filtered = schools.filter(school => school.status === activeTab.statusFilter);
                setFilteredSchools(filtered);
            } else {
                setFilteredSchools(schools);
            }
        }
    }, [navItems, schools]);

    //   Utils
    const activeComponent = navItems.find((data) => data.isActive);
    return (
        <section className={classes.container}>
            <div className={classes.sectionsNavSection}>
                <SectionsNav4 navItems={navItems} setNavItems={setNavItems} />
            </div>
            <div className={classes.body}>
                {filteredSchools.length > 0 ? (
                    <SchoolCreatedContainer notShowEmptyTab={true} schools={filteredSchools} />
                ) : (
                    <SchoolMangementModulesEmptyTab
                        header={activeComponent.emptyState.header}
                        paragraph={activeComponent.emptyState.paragraph}
                    />
                )}
            </div>
        </section>
    );
};

export default SchoolMangementModules;
