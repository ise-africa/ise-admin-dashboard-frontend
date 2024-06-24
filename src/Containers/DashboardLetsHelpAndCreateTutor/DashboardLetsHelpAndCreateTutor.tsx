import DashboardCreateTutor from "../DashboardCreateTutor/DashboardCreateTutor";
import DashboardLetsHelp from "../DashboardLetsHelp/DashboardLetsHelp";
import classes from "./DashboardLetsHelpAndCreateTutor.module.css";

const DashboardLetsHelpAndCreateTutor = () => {
  return (
    <section className={classes.container}>
      <DashboardLetsHelp />
      <DashboardCreateTutor />
    </section>
  );
};

export default DashboardLetsHelpAndCreateTutor;
