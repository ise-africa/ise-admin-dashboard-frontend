import classes from "./DashboardCoursesReview.module.css";

const DashboardCoursesReview = () => {
  const courseReview = [
    {
      title: "Frontend Development",
      tutorsName: "Amirah Oyegoke",
      submisssionTime: "02/01/2024",
    },

    {
      title: "Data Analytics",
      tutorsName: "Faith Jones",
      submisssionTime: "02/01/2024",
    },
  ];

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

        {courseReview.map((data, i) => {
          return (
            <div className={classes.tableBody} key={i}>
              <span>{data.title}</span>
              <span>{data.tutorsName}</span>
              <span>{data.submisssionTime}</span>
              <span>
                <svg
                  width="24"
                  height="44"
                  viewBox="0 0 24 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15L12 15.01M12 22L12 22.01M12 29L12 29.01M12 16C11.4477 16 11 15.5523 11 15C11 14.4477 11.4477 14 12 14C12.5523 14 13 14.4477 13 15C13 15.5523 12.5523 16 12 16ZM12 23C11.4477 23 11 22.5523 11 22C11 21.4477 11.4477 21 12 21C12.5523 21 13 21.4477 13 22C13 22.5523 12.5523 23 12 23ZM12 30C11.4477 30 11 29.5523 11 29C11 28.4477 11.4477 28 12 28C12.5523 28 13 28.4477 13 29C13 29.5523 12.5523 30 12 30Z"
                    stroke="#2E2E2E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DashboardCoursesReview;
