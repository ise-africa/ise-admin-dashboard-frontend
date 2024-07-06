import Summary from "../../Components/Summary/Summary";

const RevenueOverview = () => {
  // Utils
  const analyticsOverview = [
    {
      title: "Total revenue",
      value: "₦4,433,590.00",
    },

    {
      title: "Transactions",
      value: "381",
    },

    {
      title: "Refunds",
      value: "₦633,337",
    },

    {
      title: "Average revenue per user",
      value: "₦80,221",
    },
    {
      title: "Abandoned cart",
      value: "16",
    },
    {
      title: "Total outstanding amount",
      value: "₦280,221",
    },
  ];

  return <Summary data={analyticsOverview} title="Overview" flexBasis="31%" />;
};

export default RevenueOverview;
