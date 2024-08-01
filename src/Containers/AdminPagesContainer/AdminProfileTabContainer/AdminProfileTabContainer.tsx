import AdminProfileDetails from "../AdminProfileDetails/AdminProfileDetails";
import ProfileAccountDeactivation from "../AdminProfileAccountDeactivation/AdminProfileAccountDeactivation";
import ProfileAccountManagePassword from "../AdminProfileAccountManagePassword/AdminProfileAccountManagePassword";
import ProfileAdministrationRole from "../ProfileAdministrationRole/ProfileAdministrationRole";
import classes from "./AdminProfileTabContainer.module.css";

type AdminProfileTabContainerType = {
  data: any;
};

const AdminProfileTabContainer = ({ data }: AdminProfileTabContainerType) => {
  return (
    <section className={classes.container}>
      <AdminProfileDetails data={data} />
      <ProfileAccountManagePassword data={data} />
      <ProfileAdministrationRole data={data} />
      <ProfileAccountDeactivation />
    </section>
  );
};

export default AdminProfileTabContainer;
