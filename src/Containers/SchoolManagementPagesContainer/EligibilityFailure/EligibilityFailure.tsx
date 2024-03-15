import classes from "./EligibilityFailure.module.css";
import eligibilityFail from "../../../Assets/Images/eligibilityFail.svg";
import Button from "../../../Components/Button/Button";
import { useNavigate } from "react-router-dom";

const EligibilityFailure = () => {
  // Router
  const navigate = useNavigate();

  return (
    <section className={classes.container}>
      <img src={eligibilityFail} alt="Eligibility Fail" />
      <h4>You didn't meet the eligibility criteria</h4>
      <p>
        Don’t give up. Your learning journey doesn’t end here. We encourage you
        to explore other courses.
      </p>
      <div className={classes.buttonSection}>
        <Button type="secondary">Explore other courses</Button>
        <Button
          onClick={() => {
            navigate("/contact-program-advisor");
          }}
        >
          Contact program advisor
        </Button>
      </div>
    </section>
  );
};

export default EligibilityFailure;
