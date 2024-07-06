import { LineChart } from "@mui/x-charts";
import classes from "./RevenueLineChart.module.css";

const RevenueLineChart = () => {
  return (
    <section className={classes.container}>
      <h3 className={classes.header}>Revenue overtime</h3>
      <div className={classes.chart}>
        <LineChart
          xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
          series={[
            {
              data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
              showMark: ({ index }) => index % 2 === 0,
            },
          ]}
          height={434}
          colors={["#d0b0fa", "#FBF7FF"]}
        />
      </div>
    </section>
  );
};

export default RevenueLineChart;
