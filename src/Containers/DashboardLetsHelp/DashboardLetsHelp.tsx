import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import RadioButton from "../../Components/RadioButton/RadioButton";
import classes from "./DashboardLetsHelp.module.css";

const DashboardLetsHelp = () => {
  const tasks = [
    {
      title: "Create tutors account",
      isActive: false,
    },
    {
      title: "Invite other administrators",
      isActive: false,
    },
    {
      title: "Create a school",
      isActive: false,
    },
    {
      title: "Create a course and cohort",
      isActive: false,
    },
  ];

  return (
    <section className={classes.container}>
      <h4>Let’s help you get started</h4>
      <div>
        {tasks.map((data, i) => {
          return (
            <div key={i}>
              <RadioButton checked={data.isActive} />
              <span>{data.title}</span>
            </div>
          );
        })}
      </div>

      <div>
        <ProgressBar percentage={0} />
      </div>
    </section>
  );
};

export default DashboardLetsHelp;
