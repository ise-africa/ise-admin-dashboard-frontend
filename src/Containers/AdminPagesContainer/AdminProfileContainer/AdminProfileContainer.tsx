import { useContext, useEffect, useState } from "react";
import classes from "./AdminProfileContainer.module.css";
import AdminProfileTabContainer from "../AdminProfileTabContainer/AdminProfileTabContainer";
import SectionsNav4 from "../../../Components/SectionsNav4/SectionsNav4";
import AdminActivitiesTab from "../AdminActivitiesTab/AdminActivitiesTab";
import Breadcrumbs from "../../../Components/Breadcrumbs/Breadcrumbs";
import breadcrumbsBack from "../../../Assets/Images/breadcrumbsBack.svg";
import { AppContext } from "../../../Context/AppContext";
import { useParams } from "react-router-dom";
import { useAdminById } from "../../../Hooks/useAdmin";
import Loader from "../../../Components/Loader/Loader";

const AdminProfileContainer = () => {
  // Context
  const { adminData } = useContext(AppContext);

  // Router
  const { AdminId } = useParams();

  // Request
  const { isLoading, data } = useAdminById(AdminId as string);

  const admin = data?.data;

  const activeAdmin = adminData.find((data) => {
    return data.adminFullName.replace(" ", "-").toLowerCase() === AdminId;
  });

  // States
  const [navItems, setNavItems] = useState<any[]>([
    {
      title: "Profile",
      isActive: true,
    },
    {
      title: "Activities",
      isActive: false,
    },
  ]);

  // Utils
  const breadCrumbs = {
    image: breadcrumbsBack,
    array: [
      {
        title: `Administrator board`,
        route: "/users/admins",
      },
      {
        title: `${admin?.first_name}`,
        route: `/users/admins/${admin?.id}`,
      },
    ],
  };

  // Effects
  useEffect(() => {});

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className={classes.container}>
      <div className={classes.breadCrumbs}>
        <Breadcrumbs {...breadCrumbs} />
      </div>
      <div className={classes.sectionsNavSection}>
        <SectionsNav4 navItems={navItems} setNavItems={setNavItems} />
      </div>
      <div className={classes.body}>
        {navItems[0]?.isActive && <AdminProfileTabContainer data={admin} />}
        {navItems[1]?.isActive && <AdminActivitiesTab />}
      </div>
    </section>
  );
};

export default AdminProfileContainer;
