import Summary from "../../Components/Summary/Summary";

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
    <Summary data={analyticsOverview} title="Quick analytics" showDropdown />
  );
};

export default DashboardQuickAnalytics;
