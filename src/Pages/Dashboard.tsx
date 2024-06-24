import Layout from "../Components/Layout/Layout";
import DashboardNameDisplay from "../Containers/DashboardNameDisplay/DashboardNameDisplay";
import DashboardQuickAnalytics from "../Containers/DashboardQuickAnalytics/DashboardQuickAnalytics";
import DashboardSchoolOverview from "../Containers/DashboardSchoolOverview/DashboardSchoolOverview";

const Dashboard = () => {
  return (
    <Layout>
      <DashboardNameDisplay />
      <DashboardQuickAnalytics />
      <DashboardSchoolOverview />
    </Layout>
  );
};

export default Dashboard;
