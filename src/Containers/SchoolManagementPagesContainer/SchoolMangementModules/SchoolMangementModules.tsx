import { useContext, useState, useEffect } from "react";
import classes from "./SchoolMangementModules.module.css";
import SectionsNav4 from "../../../Components/SectionsNav4/SectionsNav4";
import SchoolMangementModulesEmptyTab from "./SchoolMangementModulesEmptyTab";
import SchoolCreatedContainer from "../SchoolCreatedContainer/SchoolCreatedContainer";
import { AppContext } from "../../../Context/AppContext";
import useSchools from "../../../Hooks/useSchools";
import Loader from "../../../Components/Loader/Loader";

const SchoolMangementModules = () => {
  // const { schools } = useContext(AppContext)

  // States
  const [navItems, setNavItems] = useState<any[]>([
    {
      title: "All schools",
      isActive: true,
      statusFilter: "all",
      emptyState: {
        header: "No schools available",
        paragraph: "Create a new school to begin managing courses and cohorts.",
      },
    },
    {
      title: "Active schools",
      isActive: false,
      statusFilter: "active",
      emptyState: {
        header: "No active schools available",
        paragraph:
          "Active schools will appear here once they are live for students to enroll in.",
      },
    },
    {
      title: "Inactive schools",
      isActive: false,
      statusFilter: "inactive",
      emptyState: {
        header: "No inactive schools available",
        paragraph:
          "Once a school is deactivated, it will appear here and students won't have access to enroll in a course.",
      },
    },
  ]);

  //   Hooks
  const { data, isLoading } = useSchools();

  const [schools, setSchools] = useState<any[]>([]);
  const [filteredSchools, setFilteredSchools] = useState<any[] | null>([]);

  useEffect(() => {
    if (data) {
      setSchools(data?.data);
    }
  }, [data]);

  useEffect(() => {
    const activeTab = navItems.find((item) => item.isActive);
    if (activeTab) {
      if (activeTab.statusFilter === "all") {
        setFilteredSchools(schools);
      } else {
        const filteredSchoolsCopy = schools?.filter((data) => {
          return (
            data?.status?.toLowerCase() === activeTab.statusFilter.toLowerCase()
          );
        });
        setFilteredSchools(filteredSchoolsCopy);
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
        {isLoading ? (
          <Loader />
        ) : (filteredSchools as any[]).length > 0 ? (
          <SchoolCreatedContainer
            notShowEmptyTab={true}
            schools={filteredSchools as any[]}
          />
        ) : (
          (filteredSchools as any[])?.length === 0 && (
            <SchoolMangementModulesEmptyTab
              header={activeComponent.emptyState.header}
              paragraph={activeComponent.emptyState.paragraph}
            />
          )
        )}
      </div>
    </section>
  );
};

export default SchoolMangementModules;
