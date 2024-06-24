import Layout from "../Components/Layout/Layout";
import DashboardActivityAndRating from "../Containers/DashboardActivityAndRating/DashboardActivityAndRating";
import DashboardCoursesReview from "../Containers/DashboardCoursesReview/DashboardCoursesReview";
import DashboardDocumentation from "../Containers/DashboardDocumentation/DashboardDocumentation";
import DashboardNameDisplay from "../Containers/DashboardNameDisplay/DashboardNameDisplay";
import DashboardQuickAnalytics from "../Containers/DashboardQuickAnalytics/DashboardQuickAnalytics";
import DashboardSchoolOverview from "../Containers/DashboardSchoolOverview/DashboardSchoolOverview";

const Dashboard = () => {
  return (
    <Layout>
      <DashboardNameDisplay />
      <DashboardQuickAnalytics />
      <DashboardSchoolOverview />
      <DashboardCoursesReview />
      <DashboardActivityAndRating />
      <DashboardDocumentation />
    </Layout>
  );
};

export default Dashboard;
