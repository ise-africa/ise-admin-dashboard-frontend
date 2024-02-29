import AdminProfileDetails from "../AdminProfileDetails/AdminProfileDetails";
import ProfileAccountDeactivation from "../ProfileAccountDeactivation/ProfileAccountDeactivation";
import ProfileAccountManagePassword from "../ProfileAccountManagePassword/ProfileAccountManagePassword";
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
