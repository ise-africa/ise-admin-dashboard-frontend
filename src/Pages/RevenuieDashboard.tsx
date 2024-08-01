import DashboardHeader from "../Components/DashboardHeader/DashboardHeader";
import Layout from "../Components/Layout/Layout";
import RevenueCharts from "../Containers/RevenueCharts/RevenueCharts";
import RevenueDateAndCurrency from "../Containers/RevenueDateAndCurrency/RevenueDateAndCurrency";
import RevenueOverview from "../Containers/RevenueOverview/RevenueOverview";

const RevenueDashboard = () => {
  return (
    <Layout>
      <DashboardHeader
        title="Revenue dashboard"
        description="Use analytics to track profits, payments and income growth to make informed decisions.  "
      />
      <RevenueDateAndCurrency />
      <RevenueOverview />
      <RevenueCharts />
    </Layout>
  );
};

export default RevenueDashboard;
