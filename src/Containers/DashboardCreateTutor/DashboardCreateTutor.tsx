import classes from "./DashboardCreateTutor.module.css";
import createTutor from "../../Assets/Images/createTutor.svg";
import Button from "../../Components/Button/Button";

const DashboardCreateTutor = () => {
  return (
    <section className={classes.container}>
      <img src={createTutor} alt="Create tutor" />
      <h4>Create tutor’s account</h4>
      <p>
        Create accounts for the tutors and invite them to start building their
        course content
      </p>
      <div className={classes.buttonSection}>
        <Button type="tertiary">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 3V15M15 9L3 9"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Create account</span>
        </Button>

        <span>I’ll do this later</span>
      </div>
    </section>
  );
};

export default DashboardCreateTutor;
