import classes from "./EligibilitySuccess.module.css";
import eligibilitySuccess from "../../../Assets/Images/eligibilitySuccess.svg";
import Button from "../../../Components/Button/Button";
import { useNavigate } from "react-router-dom";

const EligibilitySuccess = () => {
  // Router
  const navigate = useNavigate();
  return (
    <section className={classes.container}>
      <img src={eligibilitySuccess} alt="Success" />
      <div className={classes.textSection}>
        <h4>Congratulations! You passed the eligibility check!</h4>
        <p>
          It's time to take that exciting leap forward on your learning journey.
        </p>
      </div>

      <div className={classes.buttonSection}>
        <Button
          type="secondary"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Back to dashboard
        </Button>
        <Button
          onClick={() => {
            navigate("/payment");
          }}
        >
          <span className={classes.buttonInner}>
            <span>Proceed to payment</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M17.5 8L21.5 12M21.5 12L17.5 16M21.5 12L3.5 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Button>
      </div>
    </section>
  );
};

export default EligibilitySuccess;
