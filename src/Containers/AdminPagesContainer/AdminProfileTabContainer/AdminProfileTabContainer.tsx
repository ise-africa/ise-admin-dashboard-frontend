import AdminProfileDetails from "../AdminProfileDetails/AdminProfileDetails";
import ProfileAccountDeactivation from "../AdminProfileAccountDeactivation/AdminProfileAccountDeactivation";
import ProfileAccountManagePassword from "../AdminProfileAccountManagePassword/AdminProfileAccountManagePassword";
import ProfileAdministrationRole from "../ProfileAdministrationRole/ProfileAdministrationRole";
import classes from "./AdminProfileTabContainer.module.css";

const AdminProfileTabContainer = () => {
  return (
    <section className={classes.container}>
      <AdminProfileDetails />
      <ProfileAccountManagePassword />
      <ProfileAdministrationRole />
      <ProfileAccountDeactivation />
    </section>
  );
};

export default AdminProfileTabContainer;
