import classes from "./DashboardChart.module.css";
import { BarChart } from "@mui/x-charts/BarChart";
import DropdownWithSearch from "../../Components/DropdownWithSearch/DropdownWithSearch";

const DashboardChart = () => {
  const data = [
    {
      data: [200],
      stack: "Jan",
      label: "Non conversions",
      color: "#FDC500",
    },
    {
      data: [200],
      stack: "Jan",
      label: "Conversions",
      color: "#664EFE",
    },

    {
      data: [100],
      stack: "Feb",
      color: "#FDC500",
    },
    {
      data: [250],
      stack: "Feb",
      color: "#664EFE",
    },

    {
      data: [300],
      stack: "Mar",
      color: "#FDC500",
    },
    {
      data: [200],
      stack: "Mar",
      color: "#664EFE",
    },
    {
      data: [100],
      stack: "Apr",
      color: "#FDC500",
    },
    {
      data: [300],
      stack: "Apr",
      color: "#664EFE",
    },

    {
      data: [100],
      stack: "May",
      color: "#FDC500",
    },
    {
      data: [300],
      stack: "May",
      color: "#664EFE",
    },

    {
      data: [500],
      stack: "June",
      color: "#FDC500",
    },
    {
      data: [300],
      stack: "June",
      color: "#664EFE",
    },

    {
      data: [300],
      stack: "July",
      color: "#FDC500",
    },
    {
      data: [100],
      stack: "July",
      color: "#664EFE",
    },
  ];
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <h4>Conversion overtime</h4>
        <DropdownWithSearch
          options={["1 week", "1 month", "6 months"]}
          title="Select"
        />
      </div>
      <BarChart series={[...data]} height={450} />
    </section>
  );
};

export default DashboardChart;
