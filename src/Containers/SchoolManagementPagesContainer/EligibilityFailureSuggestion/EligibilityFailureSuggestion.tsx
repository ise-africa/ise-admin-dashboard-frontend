import classes from "./EligibilityFailureSuggestion.module.css";
import eligibilityFailSuggestions from "../../../Assets/Images/eligibilityFailSuggestions.svg";

const EligibilityFailureSuggestion = () => {
  // Utils
  const blogPosts = [
    {
      title: "13 ESFP Careers & Types of Jobs To Consider",
    },
    {
      title: "13 ESFP Careers & Types of Jobs To Consider",
    },
    {
      title: "13 ESFP Careers & Types of Jobs To Consider",
    },
  ];
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <h4>We are here to help</h4>
        <p>
          Here are a few self study materials that can help you prepare for the
          course in the future.
        </p>
      </div>

      <div className={classes.blogSuggestions}>
        {blogPosts.map((data, i) => {
          return (
            <div key={i} className={classes.blogCard}>
              <img src={eligibilityFailSuggestions} alt={data.title} />
              <div>
                <p>This is a tag here</p>
                <h4>13 ESFP Careers & Types of Jobs To Consider</h4>
                <p>July 2023 . 1 min read</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EligibilityFailureSuggestion;
