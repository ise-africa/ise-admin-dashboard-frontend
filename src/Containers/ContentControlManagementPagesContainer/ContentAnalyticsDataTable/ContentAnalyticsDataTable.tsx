import { Dispatch, SetStateAction, useEffect, useState } from "react";
import classes from "./ContentAnalyticsDataTable.module.css";
import UploadedModules from "./UploadedModules/UploadedModules";
import PublishedModules from "./PublishedModules/PublishedModules";
import DeclinedModules from "./DeclinedModules/DeclinedModules";
import SectionsNav4 from "../../../Components/SectionsNav4/SectionsNav4";
import Loader from "../../../Components/Loader/Loader";
import DeclineFeedbackModal from "../CourseContentViewDetailsContainer/DeclineFeedbackModal/DeclineFeedbackModal";

type ContentAnalyticsDataTableTypes = {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  courseModules: any;
  isLoading: boolean;
};

const ContentAnalyticsDataTable = ({
  filter,
  setFilter,
  courseModules,
  isLoading,
}: ContentAnalyticsDataTableTypes) => {
  // States
  const [navItems, setNavItems] = useState<any[]>([
    {
      title: "Uploaded module",
      isActive: true,
      slug: "uploaded",
    },
    {
      title: "Published module",
      isActive: false,
      slug: "published",
    },
    {
      title: "Declined module",
      isActive: false,
      slug: "declined",
    },
    {
      title: "Recent module upload",
      isActive: false,
      slug: "recent",
    },
  ]);
  const activeTab = navItems.find((data) => data?.isActive)?.slug;

  useEffect(() => {
    if (activeTab) {
      setFilter(activeTab);
    }
  }, [activeTab]);

  console.log(filter);

  return (
    <section className={classes.container}>
      <div className={classes.sectionsNavSection}>
        <SectionsNav4 navItems={navItems} setNavItems={setNavItems} />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {navItems[0]?.isActive ? (
            <UploadedModules data={courseModules?.modulesList?.data} />
          ) : navItems[1]?.isActive ? (
            <PublishedModules data={courseModules?.modulesList?.data} />
          ) : navItems[2]?.isActive ? (
            <DeclinedModules data={courseModules?.modulesList?.data} />
          ) : navItems[3]?.isActive ? (
            <UploadedModules data={courseModules?.modulesList?.data} />
          ) : null}
        </>
      )}
    </section>
  );
};

export default ContentAnalyticsDataTable;
