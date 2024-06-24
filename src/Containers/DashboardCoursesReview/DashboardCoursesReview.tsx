import classes from "./DashboardCoursesReview.module.css";

const DashboardCoursesReview = () => {
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <h4>List of courses for review</h4>
        <div>
          <span>View all</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 8L21 12M21 12L17 16M21 12L3 12"
              stroke="#664EFE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className={classes.table}>
        <div className={classes.tableHeader}>
          <span>Course name</span>
          <span>Tutor’s name</span>
          <span>Submission time</span>
          <span>Action</span>
        </div>
      </div>
    </section>
  );
};

export default DashboardCoursesReview;
