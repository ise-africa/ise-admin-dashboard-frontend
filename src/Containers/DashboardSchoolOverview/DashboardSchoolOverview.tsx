import Summary from "../../Components/Summary/Summary";

const DashboardSchoolOverview = () => {
  const analyticsOverview = [
    {
      title: "Total active schools",
      value: "3",
    },

    {
      title: "Total active courses",
      value: "9",
    },

    {
      title: "Operating cohorts",
      value: "14",
    },

    {
      title: "Upcoming cohorts",
      value: "4",
    },
  ];
  return <Summary data={analyticsOverview} title="School overview" />;
};

export default DashboardSchoolOverview;
