import DashboardActiity from "../DashboardActiity/DashboardActiity";
import DashboardRating from "../DashboardRating/DashboardRating";
import classes from "./DashboardActivityAndRating.module.css";

const DashboardActivityAndRating = () => {
  return (
    <section className={classes.container}>
      <DashboardActiity />
      <DashboardRating />
    </section>
  );
};

export default DashboardActivityAndRating;
