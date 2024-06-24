import classes from "./DashboardNameDisplay.module.css";

const DashboardNameDisplay = () => {
  return (
    <section className={classes.container}>
      <h1>Welcome [super administrator name]</h1>
      <p>
        Create, collaborate, organise, and track platform activities an
        administrator.{" "}
      </p>
    </section>
  );
};

export default DashboardNameDisplay;
