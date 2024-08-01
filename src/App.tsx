import { Navigate, Route, Routes } from "react-router-dom";
import ErrorPage from "./Containers/404Page/404Page";
import Support from "./Pages/Support";
import SupportTrackingChatDetailPage from "./Pages/SupportTrackingChatDetailPage";
import AdminProfilePage from "./Pages/AdminProfilePage";
import AddAdminPage from "./Pages/AddAdminPage";
import TutorsManagementPage from "./Pages/TutorsManagementPage";
import AddTutorPage from "./Pages/AddTutorPage";
import TutorProfilePage from "./Pages/TutorProfilePage";
import StudentsManagementPage from "./Pages/StudentsManagementPage";
import AdminsManagementPage from "./Pages/AdminsManagementPage";
import StudentProfilePage from "./Pages/StudentProfilePage";
import AddStudentPage from "./Pages/AddStudentPage";
import SchoolManagementPage from "./Pages/SchoolManagementPage";
import AddSchoolsPage from "./Pages/AddSchoolsPage";
import SchoolCreatedPage from "./Pages/SchoolCreatedPage";
import SchoolViewDetailsPage from "./Pages/SchoolViewDetailsPage";
import SchoolCoursesPage from "./Pages/SchoolCoursesPage";
import AddSchoolCoursePage from "./Pages/AddSchoolCoursePage";
import AddSchoolCourseCohortPage from "./Pages/AddSchoolCourseCohortPage";
import SchoolCourseViewDetailsPage from "./Pages/SchoolCourseViewDetailsPage";
import EditSchoolPage from "./Pages/EditSchoolPage";
import EditSchoolCoursePage from "./Pages/EditSchoolCoursePage";
import CohortMangementPage from "./Pages/CohortMangementPage";
import EditSchoolCourseCohortPage from "./Pages/EditSchoolCourseCohortPage";
import SchoolCourseCohortViewDetailsPage from "./Pages/SchoolCourseCohortViewDetailsPage";
import ContentControlManagementPage from "./Pages/ContentControlManagementPage";
import ContentAnalyticsBoardPage from "./Pages/ContentAnalyticsBoardPage";
import CourseAnalyticsViewDetails from "./Pages/CourseAnalyticsViewDetails";
import BlogManagementPage from "./Pages/BlogManagementPage";
import AddBlogPostPage from "./Pages/AddBlogPostPage";
import EditBlogPostPage from "./Pages/EditBlogPostPage";
import ViewBlogPostPage from "./Pages/ViewBlogPostPage";
import Dashboard from "./Pages/Dashboard";
import SignInPage from "./Pages/SignInPage";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import RevenueDashboard from "./Pages/RevenuieDashboard";

function App() {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/sign-in" element={<SignInPage />} />

      <Route element={<RequireAuth />}>
        <Route path="/" element={<Navigate to="/dashboard"></Navigate>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users/admins" element={<AdminsManagementPage />} />
        <Route path="/users/admins/:AdminId" element={<AdminProfilePage />} />
        <Route
          path="/users/admins/#:AdminInfo"
          element={<AdminProfilePage />}
        />
        <Route path="/users/admins/add-admin" element={<AddAdminPage />} />

        <Route path="/users/tutors" element={<TutorsManagementPage />} />
        <Route path="/users/tutors/:TutorId" element={<TutorProfilePage />} />
        <Route path="/users/tutors/add-tutor" element={<AddTutorPage />} />

        <Route path="/users/students" element={<StudentsManagementPage />} />
        <Route
          path="/users/students/:StudentId"
          element={<StudentProfilePage />}
        />
        <Route
          path="/users/students/add-student"
          element={<AddStudentPage />}
        />

        <Route path="/analytics/revenue" element={<RevenueDashboard />} />

        <Route path="/schools" element={<SchoolManagementPage />} />
        <Route path="/schools/add-school" element={<AddSchoolsPage />} />
        <Route path="/schools/school-created" element={<SchoolCreatedPage />} />
        <Route path="/schools/:SchoolId" element={<SchoolViewDetailsPage />} />
        <Route
          path="/schools/:SchoolId/edit-school"
          element={<EditSchoolPage />}
        />
        <Route
          path="/schools/:SchoolId/courses"
          element={<SchoolCoursesPage />}
        />
        <Route
          path="/schools/:SchoolId/courses/:CourseId"
          element={<SchoolCourseViewDetailsPage />}
        />
        <Route
          path="/schools/:SchoolId/courses/:CourseId/edit-course"
          element={<EditSchoolCoursePage />}
        />
        <Route
          path="/schools/:SchoolId/courses/:CourseId/add-cohort"
          element={<AddSchoolCourseCohortPage />}
        />
        <Route
          path="/schools/:SchoolId/courses/:CourseId/cohorts"
          element={<CohortMangementPage />}
        />
        <Route
          path="/schools/:SchoolId/courses/:CourseId/cohorts/:CohortId"
          element={<SchoolCourseCohortViewDetailsPage />}
        />
        <Route
          path="/schools/:SchoolId/courses/:CourseId/cohorts/:CohortId/edit-cohort"
          element={<EditSchoolCourseCohortPage />}
        />
        <Route
          path="/schools/:SchoolId/add-course"
          element={<AddSchoolCoursePage />}
        />

        <Route path="/courses" element={<ContentControlManagementPage />} />
        <Route
          path="/courses/:SchoolId/courses/:CourseId/analytics"
          element={<ContentAnalyticsBoardPage />}
        />
        <Route
          path="/courses/:SchoolId/courses/:CourseId/analytics/details"
          element={<CourseAnalyticsViewDetails />}
        />

        <Route path="/blogs" element={<BlogManagementPage />} />
        <Route path="/blogs/:PostId" element={<ViewBlogPostPage />} />
        <Route path="/blogs/add-post" element={<AddBlogPostPage />} />
        <Route path="/blogs/:PostId/edit-post" element={<EditBlogPostPage />} />

        <Route path="/support" element={<Support />} />
        <Route
          path="/support/:SupportTrackingId"
          element={<SupportTrackingChatDetailPage />}
        />
      </Route>
    </Routes>
  );
}
export default App;
