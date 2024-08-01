import classes from "./RevenuePieChart.module.css";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts";

const RevenuePieChart = () => {
  const data = [
    { id: 0, value: 70, label: "Full payments", color: "#664EFE" },
    { id: 1, value: 30, label: "Install payments", color: "#FDC500" },
  ];
  const pieParams = { height: 200, margin: { right: 5 } };
  const palette = ["red", "blue", "green"];

  return (
    <section className={classes.container}>
      <h4 className={classes.header}>Payment by type</h4>
      <div className={classes.chart}>
        <PieChart
          series={[
            {
              data: [...data],
              //   innerRadius: 70,
              outerRadius: 100,
              paddingAngle: 5,
              cornerRadius: 5,
              //   startAngle: -180,
              //   endAngle: 180,
              cx: 100,
              cy: 100,
            },
          ]}
          height={240}
        />
      </div>
    </section>
  );
};

export default RevenuePieChart;
