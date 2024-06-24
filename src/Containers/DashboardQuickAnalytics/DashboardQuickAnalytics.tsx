import DropdownWithSearch from "../../Components/DropdownWithSearch/DropdownWithSearch";
import classes from "./DashboardQuickAnalytics.module.css";

const DashboardQuickAnalytics = () => {
  const analyticsOverview = [
    {
      title: "Total revenue",
      value: "₦1,500,000",
    },

    {
      title: "Total transactions",
      value: "23",
    },

    {
      title: "Total enrolments",
      value: "123",
    },

    {
      title: "New accounts",
      value: "13",
    },
  ];
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <h4>Quick analytics</h4>
        <DropdownWithSearch
          options={["Yesterday", "Last 7 days"]}
          title="Last 7 days"
        />
      </div>

      <div className={classes.analyticsSection}>
        {analyticsOverview.map((data, i) => {
          return (
            <div className={classes.overview}>
              <h4>{data.value}</h4>
              <p>{data.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DashboardQuickAnalytics;
