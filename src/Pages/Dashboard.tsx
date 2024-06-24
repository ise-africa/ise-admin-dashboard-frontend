import Layout from "../Components/Layout/Layout";
import DashboardActivityAndRating from "../Containers/DashboardActivityAndRating/DashboardActivityAndRating";
import DashboardChart from "../Containers/DashboardChart/DashboardChart";
import DashboardCoursesReview from "../Containers/DashboardCoursesReview/DashboardCoursesReview";
import DashboardDocumentation from "../Containers/DashboardDocumentation/DashboardDocumentation";
import DashboardLetsHelp from "../Containers/DashboardLetsHelpAndCreateTutor/DashboardLetsHelpAndCreateTutor";
import DashboardNameDisplay from "../Containers/DashboardNameDisplay/DashboardNameDisplay";
import DashboardQuickAnalytics from "../Containers/DashboardQuickAnalytics/DashboardQuickAnalytics";
import DashboardSchoolOverview from "../Containers/DashboardSchoolOverview/DashboardSchoolOverview";

const Dashboard = () => {
  return (
    <Layout>
      <DashboardNameDisplay />
      <DashboardQuickAnalytics />
      <DashboardSchoolOverview />
      <DashboardChart />
      <DashboardLetsHelp />
      <DashboardCoursesReview />
      <DashboardActivityAndRating />
      <DashboardDocumentation />
    </Layout>
  );
};

export default Dashboard;
