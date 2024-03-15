import EligibilityFailure from "../EligibilityFailure/EligibilityFailure";
import EligibilityFailureSuggestion from "../EligibilityFailureSuggestion/EligibilityFailureSuggestion";
import classes from "./EligibilityFailureContainer.module.css";

const EligibilityFailureContainer = () => {
  return (
    <section className={classes.container}>
      <EligibilityFailure />
      <EligibilityFailureSuggestion />
    </section>
  );
};

export default EligibilityFailureContainer;
