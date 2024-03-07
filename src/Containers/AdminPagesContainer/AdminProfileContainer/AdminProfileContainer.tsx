import { useContext, useState } from "react";
import classes from "./AdminProfileContainer.module.css";
import AdminProfileTabContainer from "../AdminProfileTabContainer/AdminProfileTabContainer";
import SectionsNav4 from "../../../Components/SectionsNav4/SectionsNav4";
import AdminActivitiesTab from "../AdminActivitiesTab/AdminActivitiesTab";
import Breadcrumbs from "../../../Components/Breadcrumbs/Breadcrumbs";
import breadcrumbsBack from "../../../Assets/Images/breadcrumbsBack.svg";
import { AppContext } from "../../../Context/AppContext";
import { useParams } from "react-router-dom";

const AdminProfileContainer = () => {
  // Context
  const { adminData } = useContext(AppContext)

  // Router
  const { AdminId } = useParams()

  const activeAdmin = adminData.find((data) => {
    return data.adminFullName.replace(' ', '-').toLowerCase() === AdminId
  })

  // States
  const [navItems, setNavItems] = useState<any[]>([
    {
      title: "Profile",
      isActive: true,
      activeComponent: <AdminProfileTabContainer />,
    },
    {
      title: "Activities",
      isActive: false,
      activeComponent: <AdminActivitiesTab />,
    },
  ]);

  // Utils
  const breadCrumbs = {
    image: breadcrumbsBack,
    array: [
      {
        title: `${activeAdmin?.adminRole}`,
        route: "/admins",
      },
      {
        title: `${activeAdmin?.adminFullName}`,
        route: `/admins/${activeAdmin?.adminFullName.toLowerCase().replace(' ', '-')}`,
      },
    ],
  };

  const activeComponent = navItems.find((data) => data.isActive);
  return (
    <section className={classes.container}>
      <div className={classes.breadCrumbs}>
        <Breadcrumbs {...breadCrumbs} />
      </div>
      <div className={classes.sectionsNavSection}>
        <SectionsNav4 navItems={navItems} setNavItems={setNavItems} />
      </div>
      <div className={classes.body}>{activeComponent.activeComponent}</div>
    </section>
  );
};

export default AdminProfileContainer;
