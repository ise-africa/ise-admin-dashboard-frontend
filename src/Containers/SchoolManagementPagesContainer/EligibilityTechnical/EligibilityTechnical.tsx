import SchoolCreatingLayout from "../../../Components/SchoolCreatingLayout/SchoolCreatingLayout";
import classes from "./EligibilityTechnical.module.css";
import Button from "../../../Components/Button/Button";
import { useSearchParams } from "react-router-dom";

const EligibilityTechnical = () => {
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <SchoolCreatingLayout notShowHeader>
      <section className={classes.container}>
        <p className={classes.header}>Technical readiness and enthusiasm</p>
        <div className={classes.questionSection}>
          <p>Do you have access to a reliable internet connection?</p>
          <div className={classes.options}>
            <div>
              <input type="radio" id="1" />
              <label htmlFor="1">Yes</label>
            </div>
            <div>
              <input type="radio" id="2" />
              <label htmlFor="2">No</label>
            </div>
          </div>
        </div>

        <div className={classes.questionSection}>
          <p>Do you have access to a computer (laptop/desktop) device?</p>
          <div className={classes.options}>
            <div>
              <input type="radio" id="1" />
              <label htmlFor="1">Yes</label>
            </div>
            <div>
              <input type="radio" id="2" />
              <label htmlFor="2">No</label>
            </div>
          </div>
        </div>

        <div className={classes.questionSection}>
          <p>Are you eager to learn and enhance your skills?</p>
          <div className={classes.options}>
            <div>
              <input type="radio" id="1" />
              <label htmlFor="1">Yes</label>
            </div>
            <div>
              <input type="radio" id="2" />
              <label htmlFor="2">No</label>
            </div>
          </div>
        </div>

        <div className={classes.questionSection}>
          <p>
            Are you willing to participate in group activities and collaborate
            with fellow learners?
          </p>
          <div className={classes.options}>
            <div>
              <input type="radio" id="1" />
              <label htmlFor="1">Yes</label>
            </div>
            <div>
              <input type="radio" id="2" />
              <label htmlFor="2">No</label>
            </div>
          </div>
        </div>

        <div className={classes.buttonSection}>
          <Button
            type="secondary"
            onClick={() => {
              setSearchParams({ step: "1" });
            }}
          >
            <span className={classes.buttonInner}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7 16L3 12M3 12L7 8M3 12L21 12"
                  stroke="#664EFE"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Previous</span>
            </span>
          </Button>
          <Button
            onClick={() => {
              setSearchParams({ step: "3" });
            }}
          >
            <span className={classes.buttonInner}>
              <span>Next</span>
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
    </SchoolCreatingLayout>
  );
};

export default EligibilityTechnical;
