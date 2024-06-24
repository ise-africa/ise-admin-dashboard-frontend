import Layout from "../Components/Layout/Layout";
import DashboardNameDisplay from "../Containers/DashboardNameDisplay/DashboardNameDisplay";
import DashboardQuickAnalytics from "../Containers/DashboardQuickAnalytics/DashboardQuickAnalytics";

const Dashboard = () => {
  return (
    <Layout>
      <DashboardNameDisplay />
      <DashboardQuickAnalytics />
    </Layout>
  );
};

export default Dashboard;
