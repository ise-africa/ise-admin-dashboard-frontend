import { useEffect, useState } from "react";
import Summary from "../../Components/Summary/Summary";

type DashboardQuickAnalyticsType = {
  data: any;
};

const DashboardQuickAnalytics = ({ data }: DashboardQuickAnalyticsType) => {
  const [analyticsOverview, setAnalyticsOverview] = useState([
    {
      title: "Total revenue",
      value: "₦0",
    },

    {
      title: "Total transactions",
      value: "0",
    },

    {
      title: "Total enrolments",
      value: "0",
    },

    {
      title: "New accounts",
      value: "0",
    },
  ]);

  // Effects
  return (
    <Summary
      data={analyticsOverview}
      title="Quick analytics"
      showDropdown
      flexBasis="23%"
    />
  );
};

export default DashboardQuickAnalytics;
