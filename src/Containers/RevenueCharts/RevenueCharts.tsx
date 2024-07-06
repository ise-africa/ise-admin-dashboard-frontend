import RevenueLineChart from "../RevenueLineChart/RevenueLineChart";
import RevenuePieChart from "../RevenuePieChart/RevenuePieChart";
import classes from "./RevenueCharts.module.css";

const RevenueCharts = () => {
  return (
    <section className={classes.container}>
      <RevenueLineChart />
      <RevenuePieChart />
    </section>
  );
};

export default RevenueCharts;
