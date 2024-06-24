import classes from "./DashboardActiity.module.css";
import activityStudent from "../../Assets/Images/actuvityStudent.svg";

const DashboardActiity = () => {
  const activity = [
    {
      issue: "Admin: Login attempt (failed)",
      date: "11-02-2024. 11:03PM",
      image: activityStudent,
    },
    {
      issue: "Admin: Login attempt (failed)",
      date: "11-02-2024. 11:03PM",
      image: activityStudent,
    },
    {
      issue: "Admin: Login attempt (failed)",
      date: "11-02-2024. 11:03PM",
      image: activityStudent,
    },

    {
      issue: "Admin: Login attempt (failed)",
      date: "11-02-2024. 11:03PM",
      image: activityStudent,
    },
  ];

  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <h4>Activity</h4>
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

      <div className={classes.activities}>
        {activity.map((data, i) => {
          return (
            <div className={classes.activity} key={i}>
              <img src={data.image} alt="Activity" />
              <div>
                <h6>{data.issue}</h6>
                <p>{data.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DashboardActiity;
